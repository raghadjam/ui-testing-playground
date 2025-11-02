import { PAGES, SELECTORS } from './constants';

describe('Hidden Layers Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.hiddenLayers);
  });

  it('Green button is visible and clickable before the blue layer appears', () => {
    cy.get(SELECTORS.greenButton).should('be.visible');
    cy.get(SELECTORS.blueButton).should('not.exist');
    cy.get(SELECTORS.greenButton).click();
  });

  it('Blue button becomes visible and covers the green button after clicking', () => {
    cy.get(SELECTORS.greenButton).click();
    cy.get(SELECTORS.blueButton).should('be.visible');
    cy.get(SELECTORS.greenButton).should('be.visible')
  });
});
