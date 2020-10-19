import DocumentPage from '../pages/documentPage/page';
import LoginPage from '../pages/loginPage/page';
import FactPage from '../pages/factPage/page';
import USERDATA from '../data/common';

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

    it('should validate the type and tag of the document', async () => {
        await DocumentPage.navigateToDocumentSearchPage();
        await DocumentPage.waitForListItems();
        await DocumentPage.searchDocTypeDropDown();

        await DocumentPage.openMostRecentDocument(true);
        const county = await DocumentPage.confirmThoughtAsFact('County');
        expect(DocumentPage.factThoughtValue()).toEqual(county);

    });



});



