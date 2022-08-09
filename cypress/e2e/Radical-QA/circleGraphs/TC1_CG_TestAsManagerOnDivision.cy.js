/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import CTLogin from '../../../support/pageObjects/CTLogin'
const ctLogin = new CTLogin();
let divisionName, programName;
//Work in Progress
describe('Coursetune POC', function () {
     after(function() {
        //cy.deleteProgram();
        cy.deleteDivision();
        cy.logout();
        })
    beforeEach(function () {
        //Will get user data from data.json before each test
        cy.fixture('qaData.json').then(function (data) {
            this.data=data
        cy.viewport(1920, 1080);
        })
    })
    it('Will test as admin on institution (no other roles)', function () {
        cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")
        cy.login(this.data.users.admin.email, this.data.users.admin.password)
        ctLogin.getSuccessLogin().should('have.text', this.data.users.admin.name);
        divisionName = faker.random.word();
        cy.createDivision(divisionName);
        cy.contains(divisionName);
        cy.assignManagerRole(this.data.users.manager.name,this.data.users.manager.email,divisionName,this.data.roles.manager);
    })
    // it('Will test as admin on institution (no other roles)', function () {
    //     cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")
    //     cy.login(this.data.users.manager.email, this.data.users.manager.password)
    //     ctLogin.getSuccessLogin().should('have.text', this.data.users.manager.name);
    //     cy.enterDivision(divisionName);
    //     cy.createProgram(programName);
    // })
})