describe('My First Test', () => {
    it('Page should have expected elements', () => {

        cy.visit('/');
        cy.task("log", `Base URL: ${Cypress.config("baseUrl")}`);

        cy.get('[test-id="instruction-text"]')
            .should('have.text', 'Click button to display datetime');

        cy.get('[test-id="show-date-time-button"]')
            .should('have.text', 'Show Date and Time')
            .should('be.enabled')
            .should('be.visible')
            .click();

        cy.get('[test-id="date-time-output"]')
            .should('include.text', '2025');

        cy.get('[test-id="example-text"]')
            .should('have.text', 'Example text to change for demo/deployment purposes ... ');

    })
})