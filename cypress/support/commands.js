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
import CTAddClayer from './pageObjects/CTAddClayer';
import CTCourse from './pageObjects/CTCourse';
import CTAddLo from './pageObjects/CTAddLo';
import CTLeftPanel from './pageObjects/CTLeftPanel';
import CTUsers from './pageObjects/CTUsers';

const ctLogin = new CTLogin();
const ctCoursetune = new CTCoursetune();
const ctRightPanel = new CTRightPanel();
const ctLeftPanel = new CTLeftPanel();
const ctInstitution = new CTInstitution();
const ctDivision = new CTDivision();
const ctAddDivision = new CTAddDivision();
const ctProgram = new CTProgram();
const ctAddProgram = new CTAddProgram();
const ctAddCourse = new CTAddCourse();
const ctAddClayer = new CTAddClayer();
const ctAddBundle = new CTAddBundle();
const ctAddLo = new CTAddLo();
const ctCourse = new CTCourse();
const ctUsers = new CTUsers();

//Logs Into Coursetune
Cypress.Commands.add("login", (user, password, userName) =>
{
    ctLogin.getLoginUsrInput().type(user, { delay: 100 });
    ctLogin.getLoginPassInput().type(password, { delay: 100 });
    ctLogin.getLoginBtn().click({ force: true });
    ctLogin.getSuccessLogin().should('have.text', userName);
})

//Sign Out Coursetune
Cypress.Commands.add("logout", () =>
{
    ctCoursetune.getCtUsrProfileBtn().click({ force: true });
    ctCoursetune.getCtSignOutBtn().should('be.visible');
    ctCoursetune.getCtSignOutBtn().click({ force: true });
})

//Creates a New Division
Cypress.Commands.add("createDivision", (divisionName) =>
{
    ctLeftPanel.getLpInstBtn().should('exist');
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getCtAddBtn().should('be.visible');
    ctCoursetune.getCtAddBtn().click({ force: true });
    ctAddDivision.getDivNameInput().should('be.visible');
    ctAddDivision.getDivNameInput().type(divisionName, { delay: 100 })
    ctAddDivision.getDivBannerOneBtn().click({ force: true });
    ctAddDivision.getDivBannerTwoBtn().click({ force: true });
    ctAddDivision.getDivBannerThreeBtn().click({ force: true });
    ctAddDivision.getDivAddBtn().click({ force: true });
    cy.contains(divisionName);
})

//Enters a Division
Cypress.Commands.add("enterDivision", (divisionName, level) =>
{
    cy.contains(divisionName).click({ force: true });
    ctInstitution.getDivMagBtn().should('be.visible');
    ctInstitution.getDivMagBtn().click({ force: true });
    ctLeftPanel.getLpDivisionBtn().should('be.visible');
    cy.contains(`${level}s in ${divisionName}`)
})

//Creates a New Program
Cypress.Commands.add("createProgram", (programName) =>
{
    ctLeftPanel.getLpDivisionBtn().should('exist');
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getCtAddBtn().should('be.visible')
    .click({ force: true });
    ctAddProgram.getProgramNameInput().should('be.exist')
    .type(programName, { delay: 100 })
    ctAddProgram.getProgramSaveBtn().click({ force: true });
    cy.contains(programName);
})

//Edits a Program
Cypress.Commands.add("createProgram", (programName) =>
{
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getCtAddBtn().should('be.visible');
    ctCoursetune.getCtAddBtn().click({ force: true });
    ctAddProgram.getProgramNameInput().should('be.visible');
    ctAddProgram.getProgramNameInput().type(programName, { delay: 100 })
    ctAddProgram.getProgramSaveBtn().click({ force: true });
})

//Enters a Program
Cypress.Commands.add("enterProgram", (programName, level) =>
{
    cy.contains(programName).click({ force: true });
    ctDivision.getProgramMagBtn().should('be.visible');
    ctDivision.getProgramMagBtn().click({ force: true });
    ctLeftPanel.getLpProgramBtn().should('be.visible');
    cy.contains(`${level}s in ${programName}`)
})

//Creates a New Course
Cypress.Commands.add("createCourse", (courseName) =>
{
    ctLeftPanel.getLpProgramBtn().should('exist');
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getCtAddBtn().should('be.visible');
    ctCoursetune.getCtAddBtn().click({ force: true });
    ctAddCourse.getCourseNameInput().should('be.visible');
    ctAddCourse.getCourseNameInput().type(courseName)
    ctAddCourse.getCourseAddBtn().click({ force: true });
    ctAddCourse.getCourseWarnSaveBtn().should('be.visible');
    ctAddCourse.getCourseWarnSaveBtn().click({ force: true });
    cy.contains(courseName);
})

//Enters a Course
Cypress.Commands.add("enterCourse", (courseName) =>
{
    cy.contains(courseName);
    ctProgram.getCourseMagBtn().should('be.visible');
    ctProgram.getCourseMagBtn().click({ force: true });
    ctLeftPanel.getLpCourseBtn().should('be.visible');
})

//Creates a New Bundle
Cypress.Commands.add("createBundle", (bundleName) =>
{
    ctLeftPanel.getLpCourseBtn().should('exist');
    ctCoursetune.getCtAddBtn().should('be.visible');
    ctCoursetune.getCtAddBtn().click({ force: true });
    ctAddBundle.getBundleNameInput().should('be.visible');
    ctAddBundle.getBundleNameInput().type(bundleName, { delay: 100 })
    ctAddBundle.getBundleAddBtn().click({ force: true });
})
//Creates a New C-Layer
Cypress.Commands.add("createClayer", (clayerName) =>
{
    ctCoursetune.getCtAddBtn().should('be.visible');
    ctCoursetune.getCtAddBtn().click({ force: true });
    ctAddClayer.getClayerNameInput().should('be.visible');
    ctAddClayer.getClayerNameInput().type(clayerName, { delay: 100 })
    ctAddClayer.getClayerAddBtn().click({ force: true });
})
//Creates a New LO
Cypress.Commands.add("createLo", (bundleName, learningObjective) =>
{
    cy.contains(bundleName).click({ force: true });
    ctCourse.getCourseAddLoBtn().should('be.visible');
    ctCourse.getCourseAddLoBtn().click({ force: true });
    ctAddLo.getLoTxtArea().should('be.visible');
    ctAddLo.getLoTxtArea().type(learningObjective, { delay: 100 })
    ctAddLo.getLoAddBtn().click({ force: true });
})

//Deletes a Division 
Cypress.Commands.add("deleteDivision", (divisionName) =>
{
    ctLeftPanel.getLpInstBtn().click({ force: true });
    ctLeftPanel.getLpCourseBtn().should('not.exist');
    cy.wait(500)
    cy.contains(divisionName).focus();
    ctInstitution.getDivDelBtn().click({ force: true });
    ctInstitution.getDivDelCheckBtn().should('be.visible');
    ctInstitution.getDivDelCheckBtn().click({ force: true });
    ctInstitution.getDivDelDivisionBtn().click({ force: true });
    ctInstitution.getDivDelDivisionBtn().click({ force: true });
    ctInstitution.getDivWarnOkBtn().click({ force: true });
    ctInstitution.getDivWarnOkBtn().should('not.exist');
    cy.wait(500)
})

//Deletes a Program
Cypress.Commands.add("deleteProgram", (programName) =>
{
    ctLeftPanel.getLpDivisionBtn().click({ force: true });
    ctLeftPanel.getLpCourseBtn().should('not.exist');
    cy.wait(500)
    cy.contains(programName).focus();
    ctDivision.getProgramDelBtn().click({ force: true });
    ctDivision.getProgramDelCheckBtn().should('be.visible');
    ctDivision.getProgramDelCheckBtn().click({ force: true });
    ctDivision.getProgramDelProgramBtn().click({ force: true });
    ctDivision.getProgramDelProgramBtn().click({ force: true });
    ctDivision.getProgramWarnOkBtn().click({ force: true });
    ctDivision.getProgramWarnOkBtn().should('not.exist');
    cy.wait(500)
})