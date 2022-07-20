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
import CTLevelOne from './pageObjects/CTLevelOne';
import CTAddDivision from './pageObjects/CTAddDivision';
const ctLogin = new CTLogin()
const ctLevelOne = new CTLevelOne()
const ctAddDivision = new CTAddDivision()

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
        ctLevelOne.getEditInput().click({ force: true });
        ctLevelOne.getCreatedDiv().should('be.visible');
        ctLevelOne.getCreatedDiv().click({ force: true });
        ctAddDivision.getDivName().should('be.visible');
        ctAddDivision.getDivName().type(divisionName)
        ctAddDivision.getBannerOne().click({ force: true });
        ctAddDivision.getBannerTwo().click({ force: true });
        ctAddDivision.getBannerThree().click({ force: true });
        ctAddDivision.getAddBtn().click({ force: true });
    })