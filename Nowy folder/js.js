document.addEventListener("DOMContentLoaded", function () {
    // Pobralem kuki ciasteczek
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // Ustawilem tutaj kuki(czesc z czasteczkami byla zrobiona przez kopilota bo nie ogarniam kuki)
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }
    let visitCount = parseInt(getCookie("visitCount")) || 0;
    let clickCount = 0;
    let lastVisit = getCookie("lastVisit") || "Brak danych";
    document.getElementById("visit-count").textContent = visitCount;
    document.getElementById("last-visit").textContent = lastVisit;
    visitCount++;
    setCookie("visitCount", visitCount, 30);
    setCookie("lastVisit", new Date().toLocaleString(), 30);
    document.getElementById("click-button").addEventListener("click", function () {
        clickCount++;
        document.getElementById("click-count").textContent = clickCount;
    });
    document.getElementById("reset-all").addEventListener("click", function () {
        document.cookie = "visitCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "lastVisit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    });
    document.getElementById("reset-visits").addEventListener("click", function () {
        setCookie("visitCount", 0, 30);
        location.reload();
    });
    document.getElementById("reset-clicks").addEventListener("click", function () {
        clickCount = 0;
        document.getElementById("click-count").textContent = clickCount;
    });
});
