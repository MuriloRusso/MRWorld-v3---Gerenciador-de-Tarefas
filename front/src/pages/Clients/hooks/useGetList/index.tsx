import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Client } from '../../../../types/client';


export default function useGetList() {
    
    /*const rows = [
        { id: 1, name: '2UP', ower: 'Arthur', phone: "(11) 99999-9999", created_at: "2023-05-05", logo: "https://mrworld.shop/img/upload/empresas/6508965e871d4.jpg" },
        { id: 2, name: 'AlphaTech', ower: 'Beatriz', phone: "(21) 98888-7777", created_at: "2023-06-01", logo: "https://mrworld.shop/img/upload/empresas/651c6697b7f3d.enc" },
        { id: 3, name: 'BluePixel', ower: 'Carlos', phone: "(31) 97777-6666", created_at: "2023-06-15", logo: "https://placehold.co/100x100?text=BluePixel" },
        { id: 4, name: 'CodeWave', ower: 'Daniela', phone: "(41) 96666-5555", created_at: "2023-07-03", logo: "https://placehold.co/100x100?text=CodeWave" },
        { id: 5, name: 'DevSolutions', ower: 'Eduardo', phone: "(51) 95555-4444", created_at: "2023-07-10", logo: "https://placehold.co/100x100?text=DevSolutions" },
        { id: 6, name: 'FastCloud', ower: 'Fernanda', phone: "(61) 94444-3333", created_at: "2023-08-01", logo: "https://placehold.co/100x100?text=FastCloud" },
        { id: 7, name: 'GreenApps', ower: 'Gustavo', phone: "(71) 93333-2222", created_at: "2023-08-12", logo: "https://placehold.co/100x100?text=GreenApps" },
        { id: 8, name: 'HexaCorp', ower: 'Helena', phone: "(81) 92222-1111", created_at: "2023-09-05", logo: "https://placehold.co/100x100?text=HexaCorp" },
        { id: 9, name: 'IntelliSoft', ower: 'Igor', phone: "(91) 91111-0000", created_at: "2023-09-20", logo: "https://placehold.co/100x100?text=IntelliSoft" },
        { id: 10, name: 'JumpStart', ower: 'Julia', phone: "(12) 90000-9999", created_at: "2023-10-01", logo: "https://placehold.co/100x100?text=JumpStart" },
        { id: 11, name: 'KryptonData', ower: 'Kaique', phone: "(13) 98888-8888", created_at: "2023-10-12", logo: "https://placehold.co/100x100?text=KryptonData" },
        { id: 12, name: 'LogicPro', ower: 'Larissa', phone: "(14) 97777-7777", created_at: "2023-11-01", logo: "https://placehold.co/100x100?text=LogicPro" },
        { id: 13, name: 'MegaWeb', ower: 'Marcelo', phone: "(15) 96666-6666", created_at: "2023-11-20", logo: "https://placehold.co/100x100?text=MegaWeb" },
        { id: 14, name: 'NovaCode', ower: 'Natalia', phone: "(16) 95555-5555", created_at: "2023-12-01", logo: "https://placehold.co/100x100?text=NovaCode" },
        { id: 15, name: 'OptimusDev', ower: 'Otávio', phone: "(17) 94444-4444", created_at: "2023-12-15", logo: "https://placehold.co/100x100?text=OptimusDev" },
        { id: 16, name: 'PixelRoot', ower: 'Paula', phone: "(18) 93333-3333", created_at: "2024-01-01", logo: "https://placehold.co/100x100?text=PixelRoot" },
        { id: 17, name: 'QuickApps', ower: 'Quésia', phone: "(19) 92222-2222", created_at: "2024-01-10", logo: "https://placehold.co/100x100?text=QuickApps" },
        { id: 18, name: 'RocketDev', ower: 'Rafael', phone: "(20) 91111-1111", created_at: "2024-02-01", logo: "https://placehold.co/100x100?text=RocketDev" },
        { id: 19, name: 'Skyline Systems', ower: 'Sabrina', phone: "(22) 90000-0000", created_at: "2024-02-15", logo: "https://placehold.co/100x100?text=Skyline" },
        { id: 20, name: 'TechSphere', ower: 'Tiago', phone: "(23) 98888-1234", created_at: "2024-03-01", logo: "https://placehold.co/100x100?text=TechSphere" },
        { id: 21, name: 'UpCore', ower: 'Ursula', phone: "(24) 97777-9876", created_at: "2024-03-10", logo: "https://placehold.co/100x100?text=UpCore" },
        { id: 22, name: 'VortexIT', ower: 'Vinicius', phone: "(25) 96666-8765", created_at: "2024-03-20", logo: "https://placehold.co/100x100?text=VortexIT" },
        { id: 23, name: 'WebNova', ower: 'Wesley', phone: "(26) 95555-7654", created_at: "2024-04-01", logo: "https://placehold.co/100x100?text=WebNova" },
        { id: 24, name: 'XPressCode', ower: 'Xuxa', phone: "(27) 94444-6543", created_at: "2024-04-10", logo: "https://placehold.co/100x100?text=XPressCode" },
        { id: 25, name: 'YellowDev', ower: 'Yuri', phone: "(28) 93333-5432", created_at: "2024-04-15", logo: "https://placehold.co/100x100?text=YellowDev" },
        { id: 26, name: 'ZenSoft', ower: 'Zoe', phone: "(29) 92222-4321", created_at: "2024-04-20", logo: "https://placehold.co/100x100?text=ZenSoft" },
        { id: 27, name: 'Appify', ower: 'Alan', phone: "(30) 91111-3210", created_at: "2024-05-01", logo: "https://placehold.co/100x100?text=Appify" },
        { id: 28, name: 'ByteFlow', ower: 'Bruna', phone: "(31) 90000-2109", created_at: "2024-05-05", logo: "https://placehold.co/100x100?text=ByteFlow" },
        { id: 29, name: 'CloudOn', ower: 'Caio', phone: "(32) 98888-1098", created_at: "2024-05-10", logo: "https://placehold.co/100x100?text=CloudOn" },
        { id: 30, name: 'DevFactory', ower: 'Débora', phone: "(33) 97777-0987", created_at: "2024-05-15", logo: "https://placehold.co/100x100?text=DevFactory" },
        { id: 31, name: 'EdgeLogic', ower: 'Eduarda', phone: "(34) 96666-9876", created_at: "2024-05-20", logo: "https://placehold.co/100x100?text=EdgeLogic" },
        { id: 32, name: 'FlexDev', ower: 'Felipe', phone: "(35) 95555-8765", created_at: "2024-05-25", logo: "https://placehold.co/100x100?text=FlexDev" },
        { id: 33, name: 'GridSoft', ower: 'Gabriela', phone: "(36) 94444-7654", created_at: "2024-06-01", logo: "https://placehold.co/100x100?text=GridSoft" },
        { id: 34, name: 'HyperApps', ower: 'Henrique', phone: "(37) 93333-6543", created_at: "2024-06-05", logo: "https://placehold.co/100x100?text=HyperApps" },
        { id: 35, name: 'InfinityCode', ower: 'Isabela', phone: "(38) 92222-5432", created_at: "2024-06-10", logo: "https://placehold.co/100x100?text=InfinityCode" },
        { id: 36, name: 'JetStream', ower: 'João', phone: "(39) 91111-4321", created_at: "2024-06-15", logo: "https://placehold.co/100x100?text=JetStream" },
        { id: 37, name: 'KappaDev', ower: 'Karen', phone: "(40) 90000-3210", created_at: "2024-06-20", logo: "https://placehold.co/100x100?text=KappaDev" },
        { id: 38, name: 'LambdaTech', ower: 'Lucas', phone: "(41) 98888-2109", created_at: "2024-06-25", logo: "https://placehold.co/100x100?text=LambdaTech" },
        { id: 39, name: 'NeoCode', ower: 'Nicole', phone: "(42) 97777-1098", created_at: "2024-07-01", logo: "https://placehold.co/100x100?text=NeoCode" },
        { id: 40, name: 'OmegaApps', ower: 'Otto', phone: "(43) 96666-0987", created_at: "2024-07-05", logo: "https://placehold.co/100x100?text=OmegaApps" },
    ];*/


    const [ rows, setRows ] = useState<Client[]>([]);

    useEffect(() => {
    api.get('/clients/get.php'/*, { params: { search } }*/)
        .then(response => setRows(response.data.data))
        .catch(error => console.error(error));
    // }, [search]);
    }, []);


    return { rows };
}
