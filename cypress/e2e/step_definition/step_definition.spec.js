import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let data

before(() => {
	cy.fixture('example').then(fixtureData => {
		data = fixtureData;
	})
})


Given(/^User is on LuminSkin homepage$/, () => {
	cy.visit('/');
});

When(/^user clicks on the country currency selector$/, () => {
	cy.clickElement(data.countryCurrecyChangeButton);
});


When(/^user clicks on the country currency and selects US from dropdown$/, (args1) => {
	cy.get("select[name=\"country_code\"]").select("US", {force: true});
});


When(/^clicks on the submit button$/, () => {
	cy.clickElement(data.shopNowbutton);
});

When(/^User clicks the search bar link$/, () => {
	cy.clickElement(data.searchIcon);
});

When(/^types in "([^"]*)" in the "([^"]*)" text area$/, (string) => {
    cy.insertAnyText(data.searchTextArea, string);
	cy.wait(2000);
	
});


Then(/^clicks add to cart button$/, () => {
	cy.get(data.addToCartButton).contains('Add To Cart').should('be.visible')
  .and('not.be.disabled').click({ force: true });

//   cy.verifyAnyElement('.drawer-cart-item__name')
});


When(/^clicks "([^"]*)" from the autocomplete suggestions$/, (Suggestion) => {
	cy.get(data.searchProductListSelect).contains(Suggestion).click()
    cy.verifyAnyElement('.product__descriptor');
    cy.verifyAnyElement('.metafield-rich_text_field')
});
