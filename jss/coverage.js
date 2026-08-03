// ==========================================
// coverage.js
// Muscle Coverage & Workout Progress
// ==========================================

// Muscle Groups
const muscleGroups = [
    "chest",
    "back",
    "shoulders",
    "biceps",
    "triceps",
    "legs",
    "core"
];

// ==========================================
// Update Coverage
// ==========================================

function updateCoverage() {

    muscleGroups.forEach(group => {

        const exercises = document.querySelectorAll(
            `.exercise-check[data-muscle="${group}"]`
        );

        if (exercises.length === 0) return;

        let completed = 0;

        exercises.forEach(exercise => {

            if (exercise.checked) {

                completed++;

            }

        });

        const percentage = Math.round(
            (completed / exercises.length) * 100
        );

        const progress =
            document.getElementById(group + "-progress");

        const text =
            document.getElementById(group + "-text");

        if (progress) {

            progress.style.width = percentage + "%";

        }

        if (text) {

            text.innerHTML = percentage + "%";

        }

    });

}

// ==========================================
// Overall Workout Progress
// ==========================================

function updateWorkoutProgress() {

    const all =
        document.querySelectorAll(".exercise-check");

    const completed =
        document.querySelectorAll(".exercise-check:checked");

    const percentage =
        all.length === 0
            ? 0
            : Math.round(
                (completed.length / all.length) * 100
            );

    const progress =
        document.getElementById("overallProgress");

    const text =
        document.getElementById("overallPercentage");

    if (progress) {

        progress.style.width =
            percentage + "%";

    }

    if (text) {

        text.innerHTML =
            percentage + "% Complete";

    }

}

// ==========================================
// Save Progress
// ==========================================

document
    .querySelectorAll(".exercise-check")
    .forEach(check => {

        const key =
            check.dataset.exercise;

        if (localStorage.getItem(key) === "true") {

            check.checked = true;

        }

        check.addEventListener("change", () => {

            localStorage.setItem(
                key,
                check.checked
            );

            updateCoverage();
            updateWorkoutProgress();

        });

    });

// ==========================================
// Weekly Reset
// ==========================================

function resetWeek() {

    if (
        confirm(
            "Reset all completed workouts for this week?"
        )
    ) {

        document
            .querySelectorAll(".exercise-check")
            .forEach(check => {

                check.checked = false;

                localStorage.removeItem(
                    check.dataset.exercise
                );

            });

        updateCoverage();
        updateWorkoutProgress();

    }

}

// ==========================================
// Completion Badge
// ==========================================

function updateCompletionBadge() {

    const badge =
        document.getElementById("completionBadge");

    if (!badge) return;

    const completed =
        document.querySelectorAll(
            ".exercise-check:checked"
        ).length;

    const total =
        document.querySelectorAll(
            ".exercise-check"
        ).length;

    badge.innerHTML =
        completed + " / " + total;

}

// ==========================================
// Initialize
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCoverage();
        updateWorkoutProgress();
        updateCompletionBadge();

    }
);

console.log("💪 Coverage Loaded");
