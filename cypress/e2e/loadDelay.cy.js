import { PAGES, SELECTORS } from './constants';

describe('Load Delay Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.home);
  });

  it('Clicks the button after page has loaded', () => {
    cy.contains('a', 'Load Delay').click();
    cy.get(SELECTORS.classButton, { timeout: 10000 }).should('exist');
    cy.get(SELECTORS.classButton).click();
  });
});
