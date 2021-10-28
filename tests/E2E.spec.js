const { test, expect } = require('@playwright/test');
const { TenderDetailsPage } = require('../models/tenderdetails.page');
const { CmResourceAllocationPage } = require('../models/cmResourceAllocation.page');
const { KamAuthorisationPage } = require('../models/kamAuthorisation.page');
const { ClientAuthorisationPage } = require('../models/clientAuthorisation.page');
const { TreePreservationOrderPage } = require('../models/treePreservationOrder.page');

test('happy path E2E test', async ({ page }) => {
  const tenderDetailsPage = new TenderDetailsPage(page);
  const cmResourceAllocationsPage = new CmResourceAllocationPage(page);
  const kamAuthPage = new KamAuthorisationPage(page);
  const clientAuthPage = new ClientAuthorisationPage(page);
  const tpoPage = new TreePreservationOrderPage(page);

  await tenderDetailsPage.navigate();  
  await tenderDetailsPage.waitForTenderDetails();
  await tenderDetailsPage.clickTenderDetail();

  // LOGIN 
  await tenderDetailsPage.submitLoginDetails('testusername@co.uk');
    
  await tenderDetailsPage.waitForPageLoad();  

  // Step1: Tender Details Page
  await tenderDetailsPage.fillBasicTenderDetails();

  await page.pause();

  await tenderDetailsPage.savePage();
  await tenderDetailsPage.sendToClient();  

  // Step2: Cm Resource Allocation Page
  await cmResourceAllocationsPage.fillBasicCmResourceAllocationDetails();

  await page.pause();

  await cmResourceAllocationsPage.savePage();
  await cmResourceAllocationsPage.sendToKAM();
  // await cmResourceAllocationsPage.sendToKAM(); //this is a BUG!

  await page.pause();

  // Step3: KAM Authorisation page
  await kamAuthPage.savePage();
  await kamAuthPage.acceptPage();
  await kamAuthPage.sentToClient();

  await page.pause();

  // Step4: Client Authorisation Page
  await clientAuthPage.accept();

  await page.pause();

  // Step5: Tree Preservation Order Page
  await tpoPage.fillPreservationOrderDetails();
  await tpoPage.savePage();
  await tpoPage.resume();

  // Step6: Client Visits
  await page.pause();

});