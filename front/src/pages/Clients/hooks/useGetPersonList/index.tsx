import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Person } from '../../../../types/person';


export default function useGetPersonList() {
    
    const [ rows, setRows ] = useState<Person[]>([]);

    useEffect(() => {
        /*api.get('/clients/get.php', { params: { search } })
            .then(response => setRows(response.data.data))
            .catch(error => console.error(error));
        // }, [search]);*/

        setRows([
            { id: 1, name: "Alice Souza", id_client: 1, avatar: "https://example.com/avatars/1.jpg", phone: "(11) 91234-5678", email: "alice.souza@example.com", position: "Coordenadora", function: "Gestão", is_owner: true, notes: "Cliente VIP", created_at: "2025-01-10T08:15:30Z", updated_at: "2025-02-12T10:20:00Z" },
            { id: 2, name: "Bruno Lima", id_client: 2, phone: "(21) 92345-6789", email: "bruno.lima@example.com", position: "Analista", function: "Suporte", is_owner: false, created_at: "2025-01-11T09:20:45Z" },
            { id: 3, name: "Camila Ribeiro", id_client: 3, avatar: "https://example.com/avatars/3.jpg", phone: "(31) 93456-7890", email: "camila.ribeiro@example.com", position: "Desenvolvedora", function: "Frontend", is_owner: false, notes: "Flutter experiente", created_at: "2025-01-12T10:25:50Z", updated_at: "2025-02-15T11:30:00Z" },
            { id: 4, name: "Diego Ferreira", id_client: 4, phone: "(41) 94567-8901", email: "diego.ferreira@example.com", position: "Desenvolvedor", function: "Backend", is_owner: false, created_at: "2025-01-13T11:30:55Z" },
            { id: 5, name: "Eduarda Alves", id_client: 5, avatar: "https://example.com/avatars/5.jpg", phone: "(51) 95678-9012", email: "eduarda.alves@example.com", position: "Designer", function: "UI/UX", is_owner: false, notes: "Figma master", created_at: "2025-01-14T12:35:00Z", updated_at: "2025-02-18T12:40:00Z" },
            { id: 6, name: "Fernando Costa", id_client: 6, phone: "(61) 96789-0123", email: "fernando.costa@example.com", position: "Gerente", function: "Projetos", is_owner: true, created_at: "2025-01-15T13:40:05Z" },
            { id: 7, name: "Gabriela Santos", id_client: 7, avatar: "https://example.com/avatars/7.jpg", phone: "(71) 97890-1234", email: "gabriela.santos@example.com", position: "Marketing", function: "Digital", is_owner: false, notes: "SEO specialist", created_at: "2025-01-16T14:45:10Z", updated_at: "2025-02-20T14:50:00Z" },
            { id: 8, name: "Hugo Pereira", id_client: 8, phone: "(81) 98901-2345", email: "hugo.pereira@example.com", position: "Analista", function: "Financeiro", is_owner: false, created_at: "2025-01-17T15:50:15Z" },
            { id: 9, name: "Isabela Martins", id_client: 9, avatar: "https://example.com/avatars/9.jpg", phone: "(91) 99012-3456", email: "isabela.martins@example.com", position: "Recursos Humanos", function: "RH", is_owner: true, notes: "Contato principal", created_at: "2025-01-18T16:55:20Z", updated_at: "2025-02-22T16:00:00Z" },
            { id: 10, name: "João Pedro", id_client: 1, phone: "(11) 90123-4567", email: "joao.pedro@example.com", position: "Estagiário", function: "Suporte", is_owner: false, created_at: "2025-01-19T17:00:25Z" },
            { id: 11, name: "Karina Rocha", id_client: 2, avatar: "https://example.com/avatars/11.jpg", phone: "(21) 91234-5670", email: "karina.rocha@example.com", position: "Consultora", function: "Vendas", is_owner: false, created_at: "2025-01-20T18:05:30Z", updated_at: "2025-02-24T18:10:00Z" },
            { id: 12, name: "Lucas Dias", id_client: 3, phone: "(31) 92345-6781", email: "lucas.dias@example.com", position: "DevOps", function: "Infraestrutura", is_owner: false, created_at: "2025-01-21T19:10:35Z" },
            { id: 13, name: "Mariana Silva", id_client: 4, avatar: "https://example.com/avatars/13.jpg", phone: "(41) 93456-7892", email: "mariana.silva@example.com", position: "QA", function: "Testes", is_owner: false, notes: "Automação", created_at: "2025-01-22T20:15:40Z", updated_at: "2025-02-26T20:20:00Z" },
            { id: 14, name: "Nicolas Gomes", id_client: 5, phone: "(51) 94567-8903", email: "nicolas.gomes@example.com", position: "Arquiteto", function: "Sistemas", is_owner: false, created_at: "2025-01-23T21:20:45Z" },
            { id: 15, name: "Olívia Nunes", id_client: 6, avatar: "https://example.com/avatars/15.jpg", phone: "(61) 95678-0124", email: "olivia.nunes@example.com", position: "Produtora", function: "Conteúdo", is_owner: false, notes: "Vídeos", created_at: "2025-01-24T22:25:50Z", updated_at: "2025-02-28T22:30:00Z" },
            { id: 16, name: "Pedro Henrique", id_client: 7, phone: "(71) 96789-1235", email: "pedro.henrique@example.com", position: "Analista", function: "Dados", is_owner: false, created_at: "2025-01-25T23:30:55Z" },
            { id: 17, name: "Quésia Andrade", id_client: 8, avatar: "https://example.com/avatars/17.jpg", phone: "(81) 97890-2346", email: "quesia.andrade@example.com", position: "Designer", function: "Gráfico", is_owner: false, notes: "Illustrator", created_at: "2025-01-26T00:35:00Z", updated_at: "2025-03-02T00:40:00Z" },
            { id: 18, name: "Rafael Costa", id_client: 9, phone: "(91) 98901-3457", email: "rafael.costa@example.com", position: "Desenvolvedor", function: "Fullstack", is_owner: false, created_at: "2025-01-27T01:40:05Z" },
            { id: 19, name: "Sabrina Oliveira", id_client: 1, avatar: "https://example.com/avatars/19.jpg", phone: "(11) 99012-4568", email: "sabrina.oliveira@example.com", position: "Gestora", function: "Projetos", is_owner: false, notes: "Scrum Master", created_at: "2025-01-28T02:45:10Z", updated_at: "2025-03-04T02:50:00Z" },
            { id: 20, name: "Thiago Martins", id_client: 2, phone: "(21) 90123-5679", email: "thiago.martins@example.com", position: "Técnico", function: "Suporte", is_owner: false, created_at: "2025-01-29T03:50:15Z" },
            { id: 21, name: "Úrsula Ferreira", id_client: 3, avatar: "https://example.com/avatars/21.jpg", phone: "(31) 91234-6782", email: "ursula.ferreira@example.com", position: "Analista", function: "BI", is_owner: false, notes: "Power BI", created_at: "2025-01-30T04:55:20Z", updated_at: "2025-03-06T04:00:00Z" },
            { id: 22, name: "Vinícius Azevedo", id_client: 4, phone: "(41) 92345-7893", email: "vinicius.azevedo@example.com", position: "DevOps", function: "Cloud", is_owner: false, created_at: "2025-01-31T05:00:25Z" },
            { id: 23, name: "Wesley Souza", id_client: 5, avatar: "https://example.com/avatars/23.jpg", phone: "(51) 93456-8904", email: "wesley.souza@example.com", position: "Desenvolvedor", function: "Mobile", is_owner: false, notes: "React Native", created_at: "2025-02-01T06:05:30Z", updated_at: "2025-03-08T06:10:00Z" }
        ])

    }, []);


    return { rows };
}
