import Login2 from "../PageObjects/Login";

describe('pom', () => {

    it('Logintest', () => {
        cy.visit("http://10.35.29.184/")

        const  Ln = new Login2()
        Ln.setUserName('64070507212')
        Ln.setPassword('password')
        Ln.clickSubmit()
        Ln.selectRole()
        Ln.verifyLoginsuccess()
    });

    //using data from fixtures
    it.only('Logintest', () => {
        cy.visit("http://10.35.29.184/")

        cy.fixture('infomation').then((data)=>{
            const  Ln = new Login2()
            Ln.setUserName(data.username)
            Ln.setPassword(data.password)
            Ln.clickSubmit()
            Ln.selectRole()
            Ln.verifyLoginsuccess()
        })
        
    });
    
});