class CTDivision
{
    //Level 2 - Division
    //Program Card
    getCardProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span/span/button')
    }
    //Magnifying Glass In
    getMagProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span/span/span/span/span[1]/span/span/button')
    }
    //Magnifying Glass Out
    getMagoutProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span/span/span/span/span[1]/span/span/button')
    }
    //Edit Pencil
    getEditProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span[2]/span/span/span/span/span[3]/span/span/span/button')
    }
    //Delete Trash Can
    getDelProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span/span[4]/span/span/span/button')
    }
}

export default CTDivision;

