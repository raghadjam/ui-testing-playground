import { PAGES, SELECTORS } from './constants';

describe('Dynamic ID Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.dynamicId);
  });

  it('Click the dynamic button', () => {
    cy.contains(SELECTORS.dynamicButton).click();
  });
});
