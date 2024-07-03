document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, index) => {
        code.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < codes.length - 1) {
                codes[index + 1].focus();
            }
        });

        code.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                codes[index - 1].focus();
            }
        });
    });

    // Set focus to the first input initially
    codes[0].focus();
});
describe('OTP Verification Tests', () => {
    const baseUrl = 'http://localhost:3000';

    it('should have the correct heading and subtext', () => {
        cy.visit(baseUrl + '/main.html');
        cy.get('#verification_heading').should('have.text', 'Verify Your Account');
        cy.get('#verification_subtext').should('exist');
        cy.get('.code-container').find('input.code').eq(5).should('exist');
    });

    it('should focus on the next input on typing a digit', () => {
        cy.visit(baseUrl + '/main.html');
        cy.get('.code-container').find('input.code').eq(0).type('5');
        cy.focused().should('have.id', 'code-2');
        cy.get('.code-container').find('input.code').eq(1).type('1');
        cy.focused().should('have.id', 'code-3');
        cy.get('.code-container').find('input.code').eq(2).type('7');
        cy.focused().should('have.id', 'code-4');
        cy.get('.code-container').find('input.code').eq(3).type('2');
        cy.focused().should('have.id', 'code-5');
        cy.get('.code-container').find('input.code').eq(4).type('9');
        cy.focused().should('have.id', 'code-6');
        cy.get('.code-container').find('input.code').eq(5).type('6');
    });

    it('should focus on the previous input on backspace', () => {
        cy.visit(baseUrl + '/main.html');
        cy.get('.code-container').find('input.code').eq(5).type('{backspace}');
        cy.focused().should('have.id', 'code-5');
        cy.get('.code-container').find('input.code').eq(4).type('{backspace}');
        cy.focused().should('have.id', 'code-4');
        cy.get('.code-container').find('input.code').eq(3).type('{backspace}');
        cy.focused().should('have.id', 'code-3');
        cy.get('.code-container').find('input.code').eq(2).type('{backspace}');
        cy.focused().should('have.id', 'code-2');
        cy.get('.code-container').find('input.code').eq(1).type('{backspace}');
        cy.focused().should('have.id', 'code-1');
        cy.get('.code-container').find('input.code').eq(0).type('{backspace}');
    });
});
