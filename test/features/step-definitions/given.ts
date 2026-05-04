import { Given } from "@wdio/cucumber-framework"
import sauceHomePage from "../../page-objects/sauce.home.page"

Given(/^As a standard user I login to inventory web app$/, async function (dataTable) {

    const data = dataTable.hashes()[0]
    const username = data.Username
    const password = process.env.TEST_STD_PASSWORD || "secret_sauce"

    await sauceHomePage.navigateTo("https://www.saucedemo.com/")
    await sauceHomePage.login(username, password)
})