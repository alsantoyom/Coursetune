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
import CTAddDivision from './pageObjects/CTAddDivision';
import CTRightPanel from './pageObjects/CTRightPanel';
import CTCoursetune from './pageObjects/CTCoursetune';
import CTInstitution from './pageObjects/CTInstitution';
import CTAddProgram from './pageObjects/CTAddProgram';
import CTDivision from './pageObjects/CTDivision';

const ctLogin = new CTLogin()
const ctAddDivision = new CTAddDivision()
const ctRightPanel = new CTRightPanel()
const ctCoursetune = new CTCoursetune()
const ctInstitution = new CTInstitution()
const ctAddProgram = new CTAddProgram()
const ctDivision = new CTDivision

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

//Enters a New Division
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

//Enters a New Division
Cypress.Commands.add("enterProgram", (programName) =>
{
    cy.contains(programName).click()
    ctDivision.getMagProgramBtn().should('be.visible');
    ctDivision.getMagProgramBtn().click({ force: true });
})