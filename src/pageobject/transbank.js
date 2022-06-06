const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function TransbankPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//input[contains(@name, 'rut')]")),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.writeRut = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@name, 'rut')]"))
      .sendKeys("111111111");
  };

  this.writePassword = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@name, 'password')]"))
      .sendKeys("123");
  };

  this.accept = async () => {
    await driver
      .findElement(By.xpath("//input[@type='submit' and @value='Aceptar']"))
      .click();
  };

  this.continue = async () => {
    await driver
      .findElement(By.xpath("//input[@type='submit' and @value='Continuar']"))
      .click();
  };

  await callback(tracking("Transbank", this));
}

module.exports = { TransbankPage };
