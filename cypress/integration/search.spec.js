/// <reference types="Cypress" />

describe('Player Archive', () => {
	it('Seach for fabio', () => {
		cy.visit("/");
		cy.get('input[name=search]').type('fabio');
		cy.get('form').submit();
		cy.get('h2').should('have.text', 'fabio');
	});

	it('Seach for giorgio', () => {
		cy.visit("/");
		cy.get('input[name=search]').type('giorgio');
		cy.get('form').submit();
		cy.get('.playerlist__message').should('have.text', 'Player Not found');
	});

	it('Seach for francesco', () => {
		cy.visit("/");
		cy.get('input[name=search]').type('francesco');
		cy.get('form').submit();
		cy.get('.playerlist__message').should('have.text', 'Player Not found');
	});
});
