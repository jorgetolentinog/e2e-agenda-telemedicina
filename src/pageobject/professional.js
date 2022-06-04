const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function ProfessionalPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          "//div[@role='button' and contains(@aria-label, 'existen horas disponibles')]"
        )
      ),
      DRIVER_WAIT_TIMEOUT
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
      until.elementLocated(By.xpath("//button[contains(., 'Reservar')]")),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.selectFirstAvailableTime = async () => {
    await driver
      .findElement(By.xpath("//button[contains(., 'Reservar')]"))
      .click();
  };

  await callback(tracking("Professional", this));
}

module.exports = { ProfessionalPage };
