const inquirer = require("inquirer");
const { schedule } = require("./src/schedule");

async function main() {
  const value = await inquirer.prompt([
    {
      type: "list",
      name: "documentType",
      message: "Qué tipo de documento desea probar?",
      choices: ["rut", "pasaporte"],
    },
    {
      type: "list",
      name: "document",
      message: (answers) => {
        return `Qué ${answers.documentType} desea probar?`;
      },
      choices: (answers) => {
        if (answers.documentType === "rut") {
          return ["11111111-1"];
        }
        return ["7XPRUEBA"];
      },
    },
    {
      type: "list",
      name: "professional",
      message: "Qué profesional desea probar?",
      choices: [
        "Camila Fernanda",
        "Vivianne Angelica",
        "Cesare Giorgio",
        "Luis Antonio",
      ],
    },
    {
      type: "input",
      name: "email",
      message: "Qué correo desea utilizar?",
      default() {
        return "prueba@prueba.com";
      },
    },
    {
      type: "input",
      name: "phone",
      message: "Qué telefono desea utilizar?",
      default() {
        return "999999999";
      },
    },
    {
      type: "input",
      name: "reason",
      message: "Qué razón desea agregar?",
      default() {
        return "Sin razón";
      },
    },
    {
      type: "list",
      name: "paymentMethod",
      message: "Qué medio de pago desea probar?",
      choices: ["nacional", "internacional", "esencial"],
    },
  ]);

  console.log("");
  const appointmentId = await schedule(value);
  console.log("\nLa reserva fue creada con el Id:", appointmentId);
}

main().catch((err) => console.error(err));
