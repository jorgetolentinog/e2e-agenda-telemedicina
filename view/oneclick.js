const { until, By } = require("selenium-webdriver");

async function OneclickView(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//button[contains(., 'Crédito')]"))
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
      .findElement(By.xpath("//span[contains(., 'Es mi correo')]"))
      .click();
  };

  this.submit = async () => {
    await driver
      .findElement(By.xpath("//button[contains(., 'Inscribir')]"))
      .click();
  };

  await callback(this);
}

module.exports = { OneclickView };
