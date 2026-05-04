export default class Page {

    async navigateTo(path: string) {
        await browser.url(path)
        await browser.maximizeWindow() // ✅ added
    }

    async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable({ timeout: 5000 })
        await ele.click()
    }

    async typeInto(ele: WebdriverIO.Element, text: string) {
        await ele.waitForDisplayed({ timeout: 5000 })
        await ele.setValue(text)
    }
}