/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import CTLeftPanel from '../../support/pageObjects/CTLeftPanel';
import CTLogin from '../../support/pageObjects/CTLogin'
const ctLogin = new CTLogin();
const ctLeftPanel = new CTLeftPanel();
let divisionName, programName, courseName, bundleName1, bundleName2, bundleName3;

describe('Coursetune POC', function (params) {
    beforeEach(function () {
        //Will get user data from data.json before each test
        cy.fixture('devData.json').then(function (data) {
            this.data=data
        })
    })
    it('Given the user is on the Home Page', function () {
        cy.visit(Cypress.env('devBaseUrl')+"?htmlrender=1")
    })

    it('When the user logs in', function () {
        cy.login(this.data.users.userEmail, this.data.users.password)
    })

    it('Then the user should be logged in', function () {
        ctLogin.getSuccessLogin().should('have.text', this.data.users.userName);
    })

    it('When the user creates a new division', function () {
        divisionName = faker.random.word();
        cy.createDivision(divisionName);
    })

    it('Then the division is added', function () {
        cy.contains(divisionName);
    })

    it('When the users clicks the Division Magnifying Glass icon', function () {
        cy.enterDivision(divisionName);
    })

    it('The user should be in Level 2', function () {
        ctLeftPanel.getDivisionBtn().should('be.visible');
    })

    it('When the user creates a new program', function () {
        programName = faker.random.word();
        cy.createProgram(programName);
    })

    it('Then the Program is added', function () {
        cy.contains(programName);
    })

    it('When the users clicks the Program Magnifying Glass icon', function () {
        cy.enterProgram(programName);
    })
    
    it('The user should be in Level 3', function () {
        ctLeftPanel.getProgramBtn().should('be.visible');
    })
    it('When the user creates a new course', function () {
        courseName = faker.random.word();
        cy.createCourse(courseName);
    })

    it('Then the Course is added', function () {
        cy.contains(courseName);
    })

    it('When the users clicks the Course Magnifying Glass icon', function () {
        cy.enterCourse(courseName);
    })
    
    it('Then the user should be in Level 4', function () {
        ctLeftPanel.getCourseBtn().should('be.visible');
    })  
    it('When the user creates 3 bundles', function () {
        //Bundle 1
        bundleName1 = faker.random.word();
        cy.createBundle(bundleName1);
        cy.log(bundleName1)
        //Bundle 2
        bundleName2 = faker.random.word();
        cy.createBundle(bundleName2);
        cy.log(bundleName2)
        //Bundle 3
        bundleName3 = faker.random.word();
        cy.createBundle(bundleName3);
        cy.log(bundleName3)
    })
    it('When the user creates 3 LOs per bundle', function () {
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