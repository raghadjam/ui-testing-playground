import { PAGES, SELECTORS } from './constants';

describe('Verify Text Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.verifyText);
  });

  it('Finds element with Welcome text', () => {
    cy.get(SELECTORS.welcomeSpan)
      .should('exist')
      .and('be.visible')
      .and('contain.text', SELECTORS.welcomeUser);
  });
});
