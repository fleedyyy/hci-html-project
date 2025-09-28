const toggleMenuOpen = () => document.body.classList.toggle("open");

const container = document.getElementById('container');
const viewerBtn = document.getElementById('viewer');
const creatorBtn = document.getElementById('creator');

viewerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

creatorBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validateDataViewer() {

    var viewerName = document.getElementById("viewerName").value;
    var viewerEmail = document.getElementById("viewerEmail").value;
    var viewerDay = document.getElementById("viewerDay").value;
    var viewerMonth = document.getElementById("viewerMonth").value;
    var viewerYear = document.getElementById("viewerYear").value;
    var viewerMale = document.getElementById("viewerMale");
    var viewerFemale = document.getElementById("viewerFemale");
    var viewerAgreement = document.getElementById("viewerAgreement");

    if (viewerName.length < 5) {

        alert("Name must have at least 5 characters.");

    } else if (!viewerEmail.includes("@")) {

        alert("Please enter a valid email address.");

    } else if (viewerYear < 1900 || viewerMonth > 12 || viewerMonth < 1 || viewerDay > 31 || viewerDay < 1) {

        alert("Please enter a valid date.");

    } else if (isNaN(viewerYear) || isNaN(viewerMonth) || isNaN(viewerDay)) {

        alert("Please enter a valid date.");

    } else if (viewerYear > 2006 && viewerMonth > 6) {

        alert("You must be at least 18 years old to register.");

    } else if (!viewerMale.checked && !viewerFemale.checked) {

        alert("Please select your gender.");

    } else if (!viewerAgreement.checked) {

        alert("Agreement must be checked in order to continue.");

    } else {

        alert("Viewer Registration Successful!");

    }
}

function validateDataCreator() {

    var creatorName = document.getElementById("creatorName").value;
    var creatorEmail = document.getElementById("creatorEmail").value;
    var creatorDay = document.getElementById("creatorDay").value;
    var creatorMonth = document.getElementById("creatorMonth").value;
    var creatorYear = document.getElementById("creatorYear").value;
    var creatorMale = document.getElementById("creatorMale");
    var creatorFemale = document.getElementById("creatorFemale");
    var creatorAgreement = document.getElementById("creatorAgreement");

    if (creatorName.length < 5) {

        alert("Name must have at least 5 characters.");

    } else if (!creatorEmail.includes("@")) {

        alert("Please enter a valid email address.");

    } else if (creatorYear < 1900 || creatorMonth > 12 || creatorMonth < 1 || creatorDay > 31 || creatorDay < 1) {

        alert("Please enter a valid date.");

    } else if (isNaN(creatorYear) || isNaN(creatorMonth) || isNaN(creatorDay)) {

        alert("Please enter a valid date.");

    } else if (creatorYear > 2006) {

        alert("You must be at least 18 years old to register.");

    } else if (!creatorMale.checked && !creatorFemale.checked) {

        alert("Please select your gender.");

    } else if (!creatorAgreement.checked) {

        alert("Agreement must be checked in order to continue.");

    } else {

        alert("Creator Registration Successful!");

    }
}