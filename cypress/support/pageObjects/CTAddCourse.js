class CTAddCourse
{    
    //Add Course
    //Name field
    getCourseNameInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[6]/span/span/span/span[2]/span/span/span/span/span[1]/span[1]/span/span/span/span[3]/span/span/span/span[2]/span/span[2]/span/span/span[1]/span/span[2]/span/span/span/span/span[2]/span/input')
    }
    //Add Button
    getCourseAddBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span[2]/span/span/span/span/span/span[8]/span/span/span/span[2]/span/span/span/button')
    }
    //Warning Message - Save
    getCourseWarnSaveBtn()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[1]/span/span/span/span/span[1]/span[2]/span/span/span/span[2]/span[2]/span/span[2]/span/span/span/span/span/span/span/span/span/span/span/span/span/span[2]/span/span/span/span/span/span[8]/span/span/span/span[2]/span/span/span/button')
    }
}

export default CTAddCourse;