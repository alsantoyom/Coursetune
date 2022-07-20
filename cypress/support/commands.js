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

const ctLogin = new CTLogin()
const ctAddDivision = new CTAddDivision()
const ctRightPanel = new CTRightPanel()
const ctCoursetune = new CTCoursetune()

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
        ctAddDivision.getDivName().should('be.visible');
        ctAddDivision.getDivName().type(divisionName)
        ctAddDivision.getBannerOne().click({ force: true });
        ctAddDivision.getBannerTwo().click({ force: true });
        ctAddDivision.getBannerThree().click({ force: true });
        ctAddDivision.getAddBtn().click({ force: true });
    })