import TagPage from '../pages/tagPage/page';
import DocumentPage from '../pages/documentPage/page';
import LoginPage from '../pages/loginPage/page';
import UploadPage from '../pages/uploadPage/page';
import FactPage from '../pages/factPage/page';
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

    // it('should display with list items in documents page', async () => {
    //     await DocumentPage.waitForListItems();
    //     expect(DocumentPage.loaded()).toBe(true);
    // }); 

    // it('should be displayed with fact types page and fact modal', async () => {
    //     await FactPage.navigateToFactMenu();
    //     expect(FactPage.loaded()).toBe(true);
    // });

    // it('should be able to add create and view a String fact types', async () => {
    //     await FactPage.loadFactModal();
    //     await FactPage.createNewFactType('String');
    //     expect(FactPage.searchFactType()).toBeGreaterThan(1);
    // });

    // it('should be able to add create and view a Number fact types', async () => {
    //     await FactPage.loadFactModal();
    //     await FactPage.createNewFactType('Number');
    //     expect(FactPage.searchFactType()).toBeGreaterThan(1);
    // });

    // it('should be able to add create and view a Date fact types', async () => {
    //     await FactPage.loadFactModal();
    //     await FactPage.createNewFactType('Date');
    //     expect(FactPage.searchFactType()).toBeGreaterThan(1);
    // });

    // it('should be able to add create and view a Boolean fact types', async () => {
    //     await FactPage.loadFactModal();
    //     await FactPage.createNewFactType('Boolean');
    //     expect(FactPage.searchFactType()).toBeGreaterThan(1);
    // });

    // it('should be able to add create and view a Select List fact types', async () => {
    //     await FactPage.loadFactModal();
    //     await FactPage.createNewFactType('Select List');
    //     expect(FactPage.searchFactType()).toBeGreaterThan(1);
    // });

    // it('should be able to create and view a new document type', async () => {
    //     await DocumentPage.navigateToDocumentMenu();
    //     await DocumentPage.loadDocumentModal(); 
    //     await DocumentPage.createNewDocType();
    //     expect(DocumentPage.searchDocType()).toBeGreaterThan(1);
    // });

    // it('should be able to create and view a new tag type', async () => {
    //     await TagPage.navigateToTagMenu();
    //     await TagPage.createNewTag();
    //     expect(TagPage.searchTagType()).toBeGreaterThan(1);
    // });

    it('should be displayed with PDF view of the document', async () => {
        await UploadPage.get();
        await UploadPage.addFiles(documentPath);
        
        await expect(TagPage.searchTagType()).toBeGreaterThan(1);
    });

    // it('should validate the document type and tag of the document', async () => {
    //     await DocumentPage.navigateToDocumentMenu();
    //     expect(TagPage.searchTagType()).toExist();
    // });

    // it('should validate the fact type and tag of the document', async () => {
    //     await DocumentPage.navigateToDocumentMenu();
    //     expect(TagPage.searchTagType()).toBeGreaterThan(1);
    // });


    /* 
    28. Click on "Documents" menu item on top bar
    29. Click on "Refresh" button to view the document uploaded above
    30. Click on the expand arrow icon beside the uploaded document to view the document
    31. Validate the document type and tag of the document
    32. Validate the fact types and their values by entering fact type names in Search input and clicking on them
    */

});



