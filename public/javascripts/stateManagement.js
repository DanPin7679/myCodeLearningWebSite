import { getCategories} from "./domManagement.js";


console.log("getting in stateManagement.js")

var appState = [2,1,3]

getCategories(appState)


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches(".btn-element")) {
            e.preventDefault();
            appState[2] = 2;
            getCategories(appState);
        }
        if (e.target.matches(".btn-section")) {
            e.preventDefault();
            appState[1] = 2;
            getCategories(appState);
        }
        if (e.target.matches(".btn-category")) {
            e.preventDefault();
            appState[0] = 2;
            appState[1] = 2;
            getCategories(appState);
        }
    });
});

console.log("getting out of statManagement.js")