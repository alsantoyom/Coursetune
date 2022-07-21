class CTAddProgram
{
    //Add Program
    //Name field
    getProgramNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span/span/span[2]/span/span[1]/span/span[1]/span/span/span/span[1]/span/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Save button
    getProgramSaveBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[8]/span/span/span/span[2]/span/span[3]/span/button')
    }
}

export default CTAddProgram;