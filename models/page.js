const { chromium } = require('playwright');  // Or 'chromium' or 'webkit'.
module.exports =  class Page {

    constructor(page) {
        this.page = page;     
      }

      
     async waitForPageLoad(){
        await this.page.waitForSelector(".gc-title", {
          waitFor: "visible",
          timeout: 80000 
        })   
       }
  
       async closePopup(){
        await this.page.click("button[class='close']");
        await this.page.waitForTimeout(3000); // refactor with waitForSelector
       }
  
       async savePage(){
        await this.page.click("#submitButton");
        await this.page.waitForTimeout(2000); // refactor with waitForSelector
        await this.closePopup();
       }

       async send(){
        await this.page.click("#sendButton");
        await this.page.waitForTimeout(2000); // refactor with waitForSelector
       }

       async accept(){
        await this.page.click("#acceptButton");
        await this.page.waitForTimeout(2000); // refactor with waitForSelector
       }

       async resume(){
        await this.page.click("#resumeButton");
        await this.page.waitForTimeout(2000); // refactor with waitForSelector
       }  

       async submitLoginDetails(username){
        await this.page.fill("input[type*='email']", username);
        await this.page.click("input[type*='submit']");    
        await this.page.fill("input[name*='passwd']", '*****');
        await this.page.click("input[type*='submit']");
        //TODO -- NEED TO FIND A WAY TO BYPASS MFA --
      }

      async fillInInputValueById(valueToAdd,id){
        await this.page.click("#" + id);
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Backspace');
        await this.page.fill("#hours", valueToAdd); 
      }
   
}