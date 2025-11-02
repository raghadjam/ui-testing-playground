import { PAGES, SELECTORS } from './constants';

describe('Client Side Delay Page', () => {

  beforeEach(() => {
    cy.visit(PAGES.clientDelay);
  });

  it('Message is not visible before clicking the button', () => {
    cy.contains(SELECTORS.clientDelayText).should('not.exist');
  });

  it('Waits for client-side delayed message to appear after clicking', () => {
    cy.get(SELECTORS.clientDelayButton).click();
    cy.contains(SELECTORS.clientDelayText, { timeout: 20000 })
      .should('be.visible');
  });
});
