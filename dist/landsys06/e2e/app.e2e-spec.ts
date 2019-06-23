/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for landsys06', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be landsys06', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('landsys06');
    })
  });

  it('network-name should be landsys06@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('landsys06@0.0.1.bna');
    });
  });

  it('navbar-brand should be landsys06',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('landsys06');
    });
  });

  
    it('parcel component should be loadable',() => {
      page.navigateTo('/parcel');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('parcel');
      });
    });

    it('parcel table should have 4 columns',() => {
      page.navigateTo('/parcel');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('offer component should be loadable',() => {
      page.navigateTo('/offer');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('offer');
      });
    });

    it('offer table should have 5 columns',() => {
      page.navigateTo('/offer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('LANDSYSPersonnel component should be loadable',() => {
      page.navigateTo('/LANDSYSPersonnel');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LANDSYSPersonnel');
      });
    });

    it('LANDSYSPersonnel table should have 6 columns',() => {
      page.navigateTo('/LANDSYSPersonnel');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('LANDSYSClient component should be loadable',() => {
      page.navigateTo('/LANDSYSClient');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LANDSYSClient');
      });
    });

    it('LANDSYSClient table should have 5 columns',() => {
      page.navigateTo('/LANDSYSClient');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('openBid component should be loadable',() => {
      page.navigateTo('/openBid');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('openBid');
      });
    });
  
    it('closeBid component should be loadable',() => {
      page.navigateTo('/closeBid');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('closeBid');
      });
    });
  
    it('transferLand component should be loadable',() => {
      page.navigateTo('/transferLand');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('transferLand');
      });
    });
  
    it('createLand component should be loadable',() => {
      page.navigateTo('/createLand');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('createLand');
      });
    });
  
    it('makeOffer component should be loadable',() => {
      page.navigateTo('/makeOffer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('makeOffer');
      });
    });
  
    it('rejectOffer component should be loadable',() => {
      page.navigateTo('/rejectOffer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('rejectOffer');
      });
    });
  
    it('createParticipant component should be loadable',() => {
      page.navigateTo('/createParticipant');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('createParticipant');
      });
    });
  

});