
Things I kept in my mind developing this project
================================================

    * Modularized code with strong architectural foundation
        -- To set the strong architectural foundation, I have used the well constructed redux architecture, separate reducers for each reducer, small size components, utility file for API calls and utility function and standard naming conventions.
    * Minimize the API requests to the Server.
        -- To reduce the API calls and server interaction, I am fetching all the user data before rendering the <Initial /> Component 
    * Responsive View
        -- Rerendering the component to reflect the user's action. 
    * Clean and Minimal UI
        -- Used 2 column structure and contrast color scheme.
    * Try to be creative
        -- Used Range Slider and Modal to be creative. Also removed 'Search' necessity.
    * Testing
        -- Added basic tests to show my commitment :)

Technology Stack
================
React, Redux, ESMAScript 2016, Jest, Bable, WebPack

How to Run
==========
 `npm install`
 
 `npm run`

How to Test
==========
 `npm test`

Requested User Stories 
======================
* As a user, when no filter is selected, I should see 10 matches
* As a user, I expect each match to display:
    * User Photo
    * Full Name (`firstName lastName`)
    * Age
    * Contact Link
* As a user, I want to be able to filter the matches by age range, inclusive
* As a user, I want to be able to filter the matches by gender
* As a user, I want to be able to view a match's contact details. Contact Details contain:
    * Phone #
    * Cell #
    * E-mail
* As a user, I should be able to reset the matchlist to ignore the current filter and display the original 10 results
* As a user, I expect the actual number of matching records to be displayed above the matches themselves, as "{X} Matches Found"
* As a user, I expect the number of displayed matches to change in response to the filtering criteria.


Room for Improvement
=========
* HTML and CSS
* Mobile friendly
* Detailed snapshot testing


![Scheme](https://bitbucket.org/akshaygore0691/new-ui-challenge/src/ff300be4cff86d99421f4f652f43c3a34a82793d/sample.gif)