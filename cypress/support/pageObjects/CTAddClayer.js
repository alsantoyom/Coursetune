class CTAddClayer
{    
    //Add C-Layer
    //Title field
    getClayerNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Add Button
    getClayerAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span[2]/span/button')
    }
}

export default CTAddClayer;