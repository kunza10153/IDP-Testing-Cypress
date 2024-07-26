import Login2 from "../PageObjects/Login2";
describe('Add Feedback Develop Tab3', () => {
        it('Add feedback develop', () => {
            cy.visit("http://10.35.29.184/")
            cy.fixture('infomation').then((data)=>{
                const  Ln = new Login2()
                Ln.setUserName(data.username)
                Ln.setPassword(data.password)
                Ln.clickSubmit()
                Ln.selectRole()
            })
            
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[3]').click();
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[3]/div[1]/div[3]/div[4]/div/div/div[2]/div[6]/button[1]').click()
            cy.get('#Tab3Input2').type('Automate test cypress');

            const filePath = '/Users/macbook/Desktop/cypress_ep0/cypress/downloads/test_file.pdf';
            cy.get('input[type="file"]').selectFile(filePath, { force: true });
            cy.get('input[type="file"]').should('have.value','C:\\fakepath\\test_file.pdf')
            cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[6]/div/form/div/div[8]/div/div/div[2]/button').click();
        });
        
});


