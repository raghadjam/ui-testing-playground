import { PAGES, SELECTORS } from './constants';

describe('Scrollbars Page', () => {

  beforeEach(() => {
    cy.visit(PAGES.scrollbars);
  });

  it('Button is not visible before scrolling', () => {
    cy.get(SELECTORS.hidingButton)
      .should('not.be.visible');
  });

  it('Scrolls the button into view and clicks it', () => {
    cy.get(SELECTORS.hidingButton)
      .scrollIntoView()
      .should('be.visible')
      .click();
  });
});
