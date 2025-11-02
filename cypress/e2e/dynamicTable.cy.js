import { PAGES, SELECTORS } from './constants';

describe('Dynamic Table Page', () => {
  beforeEach(() => {
    cy.visit(PAGES.dynamicTable);
  });

  it('Matches Chrome CPU value with yellow label dynamically', () => {
    cy.get(SELECTORS.tableHeader).then(($headers) => {
      let cpuIndex = -1;
      $headers.each((i, el) => {
        if (el.innerText.trim() === 'CPU') cpuIndex = i;
      });

      cy.get(SELECTORS.tableRows).contains(SELECTORS.chromeRowText)
        .parent() 
        .find('[role="cell"]')
        .eq(cpuIndex)
        .invoke('text')
        .then((cpuValue) => {
          const cpuTrimmed = cpuValue.trim();
          cy.get(SELECTORS.cpuLabel)
            .should('contain.text', cpuTrimmed);
        });
    });
  });
});
