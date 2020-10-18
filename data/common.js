var randomWords = require('random-words');

// store user data in object for ease of use and readability
export default {

    testUser : {'username': 'code@testing.example', 'password': '4C&XP9KB@y^EAo'},
    baseUrl : 'https://app.thoughttrace.dev/qa/',
    documentUrl : 'https://app.thoughttrace.dev/qa/documents',
    factUrl : 'https://app.thoughttrace.dev/qa/admin/fact-types',
    tagUrl : 'https://app.thoughttrace.dev/qa/admin/tags',
    uploadUrl : 'https://app.thoughttrace.dev/qa/uploads',
    documentPath : '../../data/OGL_DEMO_(10).pdf',
    factType: {'name': `first_fact_${randomWords()}`, 'description': `${randomWords()}_Description`},
    docName: {'name': `fist_document_${randomWords()}`, 'description':`${randomWords()}_description`, 'thought' : 'Oil and Gas Lease'},
    tagName: {'name': `_tag_name_${randomWords()}`, 'description': `${randomWords()}_Description`},
};