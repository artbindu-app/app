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
  var birthDate= new Date();
   var  currentDate= new Date();
    var years = (currentDate.getFullYear() - birthDate.getFullYear());
    if (currentDate.getMonth() < birthDate.getMonth() || 
        currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
        years--;
    }
    return years;
}


function getOS() {
  const userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}
const os_name = getOS();
const reputation = myAPICalls();

function myAPICalls() {
  setTimeout(stackOverflowReputation, 1000);
  setTimeout(mediumBlogCounts, 1000);
}
function stackOverflowReputation() {
  const get_api = `https://stackoverflow.com/users/flair/10850045.json`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", get_api, true);
  xhr.withCredentials = false; // Include cookies
  // xhr.setRequestHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN");
  xhr.onload = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        data = JSON.parse(xhr.response);
        document.getElementById("stackoverflowReputation").innerHTML = data.reputation;
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = (e) => {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}
function mediumBlogCounts() {
  const get_api = `https://medium.com/feed/@artbindu`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", get_api, true);
  xhr.withCredentials = false; // Include cookies
  // xhr.setRequestHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN");
  xhr.onload = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xhr.response, "text/xml");
        document.getElementById("mediumBlogCounts").innerHTML = xmlDoc.getElementsByTagName("item").length;
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = (e) => {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

