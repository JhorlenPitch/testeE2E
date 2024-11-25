describe('Teste End-to-End da Micro-Livraria - Ver e Limpar Compras', () => {
  
  //Antes de cada teste, visita a página inicial
  beforeEach(() => {
    cy.visit('http://localhost/minilivraria/')
  });

  //Teste 1: Verifica se a página principal carrega corretamente
  it('Visita a Página Principal', () => {
    cy.get('.navbar h3').should('contain.text', 'Livraria Online')
  });

  //Teste 2: Verifica a funcionalidade de visualizar as compras
  it('Verifica se o Modal de Compras é exibido corretamente', () => {
    cy.get('#verCompras').click() //Clica no botão para abrir o modal de compras
    cy.get('#comprasModal').should('be.visible') //Verifica se o modal está visível
    cy.get('#listaCompras').should('exist') //Verifica se a lista de compras existe
    cy.get('#listaCompras tr').its('length').should('be.gte', 0) //Verifica se há itens na lista (ou zero)
  });

  //Teste 3: Verifica a funcionalidade de limpar compras
  it('Limpa a Lista de Compras', () => {
    cy.get('#verCompras').click() //Clica no botão para abrir o modal de compras
    cy.get('#limparCompras').click() //Clica no botão para limpar compras

    //Verifica se a mensagem de sucesso é exibida
    cy.get('#mensagemSucesso').should('be.visible').and('contain.text', 'Compras limpas com sucesso!')

    //Verifica se a lista de compras está vazia após limpar
    cy.get('#listaCompras').children().should('have.length', 0)
  });

});