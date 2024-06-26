# Meet App

## Features and Scenarios

- Filter Events by City.
  - As a user, I should be able to filter events by city so that I can easily find events happening in a city
  - Scenario: When the user hasn’t searched for a city, show upcoming events from all cities.
    - Given user is on the app's home page
    - When the user has no selected city
    - Then the user should see upcoming events from all cities
  - Scenario: User should see a list of suggestions when they search for a city.
    - Given user is on the app's home page
    - When a user starts typing in the city search field
    - Then the user should see a list of city suggestions that match the letters they typed 
  - Scenario: The user can select a city from the suggested list
    - Given user is viewing the list of city suggestions
    - When the user selects a city
    - Then the user should see events specific to the selected city
- Show/Hide Event Details.
  - As a user, I should be able to show/hide event details so that I can view more/less information about the event
  - Scenario: An event element is collapsed by default.
    - Given user has a list of events displayed
    - When User cannot see additional information about events
    - Then the user should see a button that says "show details"
  - Scenario: User can expand an event to see details
    - Given user is viewing the list of events
    - When user clicks the "show details " button
    - Then the event details section becomes visible
  - Scenario: User can collapse an event to hide details
    - Given user can see details about an event
    - When user clicks the "hide details " button
    - Then the event details should be hidden again
- Specify Number of Events.
  - As a user, I should be able to specify the number of events displayed so that I can customize the amount of information shown.
  - Scenario: When user hasn’t specified a number, 32 events are shown by default
    - Given user is on the app's home page
    - When user hasn't specified the number of events
    - Then user should see 32 events listed
  - Scenario: User can change the number of events displayed.
    - Given user is on the app's home page
    - When user types in the number of events to display
    - Then user should see only the specified number of events listed
- Use the App When Offline.
  - As a user, I should be able to access essential features of the app even when offline so that I can still use it in areas with limited connectivity.
  - Scenario: Show cached data when there’s no internet connection.
    - Given user has no internet connection
    - When user opens the app
    - Then user should be able to view cached event data from their last session
  - Scenario: Show error when user changes search settings (city, number of events).
    - Given user is on the home page with no internet connection
    - When user changes the city or number of events
    - Then user should receive an error message indicating the need to refresh data once online
- Add an App Shortcut to the Home Screen.
  - As a user, I should be able to add the app as a shortcut to my home screen so that I can easily launch it without navigating through menus.
  - Scenario: User can install the meet app as a shortcut on their device home screen
    - Given user has a mobile device
    - When user adds the app to the home screen
    - Then user can see the app icon for easy access
- Display Charts Visualizing Event Details.
  - As a user, I should be able to view visual charts or graphs representing events data so that I can gain insights at a glance
  - Scenario: Show a chart with the number of upcoming events in each city.
    - Given is on the home page
    - When user hasn't selected an event
    - Then user should see a graphical representation of the events count per city before the lists of events

## Using serverless functions
The serverless function will be used to handle user authentication using OAuth2, communicate with Google Calendar API to fetch events, and process events in the API response which would then be rendered in the app's UI. The serverless function would be hosted on AWS Lambda and it offers benefits like scalability according to user demands and cost-efficient as only compute time used during execution is payed for.
