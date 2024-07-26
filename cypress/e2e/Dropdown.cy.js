describe('Check Dropdown', () => {
    
    //(have dropdown value in html)
    it.skip('dropdown with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html?src=homepage')
        cy.get('#zcf_address_country').select('Greenland').should('have.value','Greenland')
    });

    it.skip('dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type("Greenland").type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Greenland')
    });

    it.skip('Auto suggest dropdown', () => {
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type('bangkok')
        cy.get('.suggestion-title').contains('Metropolitan Administration').click()
    });

    it('dynamic  dropdown', () => {
        cy.visit('https://www.google.com/?hl=th');
        cy.get("textarea[name='q']").type('bangkok')
        
        cy.wait(3000)

        cy.get('div.wM6W7d>span').each(($el, index,$list)=>{
            if($el.text()=='Bangkok Airways'){
                cy.wrap($el).click()
            }
        })

        cy.get("textarea[name='q']").should('have.value','bangkok airways')
    });
});