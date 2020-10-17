import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log'; 

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

        // Trying to add files by passing the location to input[type='file'] in dom
        this.addFiles = async () => {
            logger.info('Action - Adding new files');

            const documentPath = './OGL.pdf'
            const absolutePath = path.resolve(documentPath);

            // const fileElem = element(by.css('input[type="file"]'));
            const fileElem = element(by.xpath('//ttc-upload-selection-panel[1]/input[1]'));

            browser.driver.executeAsyncScript(
                "arguments[0].style.visibility = 'visible';arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1",
                fileElem.getWebElement()
              );
            
            console.log('Before Async Function')
            // browser.executeAsyncScript(function(callback) {
            //     console.log('Inside Async Function -----')
            //     const element = document.querySelector('input[type="file"]');
            //     element.style.visibility = 'visible';
            //     callback();
            // });
            console.log('After Async ----')

            // const fileElem = element(by.css('input[type="file"]'));

            fileElem.sendKeys(absolutePath);
            UploadButton.click();
            logger.info('Success  - Added new Files');
        };

    }
      
}
export default new uploadPage();