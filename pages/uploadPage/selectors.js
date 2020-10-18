export default {

    addFilesButton : 'ttc-upload-selection-panel  button.btn:nth-child(1)',
    tagSearch : 'div > ttc-tag-management > ttc-search-input > input',
    fileDropArea : 'div[class="upload-selection-panel-body flex-auto-grow-shrink"]',
    inputType : 'body div > ttc-upload-selection-panel > input[type="file"]',
    uploadButton : 'button[type="submit"]',
    documentSplittingToggle : 'label.clr-control-label',
    fileSelectInput : 'input[type="file"]',
    documentType : 'select[name="document-type"]',
    userDocumentName : 'select[name="document-type"] option.ng-star-inserted',
    completedMessage : 'div[class="upload-list-table"] div[class="row ng-star-inserted"] span[class="ng-star-inserted"]',
    addTagButton : 'button[class*="add-tag"]',
    addTagField : 'input[placeholder*="Type to add a tag"]',
    selectTagItem : 'ttc-multi-select-dialog[filterplaceholder="Type to add a tag"] div li[class*="item"]',
    applyTagButton : 'div[class="multi-select-container"] ttc-multi-select-dialog[filterplaceholder*="Type"] button[class*="btn-primary"]',
    addFactButton : 'button[class*="add-fact"] " Fact "',
    searchFactType : 'input[placeholder="Search for a fact type"]',
    stringFactType : 'ul[class="fact-field-list"] div input[type="text"]'

};

/* 

    documentSplittingToggle 
    'label.clr-control-label',

    documentType 
    select[name="document-type"]
    
    userDocumentName
    option.ng-star-inserted
    Oil and Gas Lease

    Add Tag
    button[class*="add-tag"]

    Add Tag Field
    input[placeholder*="Type to add a tag"]

    List Item
    div li[class*="item"] span -> With text css

    Apply Button
    div[class="multi-select-container"] ttc-multi-select-dialog[filterplaceholder*="Type"] button[class*="btn-primary"]

    Add Fact -> Button with text
    button[class*="add-fact"] " Fact "

    Find a way to record all types of data 
    
    Search for a Fact Type : 
    input[placeholder="Search for a fact type"]

    Button with Text
    div[class*="ui-dropdown-items-wrapper"]  -> Text of the data type

    String
    ul[class="fact-field-list"] div input[type="text"]


    https://app.thoughttrace.dev/qa/documents


    Button with Text : Refresh

    a[title="Expand"] - Double headed arrow Hover ? Hidden ? Will click work ?

    a[class^="document-type] - get text

    div[class*="tag-chip"] - get text

    button[ - > With text : Document Type

    input[placeholder="Search document types"]

    li[title="Oil and Gas Lease"] - click

    clr-icon[shape="check"] - verify if it exists

    ttc-document-type-filter-dialog button[type="submit"]

    clr-dg-column[class^="document-search-uploaded-column"] clr-icon[shape="arrow"]

    a[title="Expand"] - Double headed arrow

    label[for="content-panel-choice-thoughts"] - Thoughts label  - sleep 3000

    input[placeholder="Search"] - search for the county / something common - make sure

    div[title="County"]

    div[class*="string-textarea has-value"]

    div[class*="ui-contextmenu"] ul span[class="ui-menuitem-text"] - Confirm as Fact - as a text

    input[placeholder="Search for a Fact"] just search for string fact

    div[title="4110588-AutoMF_NoLimit-5wc7Z > AutoMF_NoLimit_Field-KSQString"] - fact name

    button[type="submit"] span with text Confirm

    Refresh

    div[class="radio btn toggle-button-facts"] - fact button

    div[class="upload-list-table"] div[class="row ng-star-inserted"] span[class="ng-star-inserted"] - Completed message

*/