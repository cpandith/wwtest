import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import WishlistPage from '../PageObjects/Westwing_WishlistPage.js';


Then(/^I delete the product from my wishlist$/, function () {
    WishlistPage.clickDeleteProductButton();
    expect(WishlistPage.verifyProductDeleted()).to.equal(true);
});