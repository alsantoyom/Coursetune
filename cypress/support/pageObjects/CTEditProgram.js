class CTEditProgram
{
    //Edit Program
    //Name field
    getEditProgramNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span/span/span[2]/span/span[1]/span/span[1]/span/span/span/span[1]/span/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Default type for bundle layer
    getEditProgramDefaultBundleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span[3]/span/span[2]/button')
    }
    //Apply to all courses in this program
    getEditProgramApplyCoursesBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[3]/span/span[4]/span/span/span/span/button')
    }
    //Save button
    getEditProgramSaveBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[8]/span/span/span/span[2]/span/span[3]/span/button')
    }
}

export default CTEditProgram;

