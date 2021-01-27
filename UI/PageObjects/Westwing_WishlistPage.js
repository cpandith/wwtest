class WestwingWishlistPage {

    get deleteProductButton() { return $(".blockListProduct.qaBlockListProduct > .blockListProduct__delete.qaBlockListProduct__delete") }

    clickDeleteProductButton() {
        this.deleteProductButton.waitForDisplayed({ timeout: GlobalTimeout });
        this.deleteProductButton.click();
    }

    verifyProductDeleted() {
        return this.deleteProductButton.waitForExist({ reverse: true });
    }
}

export default new WestwingWishlistPage();