

console.log("before buildMainContent in mainContent.js")
function buildMainContent(mainContent) {
    console.log("in buildMainContent in in mainContent.js")

    const app = document.getElementById("app");

    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }

    const newTitle = document.createElement("h1");
    newTitle.textContent = mainContent.title;
    app.appendChild(newTitle);

    const newContent = document.createElement("p");
    newContent.textContent = mainContent.description;
    app.appendChild(newContent);
}

console.log("after buildMainContent in mainContent.js")

export { buildMainContent };

