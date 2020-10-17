import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log';
import path from 'path';

const AddFilesButton = element(by.css(SELECTORS.addFilesButton));
const AddTagItem = element(by.css(SELECTORS.AddTagItem));
const UploadButton = element(by.css(SELECTORS.uploadButton))
const InputType = element(by.css(SELECTORS.inputType));
const fileSelectInput = browser.$(SELECTORS.fileSelectInput);


var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

class uploadPage extends BasePage {

    constructor() {
        super();
        this.url = USERDATA.uploadUrl;

        this.get = async () => {
          await browser.get(USERDATA.uploadUrl);
          browser.sleep(3000); 
        };

        this.addFiles = async (documentPath) => {
            browser.sleep(3000);
            browser.driver.executeScript("arguments[0].setAttribute('hidden','');", InputType.getWebElement());
            console.log('Action - uploading file');
            const absoluteFilePath = path.resolve(documentPath);
            await fileSelectInput.sendKeys(absoluteFilePath);
            console.log('Success - uploading file');
            return this;
        };

    }
      
}
export default new uploadPage();