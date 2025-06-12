import api from '../../../../services/api';
import { Client, ClientData } from '../../../../types/client';

export default function useCreate({handleModal, addToast}:{handleModal:any; addToast:any;}) {
  /*const newClient: Client = {
    name: "teste - 2",
    ower: "Dono teste - 2",
    phone: "dasd",
    email: "dsads",
    notes: "tedsfsd"
  };*/

  const create = (newClient:ClientData) => {
    console.log('creating...');

    const formData = new FormData();
    formData.append('name', newClient.name.value);
    formData.append('ower', newClient.ower.value);
    formData.append('phone', newClient.phone.value ? newClient.phone.value : "");
    formData.append('email', newClient.email.value ? newClient.email.value : "");
    // formData.append('notes', newClient.notes.value ? newClient.notes.value : "");

    // Se tiver arquivo, adicionar aqui: formData.append('file', file);

    api.post('/clients/create.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(response => {
      console.log('Sucesso:', response.data);
    })
    .catch(error => {
      console.error('Erro ao criar cliente:', error);
    });
  };

  return { create };
}
