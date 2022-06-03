const { Builder } = require("selenium-webdriver");
const { ServiceBuilder } = require("selenium-webdriver/chrome");
const { HomeView } = require("./view/home");
const { LoginView } = require("./view/login");
const { SearchView } = require("./view/search");
const { ProfessionalView } = require("./view/professional");
const { FormView } = require("./view/form");
const { OneclickView } = require("./view/oneclick");
const { TransbankView } = require("./view/transbank");
const { AppointmentView } = require("./view/appointment");

const URL_AGENDA = "http://agndweb-dev.s3-website-us-east-1.amazonaws.com/";

async function run() {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.get(URL_AGENDA);

  await HomeView(driver, async (action) => {
    await action.selectTelemedicine();
  });

  await LoginView(driver, async (action) => {
    await action.writeRut();
    await action.submit();
  });

  await SearchView(driver, async (action) => {
    await action.waitForLoad();
    await action.writeSearch();
    await action.waitForResult();
    await action.selectFirstResult();
  });

  await ProfessionalView(driver, async (action) => {
    await action.waitForLoad();
    await action.selectFirstAvailableDay();
    await action.waitForResultOfAvailableDay();
    await action.selectFirstAvailableTime();
  });

  await FormView(driver, async (action) => {
    await action.waitForLoad();
    await action.writeEmail();
    await action.writePhone();
    await action.writeReason();
    await action.selectNationalPayment();
    await action.acceptTerms();
    await action.submit();
  });

  await OneclickView(driver, async (action) => {
    await action.waitForLoad();
    await action.selectCreditCard();
    await action.writeCardNumber();
    await action.writeCardExpiration();
    await action.writeCardCvv();
    await action.confirmEmail();
    await action.submit();
  });

  await TransbankView(driver, async (action) => {
    await action.waitForLoad();
    await action.writeRut();
    await action.writePassword();
    await action.accept();
    await action.continue();
  });

  await AppointmentView(driver, async (action) => {
    await action.waitForLoad();
    await action.hideModal();
  });
}

run();
