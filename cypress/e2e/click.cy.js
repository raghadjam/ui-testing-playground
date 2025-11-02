import { PAGES, SELECTORS } from './constants';

describe('Click Page', () => {

  beforeEach(() => {
    cy.visit(PAGES.click);
  });

  it('Button becomes green with forced physical-like click', () => {
    cy.get(SELECTORS.clickButton).click({ force: true });
    cy.get(SELECTORS.clickButton)
      .should('have.class', 'btn-success');
  });
});
