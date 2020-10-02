// App Component
// {
// Constructor{

//   State{
//         UnsplashApiData,
//         QuotesApiData,
//         userSelection,
// }
// }//End of constructor

// componentDidMount{

//     API Call to get Data
// }

// Render{
    
// // on mount
// request 10 quotes from quote api -> store in quote array

// // on every page
//     listen for user clicking “home” button
//     event: user clicks “home” button -> return to landing page and reset state

// // landing page (route “/”)
// listen for user clicking button
// user clicks button -> load category component (scrolls up)

// // 3 categories component (route “/categories”?)
// listen for user clicking categories
// user clicks category ->
// update state with selected category
// load form component


// // Form Component
//     PROPS REQUIRED: category
//     request 10 images from unsplash -> store in image array
    
// listen for changes in text boxes
// event: user types in box -> update state with the quotes the user added
            
// listen for click on “start slideshow” button
// event: user clicks button (link to new route) ->
//     if user added quotes, add them to quote array 
//     transition to first slide



// // Slideshow Component
//     PROPS REQUIRED: quote array, image array
// Listen for click on arrow 
//         //Slide component 
//             PROPS: image, quote
//             display image with quote
//     TBD: Add timeout function to either props arrays or slide component.

// // Ending Component
//         If the slideshow ends, Display Thank you message!!!!

// }//End of App Component render
