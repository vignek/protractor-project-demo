import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log'; 
import { $ } from 'protractor';

var path = require('path');

const AddFilesButton = element(by.css(SELECTORS.addFilesButton));
const AddTagItem = element(by.css(SELECTORS.AddTagItem));
const UploadButton = element(by.css(SELECTORS.UploadButton))
const InputType = element(by.css(SELECTORS.inputType));

var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

class uploadPage extends BasePage {

    constructor() {
        super();
        this.url = USERDATA.tagUrl;

        this.get = async () => {
          await browser.get(USERDATA.uploadUrl);
          browser.sleep(3000); 
        };

        this.addFiles = async () => {
            logger.info('Action - Adding new files');
            console.log('Inside Add File');

            browser.driver.executeScript(function(InputType) {
                InputType.setAttribute('hidden', '');
            });

            absolutePath = path.resolve(__dirname, USERDATA.documentPath);
            const fileElem = element(by.css('input[type="file"]'));
            fileElem.sendKeys(absolutePath);
            UploadButton.click();
            logger.info('Success  - Added new Files');
        };

    }
      
}
export default new uploadPage();