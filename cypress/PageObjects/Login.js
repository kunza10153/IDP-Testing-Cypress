class Login{
    setUserName(username){
        cy.get('#username').type('64070507212')
    }

    setPassword(password){
        cy.get('#password').type('password')
    }
    
    clickSubmit(){
        cy.get("[type='submit']").click()
    }

    selectRole(){
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div').click();
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[3]/div[3]/button').click()   
    }

    verifyLoginsuccess(){
        let expactname = 'คุณ ขุน อินโนซอฟท์'
        cy.xpath('//*[@id="app"]/div/div/header/div/div[3]/div/button/span[3]').then( (props)=>{
            let actualname = props.text()
            expect(actualname).to.equal(expactname)
        })
    }
}
export default Login      
