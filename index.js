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
const inputField = document.querySelector('.link-input-section input');

linkSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputField.value) {
        addData();
    } else {
        errorMessage();
    }
})

function addData() {
    let longLink = inputField.value
    const linksContainer = document.querySelector('.links')

    fetch ('https://api.shrtco.de/v2/shorten?url=' + longLink) 
    .then(function(response) { 
        return response.json(); 
    })  
    .then(function(text) { 

        // Create elements
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'link-container');

        const longLinkDisplay = document.createElement("p");
        longLinkDisplay.setAttribute('class', 'long-link');

        const shortLinkDisplay = document.createElement("p");
        shortLinkDisplay.setAttribute('class', 'short-link');

        const copyButton = document.createElement("button");
        copyButton.setAttribute('class', 'copy-button');

        // Copy button functionality
        copyButton.addEventListener('click', function copyToClipboard(){
            let shortLink = text.result.short_link;
            navigator.clipboard.writeText(shortLink);
            copyButton.innerText = 'Copied!'
            copyButton.style.backgroundColor = "hsl(257, 27%, 26%)";
        });

        // Add values
        longLinkDisplay.innerText = longLink;
        shortLinkDisplay.innerText = text.result.short_link;
        copyButton.innerText = 'Copy';
        
        // Add to page
        newDiv.append(longLinkDisplay, shortLinkDisplay, copyButton);
        linksContainer.append(newDiv);
    }) 
    .catch(function(error) { 
        console.error(error); 
    })
}

function errorMessage() {
    if (linkSearch.querySelector('p') === null) {

        // 'Please add a link' text
        const addALink = document.createElement("p");
        addALink.innerText = 'Please add a link';
        inputField.after(addALink);
    
        // Red border
        inputField.style.border = "3px solid hsl(0, 87%, 67%)";
    
        // Placeholder red
        inputField.style.setProperty("--c", "hsl(0, 87%, 67%)");
    }
}