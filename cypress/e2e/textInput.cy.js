import { PAGES, SELECTORS, TEXTS } from './constants';

describe('Text Input Page', () => {

  beforeEach(() => {
    cy.visit(PAGES.textInput);
  });

  it('Button text does not change when input is empty', () => {
    cy.get(SELECTORS.textInputField).clear();
    cy.get(SELECTORS.textInputButton).click();
    cy.get(SELECTORS.textInputButton)
      .should('contain.text', SELECTORS.textInputButtonInitial);
  });

  it('Button text changes when typing into input', () => {
    const newText = 'NewButtonName';
    cy.get(SELECTORS.textInputField).clear().type(newText);
    cy.get(SELECTORS.textInputButton).click();
    cy.get(SELECTORS.textInputButton)
      .should('contain.text', newText);
  });
});
