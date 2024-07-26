describe('Assertion demo', () => {

    //Implicit assertion(should ,and) =>(eq,contain,include,have.lenght,have.value,etc...)
    it('Implicit assertion', () => {
      cy.visit("http://10.35.29.184/")
      cy.url().should('include','http').should('eq','http://10.35.29.184/login')
      cy.url().should('include','http').and('eq','http://10.35.29.184/login').and('contain','10.35.29.184/')
    
      cy.get('.login-page > .v-container').should('be.visible').and('exist')
      //cy.xpath('//a').should('have.length','5')

      cy.get('#username').type('64070507212')
      cy.get('#username').should('have.value','64070507212')
    });


    it('Explicit assertion', () => {
        cy.visit("http://10.35.29.184/")
        cy.get('#username').type('64070507212')
        cy.get('#password').type('password')
        cy.get("[type='submit']").click()
        
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div').click();
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[3]/div[3]/button').click()
       
        
        let expactname = 'คุณ ขุน อินโนซอฟท์'
        cy.xpath('//*[@id="app"]/div/div/header/div/div[3]/div/button/span[3]').then( (props)=>{
            let actualname = props.text()
            //BDD assertion
            expect(actualname).to.equal(expactname)
            //expect(actualname).to.not.equal(expactname)

            //TDD assertion
            assert.equal(actualname,expactname)
            //assert.notEqual(actualname,expactname)
        });
    });



});