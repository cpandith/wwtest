import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import HomePage from '../PageObjects/Westwing_HomePage.js';

var productCategory;


Given(/^I am on the WestwingNow home page$/, function () {
    browser.url(Constants.westwingHomePageUrl);
});

Then(/^I Accept Cookies$/, function () {
    HomePage.clickAcceptCookies();
});

When(/^I search for \"(.*)\"$/, function (SearchText) {
    productCategory=SearchText;
    HomePage.enterSearchText(SearchText);
});

Then(/^I should see product listing page with a list of products$/, function () {
    expect(HomePage.getProductCategoryTitle()).to.equal(productCategory);
    expect(HomePage.getProductListCount).to.not.equal(0); 
});

When(/^I click on wishlist icon of the first found product$/, function () {
    if(HomePage.firstProductedWishlisted() == false){
        HomePage.clickFirstProductWishlistIcon();
    }
});

Then(/^I should see the login or registration overlay$/, function () {
    expect(HomePage.registerationOverlayDisplayed()).to.equal(true);
});

When(/^I switch to login form of the overlay$/, function () {
    HomePage.clickSwitchToLoginLink();
});

Then(/^I log in with Valid credentials$/, function () {
    HomePage.enterUsername(Constants.userName);
    HomePage.enterPassword(Constants.password);
    HomePage.clickLoginButton();
});

Then(/^the product should be added to the wishlist$/, function () {
    expect(HomePage.getWishlistCounterText()).to.equal("1");
});

Then(/^I go to the wishlist page$/, function () {
    HomePage.clickWishListCounter();
});


