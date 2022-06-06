const { Builder } = require("selenium-webdriver");
const { ServiceBuilder } = require("selenium-webdriver/chrome");
const { HomePage } = require("./pageobject/home");
const { LoginPage } = require("./pageobject/login");
const { SearchPage } = require("./pageobject/search");
const { ProfessionalPage } = require("./pageobject/professional");
const { FormPage } = require("./pageobject/form");
const { OneclickPage } = require("./pageobject/oneclick");
const { TransbankPage } = require("./pageobject/transbank");
const { AppointmentPage } = require("./pageobject/appointment");

const URL_AGENDA = "http://agndweb-dev.s3-website-us-east-1.amazonaws.com/";

async function schedule(value) {
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeService(new ServiceBuilder(require("chromedriver").path))
    .build();

  await driver.get(URL_AGENDA);

  await HomePage(driver, async (action) => {
    await action.selectTelemedicine();
  });

  await LoginPage(driver, async (action) => {
    await action.writeRut();
    await action.submit();
  });

  await SearchPage(driver, async (action) => {
    await action.waitForLoad();
    await action.writeSearch({ text: value.professional });
    await action.waitForFirstProfessionalResult();
    await action.selectFirstProfessionalResult();
  });

  await ProfessionalPage(driver, async (action) => {
    await action.waitForLoad();
    await action.selectFirstAvailableDay();
    await action.waitForResultOfAvailableDay();
    await action.selectFirstAvailableTime();
  });

  await FormPage(driver, async (action) => {
    await action.waitForLoad();
    await action.writeEmail();
    await action.writePhone();
    await action.writeReason();
    await action.selectNationalPayment();
    await action.acceptTerms();
    await action.submit();
  });

  await OneclickPage(driver, async (action) => {
    await action.waitForLoad();
    await action.selectCreditCard();
    await action.writeCardNumber();
    await action.writeCardExpiration();
    await action.writeCardCvv();
    await action.confirmEmail();
    await action.submit();
  });

  await TransbankPage(driver, async (action) => {
    await action.waitForLoad();
    await action.writeRut();
    await action.writePassword();
    await action.accept();
    await action.continue();
  });

  const reservaId = await AppointmentPage(driver, async (action) => {
    await action.waitForLoad();
    await action.hideModal();
    return await action.getAppointmentId();
  });

  return reservaId;
}

module.exports = { schedule };
