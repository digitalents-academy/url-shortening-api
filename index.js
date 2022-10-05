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


const Link_search = document.getElementById('link-search');

Link_search.addEventListener('submit', function (e) { 
    e.preventDefault();

const Formdata = new FormData(this);
const url =   document.getElementById('long-link').value

console.log(url)
fetch (' https://api.shrtco.de/v2/shorten?url=' + url
    
) .then(function (response) { 
    return response.json(); 
})  .then(function (text) { 
    // console.log (text.result.short_link); 
    const Link_search =  document.createTextNode ('text.result.short_link')

})    .catch(function (error) { 
   console.error(error); 
})
    
})