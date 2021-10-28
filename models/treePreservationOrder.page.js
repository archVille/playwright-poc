 const Page = require('./page');

class TreePreservationOrderPage extends Page{
    /**
     * @param {import('playwright').Page} page 
     */
     constructor(page) {
      super(page, page);
    }  
    
    async fillPreservationOrderDetails(){

      await this.page.fill("input[type='date']", "10102022");    

      await this.page.click("input[placeholder*='Search by']");
      await this.page.fill("input[placeholder*='Search by']", 'a');
      await this.page.click("input[placeholder*='Search by']");
      await this.page.click("div[class*='active-item']");

      await this.page.selectOption('select[class*=form-control]', { value: '1342' });

    }

    async okToProceed(){
      await super.resume();
    }

  }

  module.exports = { TreePreservationOrderPage };