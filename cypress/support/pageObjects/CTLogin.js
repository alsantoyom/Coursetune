class CTLogin
{
    getUsrInput()
    {
        return cy.xpath("//*[contains(@class, 'login-container')]//*[contains(@class, 'email-container')]//input")
    }
    
    getPassInput()
    {
        return cy.xpath("//*[contains(@class, 'login-container')]//*[contains(@class, 'password-container')]//input")
    }

    getLoginBtn()
    {
        return cy.xpath("//*[contains(@class, 'login-container')]//button[contains(@class, 'login')]")
    }
    
    getSuccessLogin()
    {
        return cy.xpath("//*[contains(@class, 'user-bar')]//*[contains(@class, 'user-name')]", { timeout: 10000 })
    }
}

export default CTLogin;