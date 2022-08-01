class CTCoursetune
{
    //Coursetune Objects
    //Add Item
    getGeneralAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span[1]/span/span[1]/span/span/span/span[3]/span/span[1]/span/span/span/span/span/span[1]/span/span/span/span/span/span[2]/button')
    }
    //User Profile
    getGeneralUsrProfileBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[13]/span/button')
    }
    //Sign Out
    getGeneralSignOutBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span[1]/span[1]/span/span/span/span[14]/span/span/button')
    }
}

export default CTCoursetune;

