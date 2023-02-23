import LoginPage from '../../login.page.js'
import SecurePage from '../../secure.page.js'

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open()
    });

    it('should login with valid credentials 1', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('should login with valid credentials 2', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})