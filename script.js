"use strict";

const toGithubBtn = document.querySelector("[to-github-btn]");
toGithubBtn.addEventListener(
    "click",
    function () {
        window.location.href="https://github.com/K1y0t4k4";
    }
);

const hrefs = ["https://www.facebook.com", "https://x.com", "https://www.instagram.com", "https://www.youtube.com"]
const icons = document.querySelectorAll("[icon]");
for (let i=0; i < icons.length; i++) {
    icons[i].addEventListener(
        "click",
        function () {
            window.location.href=hrefs[i]
        }
    );
}