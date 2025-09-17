import api from "../../../../../../services/api";
import { PersonData } from "../../../../../../types/person";
import { ToastProps } from "../../../../../../types/toast";


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
  const create = async (newItem: PersonData) => {
    console.log('creating...');

    console.log('newItem', newItem);
    
    
    if (!validateFields()) return;

    const formData = new FormData();

    // Campos obrigatórios
    formData.append('name', newItem.name.value);

    // Campo de logo (File)
    // if (newItem.avatar?.value instanceof File) {
    //   formData.append('logo', newItem.logo.value);
    // }

    formData.append('id_client', Number(newItem.id_client.value).toString());


    // Campos opcionais
    formData.append('phone', newItem.phone?.value || "");
    formData.append('email', newItem.email?.value || "");
    formData.append('notes', newItem.notes?.value || "");



    api.post('/person/create.php', formData, {
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
