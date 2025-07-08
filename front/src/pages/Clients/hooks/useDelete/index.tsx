export default function useDelete(){

    const drop = (id:number) => {
        console.log('item sendo excluido id: ' + id);
    }

    return{ drop }
}