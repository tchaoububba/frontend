import { browser, by, element, ElementFinder, protractor } from 'protractor';

export class ModuleCreatePage {
    private subject: ElementFinder;

    constructor() {
        this.subject = this.getSubjectInput();
    }

    navigateTo() {
        return browser.get(browser.baseUrl+"module-creator") as Promise<any>;
    }

    /**
     * Returns the current URL in the browser
     */
    getCurrentURL() {
        return browser.getCurrentUrl();
    }

    /**
     * Returns the subject field in the DOM
     */
    private getSubjectInput() {
        return element(by.css('[name="subject"]'));
    }

    /**
     * Sends the given input string to the subject field in the DOM
     * @param input: string
     */
    inputSubject(input: string) {
        this.subject.sendKeys(input);
    }

    /**
     * Returns the current value of the subject field in the DOM
     */
    getSubjectValue() {
        return this.subject.getAttribute('value');
    }

    private getSubmitButton() {
        return element(by.id("submitButton"));
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

    acceptAlert() {

        browser.wait(() => element(by.css('.toast-message')).isPresent(), 5000, "Alert is not getting present :(");
        
        if(element(by.css('.toast-message')).isPresent())
            element(by.css('.toast-message')).click();
      }

    refresh() {
        return browser.refresh();
    }
}
