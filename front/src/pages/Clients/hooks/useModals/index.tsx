import { useState } from "react"

export default function useModals(){
    const [ modalVisible, setModalVisible ] = useState<boolean>(false)
    
    const handleModal = (value:boolean) => {
        setModalVisible(value);
    }

    return {modalVisible, handleModal}
}