describe('Testing elements and behavior in login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Should render login page and find all elements', () => {
    cy.get('img[alt="B2Bit Logo"]').should('be.visible'); // Verifica se a logo está visível
    cy.get('form').should('be.visible');
    cy.get('label').contains('E-mail').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('label').contains('Password').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.contains('button', 'Sign In').should('be.visible');
  })


  it('should login successfully with valid credentials', () => {
    cy.intercept(
      'POST', 
      '/auth/login', {
      statusCode: 200,
    }).as('loginRequest');
    cy.get('input[type="text"]').type('user@email.com');
    cy.get('input[type="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/');
  });


  it('should show an error when using invalid credentials to log in', () => {
    cy.intercept('POST', '/auth/login', {
      statusCode: 401,
      body: { message: 'Authentication error. Try again.' }
    }).as('loginRequest');
    cy.get('input[type="text"]').type('cliente@youdrive.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
    cy.get('div').contains('Incorrect email and/or password. Please check your email and password and try again.');
  });
});