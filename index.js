function showNav() {
  const navDropDown = document.querySelector(".nav-dropdown");
  document.getElementById('hide-image').style.visibility='hidden';
  let displayStatus = navDropDown.style.display
  if (displayStatus === "none" || displayStatus === "") {
    navDropDown.style.display = "block";
    document.getElementById('hide-image').style.visibility='hidden';
  } else {
    navDropDown.style.display = "none";
    document.getElementById('hide-image').style.visibility='visible';
  }
}

document.querySelector('.link-input-section').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let longLink = formData.get('long-link');
});

// Next: send long link to API and retrieve short link





const Link_search = document.getElementById('link-search');

Link_search.addEventListener('submit', function (e) { 
    e.preventDefault();

    const Formdata = new FormData(this);

    fetch (' https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html'
    
) .then(function (response) { 
    return response.text(); 
})  .then(function (text) { 
    console.log (text); 
})    .catch(function (error) { 
   console.error(error); 
})
    
})