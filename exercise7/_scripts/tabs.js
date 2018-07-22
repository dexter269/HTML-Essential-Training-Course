//Tabbed panels
    
//Declare globals to hold all the links and all the panel elements
var tabLinks;
var tabPanels;
    
window.onload = function() {
//When the page loads, grab the li elements
tabLinks = document.getElementById("tabs").getElementsByTagName("li");
//Now get all the tab panel container divs
tabPanels = document.getElementById("containers").getElementsByTagName("div");
//Activate the _first_one
displayPanel(tabLinks[0]);
//Attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function() {
            displayPanel(this);
            return false;
        }
        tabLinks[i].onfocus = function() {
            displayPanel(this);
            return false;
        }
    }
}

function displayPanel(tabToActivate) {
    //Go through all the <li> elements
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
            //If it's the one change its class
            tabLinks[i].classList.add("active");
            //Display the corresponding panel
            tabPanels[i].style.display = "block";
        } else {
            //Remove the active class on the link
            tabLinks[i].classList.remove("active");
            //Hide the panel
            tabPanels[i].style.display = "none";
        }
    }
}