// If it is Hybrid App i will use Xpath as my only locator for selector.
describe('APIDemo', () => {

    it('',async() => {

        const context = await driver.getContext();

        console.log(context);
        
    });
    // it.only('Identify App type', async() => {

    //     const context = await driver.getContext();

    //     console.log(context);
        
    // });

    // Anything i want to do with the screen i will use 
  //driver object > ex. is pause and scoll
  //Anything i want to do with elements i will use the locators
    it.only('App', async() => {
   // UiAutomator2-driver methods can be accessed ny driver object.
   await driver.pause(5000);     
   const app=await $("~App");
   // Any of the locator here in mobile testing we are going to give with $("~ACID")
   app.click();
   const bar = await $("~Action Bar");
   expect(bar).toBeExisting();
   // toBeExisting will assert the element is present or exists
    });

    it('ApiTitle', async() => {

        const title= await $("android.widget.TextView");
        console.log(await title.getText());
        await expect(title).toHaveText("API Demos");
        
    });
    it('ActionBAr', async () => {

        await driver.pause(5000);
        const app=await $("~App");
        await app.click();
  
        const bar1=await $("~Action Bar");
        await bar1.click();
  
        const mac=await $("~Action Bar Mechanics");
        await mac.click();
   
      });
      it('ActionBarTabs', async () => {
  
        await driver.pause(5000);
        const app=await $("~App");
        await app.click();
  
        const bar1=await $("~Action Bar");
        await bar1.click();
  
        const tab=await $("~Action Bar Tabs");
        await tab.click();
  
        const title=await $("~Add new tab");
        console.log(await title.getText());
        await expect(title).toHaveText("ADD NEW TAB");
  
      });

    it('Scroll1', async() => {
        const app= await $("~App");
        await app.click();   
        //you need to give perticular android = locator
        await $ ('android=new UiSelector().text("Activity")').click();
         // We use xpath here | Locator - no need to give any symbol
        const sec= await $('//android.widget.TextView[@content-desc="Secure Surfaces"]')
        // driver.execute ("activity",{properties}) only acc id and class name will work in properties
        await driver.execute("mobile:scroll",{strategy:"accessibility id",selector:'Secure Surfaces'})
        await sec.click();
    
    });

    it('Scroll2', async() => {
        const app= await $("~App");
        await app.click(); 
        //you need to give perticular android = locator  
        await $ ('android=new UiSelector().text("Activity")').click();
        // We use xpath here | Locator - no need to give any symbol
        const TransB= await $('//android.widget.TextView[@content-desc="Translucent Blur"]')
        // driver.execute ("activity",{properties}) only acc id and class name will work in properties
        await driver.execute("mobile:scroll",{strategy:"accessibility id",selector:'Translucent Blur'})
        await TransB.click();
    
    });

    it('Views', async() => {
        const view = await $('~Views');
        await view.click();

        const auto = await $('~Auto Complete');
        await auto.click();

        const screen = await $('~1. Screen Top');
        await screen.click();
         //Setvalue will be use to type inside native app input
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")').setValue('India');

        await $('~Give me Focus').click();

    }); 

    it.only('VerifyText - Multiple Elements1', async() => {

        const expectedList = [
            'API Demos', 'Accessibility', 'Animation', 'App', 'Content',
            'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'
        ];

        const actualList = []
        //TO find the elements in a samne class we will give $$
        const classList = await $$('android.widget.TextView')

        for (const element of classList) {

            const textElement = await element.getText();
            actualList.push(textElement);
          
        }
            console.log(actualList);
          
            await expect(actualList).toEqual(expectedList);
              
    });

        
    it('VeriftText - Multiple Elements2', async () => {

        await driver.pause(5000);
        const app=await $("~App");
        await app.click();
  
        const expectedList = ['API Demos' , 'Action Bar', 'Activity', 'Alarm',];
        
      const actualList = [ ]
  
      //TO find the elements in a samne class we will give ( $$ )
      const classList= await $$('android.widget.TextView')
      
      for (let element=0 ; element<=3; element++) {
  
        const textElement = await classList[element].getText();
        actualList.push(textElement);
  
      }
      console.log(actualList);
  
      await expect(actualList).toEqual(expectedList);
  
    });    
    
    it('Notifications', async() => {

        await driver.openNotifications();  // To access the notification

        await $('~Clear all notifications.').click();
        
    });

    it('Alerts', async() => {

        await driver.pause(5000);
        const app=await $("~App");
        await app.click();

        await $('~Alert Dialogs').click();

       // await $('~OK Cancel dialog with a message').click();

        //await driver.acceptAlert();
       // await driver.dismissAlert();

        await $('~OK Cancel dialog with a long message').click();

       // await driver.acceptAlert();
        //await driver.dismissAlert();

        await $('~OK Cancel dialog with ultra long message').click();

        //await driver.acceptAlert(); // For OK
        await driver.dismissAlert();  // For cancel
        
    });

    it('Navigations', async() => {
    
      // Back Button: 4
      await driver.back();  // to go back
      await driver.pressKeyCode(4);
      
      
      // Home Button: 3
      await driver.pressKeyCode(3);
      
        // Apps Button (Recent Apps): 187
        await driver.pressKeyCode(187);

        // Menu Button: 82
        await driver.pressKeyCode(82);

        // Search Button: 84
        await driver.pressKeyCode(84);

        // Enter Button: 66
        await driver.pressKeyCode(66);

        // Volume Up: 24
        await driver.pressKeyCode(24);

        // Volume Down: 25
        await driver.pressKeyCode(25);

        // Power Button: 26 
        await driver.pressKeyCode(26);  

    });

    
});
