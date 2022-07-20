class CTLeftPanel
{
    //Coursetune Left Panel
    //Level 1 - Institution
    getInstBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[2]/span/span/span/span/span[1]/button')
    }
    //Level 2 - Division
    getDivisionBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[3]/span/span/span/span[3]/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[3]/span/span/span/span[1]/button')
    }
    //Level 3 - Program
    getProgramBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[1]/span[1]/span/span/span/span[4]/span/span/span/span[1]/button')
    }
    //Level 4 - Course
    getCourseBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[1]/span[1]/span/span/span/span[5]/span/span/span/span[1]/button')
    }
    //Circle Graph View
    getCircGraphBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span/span/span[4]/span/span/span/span[2]/span/span/span/span/span/span/span/span[1]/span[1]/span/button')
    }
    //Grid View
    getGridBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[4]/span/span/span/span[2]/span/span/span/span/span/span/span/span[1]/span[2]/span/button')
    }
    //Linear View
    getLinearBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span/span[4]/span/span/span/span[2]/span/span/span/span/span/span/span/span[1]/span[3]/span/button')
    }
    //Bundle Layer
    getBundlLayBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[4]/span/span/span/span[3]/span/span/span[3]/span/span/span/span[1]/button')
    }
    //CLO Layer
    getCloLayBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span/span/span[1]/button')
    }
}

export default CTLeftPanel;

