class CTUsers
{    
    //Add Bundle
    //Search field
    getUsrSearchInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span/input')
    }
    //Meatballs Menu
    getUsrMenuBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[2]/span[7]/span/span/span/button')
    }
    //Assign or View Roles
    getUsrAssignViewRoleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span/span[2]/span/span/span/span[2]/span/span/span[2]/button')
    }
    //Assign Role Button
    getUsrAssignRoleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span/span[2]/span/span/span/span/span/span/span/span/span/span/span/span/span/span[2]/span/span/span/span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[1]/span/span[1]/span/span/button')
    }
    //Search Role Button
    getUsrSearchRoleInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[1]/span[1]/span/span/span/span/span[1]/span/span[1]/span/span/span/span[1]/span/span/span[1]/span/span/span[2]/span/span[1]/span/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Role Dropdown Menu
    getUsrDropdwnRoleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span/span/span/span[1]/span/span[1]/span/span/span/span[2]/span/span/span/span/span[2]/button')
    }
    //Manager Role Value
    getUsrManagerValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[1]/button')
    }
    //Editor Role Value
    getUsrEditorValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[2]/button')
    }
    //Commenter Role Value
    getUsrCommenterValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[3]/button')
    }
    //Viewer Role Value
    getUsrViewerValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[4]/button')
    }
    //None Role Value
    getUsrNoneValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[5]/button')
    }
    //Add Role Button
    getUsrAddRoleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[1]/span/span[1]/span/span/span/span[3]/span/span/button')
    }
    //Save Role Button
    getUsrSaveRoleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[8]/span/span/span/span[2]/span/span/span/button')
    }
    //Search Results
    getUsrSearchResultTxt()
    {
        return cy.xpath('//*[@id="appcontent"]//button/span/span/span[1]/span/span/span/span/span/textarea')
    }
    //Assigned Role
    getUsrAssignedRoleBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span/span/span[4]/span/span/span/span[2]/button')
    }
    //Existing Manager Role
    getUsrChangeManagerValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[1]/button')
    }
    //Existing Editor Role
    getUsrChangeEditorValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[2]/button')
    }
    //Existing Commenter Role
    getUsrChangeCommenterValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[3]/button')
    }
    //Existing Viewer Role
    getUsrChangeViewerValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[4]/button')
    }
    //Existing None Role
    getUsrChangeNoneValueBtn()
    {
        return cy.xpath('//*[@id="appcontent"]/div[1]/span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span[2]/span[2]/span/span/span[1]/span/span/span[2]/span/span/span/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span/span[5]/button')
    }
    //Close Users Screen
    getUsrCloseBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span/span/span[2]/span[2]/span/span[3]/span/span/span/span/span[1]/span/span/span[2]/span/button')
    }
}

export default CTUsers;

