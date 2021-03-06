import DocumentPage from '../pages/documentPage/page';
import UploadPage from '../pages/uploadPage/page';
import LoginPage from '../pages/loginPage/page';
import FactPage from '../pages/factPage/page';
import TagPage from '../pages/tagPage/page';
import USERDATA from '../data/common';

const documentPath = './OGL.pdf'

describe ('verify that uploading a document with fact types and verify the thoughts/facts/tags', () => {
    beforeAll(async () => {
        await LoginPage.get();
        await LoginPage.waitForLoginPage();
    });

    it('should display documents pages on successful login', async () => {
        await LoginPage.enterCredentials(USERDATA.testUser.username, USERDATA.testUser.password); 
        expect(DocumentPage.loaded()).toBe(true);
    });

    it('should display with list items in documents page', async () => {
        await DocumentPage.waitForListItems();
        expect(DocumentPage.loaded()).toBe(true);
    }); 

    it('should be displayed with fact types page and fact modal', async () => {
        await FactPage.navigateToFactMenu();
        expect(FactPage.loaded()).toBe(true);
    });

    it('should be able to add create and view a String fact types', async () => {
        await FactPage.loadFactModal();
        await FactPage.createNewFactType('String');
        expect(FactPage.searchFactType()).toBeGreaterThan(1);
    });

    it('should be able to create and view a new document type', async () => {
        await DocumentPage.navigateToDocumentMenu();
        await DocumentPage.loadDocumentModal(); 
        await DocumentPage.createNewDocType();
        expect(DocumentPage.searchDocType()).toBeGreaterThan(1);
    });

    it('should be able to create and view a new tag type', async () => {
        await TagPage.navigateToTagMenu();
        await TagPage.createNewTag();
        expect(TagPage.searchTagType()).toBeGreaterThan(1);
    });

    it('should be upload PDF document with custom fields', async () => {
        await UploadPage.get();
        await expect(UploadPage.addFiles(documentPath)).toBe('Completed');
    });

    it('should verify that a user can search for a document by facts', async () => {
        await DocumentPage.navigateToDocumentSearchPage();
        await DocumentPage.waitForListItems();

        await DocumentPage.searchFactTypeDropDown(FactPage.userFactName);
        const result = DocumentPage.searchResultCount();
        expect(result).toContain('1 of 1');
    });

});



