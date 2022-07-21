class CTLogin
{
    //Login Screen
    //Username field
    getUsrInput()
    {
        return cy.xpath("//*[contains(@class, 'login-container')]//*[contains(@class, 'email-container')]//input")
    }
    //Password field
    getPassInput()
    {
        return cy.xpath("//*[contains(@class, 'login-container')]//*[contains(@class, 'password-container')]//input")
    }
    //Login Button field
    getLoginBtn()
    {
        return cy.xpath("//*[contains(@class, 'login-container')]//button[contains(@class, 'login')]")
    }
    //Profile Name within Coursetune
    getSuccessLogin()
    {
        return cy.xpath("//*[contains(@class, 'user-bar')]//*[contains(@class, 'user-name')]", { timeout: 10000 })
    }
}

export default CTLogin;