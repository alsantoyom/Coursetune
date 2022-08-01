class CTInstitution
{
    //Level 1 - Institution
    //Division Card
    getDivCardBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[4]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span/span[1]/span/span/button')
    }
    //Magnifying Glass
    getDivMagBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/button/span/span/span[2]/span/span/span/span[2]/span/span/span/span[1]/button')
    }
    //Edit Pencil
    getDivEditBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span/span/button')
    }
    //Delete Trash Can
    getDivDelBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span[2]/span/span/span/span[2]/span/span/span[2]/span/button')
    }
    //Program Count
    getDivProgramCount()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[4]/span/span/span/span[2]/span/span')
    }
    //Delete Checkbox
    getDivDelCheckBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span/span/span/span/span/span/span/span/span/span/span/span/span/span[2]/span/span/span/span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/button')
    }
    //Delete Division button
    getDivDelDivisionBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span/span/span/span/span/span/span/span/span/span[2]/span/span/span/span/span/span[8]/span/span/span/span[2]/span/span/span/button')
    }
    //Warning Ok button
    getDivWarnOkBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span/span/span/span[2]/span/span/span/span/span/span[8]/span/span/span/span[3]/span/span/span/button')
    }
}

export default CTInstitution;

