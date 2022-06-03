const { until, By } = require("selenium-webdriver");

async function LoginPage(driver, callback) {
  this.writeRut = async () => {
    await driver
      .findElement(By.xpath("//input[contains(@name, 'RUT')]"))
      .sendKeys("11111111-1");
  };

  this.submit = async () => {
    const submit = await driver.findElement(
      By.xpath("//button[contains(., 'Continuar')]")
    );
    await driver.wait(until.elementIsEnabled(submit));
    await submit.click();
  };

  await callback(this);
}

module.exports = { LoginPage };
