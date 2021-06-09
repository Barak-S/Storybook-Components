const getTestIdSelector = (testId) => `[data-test-id="${testId}"]`;

const appUrl = `http://localhost:7000`;
const apiUrl = `http://localhost:8080`;

describe('Sign in', () => {
  it('Should load page', () => {
    cy.visit(appUrl);
  })
  it ('Should receive response from the API server', () => {
    cy.request(`${apiUrl}/ping`);
  })
  it('Should have required fields', () => {
    cy.visit(`${appUrl}/auth/signin`)
    cy.get(getTestIdSelector('input.email')).type('some@gmail.com');
    cy.get(getTestIdSelector('input.password')).type('Some1234');
    cy.get(getTestIdSelector('btn.login')).click();
  })
})