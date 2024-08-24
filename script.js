
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
// Copy Link
function myLink() {
    var dropdown = document.getElementById("myLink");
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    var value = selectedOption.value;
    var text = selectedOption.text;

    var value1 = dropdown.value;
    navigator.clipboard.writeText(value);

    //when myLink is clicked icon will change to check
    var icon = document.getElementById("linkCopied");
    icon.className = "fa fa-check";
    //after 2 seconds icon will change back to copy
    setTimeout(function () {
        icon.className = "fa fa-copy";
    }
        , 2000);
}

// Copy Department
function myDepartment() {
    var dropdown = document.getElementById("myDepartment");
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    var value = selectedOption.value;
    var text = selectedOption.text;

    var value1 = dropdown.value;
    navigator.clipboard.writeText(value);



   if (value1 == "Choose Department...") {
        alert("Please select a Department to copy.");
        return;
    }   
    alert("Copied " + text + " : " + value);
}

// Copy Osp
function myOsp() {
    var dropdown = document.getElementById("myOsp");
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    var value = selectedOption.value;
    var text = selectedOption.text;

    var value1 = dropdown.value;
    navigator.clipboard.writeText(value);



   if (value1 == "Choose Old Provider...") {
        alert("Please select a Old Provider to copy.");
        return;
    }   
    alert("Copied " + text + " : " + value);
}

//state
function searchState() {
    var state = document.getElementById("searchState").value;
    var text;
//lower case    

    // If timezone is pst
    if (state === "California" || state === "Oregon" || state === "Washington"
        || state === "Nevada") {
        text = "PACIFIC TIME (PST)";
        alert(state + " is " + text);


    } else if (state === "california" || state === "oregon" || state === "washington"
        || state === "nevada") {
        text = "PACIFIC TIME (PST)";
        alert(state + " is " + text);

        // If timezone is cst
    } else if (state === "Alabama" || state === "Arkansas" || state === "Illinois"
        || state === "Iowa" || state === "Louisiana" || state === "Minnesota"
        || state === "Mississippi" || state === "Missouri " || state === "Wisconsin"
        || state === "Texas" || state === "Nebraska" || state === "South Dakota"
        || state === "North Dakota" || state === "Oklahoma") {
        text = "CENTRAL TIME (CDT)";
        alert(state + " is " + text);

    } else if (state === "alabama" || state === "arkansas" || state === "illinois"
        || state === "iowa" || state === "louisiana" || state === "minnesota"
        || state === "mississippi" || state === "missouri " || state === "wisconsin"
        || state === "texas" || state === "nebraska" || state === "south dakota"
        || state === "north dakota" || state === "oklahoma") {
        text = "CENTRAL TIME (CDT)";
        alert(state + " is " + text);

        // If timezone is eastern
    } else if (state === "Maine" || state === "Maryland" || state === "Massachusetts"
        || state === "New Hampshire" || state === "New Jersey" || state === "New York"
        || state === "Connecticut" || state === "Delaware" || state === "Georgia"
        || state === "North Carolina" || state === "Vermont" || state === "Virginia"
        || state === "West Virginia" || state === "Ohio" || state === "Pennsylvania"
        || state === "Rhode Island" || state === "South Carolina" || state === "Tennessee"
        || state === "Florida" || state === "Indiana" || state === "Kentucky"
        || state === "Michigan") {
        text = "EASTERN TIME (EDT)";
        alert(state + " is " + text);

    } else if (state === "maine" || state === "maryland" || state === "massachusetts"
        || state === "new nampshire" || state === "new jersey" || state === "new york"
        || state === "connecticut" || state === "delaware" || state === "georgia"
        || state === "north carolina" || state === "vermont" || state === "virginia"
        || state === "west virginia" || state === "ohio" || state === "pennsylvania"
        || state === "rhode island" || state === "south carolina" || state === "cennessee"
        || state === "florida" || state === "indiana" || state === "kentucky"
        || state === "michigan") {
        text = "EASTERN TIME (EDT)";
        alert(state + " is " + text);

        // If timezone is mdt
    } else if (state === "Arizona" || state === "Colorado" || state === "Montana"
        || state === "New Mexico" || state === "Utah" || state === "Wyoming") {
        text = "MOUNTAIN TIME (MDT)";
        alert(state + " is " + text);

    } else if (state === "arizona" || state === "colorado" || state === "montana"
        || state === "new Mexico" || state === "utah" || state === "wyoming") {
        text = "MOUNTAIN TIME (MDT)";
        alert(state + " is " + text);

    } else if (state === "") {
        text = "Required Field is missing";
        alert(text);



        // If the State is anything else
    } else {
        text = "No records found ";
        alert(text + " for " + state);
    }
    document.getElementById("searchState").innerHTML = text;
}



// copy timer
function copyTimer() {
    var timerText = document.getElementById("timer").innerText;
    navigator.clipboard.writeText(timerText);
    //will change to check icon
    var icon = document.getElementById("copyTime");
    icon.className = "fa fa-check";
    //after 2 seconds icon will change back to copy and pop over will close
    setTimeout(function () {
        icon.className = "fa fa-copy";
    }
        , 2000);
    // alert("Total time: " + timerText);
}


