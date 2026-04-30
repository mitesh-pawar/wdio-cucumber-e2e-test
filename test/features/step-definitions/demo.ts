import { Given, When, Then } from "@wdio/cucumber-framework"

Given(/^the user launches the CURA web app$/, async function () {
    await browser.url("https://katalon-demo-cura.herokuapp.com/")
})

When(/^the user clicks on Make Appointment button$/, async function () {
    await $("=Make Appointment").click()
})

Then(/^the login page should be displayed$/, async function () {
    await expect(browser).toHaveUrl(/.*#login/)
})

Then(/^the title should be CURA Healthcare Service$/, async function () {
    await expect(browser).toHaveTitle("CURA Healthcare Service")
})

Then(/^Make Appointment button should be visible$/, async function () {
    await $("=Make Appointment").isDisplayed()
})

Then(/^the URL should contain login$/, async function () {
    await expect(browser).toHaveUrl("login")
})

Then(/^username field should be visible$/, async function () {
    await $("#txt-username").isDisplayed()
})

Then(/^password field should be visible$/, async function () {
    await $("#txt-password").isDisplayed()
})

Then(/^login button should be visible$/, async function () {
    await $("#btn-login").isDisplayed()
})

Then(/^login page heading should be displayed$/, async function () {
    await $("h2").isDisplayed()
})