const website_list = document.getElementById("website-list");
const arrow = document.getElementById("website-list-arrow");

const all_websites = [
    {"title": "Sample", "url": "https://asa-kawa.github.io/Asa-kawaSample/"},
    {"title": "Index", "url": "https://asa-kawa.github.io/Asa-kawaIndex/"},
    {"title": "Tutorial", "url": "https://asa-kawa.github.io/Asa-kawaTutorial/"},
    {"title": "Password", "url": "https://asa-kawa.github.io/Asa-kawaPassword/"},
    {"title": "TextReader", "url": "https://asa-kawa.github.io/Asa-kawaTextReader/"},
    {"title": "next-js", "url": "https://asa-kawa.github.io/asa-kawa-next-js/"},
    {"title": "text-reader-next-js", "url": "https://asa-kawa.github.io/asa-kawa-text-reader-next-js/"}
]

initWebsiteList();

document.getElementById("website-list-button").addEventListener("click", () => {
    website_list.classList.toggle("closed");
    arrow.classList.toggle("up");
    arrow.classList.toggle("down");
});

function initWebsiteList() {
    for(const website of all_websites) {
        html = `<a href="${website.url}" target="_blank" class="website-list-content">${website.title}</a><br>`;
        website_list.innerHTML += html;
    }
}