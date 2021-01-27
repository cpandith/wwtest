class WestwingHomePage {

    get cookieAcceptButton() { return $("button[id='onetrust-accept-btn-handler']") }
    get searchTextBox() { return $("input[data-testid='search-input']") }
    get searchIcon() { return $("svg[data-testid='header-search-icon']") }
    get registerOverlay() { return $("div[data-testid='reg__mode']") }
    get productList() { return $("div[data-testid='generic-product']") }
    get productCategoryTitle() { return $("h1") }
    get switchToLoginLink() { return $("button[data-testid='login-button']") }
    get registerationOverlay() { return $("div[data-testid='shop_to_club_registration_single_step_overlay']") }
    get firstProductWishlistIcon() { return $("(.//div[@data-testid='wishlist-icon'])[1]") }
    get firstProductWishlistIconSelected() { return $("svg[data-is-selected='true']") }
    get loginSwitchLink() { return $("button[data-testid='login_reg_switch_btn']") }
    get usernameTextField() { return $("input[data-testid='long-register-email-field']") }
    get passwordTextField() { return $("input[data-testid='long-register-password-field']") }
    get loginButton() { return $("button[data-testid='login_reg_submit_btn']") }
    get firstProductWishlistIconSelected() { return $("svg[data-is-selected='true']") }
    get wishlistCounter() { return $("span[data-testid='wishlist-counter']") }

    enterSearchText(searchText) {
        this.searchTextBox.waitForDisplayed({ timeout: GlobalTimeout });
        this.searchTextBox.setValue(searchText);
        browser.keys("Enter");
    }

    clickAcceptCookies() {
        this.cookieAcceptButton.waitForDisplayed({ timeout: GlobalTimeout });
        this.cookieAcceptButton.click();
    }

    registerOverlayDisplayed() {
        this.registerOverlay.waitForDisplayed({ timeout: GlobalTimeout });
        return this.registerOverlay.isDisplayed();
    }

    registerationOverlayDisplayed() {
        this.registerationOverlay.waitForDisplayed({ timeout: GlobalTimeout });
        return this.registerationOverlay.isDisplayed();
    }

    clickSwitchToLoginLink() {
        this.switchToLoginLink.waitForDisplayed({ timeout: GlobalTimeout });
        this.switchToLoginLink.click();
    }

    getProductCategoryTitle() {
        this.productCategoryTitle.waitForDisplayed({ timeout: GlobalTimeout });
        return this.productCategoryTitle.getText();
    }

    getProductListCount() {
        return browser.elements(this.productList).value.length;
    }

    clickFirstProductWishlistIcon() {
        this.firstProductWishlistIcon.waitForDisplayed({ timeout: GlobalTimeout });
        this.firstProductWishlistIcon.click();
        this.firstProductWishlistIconSelected.waitForDisplayed({ timeout: GlobalTimeout });
    }

    firstProductedWishlisted() {
        browser.pause(2000);
        return this.firstProductWishlistIconSelected.isDisplayed();
    }

    clickLoginSwitchLink() {
        this.loginSwitchLink.waitForDisplayed({ timeout: GlobalTimeout });
        this.loginSwitchLink.click();
    }

    enterUsername(username) {
        this.usernameTextField.waitForDisplayed({ timeout: GlobalTimeout });
        this.usernameTextField.setValue(username);
    }

    enterPassword(password) {
        this.passwordTextField.waitForDisplayed({ timeout: GlobalTimeout });
        this.passwordTextField.setValue(password);
    }

    clickLoginButton() {
        this.loginButton.waitForDisplayed({ timeout: GlobalTimeout });
        this.loginButton.click();
    }

    getWishlistCounterText() {
        this.wishlistCounter.waitForDisplayed({ timeout: GlobalTimeout });
        return this.wishlistCounter.getText();
    }

    clickWishListCounter() {
        this.wishlistCounter.waitForDisplayed({ timeout: GlobalTimeout });
        this.wishlistCounter.click();
    }

}

export default new WestwingHomePage();