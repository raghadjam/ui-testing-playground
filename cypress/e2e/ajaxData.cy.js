import { PAGES, SELECTORS } from './constants';

describe('AJAX Data Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.ajaxData);
  });

  it('Waits for AJAX text to appear and clicks it', () => {
    cy.get(SELECTORS.ajaxButton).click();
    cy.contains(SELECTORS.ajaxLoadedText, { timeout: 20000 })
      .should('be.visible')
      .click();
  });
  
  it('AJAX text is not visible before clicking the button', () => {
    cy.contains(SELECTORS.ajaxLoadedText).should('not.exist');
  });
});
