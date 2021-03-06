// base page having common functions and variables other pages inherit from

var EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

import SELECTORS from './selectors';

const setingsIcon = element(by.css(SELECTORS.settingsIcon));

export default class BasePage {
    constructor() {

        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000,
            'xxxl': 25000
        };

        protractor.ElementFinder.prototype.getWidth = async function() {
            return await this.getSize().then(size => {
                return size.width;
            });
        };
    }

    async loaded() {
        return browser.wait(async () => {
            return await this.pageLoaded();
        }, this.timeout.xxl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }


    async goto() {
        await browser.get(this.url, this.timeout.xl);
        return this.loaded();
    }

    isVisible(locator) {
        return EC.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return EC.invisibilityOf(locator);
    }

    inDom(locator) {
        return EC.presenceOf(locator);
    }

    notInDom(locator) {
        return EC.stalenessOf(locator);
    }

    isClickable(locator) {
        return EC.elementToBeClickable(locator);
    }

    hasText(locator, text) {
        return EC.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    }

    titleIs(title) {
        return EC.titleIs(title);
    }

}