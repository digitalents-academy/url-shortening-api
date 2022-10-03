
 


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