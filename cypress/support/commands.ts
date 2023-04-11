// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { Storage } from "@ionic/storage";
const storage = new Storage();
storage.create();

Cypress.Commands.add("bypassTutorial", () => {
  cy.log("bypass tutorial");
  storage.set("ion_did_tutorial", true);
});

Cypress.Commands.add("enableTutorial", () => {
  cy.log("enable tutorial");
  cy.visit("/", {
    onBeforeLoad() {
      storage.set("ion_did_tutorial", false);
    },
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to bypass the tutorial screens in the app
       */
      bypassTutorial(): Chainable<JQuery<HTMLElement>>;
      /**
       * Custom command to avoid bypassing the tutorial screens in the app
       */
      enableTutorial(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
