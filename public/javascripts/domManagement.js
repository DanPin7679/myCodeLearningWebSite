import {buildTopNavBar} from "./nav-bars/topNavBar.js";
import {buildNavBar} from "./nav-bars/navbar.js";

function getCategories(appState) {
    var categories = [];
    (async () => {
        const data = await fetch('http://127.0.0.1:8000/learning/category/')
            .then(response => response.json());
        for (let i = 0; i < data.length; i++) {
            categories.push(data[i]);
        }
        buildTopNavBar(categories, appState);
        getSubjects(appState)
    })();
}
function getSubjects(appState) {
    var subjects = [];
    (async () => {
        let category = appState[0]
        const data = await fetch('http://127.0.0.1:8000/learning/category/subject/'+category)
            .then(response => response.json());
        for (let i = 0; i < data.length; i++) {
            subjects.push(data[i]);
        }
        getContents(subjects, appState)

    })();
}
function getContents(subjects, appState) {
    var contents = [];
    (async () => {
        let subject = appState[1]
        const data = await fetch('http://127.0.0.1:8000/learning/subject/content/'+subject)
            .then(response => response.json());
        for (let i = 0; i < data.length; i++) {
            contents.push(data[i]);
        }
        buildNavBar(subjects, contents, appState);
    })();
}

export { getCategories };