import Login2 from "../PageObjects/Login2";

describe('Create Multi Mission Tab1', () => {    

    it('Create multi Topic in mission', () => {
    cy.visit("http://10.35.29.184/")

    cy.fixture('infomation').then((data) => {
        const Ln = new Login2()
        Ln.setUserName(data.username)
        Ln.setPassword(data.password)
        Ln.clickSubmit()
        Ln.selectRole()
    })
    cy.wait(4000)

    const test = [
        { missionname: 'multi1', dropdown1: '2', dropdown2: '4', dropdown3: '5' },
        { missionname: 'multi2', dropdown1: '3', dropdown2: '5', dropdown3: '4' },
        { missionname: 'multi3', dropdown1: '4', dropdown2: '2', dropdown3: '3' }
    ];

    
    test.forEach(testcase => {          
        cy.get('.v-window-item--active > .v-skeleton-loader > :nth-child(1)')
            .within(() => {
                cy.get('.v-btn__content', { timeout: 4000 }).contains('เพิ่มภารกิจ').should('be.visible').as('addButton')
                cy.get('@addButton').click()
            });

        cy.get('#Tab1MissionNameInput').type(testcase.missionname);

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[4]/div/div/div/div/div[3]/div')
            .click()
            .then(() => {
                cy.get(`body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(${testcase.dropdown1}) > div:nth-child(4) > div:nth-child(1)`)
                    .click();
            });

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[5]/div/div/div/div/div[3]/div')
            .click()
            .then(() => {
                cy.get(`body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(${testcase.dropdown2}) > div:nth-child(4) > div:nth-child(1)`)
                    .click();
            });

        cy.xpath('//*[@id="app"]/div/div/main/div/div/nav[2]/div/form/div/div[6]/div/div/div/div/div[3]/div')
            .click()
            .then(() => {
                cy.get(`body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(${testcase.dropdown3}) > div:nth-child(4) > div:nth-child(1)`)
                    .click();
            });

        cy.get('.v-btn').contains('บันทึกภารกิจ').as('saveButton')
        cy.get('@saveButton').click()
        cy.wait(4000)
    });
});

    it('Delete multi mission', () => {
        cy.visit("http://10.35.29.184/")

        cy.fixture('infomation').then((data) => {
            const Ln = new Login2()
            Ln.setUserName(data.username)
            Ln.setPassword(data.password)
            Ln.clickSubmit()
            Ln.selectRole()
        })
        cy.wait(3000)

        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div[1]/div[7]/div[2]/div/div/div[2]/div[5]/button[3]').click()
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[4]/div/button[1]').contains('ยืนยัน').click({force: true});
        cy.wait(3000)

        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div[1]/div[6]/div[2]/div/div/div[2]/div[5]/button[3]').click()
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[4]/div/button[1]').contains('ยืนยัน').click({force: true});
        cy.wait(3000)

        cy.xpath('//*[@id="app"]/div/div/main/div/div/div[4]/div[3]/div/div/div[1]/div[1]/div[1]/div[5]/div[2]/div/div/div[2]/div[5]/button[3]').click()
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[4]/div/button[1]').contains('ยืนยัน').click({force: true});
        cy.wait(3000)
    });
});