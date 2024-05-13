Feature: Show/Hide Event Details
 Scenario: An event element is collapsed by default.
   Given user has a list of events displayed
   When User cannot see additional information about events
   Then the user should see a button that says "show details"

 Scenario: User can expand an event to see details.
   Given user is viewing the list of events
   When user clicks the "show details " button
   Then the event details section becomes visible

 Scenario: User can collapse an event to hide details.
   Given user can see details about an event
   When user clicks the "hide details " button
   Then the event details should be hidden again