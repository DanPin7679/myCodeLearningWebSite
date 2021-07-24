import {buildMainContent} from "./mainContent.js";

console.log("before builnav in navbar.js")


function buildNavBar(subjects, contents, appState) {
    console.log("in builnav in navbar.js")

    var selectedContent = 0
    const appNavBar = document.getElementById("app-navbar");
    while (appNavBar.firstChild) {
        appNavBar.removeChild(appNavBar.firstChild);
    }

    for (let i = 0; i < subjects.length; i++) {
        var navSection = document.createElement("button");
        navSection.textContent = subjects[i].title;
        navSection.className = "btn-section";
        navSection.id = subjects[i].title
        appNavBar.appendChild(navSection)

        if (subjects[i].id === appState[1]) {
            for (let i = 0; i < contents.length; i++) {
                var navElement = document.createElement("button");
                navElement.textContent = contents[i].title;
                navElement.className = "btn-element";
                navElement.id = contents[i].title

                if (contents[i].id  === appState[2]) {
                    navElement.style.backgroundColor = "orange"
                    selectedContent = i
                }
                appNavBar.appendChild(navElement)
            }
        }
    }
    // console.log(selectedContent)
    buildMainContent(contents[selectedContent])
}
console.log("after builnav in navbar.js");

export { buildNavBar };




