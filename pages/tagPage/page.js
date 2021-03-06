import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log'; 


var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

const SettingsIcon = element(by.css(SELECTORS.settingsIcon));
const AddTagButton = element(by.css(SELECTORS.addTagButton));
const TagMenuItem = element(by.css(SELECTORS.tagMenuItem));
const AddTagItem = element(by.css(SELECTORS.addTagItem));
const AddButton = element(by.css(SELECTORS.addButton));
const TagSearch = element(by.css(SELECTORS.tagSearch));
const TagCreationAlert = element(by.css(SELECTORS.tagCreationAlert));
const SearchResultElement = element.all(by.css(SELECTORS.SearchResultElement));


class tagPage extends BasePage {

    constructor() {
        super();
        this.url = USERDATA.tagUrl;
        this.pageLoaded = this.isVisible($(SELECTORS.tagSearch));

        this.settingsMenu = TagMenuItem;
        this.userTagName = USERDATA.tagName.name;
        
        this.get = async () => {
          await browser.get(USERDATA.tagUrl);
          browser.sleep(2000); // Buffer to make sure page load is complete
        };
        
        this.navigateToTagMenu = async () => {
          logger.info('Action - Navigating to Tag Menu');
            browser.wait(EC.elementToBeClickable(SettingsIcon, 5000));
            await SettingsIcon.click();
  
            browser.wait(EC.elementToBeClickable(TagMenuItem, 5000));
            await TagMenuItem.click();
            logger.info('Success - Nav to Tag menu');
          };

          this.createNewTag = async () => {
            logger.info('Action - Create new Tag');
            browser.wait(EC.elementToBeClickable(AddTagButton));
            await AddTagButton.click();
            await AddTagItem.click();
            await AddTagItem.sendKeys(this.userTagName);
            await AddButton.click();
            await this.isVisible(TagCreationAlert);
            logger.info('Success - Tag Created Successfully');
        };

        this.searchTagType = async () => {
          logger.info('Action - Search Tag Type');
          await browser.wait(EC.elementToBeClickable(TagSearch, 5000));
          await TagSearch.clear();
          await TagSearch.click();
          await TagSearch.sendKeys(this.userTagName);
          await this.inDom(SearchResultElement);
          logger.info('Action - Tag Type Searched');
          return await SearchResultElement.count();

        };
    }

}
export default new tagPage();