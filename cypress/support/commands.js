// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import "@percy/cypress";
import CTLogin from './pageObjects/CTLogin'
import CTCoursetune from './pageObjects/CTCoursetune';
import CTRightPanel from './pageObjects/CTRightPanel';
import CTInstitution from './pageObjects/CTInstitution';
import CTDivision from './pageObjects/CTDivision';
import CTAddDivision from './pageObjects/CTAddDivision';
import CTProgram from './pageObjects/CTProgram';
import CTAddProgram from './pageObjects/CTAddProgram';
import CTAddCourse from './pageObjects/CTAddCourse';
import CTAddBundle from './pageObjects/CTAddBundle';
import CTCourse from './pageObjects/CTCourse';
import CTAddLo from './pageObjects/CTAddLo';

const ctLogin = new CTLogin();
const ctCoursetune = new CTCoursetune();
const ctRightPanel = new CTRightPanel();
const ctInstitution = new CTInstitution();
const ctDivision = new CTDivision();
const ctAddDivision = new CTAddDivision();
const ctProgram = new CTProgram();
const ctAddProgram = new CTAddProgram();
const ctAddCourse = new CTAddCourse();
const ctAddBundle = new CTAddBundle();
const ctAddLo = new CTAddLo();
const ctCourse = new CTCourse();

//Logs Into Coursetune
Cypress.Commands.add("login", (user, password) =>
{
    ctLogin.getUsrInput().type(user);
    ctLogin.getPassInput().type(password);
    ctLogin.getLoginBtn().click({ force: true });
})

//Creates a New Division
Cypress.Commands.add("createDivision", (divisionName) =>
{
    ctRightPanel.getEditInput().click({ force: true });
    ctCoursetune.getAddBtn().should('be.visible');
    ctCoursetune.getAddBtn().click({ force: true });
    ctAddDivision.getDivNameInput().should('be.visible');
    ctAddDivision.getDivNameInput().type(divisionName)
    ctAddDivision.getBannerOneBtn().click({ force: true });
    ctAddDivision.getBannerTwoBtn().click({ force: true });
    ctAddDivision.getBannerThreeBtn().click({ force: true });
    ctAddDivision.getAddBtn().click({ force: true });
})

//Enters a Division
Cypress.Commands.add("enterDivision", (divisionName) =>
{
    cy.contains(divisionName).click()
    ctInstitution.getMagDivBtn().should('be.visible');
    ctInstitution.getMagDivBtn().click({ force: true });
})

//Creates a New Program
Cypress.Commands.add("createProgram", (programName) =>
{
    ctRightPanel.getEditInput().click({ force: true });
    ctCoursetune.getAddBtn().should('be.visible');
    ctCoursetune.getAddBtn().click({ force: true });
    ctAddProgram.getProgramNameInput().should('be.visible');
    ctAddProgram.getProgramNameInput().type(programName)
    ctAddProgram.getProgramSaveBtn().click({ force: true });
})

//Enters a Program
Cypress.Commands.add("enterProgram", (programName) =>
{
    cy.contains(programName).click()
    ctDivision.getMagProgramBtn().should('be.visible');
    ctDivision.getMagProgramBtn().click({ force: true });
})

//Creates a New Course
Cypress.Commands.add("createCourse", (courseName) =>
{
    ctRightPanel.getEditInput().click({ force: true });
    ctCoursetune.getAddBtn().should('be.visible');
    ctCoursetune.getAddBtn().click({ force: true });
    ctAddCourse.getCourseNameInput().should('be.visible');
    ctAddCourse.getCourseNameInput().type(courseName)
    ctAddCourse.getCourseAddBtn().click({ force: true });
    ctAddCourse.getCourseWarnSaveBtn().should('be.visible');
    ctAddCourse.getCourseWarnSaveBtn().click({ force: true });
})

//Enters a Course
Cypress.Commands.add("enterCourse", (courseName) =>
{
    cy.contains(courseName);
    ctProgram.getMagCourseBtn().should('be.visible');
    ctProgram.getMagCourseBtn().click({ force: true });
})

//Creates a New Bundle
Cypress.Commands.add("createBundle", (bundleName) =>
{
    ctCoursetune.getAddBtn().should('be.visible');
    ctCoursetune.getAddBtn().click({ force: true });
    ctAddBundle.getBundleNameInput().should('be.visible');
    ctAddBundle.getBundleNameInput().type(bundleName)
    ctAddBundle.getBundleAddBtn().click({ force: true });
})

//Creates a New LO
Cypress.Commands.add("createLo", (LearningObjective) =>
{
    ctCourse.getAddLoCourseBtn().should('be.visible');
    ctCourse.getAddLoCourseBtn().click({ force: true });
    ctAddLo.getLoTxtArea().should('be.visible');
    ctAddLo.getLoTxtArea().type(LearningObjective)
    ctAddLo.getLoAddBtn().click({ force: true });
})