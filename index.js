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


const linkSearch = document.getElementById('link-search');

linkSearch.addEventListener('submit', function (e) { 
    e.preventDefault();
    
    const formData = new FormData(this);
    longLink = formData.get('long-link')
    const linksContainer = document.querySelector('.links')

    fetch ('https://api.shrtco.de/v2/shorten?url=' + longLink) 
    .then(function (response) { 
        return response.json(); 
    })  

    
    .then(function(text) { 
        const newDiv = document.createElement("div");
        const longLinkDisplay = document.createElement("p");
        const shortLinkDisplay = document.createElement("p");
        const copyButton = document.createElement("button");

        longLinkDisplay.innerText = longLink;
        shortLinkDisplay.innerText = text.result.short_link;
        copyButton.innerText = 'copy';

        newDiv.append(longLinkDisplay, shortLinkDisplay, copyButton);
        linksContainer.append(newDiv);
    }) 

    .catch(function (error) { 
        console.error(error); 
    })
})