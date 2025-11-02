// cypress/e2e/progressBar.cy.js
import {PAGES,  SELECTORS, TARGET_RATIO } from './constants';

describe('Progress Bar', () => {
  beforeEach(() => {
    cy.visit(PAGES.progressBar);
  });

 it('Waits for progress bar to reach 75% then stops', () => {
    cy.get(SELECTORS.startButton).click();
    cy.get(SELECTORS.progressBar, { timeout: 20000 }) 
      .should(($bar) => {
        const value = parseInt($bar.attr('aria-valuenow'));
        expect(value).to.be.eq(TARGET_RATIO);
      });

    cy.get(SELECTORS.stopButton).click();
  });
});
