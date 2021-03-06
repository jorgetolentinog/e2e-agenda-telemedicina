const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function FormPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//input[contains(@name, 'email')]")),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.writeEmail = async () => {
    await driver
      .wait(until.elementLocated(By.xpath("//input[contains(@name, 'email')]")))
      .sendKeys("prueba@prueba.com");
  };

  this.writePhone = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@aria-label, 'telefono')]"))
      .sendKeys("999999999");
  };

  this.writeReason = async () => {
    await driver
      .findElement(By.xpath("//textarea[contains(@aria-labelledby, 'razon')]"))
      .sendKeys("Prueba hecha por bot");
  };

  this.selectNationalPayment = async () => {
    await driver
      .findElement(
        By.xpath("//input[contains(@name, 'payment') and @value='national']")
      )
      .click();
  };

  this.acceptTerms = async () => {
    await driver
      .findElement(By.xpath("//span[contains(., 'Acepto los términos')]"))
      .click();
  };

  this.submit = async () => {
    const submit = await driver.findElement(
      By.xpath("//button[contains(., 'Continuar')]")
    );
    await driver.wait(until.elementIsEnabled(submit), DRIVER_WAIT_TIMEOUT);
    await submit.click();
  };

  await callback(tracking("Form", this));
}

module.exports = { FormPage };
