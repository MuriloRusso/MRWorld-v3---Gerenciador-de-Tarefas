import api from '../../../../services/api';
import { Client, ClientData } from '../../../../types/client';
import { ToastProps } from '../../../../types/toast';

type useUpdateProps = {
  handleModal: (value: boolean) => void;
  addToast: (value: ToastProps) => void;
  validateFields: () => boolean;
  getList: () => void;
};

export default function useUpdate({
  handleModal,
  addToast,
  validateFields,
  getList
}: useUpdateProps) {
  const update = async (selectedItem: Client, clienteData: ClientData) => {
    if (!validateFields()) return;

    const formData = new FormData();

    // ID é obrigatório no update
    if (!selectedItem.id) {
      addToast({
        id: Date.now(),
        severity: 'error',
        variant: 'filled',
        text: 'ID do cliente não informado para atualização.'
      });
      return;
    }

    formData.append('id', selectedItem.id.toString());
    formData.append('name', clienteData.name.value);

    // Campo de logo (File)
    if (clienteData.logo?.value instanceof File) {
      formData.append('logo', clienteData.logo.value);
    }

    // Campos opcionais
    formData.append('phone', clienteData.phone?.value || "");
    formData.append('email', clienteData.email?.value || "");
    formData.append('cnpj', clienteData.cnpj?.value || "");
    formData.append('notes', clienteData.notes?.value || "");

    // Endereço
    formData.append('cep', clienteData.cep?.value || "");
    formData.append('address', clienteData.address?.value || "");
    formData.append('address_number', clienteData.address_number?.value || "");
    formData.append('neighborhood', clienteData.neighborhood?.value || "");
    formData.append('city', clienteData.city?.value || "");
    formData.append('state', clienteData.state?.value || "");
    formData.append('country', clienteData.country?.value || "");

    // Meio de contato
    formData.append('id_contact_method', clienteData.id_contact_method?.value || "");

    api.post('/clients/update.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(response => {
      console.log('Atualizado com sucesso:', response.data);
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
      console.error('Erro ao atualizar cliente:', error);

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

  return { update };
}
