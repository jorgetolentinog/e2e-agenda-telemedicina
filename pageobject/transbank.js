const { until, By } = require("selenium-webdriver");

async function TransbankPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//input[contains(@name, 'rut')]"))
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

  await callback(this);
}

module.exports = { TransbankPage };
