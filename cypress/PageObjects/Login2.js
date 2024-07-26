class Login2{

    Username='#username'
    Password='#password'
    Clicksubmit="[type='submit']"
    Selectrole='/html/body/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div'
    Selectroleadmin='/html/body/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[3]/div'
    Submitrole='/html/body/div[2]/div/div/div/div[2]/div[3]/div[3]/button'
    Verifyname='//*[@id="app"]/div/div/header/div/div[3]/div/button/span[3]'
    
    setUserName(username){
        cy.get(this.Username).type('64070507212')
    }

    setPassword(password){
        cy.get(this.Password).type('password')
    }
    
    clickSubmit(){
        cy.get(this.Clicksubmit).click()
    }

    selectRole(){
        cy.xpath(this.Selectrole).click();
        cy.xpath(this.Submitrole).click()   
    }

    selectRoleadmin(){
        cy.xpath(this.Selectroleadmin).click();
        cy.xpath(this.Submitrole).click()   
    }
    verifyLoginsuccess(){
        let expactname = 'คุณ ขุน อินโนซอฟท์'
        cy.xpath(this.Verifyname).then( (props)=>{
            let actualname = props.text()
            expect(actualname).to.equal(expactname)
        })
    }
}
export default Login2      
