/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
let divisionName, programName, courseName, bundleName1, bundleName2, bundleName3, b1lo1, b1lo2, b1lo3, b2lo1, b2lo2, b2lo3, b3lo1, b3lo2,
b3lo3;

describe('Coursetune POC', function () {
     after(function() {
        cy.deleteProgram(programName);
        cy.deleteDivision(divisionName);
        cy.logout();
        })
    beforeEach(function () {
        //Will get user data from data.json before each test
        cy.fixture('qaData.json').then(function (data) {
            this.data=data
        cy.viewport(1920, 1080);
        })
    })
    it('Will Create a division, with one program, one course, 3 bundles and 3 LOs per Bundle', function () {
        //The user launches Coursetune
        cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")
        //The user logs in
        cy.login(this.data.users.admin.email, this.data.users.admin.password, this.data.users.admin.name)
        //The user creates a new division
        divisionName = faker.random.word();
        cy.createDivision(divisionName);
        //The user enters the Division
        cy.enterDivision(divisionName, this.data.levels.level3);
        //The user creates a new program
        programName = faker.random.word();
        cy.createProgram(programName);
        //The user enters the Program
        cy.enterProgram(programName, this.data.levels.level4);
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
        b1lo1 = faker.random.word();
        cy.createLo(bundleName1, b1lo1);
        //Bundle 1 - LO 2
        b1lo2 = faker.random.word();
        cy.createLo(bundleName1, b1lo2);
        //Bundle 1 - LO 3
        b1lo3 = faker.random.word();
        cy.createLo(bundleName1, b1lo3);
        //Bundle 2 - LO 1
        b2lo1 = faker.random.word();
        cy.createLo(bundleName2, b2lo1);
        //Bundle 2 - LO 2
        b2lo2 = faker.random.word();
        cy.createLo(bundleName2, b2lo2);
        //Bundle 2 - LO 3
        b2lo3 = faker.random.word();
        cy.createLo(bundleName2, b2lo3);
        //Bundle 3 - LO 1
        b3lo1 = faker.random.word();
        cy.createLo(bundleName3, b3lo1);
        //Bundle 3 - LO 2
        b3lo2 = faker.random.word();
        cy.createLo(bundleName3, b3lo2);
        //Bundle 3 - LO 3
        b3lo3 = faker.random.word();
        cy.createLo(bundleName3, b3lo3);
    })
})