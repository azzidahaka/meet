#Features and Scenerios

- Filter Events by City.
  - As a user, I should be able to filter events by city so that i can easily find events happening in a city
  - Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
    - Given user is on the app's home page
    - When user has no selected city
    - Then the user should see upcoming events from all cities
  - Scenario: User should see a list of suggestions when they search for a city.
    - Given user is on the app's home page
    - When user type "To" in the city search field
    - Then User should see a list of city suggestions (e.g., Tokyo, Toronto)
  - Scenario: User can select a city from the suggested list
    - Given user is viewing the list of city suggestions
    - When user selects a city
    - Then user should see events specific to the selected city
- Show/Hide Event Details.
  - As a user, I should be able to view event details so that i can view more information about the event
  - Scenario: An event element is collapsed by default.
    - Given user has a list of events displayed
    - When User cannot see additional information about events
    - Then User should see a button that says "show details"
  - Scenario: User can expand an event to see details
    - Given user is viewing the list of events
    - When user clicks the "show details " button
    - Then the event details section becomes visible
  - Scenario: User can collapse an event to hide details
    - Given user is can see details about an event
    - When user clicks the "hide details " button
    - Then the event details should be hidden again
- Specify Number of Events.
  - As a user, I should be able to specify the number of events displayed so that i can customize the amount of information shown.
  - Scenario: When user hasn’t specified a number, 32 events are shown by default
    - Given user is on the app's home page
    - When user hasn't specified the number of events
    - Then user should see 32 events listed
  - Scenario: User can change the number of events displayed.
    - Given user is on the app's home page
    - When user types in number of events to display
    - Then user should see only the specified number of events listed
- Use the App When Offline.
  - As a user, I should be able to access essential features of the app even when offline so that i can still use it in areas with limited connectivity.
  - Scenario: Show cached data when there’s no internet connection.
    - Given user has no internet connection
    - When user opens the app
    - Then user should be able to view cached event data from their last session
  - Scenario: Show error when user changes search settings (city, number of events).
    - Given user is on home page with no internet connection
    - When user changes the city or number of events
    - Then user should receive and error message indicating the need to refresh data once online
- Add an App Shortcut to the Home Screen.
  - As a user, I should be able to add the app as a shortcut to my home screen so that i can easily launch it without navigating through menus.
  - Scenario: User can install the meet app as a shortcut on their device home screen
    - Given user has a mobile device
    - When user adds the app to homescreen
    - Then user can see the app icon for easy access
- Display Charts Visualizing Event Details.
  - As a user, I should be able to view visual charts or graphs representing events data so that i can gain insights at a glance
  - Scenario: Show a chart with the number of upcoming events in each city.
    - Given is on the home page
    - When user hasn't selected an event
    - Then user should see a graphical representation of the events count per city before the lists of events
