import api from '../../../../services/api';
import { ClientData } from '../../../../types/client';
import { ToastProps } from '../../../../types/toast';

type useCreateProps = {
  handleModal: (value: boolean) => void;
  addToast: (value: ToastProps) => void;
  validateFields: () => boolean;
  getList: () => void;
};

export default function useCreate({
  handleModal,
  addToast,
  validateFields,
  getList
}: useCreateProps) {
  const create = async (newClient: ClientData) => {
    if (!validateFields()) return;

    const formData = new FormData();

    // Campos obrigatórios
    formData.append('name', newClient.name.value);

    // Campo de logo (File)
    if (newClient.logo?.value instanceof File) {
      formData.append('logo', newClient.logo.value);
    }

    // Campos opcionais
    formData.append('phone', newClient.phone?.value || "");
    formData.append('email', newClient.email?.value || "");
    formData.append('cnpj', newClient.cnpj?.value || "");
    formData.append('notes', newClient.notes?.value || "");

    // Endereço
    formData.append('cep', newClient.cep?.value || "");
    formData.append('address', newClient.address?.value || "");
    formData.append('address_number', newClient.address_number?.value || "");
    formData.append('neighborhood', newClient.neighborhood?.value || "");

    formData.append('city', newClient.city?.value || "");
    formData.append('state', newClient.state?.value || "");
    formData.append('country', newClient.country?.value || "");

    // Meio de contato (se existir)
    formData.append('id_contact_method', newClient.id_contact_method?.value || "");

    api.post('/clients/create.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(response => {
      console.log('Sucesso:', response.data);
      handleModal(false);
      addToast({
        id: Date.now(),
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
        errors.forEach((errorMsg: string, i: number) => {
          addToast({
            id: i,
            severity: 'error',
            variant: 'filled',
            text: errorMsg
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
    });
  };

  return { create };
}
