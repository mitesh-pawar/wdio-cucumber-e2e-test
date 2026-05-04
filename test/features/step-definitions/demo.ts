//     import { Given, When, Then } from "@wdio/cucumber-framework"
//     import * as chai from "chai"
//     /* CURA */
//     // Given(/^the user launches the CURA web app$/, async function () {
//     //     await browser.url("https://katalon-demo-cura.herokuapp.com/")
//     //     await expect(browser).toHaveTitle("CURA Healthcare Service")
//     // })

//     // When(/^the user clicks on Make Appointment button$/, async function () {
//     //     await $("=Make Appointment").click()
//     // })

//     // Then(/^the login page should be displayed$/, async function () {
//     //     await expect(browser).toHaveUrl(/.*#login/)
//     // })

//     /* Web interaction */
//     Given(/^Google Page is opened$/, async function () {
//         await browser.url("https://www.google.com")   // ✅ FIXED
//         await browser.pause(1000)
//     })

//     When(/^Search with (.*)$/, async function (searchItem) {

//         console.log(`Running Test:, ${searchItem}`)
//         let ele = await $(`[name=q]`)
//         await ele.setValue(searchItem)
//         await browser.keys("Enter")

//         // let ele = await $('//select/option[@selected]')
//         // await expect(ele).toHaveText("Please select an option")

//         // let ele = await $(`//form[@id="checkboxes"]/input[1]`)
//         // await ele.click()

//         // let ele = await $(`input[id=email]`)
//         // await ele.setValue("mitesh@gmail.com")
//         // await ele.setValue("mitesh@gmail")


//         // let ele = await $(`//form[@id="checkboxes"]/input[1]`)
//         // if(!await ele.isSelected()){
//         //     await ele.click()
//         // }
// //         let eleArr = await $$(`//form[@id="checkboxes"]/input`)
// // for (let i = 0; i < eleArr.length; i++) {
// //     let ele = eleArr[i]
// //     if(!await ele.isSelected()){
// //         ele.click()
// //     }
// // }
//         // await browser.debug() 
//         // await $(`button=Click for JS Prompt`).click()
//         // if (await browser.isAlertOpen()){
//         //     let alertText = await browser.getAlertText()
//         //     console.log(`${alertText}`);
//         //     await browser.sendAlertText("hello mitesh")
//         //     await browser.acceptAlert()
//         //     await browser.pause(3000)
//         // }


//         // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
//         // await $(`#file-submit`).click()
//     })

//     Then(/^Click on the first search result$/,async function(){
//         let ele = await $(`<h3>`)
//         ele.click()
//     })

//     Then(/^URL should match (.*)$/,async function(expectedURL){
//         let url = await browser.getUrl()
//         chai.expect(url).includes(expectedURL)
//     })


//     // Given(/^User Opens internet homepage$/,async function(){
//     //     await browser.url("https://the-internet.herokuapp.com")
        
//     // })

//     // When(/^User clicks on the File Download$/,async function(){
//     //     await $("=File Download").click()
//     // })

//     // Then(/^User navigate to the File Download$/,async function(){
//     //     await expect(browser).toHaveUrl(/.*download/)
//     // })