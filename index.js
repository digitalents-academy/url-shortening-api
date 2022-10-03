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
    console.log(formData.get('long-link'));
});

// Next: send long link to API and retrieve short link