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
    .then(function(response) { 
        return response.json(); 
    })  
    .then(function(text) { 
        const newDiv = document.createElement("div");
        const longLinkDisplay = document.createElement("p");
        longLinkDisplay.setAttribute('class', 'long-link');

        const shortLinkDisplay = document.createElement("p");
        shortLinkDisplay.setAttribute('class', 'short-link');

        const copyButton = document.createElement("button");
        copyButton.setAttribute('class', 'copy-button');

        copyButton.addEventListener('click', function copyToClipboard(){
            let shortLink = text.result.short_link;
            navigator.clipboard.writeText(shortLink);
            alert("Copied to the clipboard: " + shortLink);
        });

        longLinkDisplay.innerText = longLink;
        shortLinkDisplay.innerText = text.result.short_link;
        copyButton.innerText = 'Copy';
        
        newDiv.append(longLinkDisplay, shortLinkDisplay, copyButton);
        linksContainer.append(newDiv);
    }) 
    
    .catch(function(error) { 
        console.error(error); 
    })
})