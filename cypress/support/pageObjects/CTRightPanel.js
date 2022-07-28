class CTRightPanel
{
    //Coursetune Right Panel
    //Edit Mode
    getRpEditInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span/span/span/span[2]/span/span/span[1]/span/span/span/span[3]/span/span/span[1]/span/button/span/span/span/span[2]')
    }
    //View Mode
    getRpViewInput()
    {
        return cy.xpath('//*[@id="appcontent"]//span/span[2]/button/span/span/span/span[2]')
    }
}

export default CTRightPanel;

