const { until, By } = require("selenium-webdriver");

async function ProfessionalView(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          "//div[@role='button' and contains(@aria-label, 'existen horas disponibles')]"
        )
      )
    );
  };

  this.selectFirstAvailableDay = async () => {
    await driver
      .findElement(
        By.xpath(
          "//div[@role='button' and contains(@aria-label, 'existen horas disponibles')]"
        )
      )
      .click();
  };

  this.waitForResultOfAvailableDay = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//button[contains(., 'Reservar')]"))
    );
  };

  this.selectFirstAvailableTime = async () => {
    await driver
      .findElement(By.xpath("//button[contains(., 'Reservar')]"))
      .click();
  };

  await callback(this);
}

module.exports = { ProfessionalView };
