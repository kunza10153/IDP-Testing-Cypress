import Login2 from "../PageObjects/Login2";

describe('Add Topic Develop Tab2', () => {
    
    it('Add topic develop', () => {
        cy.visit("http://10.35.29.184/")

        cy.fixture('infomation').then((data)=>{
            const  Ln = new Login2()
            Ln.setUserName(data.username)
            Ln.setPassword(data.password)
            Ln.clickSubmit()
            Ln.selectRole()
        })

        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[2]').click();
        cy.wait(3000)
        cy.get('.v-btn').contains('เพิ่มเรื่องที่ต้องพัฒนา').click()
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[4]/div/form/div/div[2]/div/div/div/div/div[3]/div').click()
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)").click();
        cy.get('#Tab2Input4').type('test cypress automate');
        cy.get('#Tab2Input5').type('test cypress automate');
        cy.get('#Tab2Input6').type('888');
        cy.get('#input-113').click();
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/div[2]/div[2]/div/div[16]').click()
        cy.get('#input-117').click();
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/div[2]/div[2]/div/div[34]').click()
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[4]/div/form/div/div[11]/div/div/div[2]/button').click({force: true});
    });

    it('verify infomation', () => {
        cy.visit("http://10.35.29.184/")

        cy.fixture('infomation').then((data)=>{
            const  Ln = new Login2()
            Ln.setUserName(data.username)
            Ln.setPassword(data.password)
            Ln.clickSubmit()
            Ln.selectRole()
        })
        cy.wait(3000)

        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[2]/div/div/button[2]').click();
        cy.fixture('verifytext').then((textresult)=>{
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[1]').should('include.text',textresult.topicdeveloptab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[2]').should('include.text',textresult.appointlearningtab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[3]').should('include.text',textresult.methodtab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[3]').should('include.text',textresult.method2tab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[4]').should('include.text',textresult.promisetab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[5]').should('include.text',textresult.expensetab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[6]').should('include.text',textresult.timestarttab2);
            cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[2]/div[1]/div[3]/div[4]/div/div/div[2]/div[6]').should('include.text',textresult.timefinaltab2);
            
        })
    });
});