//that responsive three dots wala section starts

document.addEventListener('DOMContentLoaded', function() {
    let menuBtn = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .flex .navbar');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
});
//that responsive three dots wala section ends

//==============================================================
                //info form section starts
//==============================================================
const schools = [
    "NMIMS, Mumbai",
    "NMIMS, Shirpur",
    "RC Patel, Shirpur",
    "D.Y. Patil, Pune",
    "Sandeep University, Nashik",
    "Fergusson College, Pune"
];

const courses = [
    "Engineering",
    "Pharmacy",
    "BCA",
    "Pharmatech",
    "BSc"
];

function filterSuggestions(type) {
    const input = document.getElementById(type).value.toLowerCase();
    const suggestionsDiv = document.getElementById(`${type}-suggestions`);
    suggestionsDiv.innerHTML = '';

    const list = type === 'school' ? schools : courses;

    if (input) {
        const filteredList = list.filter(item => 
            item.toLowerCase().includes(input)
        );
        
        const suggestionsList = document.createElement('div');
        suggestionsList.classList.add('suggestions-list');
        
        filteredList.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = item;
            suggestionItem.onclick = () => {
                document.getElementById(type).value = item;
                suggestionsDiv.innerHTML = '';
            };
            suggestionsList.appendChild(suggestionItem);
        });

        suggestionsDiv.appendChild(suggestionsList);
    }
}

function checkAndRedirect() {
    const school = document.getElementById('school').value.trim().toLowerCase();
    const course = document.getElementById('course').value.trim().toLowerCase();

    if (school === "nmims, shirpur" && course === "engineering") {
        window.location.href = '/html/selectbranch.html'; //give a page location her where you want to reach
    } else {
        alert("Please enter valid 'University/College' and 'Course'.");
    }
}

//==============================================================
                //info form section ends
//==============================================================



//==============================================================
                 //search bar section starts
//==============================================================

const searchBox = document.getElementById('search');
const suggestions = document.getElementById('search-suggestions');

searchBox.addEventListener('focus', () => {
    suggestions.classList.add('active');
});

searchBox.addEventListener('blur', () => {
    setTimeout(() => {
        suggestions.classList.remove('active');
    }, 100); // Delay to allow click event on suggestion items
});

const suggestionItems = suggestions.querySelectorAll('li');
suggestionItems.forEach(item => {
    item.addEventListener('mousedown', () => {
        searchBox.value = item.textContent;
        suggestions.classList.remove('active');
    });
});
//==============================================================
                 //search bar section ends
//==============================================================


//card slider secrion starts
const wrapper = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".slider i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

///card slider secrion ends

const phrases = [
    "𝕿𝖍𝖊 𝕾𝖚𝖈𝖈𝖊𝖘𝖘.!",
    "Assignment",
    "Tutorials",
    "Notes",
    "Lectures",
    "All"
  ];
  
  const typingElement = document.querySelector('.typing');
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let delay = 200;
  
  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
      typingElement.textContent = currentPhrase.slice(0, currentCharIndex--);
    } else {
      typingElement.textContent = currentPhrase.slice(0, currentCharIndex++);
    }
  
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      delay = 1000; // Pause before deleting
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      delay = 200;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  
    setTimeout(type, isDeleting ? 100 : 200);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, delay);
  });
  
  //typing effect starts//


  // testimonial reviews-slider section starts//

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: { // correct property name
        delay: 2500, // 2.5 seconds
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


 //testimonial reviews-slider section ends//
 