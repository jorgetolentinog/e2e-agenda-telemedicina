const { until, By } = require("selenium-webdriver");

async function AppointmentPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath("//span[contains(., '¡Tu reserva ha sido realizada!')]")
      )
    );
  };

  this.hideModal = async () => {
    await driver
      .findElement(By.xpath("//button[contains(., 'Continuar')]"))
      .click();
  };

  await callback(this);
}

module.exports = { AppointmentPage };
