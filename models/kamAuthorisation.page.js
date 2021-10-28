 const Page = require('./page');

class KamAuthorisationPage extends Page{
    /**
     * @param {import('playwright').Page} page 
     */
     constructor(page) {
      super(page, page);
    }      

     async acceptPage(){
      await super.accept();
     }  

     async sentToClient(){
      await super.send();
     }  
         
  }

  module.exports = { KamAuthorisationPage };