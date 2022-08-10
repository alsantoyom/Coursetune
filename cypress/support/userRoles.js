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
import CTCoursetune from './pageObjects/CTCoursetune';
import CTUsers from './pageObjects/CTUsers';

const ctCoursetune = new CTCoursetune();
const ctUsers = new CTUsers();

//Assign Manager Role
    Cypress.Commands.add("assignManagerRole", (user, email, levelObject, role) =>
    {
        ctCoursetune.getCtMenuBtn().click({ force: true });
        ctCoursetune.getCtUsersBtn().should('be.visible')
        .click({ force: true });
        ctUsers.getUsrSearchInput().type(user, { delay: 100 });
        cy.contains(email);
        ctUsers.getUsrMenuBtn().click({ force: true });
        ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
        .click({ force: true });
        ctUsers.getUsrAssignRoleBtn().should('be.visible')
        .click({ force: true });
        ctUsers.getUsrSearchRoleInput().should('be.visible')
        .type(`${levelObject}{enter}`, { delay: 100 })
        ctUsers.getUsrDropdwnRoleBtn().should('be.visible')
        .type(role, { delay: 100 })
        ctUsers.getUsrManagerValueBtn().click({ force: true });
        ctUsers.getUsrAddRoleBtn().click({ force: true });
        ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
        ctUsers.getUsrSaveRoleBtn().click({ force: true })
        .should('not.exist');
        ctUsers.getUsrCloseBtn().click({ force: true })
    })

//Assign Editor Role
Cypress.Commands.add("assignEditorRole", (user, email, levelObject, role) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchRoleInput().should('be.visible')
    .type(`${levelObject}{enter}`, { delay: 100 })
    ctUsers.getUsrDropdwnRoleBtn().should('be.visible')
    .type(role, { delay: 100 })
    ctUsers.getUsrEditorValueBtn().click({ force: true });
    ctUsers.getUsrAddRoleBtn().click({ force: true });
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Assign Commenter Role
Cypress.Commands.add("assignCommenterRole", (user, email, levelObject, role) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchRoleInput().should('be.visible')
    .type(`${levelObject}{enter}`, { delay: 100 })
    ctUsers.getUsrDropdwnRoleBtn().should('be.visible')
    .type(role, { delay: 100 })
    ctUsers.getUsrCommenterValueBtn().click({ force: true });
    ctUsers.getUsrAddRoleBtn().click({ force: true });
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Assign Viewer Role
Cypress.Commands.add("assignViewerRole", (user, email, levelObject, role) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchRoleInput().should('be.visible')
    .type(`${levelObject}{enter}`, { delay: 100 })
    ctUsers.getUsrDropdwnRoleBtn().should('be.visible')
    .type(role, { delay: 100 })
    ctUsers.getUsrViewerValueBtn().click({ force: true });
    ctUsers.getUsrAddRoleBtn().click({ force: true });
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Assign None Role
Cypress.Commands.add("assignNoneRole", (user, email, levelObject, role) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchRoleInput().should('be.visible')
    .type(`${levelObject}{enter}`, { delay: 100 })
    ctUsers.getUsrDropdwnRoleBtn().should('be.visible')
    .type(role, { delay: 100 })
    ctUsers.getUsrNoneValueBtn().click({ force: true });
    ctUsers.getUsrAddRoleBtn().click({ force: true });
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Change Role to Manager
Cypress.Commands.add("changeManagerRole", (user, email, levelObject, role, newRole) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    cy.contains(levelObject);
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    .type(newRole, { delay: 100 })
    ctUsers.getUsrChangeManagerValueBtn().click({ force: true });
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Change Role to Editor
Cypress.Commands.add("changeEditorRole", (user, email, levelObject, role, newRole) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    cy.contains(levelObject);
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    .type(newRole, { delay: 100 })
    ctUsers.getUsrChangeEditorValueBtn().click({ force: true });
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Change Role to Commenter
Cypress.Commands.add("changeCommenterRole", (user, email, levelObject, role, newRole) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    cy.contains(levelObject);
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    .type(newRole, { delay: 100 })
    ctUsers.getUsrChangeCommenterValueBtn().click({ force: true });
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Change Role to Viewer
Cypress.Commands.add("changeViewerRole", (user, email, levelObject, role, newRole) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    cy.contains(levelObject);
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    .type(newRole, { delay: 100 })
    ctUsers.getUsrChangeNoneValueBtn().click({ force: true });
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})

//Change Role to None
Cypress.Commands.add("changeNoneRole", (user, email, levelObject, role, newRole) =>
{
    ctCoursetune.getCtMenuBtn().click({ force: true });
    ctCoursetune.getCtUsersBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrSearchInput().type(user, { delay: 100 });
    cy.contains(email);
    ctUsers.getUsrMenuBtn().click({ force: true });
    ctUsers.getUsrAssignViewRoleBtn().should('be.visible')
    .click({ force: true });
    ctUsers.getUsrAssignRoleBtn().should('be.visible')
    cy.contains(levelObject);
    ctUsers.getUsrAssignedRoleBtn().should('have.text', role)
    .type(newRole, { delay: 100 })
    ctUsers.getUsrChangeNoneValueBtn().click({ force: true });
    ctUsers.getUsrSaveRoleBtn().click({ force: true })
    .should('not.exist');
    ctUsers.getUsrCloseBtn().click({ force: true })
})
