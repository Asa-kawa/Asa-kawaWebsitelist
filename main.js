const website_list = document.getElementById("website-list");
const arrow = document.getElementById("arrow");

const all_websites = [
    {"title": "Sample", "url": "https://asa-kawa.github.io/Asa-kawaSample/"},
    {"title": "Index", "url": "https://asa-kawa.github.io/Asa-kawaIndex/"},
    {"title": "Tutorial", "url": "https://asa-kawa.github.io/Asa-kawaTutorial/"},
    {"title": "Password", "url": "https://asa-kawa.github.io/Asa-kawaPassword/"}
]

website_list.innerHTML = getWebsiteListContent();

document.getElementById("website-list-button").addEventListener("click", () => {
    website_list.classList.toggle("closed");
    arrow.classList.toggle("up");
    arrow.classList.toggle("down");
});

function getWebsiteListContent() {
    let content = "";

    for(const website of all_websites) {
        content += `<a href=${website.url} class="content">${website.title}</a><br>`;
    }

    return content;
}