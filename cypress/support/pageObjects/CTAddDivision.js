class CTAddDivision
{
    //Add Division
    //Name field
    getDivNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[2]/span/span[1]/span/span/span[1]/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Default type for the C-Layer
    getDivCloValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span[1]/span/span/span[3]/span/span[3]/span/span[2]/button')
    }
    //Default type for the Bundle
    getDivBundleValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[5]/span/span[3]/span/span[2]/button')
    }
    //Default Layer View
    //C-Layers
    getDivCloRadioBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[7]/span/span[3]/span/span[1]/button')
    }
    //Bundles
    getDivBundleRadioBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span[3]/button')
    }
    //Cancel button
    getDivCancelBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[8]/span/span/span/span[1]/span/span/span/button')
    }
    //Add button
    getDivAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[8]/span/span/span/span[2]/span/span/span/button')
    }
    //First Banner Icon
    getDivBannerOneBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[1]/button')
    }
    //Second Banner Icon
    getDivBannerTwoBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[2]/button')
    }
    //Third Banner Icon
    getDivBannerThreeBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[3]/button')
    }
}

export default CTAddDivision;