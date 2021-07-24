import { buildNavBar } from "./navbar.js";
import {buildTopNavBar} from "./topNavBar.js";
import { buildMainContent } from "./mainContent.js";
import { categories } from './contentObject.js';


console.log("getting in stateManagement.js")

var appState = {
    category: "softwareDesign",
    section: "designPrinciple",
    content: "flexible"
}


console.log("calling buildSideNav in main.js")
buildNavBar(appState)
console.log("return from buildSideNav in main.js")

console.log("calling builMainContent in main.js")
let mainContent = getMainContent(appState)
buildMainContent(mainContent)
console.log("return from builMainContent in main.js")

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches(".btn-element")) {
            e.preventDefault();
            appState.content = e.target.id;
            buildTopNavBar(appState);
            buildNavBar(appState);

            let mainContent = getMainContent(appState)
            buildMainContent(mainContent)
        }
        if (e.target.matches(".btn-section")) {
            e.preventDefault();
            appState.section = e.target.id;
            buildTopNavBar(appState);
            buildNavBar(appState);
        }
        if (e.target.matches(".btn-category")) {
            e.preventDefault();
            appState.category = e.target.id;
            appState.section = categories[0];
            console.log(appState.section)
            buildTopNavBar(appState);
            buildNavBar(appState);

            let mainContent = getMainContent(appState)
            buildMainContent(mainContent)
        }
    });
});

function getMainContent(updatedAppState) {
    const category = categories[updatedAppState.category]
    const section = category.subjects[updatedAppState.section]
    var content = section.contents[updatedAppState.content]
    let resultContent = {
        title: section.contents[updatedAppState.content].title,
        content: section.contents[updatedAppState.content].text
    }
    return resultContent
}







console.log("getting out of statManagement.js")