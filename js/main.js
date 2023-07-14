function infoButton(){
    document.getElementById("infobutton").classList.add("buttonnormal");
    document.getElementById("profilesbutton").classList.add("buttongray");
    document.getElementById("interestsbutton").classList.add("buttongray");

    document.getElementById("infobutton").classList.remove("buttongray");
    document.getElementById("profilesbutton").classList.remove("buttonnormal");
    document.getElementById("interestsbutton").classList.remove("buttonnormal");

    shrinkBar();
    expandInfo();
    closeInterests();
    closeProfiles();
}

function profilesButton(){
    document.getElementById("infobutton").classList.add("buttongray");
    document.getElementById("profilesbutton").classList.add("buttonnormal");
    document.getElementById("interestsbutton").classList.add("buttongray");

    document.getElementById("infobutton").classList.remove("buttonnormal");
    document.getElementById("profilesbutton").classList.remove("buttongray");
    document.getElementById("interestsbutton").classList.remove("buttonnormal");

    shrinkBar();
    expandProfiles();
    closeInfo()
    closeInterests();
}

function interestsButton(){
    document.getElementById("infobutton").classList.add("buttongray");
    document.getElementById("profilesbutton").classList.add("buttongray");
    document.getElementById("interestsbutton").classList.add("buttonnormal");

    document.getElementById("infobutton").classList.remove("buttonnormal");
    document.getElementById("profilesbutton").classList.remove("buttonnormal");
    document.getElementById("interestsbutton").classList.remove("buttongray");

    shrinkBar();
    expandInterests();
    closeInfo();
    closeProfiles();
}

function homeButton(){
    document.getElementById("infobutton").classList.add("buttonnormal");
    document.getElementById("profilesbutton").classList.add("buttonnormal");
    document.getElementById("interestsbutton").classList.add("buttonnormal");

    document.getElementById("infobutton").classList.remove("buttongray");
    document.getElementById("profilesbutton").classList.remove("buttongray");
    document.getElementById("interestsbutton").classList.remove("buttongray");

    maximizeBar();
    closeInfo();
    closeProfiles();
    closeInterests();
}

function expandInfo(){
    document.getElementById("infotab").classList.add("tabopen");
    document.getElementById("infoTitle").classList.add("titleopen");
    document.getElementById("information").classList.add("contentopen");

    document.getElementById("infotab").classList.remove("tab");
    document.getElementById("infoTitle").classList.remove("title");
    document.getElementById("information").classList.remove("content");
}

function closeInfo(){
    document.getElementById("infotab").classList.add("tab");
    document.getElementById("infoTitle").classList.add("title");
    document.getElementById("information").classList.add("content");

    document.getElementById("infotab").classList.remove("tabopen");
    document.getElementById("infoTitle").classList.remove("titleopen");
    document.getElementById("information").classList.remove("contentopen");
}

function expandProfiles(){
    document.getElementById("profiletab").classList.add("tabopen");
    document.getElementById("profileTitle").classList.add("titleopen");
    document.getElementById("profiles").classList.add("contentopen");

    document.getElementById("profiletab").classList.remove("tab");
    document.getElementById("profileTitle").classList.remove("title");
    document.getElementById("profiles").classList.remove("content");
}

function closeProfiles(){
    document.getElementById("profiletab").classList.add("tab");
    document.getElementById("profileTitle").classList.add("title");
    document.getElementById("profiles").classList.add("content");

    document.getElementById("profiletab").classList.remove("tabopen");
    document.getElementById("profileTitle").classList.remove("titleopen");
    document.getElementById("profiles").classList.remove("contentopen");
}

function expandInterests(){
    document.getElementById("intereststab").classList.add("tabopen");
    document.getElementById("interestsTitle").classList.add("titleopen");
    document.getElementById("interests").classList.add("contentopen");

    document.getElementById("intereststab").classList.remove("tab");
    document.getElementById("infoTitle").classList.remove("title");
    document.getElementById("interests").classList.remove("content");
}

function closeInterests(){
    document.getElementById("intereststab").classList.add("tab");
    document.getElementById("interestsTitle").classList.add("title");
    document.getElementById("interests").classList.add("content");

    document.getElementById("intereststab").classList.remove("tabopen");
    document.getElementById("interestsTitle").classList.remove("titleopen");
    document.getElementById("interests").classList.remove("contentopen");
}

function shrinkBar ()
{
    var sub = document.getElementById('sub');
    var pfp = document.getElementById('pfp');
    var name = document.getElementById('name');
    var description = document.getElementById('description');
    var buttons = document.getElementById('buttons');

    sub.style.height = "203px";
    sub.style.transform = "translate(-0.6%, -1.9%)";
    sub.style.margin = "0px";

    pfp.classList.add("pfpsmall")
    pfp.classList.remove("pfp")

    name.style.transform = "translate(-220%, -185%)";
    name.style.textAlign = "left";
    name.style.display = "inline-block";

    description.style.color = "transparent";
    description.style.fontSize = "0px";

    buttons.style.transform = "translate(0%, -175%)";
}

function maximizeBar ()
{
    var sub = document.getElementById('sub');
    var pfp = document.getElementById('pfp');
    var name = document.getElementById('name');
    var description = document.getElementById('description');
    var buttons = document.getElementById('buttons');

    sub.style.height = "434px";
    sub.style.transform = "translate(-0.5%, -1%)";
    
    pfp.classList.add("pfp")
    pfp.classList.remove("pfpsmall")
    
    name.style.transform = "translate(0%, 0%)";
    name.style.textAlign = "left";
    name.style.display = "inline-block";

    description.style.color = "white";
    description.style.fontSize = "25px";

    sub.style.margin = "auto";

    buttons.style.transform = "translate(0%, 32%)";
}