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
        newDiv.setAttribute('class', 'link-container');

        const longLinkDisplay = document.createElement("p");
        longLinkDisplay.setAttribute('class', 'long-link');

        const shortLinkDisplay = document.createElement("p");
        shortLinkDisplay.setAttribute('class', 'short-link');

        const copyButton = document.createElement("button");
        copyButton.setAttribute('class', 'copy-button');

        copyButton.addEventListener('click', function copyToClipboard(){
            // Copy short link
            let shortLink = text.result.short_link;
            navigator.clipboard.writeText(shortLink);
            
            // Change button text (Copy -> Copied!)
            copyButton.innerText = 'Copied!'
            
            // Change button color
            copyButton.style.backgroundColor = "hsl(257, 27%, 26%)";
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

// Error handling:
linkSearch.addEventListener('click', function handleError(e) { 
    e.preventDefault();
    
    const inputField = document.querySelector('.link-input-section input');
    
    if (!inputField.validity.valid) {
        console.log('not valid');

        // 'Please add a link' text under input field
        const addALink = document.createElement("p");
        addALink.innerText = 'Please add a link';
        inputField.after(addALink);
        // Input field red border
        inputField.style.border = "3px solid hsl(0, 87%, 67%)";
        // 'Shorten a link here...' placeholder red
        inputField.style.setProperty("--c", "hsl(0, 87%, 67%)");


    } else {
        console.log('valid');
    }

})