import api from '../../../../services/api';
import { Client } from '../../../../types/client';

export default function useCreate() {
  const newClient: Client = {
    name: "teste - 2",
    ower: "Dono teste - 2",
    phone: "dasd",
    email: "dsads",
    notes: "tedsfsd"
  };

  const create = () => {
    console.log('creating...');

    const formData = new FormData();
    formData.append('name', newClient.name);
    formData.append('ower', newClient.ower);
    formData.append('phone', newClient.phone ? newClient.phone : "");
    formData.append('email', newClient.email ? newClient.email : "");
    formData.append('notes', newClient.notes ? newClient.notes : "");

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
