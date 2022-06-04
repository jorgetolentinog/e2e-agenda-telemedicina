const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function LoginPage(driver, callback) {
  this.writeRut = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@name, 'RUT')]"))
      .sendKeys("11111111-1");
  };

  this.submit = async () => {
    const submit = await driver.findElement(
      By.xpath("//button[contains(., 'Continuar')]")
    );
    await driver.wait(until.elementIsEnabled(submit), DRIVER_WAIT_TIMEOUT);
    await submit.click();
  };

  await callback(tracking("Login", this));
}

module.exports = { LoginPage };
