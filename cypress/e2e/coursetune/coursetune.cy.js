/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import CTLogin from '../../support/pageObjects/CTLogin'
const ctLogin = new CTLogin();
let divisionName, programName, courseName, bundleName1, bundleName2, bundleName3;

describe('Coursetune POC', function () {
     after(function() {
        cy.deleteProgram();
        cy.deleteDivision();
        cy.logout();
        })
    beforeEach(function () {
        //Will get user data from data.json before each test
        cy.fixture('qaData.json').then(function (data) {
            this.data=data
        })
    })
    it('Will Create a division, with one program, one course, 3 bundles and 3 LOs per Bundle', function () {
        //The user launches Coursetune
        cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")
        //The user logs in
        cy.login(this.data.users.userEmail, this.data.users.password)
        ctLogin.getSuccessLogin().should('have.text', this.data.users.userName);
        //The user creates a new division
        divisionName = faker.random.word();
        cy.createDivision(divisionName);
        //The user enters the Division
        cy.enterDivision(divisionName);
        //The user creates a new program
        programName = faker.random.word();
        cy.createProgram(programName);
        //The user enters the Program
        cy.enterProgram(programName);
        //The user creates a new Course
        courseName = faker.random.word();
        cy.createCourse(courseName);
        //The user enters the Course
        cy.enterCourse(courseName);
        //The user creates 3 Bundles
        //Bundle 1
        bundleName1 = faker.random.word();
        cy.createBundle(bundleName1);
        //Bundle 2
        bundleName2 = faker.random.word();
        cy.createBundle(bundleName2);
        //Bundle 3
        bundleName3 = faker.random.word();
        cy.createBundle(bundleName3);
        //The user creates 3 LOs per Bundle
        //Bundle 1 - LO 1
        const b1lo1 = faker.random.word();
        cy.contains(bundleName1).click({ force: true });
        cy.createLo(b1lo1);
        //Bundle 1 - LO 2
        const b1lo2 = faker.random.word();
        cy.createLo(b1lo2);
        //Bundle 1 - LO 3
        const b1lo3 = faker.random.word();
        cy.createLo(b1lo3);
        //Bundle 2 - LO 1
        const b2lo1 = faker.random.word();
        cy.contains(bundleName2).click({ force: true });
        cy.createLo(b2lo1);
        //Bundle 2 - LO 2
        const b2lo2 = faker.random.word();
        cy.createLo(b2lo2);
        //Bundle 2 - LO 3
        const b2lo3 = faker.random.word();
        cy.createLo(b2lo3);
        //Bundle 3 - LO 1
        const b3lo1 = faker.random.word();
        cy.contains(bundleName3).click({ force: true });
        cy.createLo(b3lo1);
        //Bundle 3 - LO 2
        const b3lo2 = faker.random.word();
        cy.createLo(b3lo2);
        //Bundle 3 - LO 3
        const b3lo3 = faker.random.word();
        cy.createLo(b3lo3);
    })
})