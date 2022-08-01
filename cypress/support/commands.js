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
import CTLeftPanel from './pageObjects/CTLeftPanel';

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
const ctAddBundle = new CTAddBundle();
const ctAddLo = new CTAddLo();
const ctCourse = new CTCourse();

//Logs Into Coursetune
Cypress.Commands.add("login", (user, password) =>
{
    ctLogin.getLoginUsrInput().type(user);
    ctLogin.getLoginPassInput().type(password);
    ctLogin.getLoginBtn().click({ force: true });
})

//Sign Out Coursetune
Cypress.Commands.add("logout", () =>
{
    ctCoursetune.getGeneralUsrProfileBtn().click({ force: true });
    ctCoursetune.getGeneralSignOutBtn().should('be.visible');
    ctCoursetune.getGeneralSignOutBtn().click({ force: true });
})

//Creates a New Division
Cypress.Commands.add("createDivision", (divisionName) =>
{
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getGeneralAddBtn().should('be.visible');
    ctCoursetune.getGeneralAddBtn().click({ force: true });
    ctAddDivision.getDivNameInput().should('be.visible');
    ctAddDivision.getDivNameInput().type(divisionName)
    ctAddDivision.getDivBannerOneBtn().click({ force: true });
    ctAddDivision.getDivBannerTwoBtn().click({ force: true });
    ctAddDivision.getDivBannerThreeBtn().click({ force: true });
    ctAddDivision.getDivAddBtn().click({ force: true });
})

//Enters a Division
Cypress.Commands.add("enterDivision", (divisionName) =>
{
    cy.contains(divisionName).click({ force: true });
    ctInstitution.getDivMagBtn().should('be.visible');
    ctInstitution.getDivMagBtn().click({ force: true });
    ctLeftPanel.getLpDivisionBtn().should('be.visible');
})

//Creates a New Program
Cypress.Commands.add("createProgram", (programName) =>
{
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getGeneralAddBtn().should('be.visible');
    ctCoursetune.getGeneralAddBtn().click({ force: true });
    ctAddProgram.getProgramNameInput().should('be.visible');
    ctAddProgram.getProgramNameInput().type(programName)
    ctAddProgram.getProgramSaveBtn().click({ force: true });
})

//Enters a Program
Cypress.Commands.add("enterProgram", (programName) =>
{
    cy.contains(programName).click({ force: true });
    ctDivision.getProgramMagBtn().should('be.visible');
    ctDivision.getProgramMagBtn().click({ force: true });
    ctLeftPanel.getLpProgramBtn().should('be.visible');
})

//Creates a New Course
Cypress.Commands.add("createCourse", (courseName) =>
{
    ctRightPanel.getRpEditInput().click({ force: true });
    ctCoursetune.getGeneralAddBtn().should('be.visible');
    ctCoursetune.getGeneralAddBtn().click({ force: true });
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
    ctProgram.getCourseMagBtn().should('be.visible');
    ctProgram.getCourseMagBtn().click({ force: true });
    ctLeftPanel.getLpCourseBtn().should('be.visible');
})

//Creates a New Bundle
Cypress.Commands.add("createBundle", (bundleName) =>
{
    ctCoursetune.getGeneralAddBtn().should('be.visible');
    ctCoursetune.getGeneralAddBtn().click({ force: true });
    ctAddBundle.getBundleNameInput().should('be.visible');
    ctAddBundle.getBundleNameInput().type(bundleName)
    ctAddBundle.getBundleAddBtn().click({ force: true });
})

//Creates a New LO
Cypress.Commands.add("createLo", (LearningObjective) =>
{
    ctCourse.getCourseAddLoBtn().should('be.visible');
    ctCourse.getCourseAddLoBtn().click({ force: true });
    ctAddLo.getLoTxtArea().should('be.visible');
    ctAddLo.getLoTxtArea().type(LearningObjective)
    ctAddLo.getLoAddBtn().click({ force: true });
})

//Deletes a Division 
Cypress.Commands.add("deleteDivision", () =>
{
    ctLeftPanel.getLpInstBtn().click({ force: true });
    ctLeftPanel.getLpCourseBtn().should('not.exist');
    cy.wait(500)
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
Cypress.Commands.add("deleteProgram", () =>
{
    ctLeftPanel.getLpDivisionBtn().click({ force: true });
    ctLeftPanel.getLpCourseBtn().should('not.exist');
    cy.wait(500)
    ctDivision.getProgramDelBtn().click({ force: true });
    ctDivision.getProgramDelCheckBtn().should('be.visible');
    ctDivision.getProgramDelCheckBtn().click({ force: true });
    ctDivision.getProgramDelProgramBtn().click({ force: true });
    ctDivision.getProgramDelProgramBtn().click({ force: true });
    ctDivision.getProgramWarnOkBtn().click({ force: true });
    ctDivision.getProgramWarnOkBtn().should('not.exist');
    cy.wait(500)
})




