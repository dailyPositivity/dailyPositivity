# Daily Positivity

## Project description:
The client would like an app to help them maintain a positive outlook on life. The goal of this app is to allow users to take a break from their daily grind and spend some time looking at photos of nature and reading some positivity.

## Requirements:
- Affirmations API (https://www.affirmations.dev/, may be substituted for another inspirational quote API) and the Unsplash API
- Users should be able to visit the app, pick a category of photos they would like to view from around 3 pre-populated categories
- If the user would like to, they can enter up to 3 of their own affirmations or quotes which will be incorporated into the slideshow as well
- From the selected category, a slideshow of around 10 images should play, where each slide is displayed for around 30 seconds with the daily affirmation or quote displayed overtop of the image ensuring it is readable
- Once the slideshow ends, thank the user for coming and wish them a good day.
- Proper error handling. For example:
  - If a user types in a query that yields no result - they should be provided feedback (e.g. there were no results found from the Unsplash API)
  - Common error responses should be handled
  - API loading states
  
## Stretch goals:
- Allow users to save a slideshow and return to it later
- Include more categories of photos from the Unsplash API
- Allow users to choose how long they would like each slide displayed for
- Allow users to save a set of affirmations in firebase that can be replayed as a slideshow

## Deliverables:
- Project files up on GitHub
- Project up on GitHub pages or your own URL
