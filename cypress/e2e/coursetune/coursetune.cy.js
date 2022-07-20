/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import CTLogin from '../../support/pageObjects/CTLogin'
const ctLogin = new CTLogin()
const divisionName = faker.company.companyName();

describe('Coursetune POC', function (params) {
    beforeEach(function () {
        //Will get user data from data.json before each test
        cy.fixture('qaData.json').then(function (data) {
            this.data=data
        })
    })

    it('Given the user is on the Home Page', function () {
        cy.visit(Cypress.env('qaBaseUrl')+"?htmlrender=1")

    })

    it('When the user logs in', function () {
        cy.login(this.data.users.userEmail, this.data.users.password)

    })

    it('Then the user should be logged in', function () {
        ctLogin.getSuccessLogin().should('have.text', this.data.users.userName);
    })

    it('And the user creates a new division', function () {
        cy.createDivision(divisionName);
    })

    it('Then the division is created', function () {
        cy.contains(divisionName)
    })
})