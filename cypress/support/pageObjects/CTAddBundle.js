class CTAddBundle
{    
    //Add Bundle
    //Title field
    getBundleNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Add Button
    getBundleAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span[2]/span/button')
    }
}

export default CTAddBundle;