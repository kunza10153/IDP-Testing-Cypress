import Login2 from "../PageObjects/Login2";
describe('Add Feedback Develop Tab4', () => {
        it('Add feedback develop', () => {
            cy.visit("http://10.35.29.184/")
            cy.fixture('infomation').then((data)=>{
                const  Ln = new Login2()
                Ln.setUserName(data.username)
                Ln.setPassword(data.password)
                Ln.clickSubmit()
                Ln.selectRoleadmin()
            })
            
            cy.visit('http://10.35.29.184/development/64070507212');
            cy.wait(3000)
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[4]').click();
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[4]/div/div[5]/button').click({force:true})
            cy.wait(3000)
            cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[2]/div/div[7]/div/div/div/div/div[3]/div').click()
            cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)").click();

            cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[2]/div/div[8]/div/div/div/div/div[3]/div').click()
            cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)').click();


            cy.get('#Tab4Input3').type('Automate test cypress')
            cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[7]/div/form/div/div[4]/div/div/div[2]/button').click()
        });
        
});


