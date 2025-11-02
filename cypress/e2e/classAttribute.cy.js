import { PAGES, SELECTORS } from './constants';

describe('Class Attribute Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.classAttribute);
  });

  it('Alert does NOT exist before clicking the primary button', () => {
    cy.on('window:alert', () => {
      throw new Error('Alert appeared before clicking!');
    });
  });

  it('Alert appears with correct text after clicking the primary button', () => {
    cy.get('button').filter(SELECTORS.classButton).click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq(SELECTORS.buttonClickedMsg);
    });
  });
});
