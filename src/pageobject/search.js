const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function SearchPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//input[contains(@name, 'buscar')]")),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.writeSearch = async ({ text }) => {
    await driver
      .findElement(By.xpath("//input[contains(@name, 'buscar')]"))
      .sendKeys(text);
  };

  this.waitForFirstProfessionalResult = async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          "//nav[contains(@aria-label, 'búsqueda por profesional')]//div[@role='button']"
        )
      ),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.selectFirstProfessionalResult = async () => {
    await driver
      .findElement(
        By.xpath(
          "//nav[contains(@aria-label, 'búsqueda por profesional')]//div[@role='button']"
        )
      )
      .click();
  };

  await callback(tracking("Search", this));
}

module.exports = { SearchPage };
