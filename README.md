WebDriverIO
=============

This is JavaScript/TypeScript Framework.

Design Pattern: Page Object Pattern

Assertion: Chai is used

To manage package: Npm is used as package manager

Test Data is stored in Constants file under Utils Folder

if you have timeout issue, you can increase timeout time on ui.conf.js file.

File Structure:

There are three levels
1. Feature Files - BDD/Gherkin Way of writing Tests
2. Steps - Definition of Test Steps
3. Page Objects - Web Elements and Actions

Utils Folder - Contains Utility Functions and Constants (Constant Variables and Test Data)

Prerequisite
-----------------
-NodeJS is Installed
-Yarn is Installed

On First Clone, Run - Yarn install

To Run UI Tests
---------------------

yarn run ui --cucumberOpts.tagExpression='@Ui' (Can use any Tag)

To View Allure Report
---------------------

yarn run report