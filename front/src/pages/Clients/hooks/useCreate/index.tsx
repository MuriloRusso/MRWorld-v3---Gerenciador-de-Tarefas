import api from '../../../../services/api';
import { ClientData } from '../../../../types/client';
import { ToastProps } from '../../../../types/toast';

type useCreateProps = {
  handleModal: (value: boolean) => void;
  addToast: (value: ToastProps) => void;
  validateFields: () => void;
  getList: () => void;
}

export default function useCreate({ handleModal, addToast, validateFields, getList }: useCreateProps) {
  const create = (newClient: ClientData) => {
    console.log('creating...');

    const formData = new FormData();
    // Campos básicos
    formData.append('name', newClient.name.value);
    formData.append('phone', newClient.phone.value ? newClient.phone.value : "");
    formData.append('email', newClient.email.value ? newClient.email.value : "");
    formData.append('cnpj', newClient.cnpj.value ? newClient.cnpj.value : "");
    formData.append('notes', newClient.notes.value ? newClient.notes.value : "");

    // Campos de endereço
    formData.append('cep', newClient.cep?.value ? newClient.cep.value : "");
    formData.append('address', newClient.address?.value ? newClient.address.value : "");
    formData.append('city', newClient.city?.value ? newClient.city.value : "");
    formData.append('state', newClient.state?.value ? newClient.state.value : "");
    formData.append('country', newClient.country?.value ? newClient.country.value : "");

    // Se tiver arquivo, adicionar aqui: formData.append('file', file);

    api.post('/clients/create.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(response => {
      console.log('Sucesso:', response.data);
      handleModal(false);
      addToast({
        id: Date.now(), // Usando timestamp para IDs únicos
        severity: 'success',
        variant: 'filled',
        text: response.data.message
      });
      getList();
    })
    .catch(error => {
      console.error('Erro ao criar cliente:', error);

      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        errors.forEach((error: string, i: number) => {
          addToast({
            id: i,
            severity: 'error',
            variant: 'filled',
            text: error
          });
        });
      } else {
        addToast({
          id: Date.now(),
          severity: 'error',
          variant: 'filled',
          text: 'Erro ao conectar com o servidor'
        });
      }
      
      validateFields();
    });
  };

  return { create };
}