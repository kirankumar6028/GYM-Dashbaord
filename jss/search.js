// ==========================================
// search.js
// Global Exercise Search & Filters
// ==========================================

const searchInput = document.getElementById("exerciseSearch");
const muscleFilter = document.getElementById("muscleFilter");
const equipmentFilter = document.getElementById("equipmentFilter");
const difficultyFilter = document.getElementById("difficultyFilter");

const exerciseCards = document.querySelectorAll(".exercise-card");

// ===============================
// Search Function
// ===============================

function filterExercises() {

    const search =
        searchInput ? searchInput.value.toLowerCase() : "";

    const muscle =
        muscleFilter ? muscleFilter.value : "all";

    const equipment =
        equipmentFilter ? equipmentFilter.value : "all";

    const difficulty =
        difficultyFilter ? difficultyFilter.value : "all";

    exerciseCards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const primary =
            card.dataset.muscle;

        const equip =
            card.dataset.equipment;

        const level =
            card.dataset.level;

        const matchesSearch =
            name.includes(search);

        const matchesMuscle =
            muscle === "all" ||
            muscle === primary;

        const matchesEquipment =
            equipment === "all" ||
            equipment === equip;

        const matchesDifficulty =
            difficulty === "all" ||
            difficulty === level;

        if (
            matchesSearch &&
            matchesMuscle &&
            matchesEquipment &&
            matchesDifficulty
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

// ===============================
// Event Listeners
// ===============================

if (searchInput)
    searchInput.addEventListener("keyup", filterExercises);

if (muscleFilter)
    muscleFilter.addEventListener("change", filterExercises);

if (equipmentFilter)
    equipmentFilter.addEventListener("change", filterExercises);

if (difficultyFilter)
    difficultyFilter.addEventListener("change", filterExercises);

// ===============================
// Clear Filters
// ===============================

function clearFilters() {

    if (searchInput)
        searchInput.value = "";

    if (muscleFilter)
        muscleFilter.value = "all";

    if (equipmentFilter)
        equipmentFilter.value = "all";

    if (difficultyFilter)
        difficultyFilter.value = "all";

    filterExercises();

}

// ===============================
// Search Statistics
// ===============================

function updateSearchCount() {

    const visible =
        [...exerciseCards].filter(
            c => c.style.display !== "none"
        ).length;

    const counter =
        document.getElementById("searchCount");

    if (counter) {

        counter.innerHTML =
            `${visible} Exercise(s) Found`;

    }

}

document.addEventListener("keyup", updateSearchCount);
document.addEventListener("change", updateSearchCount);

// ===============================
// Live Highlight
// ===============================

function highlightSearch() {

    if (!searchInput) return;

    const keyword =
        searchInput.value.toLowerCase();

    exerciseCards.forEach(card => {

        const title =
            card.querySelector("h2");

        if (!title) return;

        const text =
            title.textContent;

        if (
            keyword.length > 1 &&
            text.toLowerCase().includes(keyword)
        ) {

            title.style.color = "#22c55e";

        } else {

            title.style.color = "";

        }

    });

}

if (searchInput)
    searchInput.addEventListener(
        "keyup",
        highlightSearch
    );

// ===============================
// Initialize
// ===============================

filterExercises();
updateSearchCount();

console.log("🔍 Search Loaded");
