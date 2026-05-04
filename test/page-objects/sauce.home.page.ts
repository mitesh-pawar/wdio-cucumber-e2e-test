import Page from "./page"

class Homepage extends Page {

    // selectors
    get usernameInputBox() { return $('#user-name') }
    get passwordInputBox() { return $('#password') }
    get loginBtn() { return $('#login-button') }

    // actions
    async enterUsername(username: string) {
        if (!username) throw new Error(`Invalid username`)
        await this.typeInto(this.usernameInputBox, username.trim())
        await browser.pause(1000)
    }

    async enterPassword(password: string) {
        if (!password) throw new Error(`Invalid password`)
        await this.typeInto(this.passwordInputBox, password)
        await browser.pause(1000)
    }

    async clickLogin() {
        await browser.pause(1000)
        await this.click(this.loginBtn)
    }

    async login(username: string, password: string) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLogin()
    }
}

export default new Homepage()