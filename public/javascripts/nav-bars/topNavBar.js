
console.log("before topbuilnav in navbar.js")
function buildTopNavBar(categories, appState) {
    console.log("in builTopNavBar in navbar.js")
    const appTopNavBar = document.getElementById("app-top-navbar");
    while (appTopNavBar.firstChild) {
        appTopNavBar.removeChild(appTopNavBar.firstChild);
    }
//
    var navCategory = document.createElement("button");
    navCategory.textContent = "Home";
    navCategory.className = "btn-category";
    navCategory.id = "home";
    navCategory.style.color = "darkOrange"
    navCategory.style.fontSize = "30px"
    navCategory.style.margin = "0px"
    navCategory.style.float = "left";
    appTopNavBar.appendChild(navCategory)

    for (let i = 0; i < categories.length; i++) {
        var navCategory = document.createElement("button");
        navCategory.textContent = categories[i].title;
        navCategory.className = "btn-category";
        navCategory.id = categories[i].title;

        if (categories[i].id === appState[0]) {
            navCategory.style.backgroundColor = "orange"
        }
        appTopNavBar.appendChild(navCategory)
    }
}

console.log("after builTopNav in navbar.js");

export { buildTopNavBar };