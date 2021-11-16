// Boiler plate code
import { TestScheduler } from "@jest/core"
import { Builder, Capabilities, By } from "selenium-webdriver"
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//First we navigate to our website
beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

//And after our test is done, we close our browser
afterAll(async () => {
    await driver.quit()
})

test('I can search Google', async () => {
    let searchBar = await driver.findElement(By.xpath("//input")).sendKeys('Tenet\n')
    searchBar = await driver.findElement(By.xpath("//input")).sendKeys('Eternals\n')
    
    await driver.sleep(1000)

    await driver.findElement(By.xpath("//*[text()='Eternals']")).click()
    
    await driver.sleep(1000)
})