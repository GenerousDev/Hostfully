import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

Given(/^I click the add computer button$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.clickAnElement(sl.createCompRecord)
	})
});

When(/^I fill in the computer name$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.insertAText(sl.computerName, 'AVM')
	})
});

When(/^I fill in the introduction year$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.insertAText(sl.yearIntroducedField, '1971-05-01')
	})
});

When(/^I fill in the discontinued year$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.insertAText(sl.yearDiscontinuedField, '2006-05-01')
	})
});

When(/^I pick the company name$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.selectValue(sl.companyField, 'RCA')
	})
});

When(/^I click the create computer button$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.clickAnElement(sl.createComputer)
	})
});

Then(/^I should see the success message$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.elementTextIsPresent(sl.alertMessage, 'Computer AVM has been created')
	})
});

Then(/^I should see and error message$/, () => {
	cy.fixture('selectors').then((sl)=>{
		cy.elementTextIsPresent(sl.errorMessage, 'Failed to refine type : Predicate isEmpty() did not fail.')
	})
});
