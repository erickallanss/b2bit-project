// cypress/integration/profile.spec.ts

describe('Testing elements and behavior in profile page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[type="text"]').type('cliente@youdrive.com');
        cy.get('input[type="password"]').type('password');
        cy.get('button[type="submit"]').click();
    });

    it('should render profile page and show all elements', () => {
        cy.contains('Profile picture').should('be.visible');
        cy.get('img[alt="Profile picture"]').should('be.visible');
        cy.get('label').contains('Your Name').next('input').should('have.value', 'Cliente');
        cy.get('label').contains('Your E-mail').next('input').should('have.value', 'cliente@youdrive.com');
    });

    it('should logout successfully', () => {
        cy.get('button').contains('Logout').click();
        cy.url().should('include', '/login');
    });
});
