// ==========================================
// navigation.js
// Handles page navigation and sidebar
// ==========================================

const pages = [
    "index.html",
    "push-a.html",
    "pull-a.html",
    "legs.html",
    "push-b.html",
    "pull-b.html",
    "library.html"
];

const pageNames = {
    "index.html": "Dashboard",
    "push-a.html": "Push A",
    "pull-a.html": "Pull A",
    "legs.html": "Legs",
    "push-b.html": "Push B",
    "pull-b.html": "Pull B",
    "library.html": "Exercise Library"
};

// -----------------------------
// Current Page
// -----------------------------

function currentPageIndex() {

    const page =
        window.location.pathname.split("/").pop() || "index.html";

    return pages.indexOf(page);

}

// -----------------------------
// Next Page
// -----------------------------

function nextWorkout() {

    const current = currentPageIndex();

    if (current < pages.length - 2) {

        location.href = pages[current + 1];

    }

}

// -----------------------------
// Previous Page
// -----------------------------

function previousWorkout() {

    const current = currentPageIndex();

    if (current > 0) {

        location.href = pages[current - 1];

    }

}

// -----------------------------
// Sidebar Highlight
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {

    const current =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".sidebar a").forEach(link => {

        if (link.getAttribute("href") === current) {

            link.classList.add("active");

        }

    });

});

// -----------------------------
// Keyboard Shortcuts
// -----------------------------

document.addEventListener("keydown", (e) => {

    // Ignore typing inside inputs
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;

    switch (e.key.toLowerCase()) {

        case "arrowright":
            nextWorkout();
            break;

        case "arrowleft":
            previousWorkout();
            break;

        case "d":
            location.href = "index.html";
            break;

        case "1":
            location.href = "push-a.html";
            break;

        case "2":
            location.href = "pull-a.html";
            break;

        case "3":
            location.href = "legs.html";
            break;

        case "4":
            location.href = "push-b.html";
            break;

        case "5":
            location.href = "pull-b.html";
            break;

        case "l":
            location.href = "library.html";
            break;

    }

});

// -----------------------------
// Mobile Menu
// -----------------------------

function toggleSidebar() {

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    sidebar.classList.toggle("show");

}

// -----------------------------
// Breadcrumb
// -----------------------------

function updatePageTitle() {

    const page =
        window.location.pathname.split("/").pop() || "index.html";

    const title = document.getElementById("pageTitle");

    if (title) {

        title.innerHTML = pageNames[page];

    }

}

document.addEventListener("DOMContentLoaded", updatePageTitle);

// -----------------------------
// Navigation Buttons
// -----------------------------

function createNavigationButtons() {

    const container = document.getElementById("pageNavigation");

    if (!container) return;

    container.innerHTML = `
        <button onclick="previousWorkout()">⬅ Previous</button>
        <button onclick="location.href='index.html'">🏠 Dashboard</button>
        <button onclick="nextWorkout()">Next ➡</button>
    `;

}

document.addEventListener(
    "DOMContentLoaded",
    createNavigationButtons
);

console.log("✅ Navigation Loaded");
