
// ==========================================
// GYM DASHBOARD - APP.JS
// ==========================================

// Current Year
const year = new Date().getFullYear();

const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.innerText = year;
}

// ================================
// Sidebar Active Link
// ================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

// ================================
// Progress Animation
// ================================

document.querySelectorAll(".progress-fill").forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.transition = "1.5s";

        bar.style.width = width;

    },300);

});

// ================================
// Checkbox Tracker
// ================================

const checkboxes = document.querySelectorAll(".exercise-check");

checkboxes.forEach(box=>{

    const key = box.dataset.exercise;

    const value = localStorage.getItem(key);

    if(value==="true"){

        box.checked=true;

    }

    box.addEventListener("change",()=>{

        localStorage.setItem(key,box.checked);

    });

});

// ================================
// Theme (Future Ready)
// ================================

const theme = localStorage.getItem("theme");

if(theme==="light"){

    document.body.classList.add("light");

}

// ================================
// Today's Workout
// ================================

const workouts=[
    "Push A",
    "Pull A",
    "Legs",
    "Push B",
    "Pull B"
];

const today=new Date().getDay();

/*
Sunday = 0
Monday = 1
Tuesday = 2
Wednesday = 3
Thursday = 4
Friday = 5
Saturday = 6
*/

let workoutText="Rest Day";

switch(today){

    case 1:
        workoutText="Push A";
        break;

    case 2:
        workoutText="Pull A";
        break;

    case 3:
        workoutText="Legs";
        break;

    case 4:
        workoutText="Push B";
        break;

    case 5:
        workoutText="Pull B";
        break;

    default:
        workoutText="Recovery";
}

const workoutElement=document.getElementById("todayWorkout");

if(workoutElement){

    workoutElement.innerHTML=workoutText;

}

// ================================
// Workout Counter
// ================================

const completed=document.querySelectorAll(".exercise-check:checked").length;

const total=document.querySelectorAll(".exercise-check").length;

const counter=document.getElementById("exerciseCounter");

if(counter){

    counter.innerHTML=`${completed}/${total}`;

}

// ================================
// Search Placeholder
// ================================

function searchExercises(){

    console.log("Search will be added.");

}

// ================================
// Utility
// ================================

function showMessage(msg){

    alert(msg);

}

console.log("🏋️ Gym Dashboard Loaded Successfully");
