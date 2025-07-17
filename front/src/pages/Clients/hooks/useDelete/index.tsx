import api from '../../../../services/api';

import { ToastProps } from "../../../../types/toast";

type useCreateProps = {
  handleModalDelete: (value: boolean) => void;
  addToast: (value: ToastProps) => void;
  getList: () => void;
};


export default function useDelete({
  handleModalDelete,
  addToast,
  getList
}: useCreateProps){

    const drop = async (id:number) => {
        console.log('item sendo excluido id: ' + id);
        
        const params = JSON.stringify({"id": id});

        api.post('/clients/delete.php', params, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log('Sucesso:', response.data);
            handleModalDelete(false);
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
    }

    return{ drop }
}