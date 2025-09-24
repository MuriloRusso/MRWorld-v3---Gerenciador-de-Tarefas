describe('Página de Clients', () => {
  it('deve abrir a página de clients e clicar no botão após 5 segundos', () => {
    cy.visit('http://localhost:3000/mrworld-v3/clients');

    // espera 5 segundos
    cy.wait(5000);

    
    
    // clica no botão com id específico
    cy.get('#BtnNewClient').click();

    // cy.wait(500);

    cy.get('#input-name-client').type('testando...');
  })
})
