const website_list = document.getElementById("website-list");
const arrow = document.getElementById("arrow");

const all_websites = [
    {"title": "Sample", "url": "https://asa-kawa.github.io/Asa-kawaSample/"},
    {"title": "Index", "url": "https://asa-kawa.github.io/Asa-kawaIndex/"},
    {"title": "Tutorial", "url": "https://asa-kawa.github.io/Asa-kawaTutorial/"},
]

website_list.innerHTML = getWebsiteListContent();

document.getElementById("website-list-button").addEventListener("click", () => {
    website_list.classList.toggle("closed");
    arrow.classList.toggle("up");
    arrow.classList.toggle("down");
});

function password() {
    const _password = "Asa-kawa";
    const user_password = prompt("パスワードを入力してください");
    if (user_password == false || user_password == null) {
        alert("パスワードが入力されてません");
        password();
    } else if(user_password != _password) {
        alert("パスワードが間違ってます");
        password();
    } else {
        alert("パスワードが合ってます");
    }
}

function getWebsiteListContent() {
    let content = "";

    for(const website of all_websites) {
        content += `<a href=${website.url} class="content">${website.title}</a><br>`;
    }

    return content;
}

window.onload=password();
