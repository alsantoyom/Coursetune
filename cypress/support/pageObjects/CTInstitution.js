class CTInstitution
{
    //Level 1 - Institution
    //Division Card
    getCardDivBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[4]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span/span[1]/span/span/button')
    }
    //Magnifying Glass
    getMagDivBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/button/span/span/span[2]/span/span/span/span[2]/span/span/span/span[1]/button')
    }
    //Edit Pencil
    getEditDivBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span/span/button')
    }
    //Delete Trash Can
    getDelDivBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span/span/button')
    }
}

export default CTInstitution;

