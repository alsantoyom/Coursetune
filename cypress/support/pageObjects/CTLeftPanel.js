class CTLeftPanel
{
    //Coursetune Left Panel
    //Level 1 - Institution
    getLpInstBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span/span[1]/button')
    }
    //Level 2 - Division
    getLpDivisionBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[3]/span/span/span/span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[3]/span/span/span/span[1]/button')
    }
    //Level 3 - Program
    getLpProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[1]/span[1]/span/span/span/span[4]/span/span/span/span[1]/button')
    }
    //Level 4 - Course
    getLpCourseBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[1]/span[1]/span/span/span/span[5]/span/span/span/span[1]/button')
    }
    //Circle Graph View
    getLpCircGraphBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span/span/span[4]/span/span/span/span[2]/span/span/span/span/span/span/span/span[1]/span[1]/span/button')
    }
    //Grid View
    getLpGridBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[4]/span/span/span/span[2]/span/span/span/span/span/span/span/span[1]/span[2]/span/button')
    }
    //Linear View
    getLpLinearBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span/span[4]/span/span/span/span[2]/span/span/span/span/span/span/span/span[1]/span[3]/span/button')
    }
    //Bundle Layer
    getLpBundlLayBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[4]/span/span/span/span[3]/span/span/span[3]/span/span/span/span[1]/button')
    }
    //CLO Layer
    getLpCloLayBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span/span/span[1]/button')
    }
}

export default CTLeftPanel;

