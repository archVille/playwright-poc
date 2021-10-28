 const Page = require('./page');

class CmResourceAllocationPage extends Page{
    /**
     * @param {import('playwright').Page} page 
     */
     constructor(page) {
      super(page, page);
    }

    async navigate() {
      await this.page.goto('xxxxxx');
    }    

     async fillBasicCmResourceAllocationDetails(){     
         
    await this.page.click("#hours");
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.page.fill("#hours", "8");
    await this.page.click("#equipment");
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.page.fill("#equipment", "2");

    // await super.fillInInputValueById("2", "equipment");
    // await super.fillInInputValueById("4", "waster");
    // await super.fillInInputValueById("3", "labour");
    // await super.fillInInputValueById("10", "material");


     //field team
     await this.page.click("input[placeholder='Search by name...']");
     await this.page.fill("input[placeholder='Search by name...']", 'A');
     await this.page.click("input[placeholder='Search by name...']");
     await this.page.pause();
     await this.page.click("div[class*='active-item']");

     }     

     async sendToKAM(){
      await super.send();
     }  
    
  }

  module.exports = { CmResourceAllocationPage };