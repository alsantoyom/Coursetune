class CTCoursetune
{
    //Coursetune Objects
    //Add Item
    getCtAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span[1]/span/span/span/span[3]/span/span[1]/span/span/span/span/span/span[1]/span/span/span/span/span/span[2]/button')
    }
    //User Profile
    getCtUsrProfileBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[13]/span/button')
    }
    //Hamburger Menu - Only accesible by admins or managers
    getCtMenuBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[9]/span/span/span/button')
    }
    //Users menu
    getCtUsersBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/span/span/span/span/span/span[2]/span/span/span[1]/span/span/button')
    }
    //Sign Out
    getCtSignOutBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[1]/span[1]/span/span/span/span[14]/span/span/button')
    }
}

export default CTCoursetune;