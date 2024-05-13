Feature: Specify Number of Events
 Scenario: When user hasn’t specified a number, 32 events are shown by default.
   Given user is on the app's home page
   When user hasn't specified the number of events
   Then user should see 32 events listed

 Scenario: User can change the number of events displayed.
   Given user is on the app's home page
   When user types in the number of events to display
   Then user should see only the specified number of events listed
