/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// const $ = require("jquery");

// export const onInitialClientRender = () => {
//   const $ = require("jquery");
//   $(document).ready(function () {
//     console.log("The answer is don't think about it!")
//   });
// }

//import './src/sass/app.scss'
// import 'jquery/dist/jquery.min.js'
// import 'popper.js/dist/popper.min'
// import 'bootstrap/dist/js/bootstrap.min.js'
// const $ = require("jquery");
//import 'jquery/dist/jquery.min.js'
//import 'popper.js/dist/popper.min'
//import 'bootstrap/dist/js/bootstrap.min.js'
// /* ----------------
//     // set onclick events for each category element
//   ---------------- */
//   $( document ).ready(function() {
//     // set onclick listeners for desktop menu to show correct content for each category 
//     setDesktopServicesEvents();
//     // set onclick listeners for mobile dropdown to show correct content for each category 
//     setMobileServicesEvents();
//     slideDropDown();
//   });


//   /* ----------------
//     // set onclick events for the desktop menu
//   ---------------- */
//   function setDesktopServicesEvents() {
//     // get all categories <a> elements in a collection
//     var sericeCategories = $('.services-category');
//     // for each category found
//     for(var i = 0; i < sericeCategories.length; i++) {
//         var category = sericeCategories[i];
//         // set onclick event for current category in the list
//         category.onclick = function(e) {
//           // find the previously selected category & remove acitve css class
//           var activeSericeCategories = $('.active-category');
//           if ( activeSericeCategories.length > 0 ) {
//             for(var i = 0; i < activeSericeCategories.length; i++) {
//               var activeCategory = activeSericeCategories[i];
//               $(activeCategory).removeClass('active-category');
//             };
//           }
//           // get id of the <a> that the user most recently selected
//           var eventId = e.currentTarget.id;
//           // add acitve css class to selected category
//           $('#' + eventId).addClass('active-category');
//           // show selected category's content
//           toggleServiceView(e);
//           console.log(e.target.id, e.target.innerHTML);
//         }
//     }
//   }


//   /* ----------------
//     // set onclick events for the mobile dropdown 
//   ---------------- */
//   function setMobileServicesEvents() {
//     // get all categories <a> elements in a collection
//     var sericeCategories = $('.category-mobile');
//     // for each category found
//     for(var i = 0; i < sericeCategories.length; i++) {
//         var category = sericeCategories[i];
//         // set onclick event for current category in the list
//         category.onclick = function(e) {
//           // find the previously selected category & remove acitve css class
//           var activeSericeCategories = $('.active-category-mobile');
//           if ( activeSericeCategories.length > 0 ) {
//             for(var i = 0; i < activeSericeCategories.length; i++) {
//               var activeCategory = activeSericeCategories[i];
//               $(activeCategory).removeClass('active-category-mobile');
//             };
//           }
//           // get id of the <a> that the user most recently selected
//           var eventId = e.currentTarget.id;
//           // add acitve css class to selected category
//           $('#' + eventId).addClass('active-category-mobile');
//           // set selected category text to dropdown title
//           $('.services-dropdown-title').text( $('#' + eventId).text() );
//           // show selected category's content
//           $('.dropdown-menu').slideUp('medium');
//           toggleServiceView(e);
//           console.log(e.target.id, e.target.innerHTML);
//         }
//     }
//   }


//   /* ----------------
//     // hide / show correct content based on selected category

//     @param event - The DOM element object that the user selected
//   ---------------- */
//   function toggleServiceView(event) {
//     // get all content <ul> elements in a collection
//     var serviceCategoryViews = $('.collapse');
//     console.log(serviceCategoryViews);
//     // for each view <ul> block found
//     for(var i = 0; i < serviceCategoryViews.length; i++) {
//       var view = serviceCategoryViews[i];
//       // find the <ul> block that is currently shown and hide it
//       if (view.classList.contains('show') && view.id !== event.target.id ){
//         event.preventDefault();
//         $(view).collapse();
//         $(view).removeClass('show');       
//       } 
//       // else if it is the new <ul> block , show it
//       else if (view.id === event.target.id) {
//         event.preventDefault();
//         $(view).collapse();
//       }
//     }
//   };

//   function slideDropDown() {
//     $('#dropdownMenu2')[0].onclick = function(event) { 
//       console.log('click')
//       event.preventDefault();
//       var dropDownMenu = $('.dropdown-mobile');
//       if ( $('.drop-mobile')[0].classList.contains('show') ) {
//         $('.dropdown-menu').slideUp('medium');
//       } else {
//         $('.dropdown-menu').slideDown('medium');
//       }
//     }
//   };
    
//   //   console.log('click')
//   //   event.preventDefault();
//   //   var dropDownMenu = $('.dropdown-mobile');
//   //   if ( $('.drop-mobile')[0].classList.contains('show') ) {
//   //     $('.dropdown-menu').slideUp('medium');

//   //   } else {
//   //     $('.dropdown-menu').slideDown('medium');

//   //   }
//   // };

//   /* --- Services Section JS END --- */ 
  