class CTInstitution
{
    //Level 1 - Institution
    //Division Card
    getCardDivBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[4]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span/span[1]/span/span/button')
    }
}

export default CTInstitution;

