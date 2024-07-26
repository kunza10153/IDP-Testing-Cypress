describe('Check UI Element', () => {
    
    // it('Check Radio Button', () => {
    //     cy.visit("http://10.35.29.184/")
    //     cy.get('#username').type('64070507212')
    //     cy.get('#password').type('password')
    //     cy.get("[type='submit']").click()
        
    //     cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div').click();
    //     cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[3]/div[3]/button').click()
       
    //     //radio check
    //     //cy.get('').check().should('be.checked');
    //     //cy.get('').check().should('not.be.checked');
    // });

    it('Check Box', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.xpath('//*[@id="checkboxes"]/input[1]').should('be.visible')
        cy.xpath('//*[@id="checkboxes"]/input[2]').should('be.visible')

        //select box
        cy.xpath('//*[@id="checkboxes"]/input[1]').check().should('be.checked')
        cy.xpath('//*[@id="checkboxes"]/input[2]').check().should('be.checked')

        //unselect
        cy.xpath('//*[@id="checkboxes"]/input[2]').uncheck().should('not.be.checked')

        //select first/last checkbox
        cy.get("[type='checkbox']").first().check()
        cy.get("[type='checkbox']").last().check()
    });
});