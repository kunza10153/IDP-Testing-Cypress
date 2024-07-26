import Login2 from "../PageObjects/Login2";

describe('Create Mission Tab1', () => {    
    
    it('Create mission', () => {
        cy.login_user('64070507212','password')
        cy.wait(5000)

        cy.get('.v-btn').contains('ตั้งเป้าหมาย').click();
        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[1]/div/form/div/div[2]/div/div/div/div/div[3]/div').click();
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)").click();
        cy.get('.v-btn').contains('ยืนยันเป้าหมาย').click();
    })

    it('Create in mission', () => {
        cy.visit("http://10.35.29.184/")

        cy.fixture('infomation').then((data)=>{
            const  Ln = new Login2()
            Ln.setUserName(data.username)
            Ln.setPassword(data.password)
            Ln.clickSubmit()
            Ln.selectRole()
        })
        cy.wait(4000)
        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div/div[4]/button').click();
        cy.get('#Tab1MissionNameInput').type('Automate test by cypress');

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[4]/div/div/div/div/div[3]/div').click();
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)").click();
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1)").click();

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[5]/div/div/div/div/div[3]/div').click();
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)").click();
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1)").click();

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[6]/div/div/div/div/div[3]/div').click({ force: true });
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)").click();
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(4) > div:nth-child(1)").click();

        cy.get('.v-btn').contains('บันทึกภารกิจ').click();
    });

    it('Verify infomation', () => {
        cy.visit("http://10.35.29.184/")

        cy.fixture('infomation').then((data)=>{
            const  Ln = new Login2()
            Ln.setUserName(data.username)
            Ln.setPassword(data.password)
            Ln.clickSubmit()
            Ln.selectRole()
        })
        cy.wait(3000)

        cy.fixture('verifytext').then((textresult)=>{
            cy.get('h3').should('include.text',textresult.missiontab1);
            cy.get(':nth-child(2) > .v-col-12 > .v-card > .v-row > :nth-child(2)').should('include.text',textresult.resulttab1);
            cy.get('.v-col-12 > .v-card > .v-row > :nth-child(3) > :nth-child(1) > p').should('include.text',textresult.samutanatab1);
            cy.get('.v-row > :nth-child(3) > :nth-child(2) > p').should('include.text',textresult.samutana2tab1);
            cy.get(':nth-child(2) > .v-col-12 > .v-card > .v-row > :nth-child(4)').should('include.text',textresult.resourcetab1);
        })
        
    });


});