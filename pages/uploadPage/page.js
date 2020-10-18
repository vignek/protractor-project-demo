import DocumentPage from '../documentPage/page';
import TagPage from '../tagPage/page';
import FactPage from '../factPage/page';
import USERDATA from '../../data/common'
import BasePage from '../basePage/page';
import log4js from '../../utils/log';
import SELECTORS from './selectors';
import path from 'path';

const AddFilesButton = element(by.css(SELECTORS.addFilesButton));
const AddTagItem = element(by.css(SELECTORS.AddTagItem));
const UploadButton = element(by.css(SELECTORS.uploadButton));
const documentSplittingToggle = element(by.css(SELECTORS.documentSplittingToggle));
const InputType = element(by.css(SELECTORS.inputType));
const FileSelectInput = browser.$(SELECTORS.fileSelectInput);
const DocumentType = element(by.css(SELECTORS.documentType));
const userDocumentName = element(by.cssContainingText(SELECTORS.userDocumentName,DocumentPage.userDocumentName));
const completedMessage = element(by.css(SELECTORS.completedMessage));
const addTagButton = element(by.css(SELECTORS.addTagButton)); 
const addTagField = element(by.css(SELECTORS.addTagField));
const selectTagItem = element(by.css(SELECTORS.selectTagItem));
const applyTagButton = element(by.css(SELECTORS.applyTagButton));
const addFactButton = element(by.buttonText('Fact')); 
const searchFactType = element(by.css(SELECTORS.searchFactType));
const selectFactType = element(by.buttonText(FactPage.userFactName)); 
const stringFactType = element(by.css(SELECTORS.stringFactType));

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
            browser.sleep(5000);
            browser.driver.executeScript("arguments[0].setAttribute('hidden','');", InputType.getWebElement());
            logger.info('Action - uploading file');
            
            const absoluteFilePath = path.resolve(documentPath);
            await FileSelectInput.sendKeys(absoluteFilePath);

            const uploadStatus = this._addFileOptions();
            logger.info('Success - uploading file');
            return uploadStatus;
        };

        this._addFileOptions = async () => {
            logger.info('Action - Adding Document Information');
            browser.wait(EC.elementToBeClickable(documentSplittingToggle));
            await documentSplittingToggle.click();

            await this.inDom(DocumentType);
            await userDocumentName.click();
           
            browser.wait(EC.elementToBeClickable(addTagButton));
            await addTagButton.click();

            browser.wait(EC.elementToBeClickable(addTagField));
            await addTagField.click();
            await addTagField.sendKeys(TagPage.userTagName);
            await selectTagItem.click();
            await applyTagButton.click();
            browser.sleep(2000);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();

            browser.wait(EC.elementToBeClickable(addFactButton));
            await addFactButton.click();            
            await searchFactType.click();
            await searchFactType.sendKeys(FactPage.userFactName);
            await selectFactType.click();
            await stringFactType.click();
            await stringFactType.sendKeys(FactPage.userFactDescription);

            await UploadButton.click();
            browser.sleep(3000);
            logger.info('Success - Uploaded file operation completed Successfully');
            return completedMessage.getText();
        };

    }
      
}
export default new uploadPage();