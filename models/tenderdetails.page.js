var tenderDetailsData = require("../data/tenderDetailsTestData.json");
const Page = require('./page');

class TenderDetailsPage extends Page {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      super(page, page);
    }
  
    async navigate() {
      await this.page.goto('xxxxxx');
    }

    async waitForTenderDetails(){
        await this.page.waitForSelector("a[href*='tenderdetail']", { 
          visible: true,
           timeout: 80000});
    }

    async clickTenderDetail(){
      await this.page.click("a[href*='tenderdetail']");
    }

     async fillBasicTenderDetails(){     
          // var tenderDetails = JSON.parse(data); 

        //client name
        await this.page.click("input#clientNameTypeahead");
        await this.page.fill("input#clientNameTypeahead", 'Alban Housing');
        await this.page.click("input#clientNameTypeahead");
        await this.page.click("div[class*='active-item']");

        await this.page.fill("#tenderDescriptionTextArea", "This is from the test automation framework...."); // tenderDetails.tenderDescription);
        
        //client representative
        await this.page.selectOption('select#clientRepresentativeSelector', { label: 'Bill Smith' });
        
        //client contract
        await this.page.selectOption('select#clientContractSelector', { label: 'Extra Works' });

        //key account manager
        await this.page.selectOption('select#keyAccountManagerSelector', { value: "1" });

        //site name 
        await this.page.click("input#siteNameTypeahead");
        await this.page.fill("input#siteNameTypeahead", 'R');
        await this.page.click("input#siteNameTypeahead");
        await this.page.click("div[class*='active-item']");

        //client contract
        //await this.page.selectOption('select#contractTypeSelector', { label: 'Extra Works' });

        //site contract 
        await this.page.selectOption('select#siteContractSelector', { value: '367' });

        //contract manager
        await this.page.selectOption('select#contractManagerSelector', { value: '11' });
          
          //job type
        await this.page.click("input#jobTypeTypeAhead");
        await this.page.fill("input#jobTypeTypeAhead", 'tree');
        await this.page.click("input#jobTypeTypeAhead");
        await this.page.click("div[class*='active-item']");
     }  
     
     async waitForButtonSendToClient(){
      await this.page.waitForFunction(
         'document.querySelector("#sendButton").inner‌​Text.includes("Send to CM")');
     }   

    async sendToClient(){
      await super.send();
    }

  }

  module.exports = { TenderDetailsPage };