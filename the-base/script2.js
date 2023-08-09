    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen2").click();


    document.querySelector('.btn-search').addEventListener('focus', function() {
      document.getElementById('mySearch').focus();
    });
    
    document.querySelector('.input-search').addEventListener('focus', function() {
      document.getElementById('defaultOpen').click();
      document.getElementById("BIGtitle1").innerHTML = "Search";
    });
    /*
    document.getElementById('loadMore').addEventListener('focus', function() {
      document.getElementById('defaultOpen').click();
    });
    */
    
    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(function(tablink) {
      tablink.addEventListener('focus', function() {
        document.getElementById('mySearch').value = "";
      });
    });

    document.getElementById("defaultOpen").addEventListener("click", function() {
      showArticles();
    });

// AUTO CLICK


// DARK MODE
      // function goDarkMode() {
      //   // Get the current state of the button from local storage
      //   const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true';
      //   // Toggle the state of the button
      //   const newState = !isDarkModeEnabled;
      //   // Update the value stored in local storage
      //   localStorage.setItem('isDarkModeEnabled', newState);
      //   // Call the goDarkMode function to toggle the dark mode based on the new state
      //   goDarkModeftn(newState);
      // }



      //   // Get the <body> element
      //   const body = document.querySelector("body");
      //   // Check if user has already selected a mode
      //   const savedTheme = localStorage.getItem("theme");
        
      //     // Listen for changes to radio inputs
      //     const radioInputs = document.querySelectorAll('input[type="radio"][name="theme"]');
      //     radioInputs.forEach((radioInput) => {
      //       radioInput.addEventListener("change", () => {
      //         const selectedTheme = radioInput.value;
              
      //         if (selectedTheme === "auto" || savedTheme === "auto") {
      //           // Automatically select theme based on system preference or default to light mode
      //           const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      //           if (prefersDarkMode) {
      //             body.classList.add("dark-mode");
      //           } else {
      //             body.classList.remove("dark-mode");
      //           }
      //         }

      //         if (selectedTheme === "dark" || savedTheme === "dark") {
      //           body.classList.add("dark-mode");
      //         }
      //         if (selectedTheme === "light" || savedTheme === "light") {
      //           body.classList.remove("dark-mode");
      //         }

      //       });
      //     });



      // // Check the current state of the button on page load
      // const isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true';
      // // Call the goDarkMode function with the current state
      // goDarkModeftn(isDarkModeEnabled);
      // console.log("DarkMode:", isDarkModeEnabled);
// DARK MODE

// DARK MODE V2
        // Retrieve the current mode from cache, if available
        const currentMode = localStorage.getItem('mode');

        // If the current mode is "auto", determine the user's system theme
        if (currentMode === 'auto') {
          setAutoMode();
        } else {
          setMode(currentMode);
        }

        // Add event listener to handle mode selection changes
        document.querySelectorAll('input[name="mode"]').forEach((input) => {
          input.addEventListener('change', (event) => {
            if (event.target.value === 'auto') {
              setAutoMode();
            } else {
              setMode(event.target.value);
            }
          });
        });

        // Function to set the mode to "auto" and determine the system theme
        function setAutoMode() {
          localStorage.setItem('mode', 'auto');
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }
        }

        // Function to set the selected mode and save it to cache
        function setMode(mode) {
          if (mode === 'auto') {
            setAutoMode();
          } else if (mode === 'light') {
            localStorage.setItem('mode', 'light');
            document.body.classList.remove('dark-mode');
          } else if (mode === 'dark') {
            localStorage.setItem('mode', 'dark');
            document.body.classList.add('dark-mode');
          }
        }
// DARK MODE V2


// BTN NAV BAR
function TABshowArticles() {
  // Ne plus afficher noarticle quand rien de trouvé avec la search bar
  var noarticle = document.getElementsByClassName("noarticle")[0];
  w3RemoveClass(noarticle, "show");
}

filterSelection("all")
var noarticle = document.getElementsByClassName("noarticle")

      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("tabcontent");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].getElementsByClassName("tagele")[0].innerHTML.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
        
        // Ne plus afficher noarticle quand rien de trouvé avec la search bar
        var noarticle = document.getElementsByClassName("noarticle")[0];
        w3RemoveClass(noarticle, "show");
      }

      function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
      }

      function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
        }
        element.className = arr1.join(" ");
      }


      // Add active class to the current button (highlight it)
      var btnContainer = document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName("tablinks");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("activebtntablinks");
          current[0].className = current[0].className.replace(" activebtntablinks", "");
          this.className += " activebtntablinks";
          let text = current[0].getAttribute("href");
          document.getElementById("BIGtitle1").innerHTML = text;
          
          var isInNavBtnContainer = this.closest('.nav-btnContainer') !== null;
          if (isInNavBtnContainer) {
            document.getElementById("input-nav-more").innerHTML = text;
          }
          else {
            document.getElementById("input-nav-more").innerHTML = "";
          }
        });
      }
// BTN NAV BAR



// SEARCH BAR
function myFunctionSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, matchFound;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByClassName("tabcontent");
  matchFound = false;
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      w3AddClass(li[i], "show");
      matchFound = true;
    } else {
      w3RemoveClass(li[i], "show");
    }
  }
  
  // Display "noarticle" message if no match is found
  if (!matchFound) {
    var noarticle = document.getElementsByClassName("noarticle")[0];
    w3AddClass(noarticle, "show");
    document.getElementById("search-not-found").innerHTML = filter;
  } else {
    var noarticle = document.getElementsByClassName("noarticle")[0];
    w3RemoveClass(noarticle, "show");
  }
}


// SEARCH BAR



/* LA NAVBAR SE CACHE LORSQUE L'ON SCROLL
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
    let slideIndex = 1;
    showSlides(slideIndex);
LA NAVBAR SE CACHE LORSQUE L'ON SCROLL */



/* IMAGE SLIDE
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
IMAGE SLIDE */



/* IMAGE ZOOM
    var modal = document.getElementById('myModal');
    var images = document.getElementsByClassName('myImages');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        // and attach our click listener for this image.
        img.onclick = function(evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
// IMAGE ZOOM */



// OPTION GRID
    // Get the elements with class="column"
    var elements = document.getElementById("myMenu")
    // List View
    function listView() {
      w3RemoveClass(elements, "grid1");
    }
    // Grid View
    function gridView() {
      w3AddClass(elements, "grid1");
    }

    /* Optional: Add active class to the current button (highlight it) */
    var container1 = document.getElementById("btnContainer1");
    var btns1 = container1.getElementsByClassName("btn1");
    for (var i = 0; i < btns1.length; i++) {
      btns1[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activebt1");
        current[0].className = current[0].className.replace(" activebt1", "");
        this.className += " activebt1";
      });
    }
// OPTION GRID


// SORT
    // BOUTON POUR TRIER
        function sortTable() {
          var list, i, switching, b, c, shouldSwitch;
          list = document.getElementById("myMenu");
          switching = true;
          /* Make a loop that will continue until
          no switching has been done: */
          while (switching) {
            // start by saying: no switching is done:
            switching = false;
            b = list.getElementsByTagName("h2");
            c = list.getElementsByTagName("ARTICLE");
            // Loop through all list-items:
            for (i = 0; i < b.length - 1; i++) {
              // start by saying there should be no switching:
              shouldSwitch = false;
              /* check if the next item should
              switch place with the current item: */
              if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
              /* If a switch has been marked, make the switch
              and mark the switch as done: */
              c[i].parentNode.insertBefore(c[i + 1], c[i]);
              switching = true;
            }
          }
        }
    // BOUTON POUR TRIER

    
    // BOUTON POUR RANDOM
        function randomTable() {
          var list, i, c;
          list = document.getElementById("myMenu")
          c = list.getElementsByTagName("ARTICLE");
        
          for (i = 0; i < c.length; i++) {
            var randomIndex = Math.floor(Math.random() * c.length);
            list.insertBefore(c[randomIndex], c[i]);
          }
        }
    // BOUTON POUR RANDOM


    /* Optional: Add active class to the current button (highlight it) */
    var container2 = document.getElementById("btnContainer2");
    var btns2 = container2.getElementsByClassName("btn2");
    for (var i = 0; i < btns2.length; i++) {
      btns2[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activebt2");
        current[0].className = current[0].className.replace(" activebt2", "");
        this.className += " activebt2";
      });
    }
// SORT



/* READ MORE */
    var btnclick = document.getElementsByClassName("button-secondary");
    var i;

    for (i = 0; i < btnclick.length; i++) {
      btnclick[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panelprev = this.previousElementSibling;
        var inbye = panelprev.closest('.readmore')
        if (panelprev.style.maxHeight === "9999px") {
          panelprev.style.maxHeight = "500px";
          inbye.classList.remove("in");
        } 
        else {
          panelprev.style.maxHeight = "9999px";
          inbye.className += " in";
        }
      });
    }
/* READ MORE */



/* GO TO TOP */
      //Get the button:
      mybutton = document.getElementById("BTNgoTOP");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
/* GO TO TOP */



/* +10 */
var articles = document.getElementsByClassName("tabcontent");
var count = 5;
var maxArticlesButton = document.getElementById("loadMore");

function showArticles() {
  for (var i = 0; i < articles.length; i++) {
    if (i < count) {
      w3AddClass(articles[i], "show");
    } else {
      w3RemoveClass(articles[i], "show");
    }
  }
}

function changeMaxArticlesCount() {
}

      showArticles();

      document.getElementById("loadMore").addEventListener("click", function() {
        if (count >= articles.length) {
          maxArticlesButton.innerHTML = "Max articles displayed";
        } else {
          maxArticlesButton.innerHTML = "See more articles";
          count += 3;
          document.getElementById("defaultOpen").click();
          showArticles();
        }
        // console.log(count);
        // console.log(articles.length);
      });
/* +10 */



/* Articles fullscreen *
      const gridItems = document.querySelectorAll(".tabcontent");
      const backfullscreen = document.querySelectorAll(".background-color");
      const closeButton = document.querySelector("#close-button");

      gridItems.forEach(gridItem => {
        gridItem.addEventListener("click", function() {
          this.classList.toggle("fullscreen");
          backfullscreen.classList.toggle("fullscreen");
        });
      });

      closeButton.addEventListener("click", function() {
        const fullscreenItems = document.querySelectorAll(".fullscreen");
        fullscreenItems.forEach(fullscreenItem => {
          fullscreenItem.classList.remove("fullscreen");
        });
      });
/* Articles fullscreen */


const colorPicker = document.querySelector('#color-picker');
const resetButton = document.querySelector('#reset-button');

// When the user selects a new color
colorPicker.addEventListener('input', (event) => {
  // Set the CSS variable to the chosen color
  document.documentElement.style.setProperty('--one-color', event.target.value);

  // Save the chosen color to local storage
  localStorage.setItem('one-color', event.target.value);
});

// When the reset button is clicked
resetButton.addEventListener('click', () => {
  // Remove the stored color from local storage
  localStorage.removeItem('one-color');

  // Reset the CSS variable to the default color
  document.documentElement.style.setProperty('--one-color', '#00ffe7');
  colorPicker.value = '#00ffe7';
});

// On page load
document.addEventListener('DOMContentLoaded', () => {
  // Check if there is a stored color in local storage
  const storedColor = localStorage.getItem('one-color');
  if (storedColor) {
    // Set the CSS variable to the stored color
    document.documentElement.style.setProperty('--one-color', storedColor);
    // Set the color picker value to the stored color
    colorPicker.value = storedColor;
  }
});



// FULLSCREEN SETTINGS
      // get the body element
      const bodyElement = document.querySelector('body');

      // get all the link elements with class "towards"
      const towardsLinks = document.querySelectorAll('.towards');

      // get all the link elements with class "close"
      const closeLinks = document.querySelectorAll('.close');

      // add click event listeners to all the towards links
      towardsLinks.forEach(link => {
        link.addEventListener('click', () => {
          // add class "yhidden" to the body element
          bodyElement.classList.add('yhidden');
        });
      });

      // add click event listeners to all the close links
      closeLinks.forEach(link => {
        link.addEventListener('click', () => {
          // remove class "yhidden" from the body element
          bodyElement.classList.remove('yhidden');
        });
      });
// FULLSCREEN SETTINGS



// SHARE BUTTON 
function jsshare() {
  // Get the text field
      // var copyText = document.getElementById("myInput");
  const tabContent = document.querySelector('.tabcontent');
  var TextToShare = "https://gamerwot9.github.io/HUB/" + tabContent.id;

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(TextToShare);

  // Alert the copied text
  alert("Copied the text: " + TextToShare);
}
// SHARE BUTTON 



  // Get all buttons with classname "share-article"
  const shareBtns = document.querySelectorAll('.share-article');

  // Loop through each button and add a click event listener
  shareBtns.forEach(shareBtn => {
    shareBtn.addEventListener('click', () => {
      // Get the ID of the parent tabcontent element
      const tabContentId = shareBtn.parentElement.id;
      const tabContent = document.getElementById(tabContentId);

      // Check if a tabcontent element with the specified ID exists
      if (tabContent) {
        // Create a temporary input element to hold the text
        const tempInput = document.createElement('input');
        const textToCopy = `https://gamerwot9.github.io/sti2dHUB/#${tabContentId}`;
        tempInput.setAttribute('value', textToCopy);
        document.body.appendChild(tempInput);

        // Select the text in the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text to the clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Notify the user that the text has been copied
        console.log('Copied to clipboard 📋: ' + textToCopy);
        alert('Copied to clipboard 📋: ' + textToCopy);
      } else {
        // If the tabcontent element with the specified ID doesn't exist, notify the user
        console.log('No tabcontent element found with ID... 😥 ' + tabContentId);
        alert('No tabcontent element found with ID... 😥 ' + tabContentId);
      }
    });
  });