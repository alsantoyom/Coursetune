class CTLevelTwo
{
    //Level 2 - Division
    //Edit Mode
    getEditInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span/span[2]/span/span/span[1]/span/span/span/span[3]/span/span/span[1]/span/button/span/span/span/span[2]')
    }
    //View Mode
    getViewInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/button/span/span/span/span[2]')
    }
    //Left Panel - L2 Button
    getLevOneBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[1]/span[2]/span/span/span[2]/span/span/span[3]/span/span/span/span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[3]/span/span/span/span[1]/button')
    }
    //Create Division
    getCreatedDiv()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span[1]/span/span/span/span[3]/span/span[1]/span/span/span/span/span/span[1]/span/span/span/span/span/span[2]/button')
    }
    //Division Card
    getAddDiv()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span[1]/span/span/span/span/span/span[1]/span/span/span/span/span/span[2]/button')
    }
}

export default CTLevelOne;

