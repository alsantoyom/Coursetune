class CTAddDivision
{
    //Add Division
    //Name field
    getDivNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[2]/span/span[1]/span/span/span[1]/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Default type for the C-Layer
    getCloValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span[1]/span/span/span[3]/span/span[3]/span/span[2]/button')
    }
    //Default type for the Bundle
    getBundleValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[5]/span/span[3]/span/span[2]/button')
    }
    //Default Layer View
    //C-Layers
    getCloRadioBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[7]/span/span[3]/span/span[1]/button')
    }
    //Bundles
    getBundleRadioBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span[3]/button')
    }
    //Cancel button
    getCancelBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[8]/span/span/span/span[1]/span/span/span/button')
    }
    //Add button
    getAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[8]/span/span/span/span[2]/span/span/span/button')
    }
    //First Banner Icon
    getBannerOneBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[1]/button')
    }
    //Second Banner Icon
    getBannerTwoBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[2]/button')
    }
    //Third Banner Icon
    getBannerThreeBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[3]/button')
    }
}

export default CTAddDivision;