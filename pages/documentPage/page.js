import { element } from 'protractor';
import TagPage from '../tagPage/page';
import FactPage from '../FactPage/page';
import USERDATA from '../../data/common'
import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import log4js from '../../utils/log'; 

browser.ignoreSynchronization = true;
var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

const ListItems = element(by.css(SELECTORS.listItems));
const DocumentMenuItem = element(by.css(SELECTORS.documentMenuItem));
const SettingsIcon = element(by.css(SELECTORS.settingsIcon));
const AddDocumentButton = element(by.buttonText('document type'));
const DocumentModal = element(by.xpath(SELECTORS.DocumentModal));
const DocumentName = element(by.css(SELECTORS.documentName));
const DocumentDescription = element(by.css(SELECTORS.documentDescription));
const SaveButton = element(by.css(SELECTORS.SaveButton));
const DocumentSearch = element(by.css(SELECTORS.documentSearch));
const SearchResultElement = element.all(by.css(SELECTORS.SearchResultElement));
const OGLThoughtExtraction = element.all(by.css(SELECTORS.oglthoughtExtraction));
const documentsPageIcon = element(by.cssContainingText(SELECTORS.documentsPageIcon, 'Documents'));
const refreshDocumentListButton = element(by.buttonText('Refresh'));
const expandDocumentIcon = element.all(by.css(SELECTORS.expandDocumentIcon)).first();
const documentType = element(by.css(SELECTORS.documentType));
const tagChip = element(by.css(SELECTORS.tagChip));
const addTagChip = element(by.css(SELECTORS.addTagChip));
const addTagButton = element(by.css(SELECTORS.addTagButton))
const removeTagChip = element(by.css(SELECTORS.removeTagChip));
const addTagSearch = element(by.css(SELECTORS.addTagSearch));
const factFieldTypeEqualsOperator = element.all(by.cssContainingText(SELECTORS.factFieldType,'Equals')).first();
const factFieldTextArea = element(by.css(SELECTORS.factFieldTextArea));
const contentSearch = element(by.css(SELECTORS.contentSearch));
const contentFactTag = element(by.css(SELECTORS.contentFactTag));
const factTag = element(by.css(SELECTORS.factTag));
const documentTypeButton = element(by.buttonText('Document Type'));
const FactTypeButton = element(by.buttonText('Facts'));
const searchResultBadge = element(by.css(SELECTORS.searchResultBadge));
const addTagIcon = element.all(by.css(SELECTORS.addTagIcon)).first();
const searchDocument = element(by.css(SELECTORS.searchDocType));
const searchFact = element(by.css(SELECTORS.searchFactType));
const oilAndGasType = element(by.css(SELECTORS.oilAndGasDocType));
const fistFactItem = element.all(by.css(SELECTORS.fistFactItem)).first();
const submitButton = element(by.css(SELECTORS.typeApplyButton));
const simpleSubmit = element(by.css(SELECTORS.simpleSubmit));
const uploadArrowIcon = element(by.css(SELECTORS.uploadArrowIcon));
const contentTagThoughts = element(by.css(SELECTORS.contentTagThoughts));
const documentTypePill = element(by.css(SELECTORS.documentTypePill));
const thoughtName = element(by.cssContainingText(SELECTORS.thoughtName,'County'));
const factThoughtCounty = element(by.cssContainingText(SELECTORS.factThought,FactPage.userFactName));
const countyStringText = element.all(by.css(SELECTORS.thoughtTextArea)).first();
const confirmAsFactOption = element.all(by.cssContainingText(SELECTORS.contextMenuArea,'Confirm as Fact')).first();
const searchForFact = element(by.css(SELECTORS.searchForFact));
const newFactType = element.all(by.css(SELECTORS.newFactType)).first();
const factSubmitButton = element(by.css(SELECTORS.factSubmitButton));
const waitingSpinner = element(by.css(SELECTORS.waitingSpinner));

class DocumentPage extends BasePage {
    constructor() {
        super();
        this.url = USERDATA.documentUrl;
        this.pageLoaded = this.isVisible($(SELECTORS.documentIcon));

        this.userDocumentName = USERDATA.docName.name;
        this.userDocumentDescription = USERDATA.docName.description;

        this.waitForListItems = async () => {
            return this.inDom(ListItems);
        };

        this.navigateToDocumentSearchPage = async () => {
          logger.info("Action - navigate To Document Menu");
          browser.wait(EC.elementToBeClickable(documentsPageIcon, 5000));
          await documentsPageIcon.click();

          browser.sleep(2000);
          logger.info("Success - Navigating to Document Menu");
        };

        // Common helper required 
        this.navigateToDocumentMenu = async () => { 
            logger.info("Action - navigate To Document Menu");
            browser.wait(EC.elementToBeClickable(SettingsIcon, 5000));
            await SettingsIcon.click();
  
            browser.wait(EC.elementToBeClickable(DocumentMenuItem, 5000));
            await DocumentMenuItem.click();
            browser.sleep(2000);
            logger.info("Success - Navigating to Document Menu");
          };

        this.loadDocumentModal = async () => {
            logger.info("Action - load Document Modal");
            browser.wait(EC.elementToBeClickable(AddDocumentButton));
            await AddDocumentButton.click();
            browser.wait(EC.visibilityOf(DocumentModal));
            logger.info("Success - load Document Modal");
            return await this.inDom(DocumentModal);

        };

        this.openMostRecentDocument = async (clickArrow = false) => {
            browser.wait(EC.elementToBeClickable(refreshDocumentListButton));
            await refreshDocumentListButton.click();
            if(clickArrow == true ) {
             await uploadArrowIcon.click();             
            }
            browser.sleep(3000);
            await browser.driver.executeScript("arguments[0].click();", expandDocumentIcon.getWebElement());
          };

        this.getDocumentType = async () => {
          browser.wait(EC.elementToBeClickable(documentType, 5000));
          this.isVisible($(documentType));
          return await documentType.getText();
        };

        this.getTag = async () => {
          browser.wait(EC.elementToBeClickable(tagChip, 5000));
          this.isVisible($(tagChip));
          return await tagChip.getText();
        };

        this.deleteTag = async () => {
          browser.wait(EC.elementToBeClickable(removeTagChip, 5000));
          removeTagChip.click();
          await this.isVisible($(addTagButton));
        };

        this.addTag = async (tagName) => {
          browser.wait(EC.elementToBeClickable(addTagChip, 5000));
          addTagChip.click();
          browser.wait(EC.elementToBeClickable(addTagSearch, 5000));
          await addTagSearch.click();
          await addTagSearch.sendKeys(tagName);
          browser.wait(EC.elementToBeClickable(addTagIcon, 5000));
          await addTagIcon.click();
        };

        this.getFactType = async () => {
          browser.wait(EC.elementToBeClickable(contentSearch, 5000));
          await contentFactTag.click();
          await contentSearch.click();
          await contentSearch.sendKeys(FactPage.userFactName);
          return await factTag.getText();
        };

        this.confirmThoughtAsFact = async (thought) => {
          browser.sleep(5000); // Waiting for page load
          browser.wait( EC.invisibilityOf(waitingSpinner), 5000 );
          browser.wait(EC.elementToBeClickable(contentTagThoughts, 5000));
          await contentTagThoughts.click();
          
          browser.wait(EC.elementToBeClickable(contentSearch, 5000));
          await contentSearch.click();
          await contentSearch.sendKeys(thought);
          
          browser.wait(EC.elementToBeClickable(thoughtName, 5000));
          await thoughtName.click();

          browser.wait(EC.elementToBeClickable(countyStringText, 5000));
          await countyStringText.click();

          const countyName = countyStringText.getText();
         
          browser.wait(EC.elementToBeClickable(confirmAsFactOption, 5000));
          await confirmAsFactOption.click();

          browser.wait(EC.elementToBeClickable(searchForFact, 5000));
          await searchForFact.click();
          await searchForFact.sendKeys(FactPage.userFactName);

          browser.wait(EC.elementToBeClickable(newFactType, 5000));
          await newFactType.click();
          
          browser.wait(EC.elementToBeClickable(factSubmitButton, 5000));
          await factSubmitButton.click();

          return countyName;
          };

          this.factThoughtValue = async () => {
            browser.wait(EC.elementToBeClickable(contentFactTag, 5000));
            await contentFactTag.click();
            browser.wait(EC.elementToBeClickable(contentSearch, 5000));
            await contentSearch.click();
            await contentSearch.clear();
            await contentSearch.sendKeys(FactPage.userFactName);
            browser.wait(EC.elementToBeClickable(factThoughtCounty, 5000));
            await factThoughtCounty.click();
            await this.isVisible(countyStringText);
            return countyStringText.getText();
          };

        this.createNewDocType = async (dataType) => {
            logger.info("Action - creating New Document Type");
            await browser.wait(EC.elementToBeClickable(DocumentName, 5000));
            await DocumentName.click();
            await DocumentName.sendKeys(this.userDocumentName);

            await browser.wait(EC.elementToBeClickable(DocumentDescription, 5000));
            await DocumentDescription.click();
            await DocumentDescription.sendKeys(this.userDocumentDescription);

            await this.inDom(ListItems);
            await OGLThoughtExtraction.click();
            await browser.wait(EC.elementToBeClickable(SaveButton, 5000));
            logger.info("Success - Creating New Document Type");
            SaveButton.click();
          };

          this.searchDocType = async () => {
            logger.info("Action - Creating new Search Doc Type")
            await browser.wait(EC.elementToBeClickable(DocumentSearch, 5000));
            await DocumentSearch.clear();
            await DocumentSearch.click();
            await DocumentSearch.sendKeys(this.userDocumentName);
            await this.inDom(SearchResultElement);
            logger.info("Success - Creating new Search Doc Type");
            return await SearchResultElement.count();
          };

          this.searchDocTypeDropDown = async (searchTerm) => {
            logger.info("Action - Creating new Doc Type")
            await browser.wait(EC.elementToBeClickable(documentTypeButton, 5000));
            await documentTypeButton.click();

            await searchDocument.clear();
            await searchDocument.click();
            await searchDocument.sendKeys(searchTerm);
            await browser.wait(EC.elementToBeClickable(oilAndGasType, 5000));
            await oilAndGasType.click();
            await this.inDom(submitButton);
            await submitButton.click();
            logger.info("Success - Create new Doc Type");
            return await documentTypePill.getText();
          };

          this.searchFactTypeDropDown = async (searchTerm) => {
            logger.info("Action - Creating new Fact Type")
            await browser.wait(EC.elementToBeClickable(FactTypeButton, 5000));
            await FactTypeButton.click();

            await searchFact.clear();
            await searchFact.click();
            await searchFact.sendKeys(searchTerm);

            await browser.wait(EC.elementToBeClickable(fistFactItem, 5000));
            await fistFactItem.click();
            await this.inDom(factFieldTypeEqualsOperator);
            await factFieldTypeEqualsOperator.click();

            await browser.wait(EC.elementToBeClickable(factFieldTextArea, 5000));
            const temp = FactPage.userFactDescription;
            await factFieldTextArea.sendKeys(temp);

            await this.inDom(simpleSubmit);
            await simpleSubmit.click();
            logger.info("Success - Create new Fact Type");
          };

          this.searchResultCount = async () => {
            logger.info("Action - Getting Pagination Result")
            await this.isVisible($(searchResultBadge));
            return await searchResultBadge.getText();
          };

    }
}   
export default new DocumentPage();