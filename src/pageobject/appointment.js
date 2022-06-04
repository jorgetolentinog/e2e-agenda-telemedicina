const { until, By } = require("selenium-webdriver");
const { tracking } = require("../common/pageobject/tracking");
const { DRIVER_WAIT_TIMEOUT } = require("../../config");

async function AppointmentPage(driver, callback) {
  this.waitForLoad = async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath("//span[contains(., '¡Tu reserva ha sido realizada!')]")
      ),
      DRIVER_WAIT_TIMEOUT
    );
  };

  this.hideModal = async () => {
    await driver
      .findElement(By.xpath("//button[contains(., 'Continuar')]"))
      .click();
  };

  this.getAppointmentId = async () => {
    return await driver
      .findElement(By.xpath("//span[@class='indiceReserva']"))
      .getText();
  };

  return await callback(tracking("Appointment", this));
}

module.exports = { AppointmentPage };
