Feature: Wishlist Test

############# Wishlist Tests ############

@Ui @Wishlist
Scenario: Verify Wishlist
Given I am on the WestwingNow home page
And I Accept Cookies
When I search for "Möbel"
Then I should see product listing page with a list of products
Then I should see the login or registration overlay
When I switch to login form of the overlay
And I log in with Valid credentials
When I click on wishlist icon of the first found product
Then the product should be added to the wishlist
And I go to the wishlist page
And I delete the product from my wishlist

######################################################################################