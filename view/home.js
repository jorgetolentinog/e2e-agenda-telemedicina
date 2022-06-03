const { until, By } = require("selenium-webdriver");

async function HomeView(driver, callback) {
  this.selectTelemedicine = async () => {
    await driver
      .findElement(By.xpath("//a[contains(.,'Teleconsulta')]"))
      .click();
  };

  await callback(this);
}

module.exports = { HomeView };
