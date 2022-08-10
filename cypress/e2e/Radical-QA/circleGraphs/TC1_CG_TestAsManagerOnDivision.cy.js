/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
let divisionName, programName;

//Work in Progress
describe('Coursetune POC', function () {
    //  after(function() {
    //     //cy.deleteProgram();
    //     cy.deleteDivision();
    //     cy.logout();
    //     })
    beforeEach(function () {
        cy.fixture('qaData.json').then(function (data) {
            this.data=data
        cy.viewport(1920, 1080);
        })
    })
    it('TEST AS ADMIN ON INSTITUTION (NO OTHER ROLES)', function () {
        cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")
        cy.login(this.data.users.admin.email, this.data.users.admin.password, this.data.users.admin.name)
        divisionName = faker.random.word();
        cy.createDivision(divisionName);
        cy.assignManagerRole(this.data.users.manager.name,this.data.users.manager.email,divisionName,this.data.roles.manager);
        cy.logout();
    })
    
    it('TEST AS MANAGER ON DIVISION (NO OTHER ROLES)', function () {
        cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")
        cy.login(this.data.users.manager.email, this.data.users.manager.password, this.data.users.manager.name)
        cy.enterDivision(divisionName, this.data.levels.level3);
        programName = faker.random.word();
        cy.createProgram(programName);
        cy.contains(programName);
    })
})