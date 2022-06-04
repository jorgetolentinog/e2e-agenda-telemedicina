const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");

async function HomePage(driver, callback) {
  this.selectTelemedicine = async () => {
    await driver
      .findElement(By.xpath("//a[contains(.,'Teleconsulta')]"))
      .click();
  };

  await callback(tracking("Home", this));
}

module.exports = { HomePage };
