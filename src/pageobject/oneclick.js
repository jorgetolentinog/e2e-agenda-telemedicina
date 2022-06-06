const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function OneclickPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//button[contains(., 'Crédito')]")),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.selectCreditCard = async () => {
    await driver
      .findElement(By.xpath("//button[contains(., 'Crédito')]"))
      .click();
  };

  this.writeCardNumber = async () => {
    await driver
      .findElement(
        By.xpath("//input[contains(@aria-describedby, 'card-number')]")
      )
      .sendKeys("4051 8856 0044 6623");
  };

  this.writeCardExpiration = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@aria-describedby, 'card-exp')]"))
      .sendKeys("0125");
  };

  this.writeCardCvv = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@aria-describedby, 'card-cvv')]"))
      .sendKeys("123");
  };

  this.confirmEmail = async () => {
    await driver
      .findElement(
        By.xpath("//*[contains(text(), 'Es mi correo')]//parent::label")
      )
      .click();
  };

  this.submit = async () => {
    const submit = await driver.findElement(
      By.xpath("//button[contains(., 'Inscribir')]")
    );
    await driver.wait(until.elementIsEnabled(submit), DRIVER_WAIT_TIMEOUT);
    await submit.click();
  };

  await callback(tracking("Oneclick", this));
}

module.exports = { OneclickPage };
