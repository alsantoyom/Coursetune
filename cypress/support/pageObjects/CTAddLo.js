class CTAddLo
{
    //Add Learning Objective
    //LearningObjective
    getLoTxtArea()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span[1]/span[2]/span/textarea')
    }
    getLoAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span/span/span[8]/span/span/span/span[2]/span/span[2]/span/button')
    }
}

export default CTAddLo;