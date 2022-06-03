const { until, By } = require("selenium-webdriver");

async function SearchView(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(By.xpath("//input[contains(@name, 'buscar')]"))
    );
  };

  this.writeSearch = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@name, 'buscar')]"))
      .sendKeys("CAMILA FERNANDA");
  };

  this.waitForResult = async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath("//div[@role='button' and contains(., 'CAMILA FERNANDA')]")
      )
    );
  };

  this.selectFirstResult = async () => {
    await driver
      .findElement(
        By.xpath("//div[@role='button' and contains(., 'CAMILA FERNANDA')]")
      )
      .click();
  };

  await callback(this);
}

module.exports = { SearchView };
