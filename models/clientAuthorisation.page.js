 const Page = require('./page');

class ClientAuthorisationPage extends Page{
    /**
     * @param {import('playwright').Page} page 
     */
     constructor(page) {
      super(page, page);
    }     

    
  }

  module.exports = { ClientAuthorisationPage };