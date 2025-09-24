describe('Página de Clients', () => {
  it('deve abrir a página de clients e clicar no botão após 5 segundos', () => {
    cy.visit('http://localhost:3000/mrworld-v3/clients');
    cy.wait(3000);    
    cy.get('#btn-new').click();
    cy.get('#input-name-client').type('Cypress');
    cy.get('#input-name-cnpj').type('16.554.000/0001-73');
    cy.get('#button-submit').click();
  })
})
