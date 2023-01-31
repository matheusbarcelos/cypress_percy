describe('Ticketbox', () =>{
  beforeEach(() => cy.visit('index.html'));

  it('Check for the initial state', () =>{
    cy.percySnapshot();
  });

  it('Checks form invalid email', () =>{
    cy.get('#email').type('joao-exemplo.com');
    cy.percySnapshot();
  });

  it('Enables submission after all mandatory fields are filled', () =>{
    cy.fillMandatoryFields();
    cy.percySnapshot();
  });

  it('Update agreement base on full name, tickets quantity, and type', () => {
    cy.get('#first-name').type('Joao');
    cy.get('#last-name').type('Silva');
    cy.get('#ticket-quantity').select('4');
    cy.get('#vip').check();
    cy.percySnapshot();
  });

  const successfulFormSubmission = 'Shows a sucess message after form submission';
  it(successfulFormSubmission, () => {
    cy.fillMandatoryFields();
    cy.contains('Confirm Tickets').click();
    cy.percySnapshot(
      successfulFormSubmission,
      {
        percyCSS: `.success span { display: none }`
      }
    );
  });
   
});