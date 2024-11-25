describe('Teste End-to-End', () => {
  it('Visita a Página', () => {
    cy.visit('http://localhost/minilivraria/');
  });

  it('Verifica Item na Página', () => {
    cy.visit('http://localhost/minilivraria/');
    cy.get('[data-id=4]').should('contain.text', 'Clean Code');
  });

  it('Calcula Frete', () => {
    cy.visit('http://localhost/minilivraria/');
    cy.get('[data-id=4]').within(() => {
      cy.get('input').type('69104078');
      cy.contains('Calcular Frete').click();
    });
    cy.wait(2000);
    cy.get('#frete-4').should('contain.text', 'Frete estimado: R$');
  });

  it('Comprar Livro', () => {
    cy.visit('http://localhost/minilivraria/');
    cy.get('[data-id=4]').within(() => {
      cy.get('input').type('69104078');
      cy.contains('Calcular Frete').click();
    });
    cy.wait(2000);
    cy.get('#frete-4').should('contain.text', 'Frete estimado: R$');
    cy.contains('Finalizar Compra').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Compra finalizada com sucesso!');
    });
  });
});