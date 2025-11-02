import { PAGES, SELECTORS } from './constants';

describe('Verify Text Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.verifyText);
  });

  it('Finds element with normalized Welcome text', () => {
    cy.get(SELECTORS.welcomeText)
      .invoke('text')       // get raw DOM text
      .then((txt) => txt.trim().replace(/\s+/g, ' ')) // normalize whitespace
      .should('eq', SELECTORS.expectedText);
  });
});
