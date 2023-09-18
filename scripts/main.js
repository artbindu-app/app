// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  $('#ageId').html(getAge());
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  getAge();
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


function getAge(){
  var birthDate= new Date('1993-05-01');
   var  currentDate= new Date();
    var years = (currentDate.getFullYear() - birthDate.getFullYear());
    if (currentDate.getMonth() < birthDate.getMonth() || 
        currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
        years--;
    }
    return years;
}

var data = {
  header_name: "Biswasindhu Mandal",
  header_info: "Full Stack Developer, OTT Front End Developer",
  about: {
    about_p1: "",
    about_p2: ""
  },
  skills: {
    
  }
}