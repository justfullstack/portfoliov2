"use strict";
const projectsContainer = document.querySelector(".projects-container");
const categoryButtons = document.querySelector(".category__buttons");
const projects = document.querySelectorAll(".project");
const btnAll = document.querySelector(".btn-all");
const btnFrontend = document.querySelector(".btn-frontend");
const btnBackend = document.querySelector(".btn-backend");
const btnFullstack = document.querySelector(".btn-fullstack");
console.log(categoryButtons);

categoryButtons.addEventListener('click', (e) => { 

    // all
    if (e.target === btnAll){
        projects.forEach((project) => {
            project.classList.remove("hidden");
        });

        // console.log("Showing all projects...");
    }


    // front end
    if (e.target === btnFrontend){
        projects.forEach((project) => {
            if(!project.classList.contains("front-end")){
                project.classList.add("hidden");
            } else {
                project.classList.remove("hidden");
            }
        });

        // console.log("Showing front end projects...");
    }
     

    // back end
    if (e.target === btnBackend){
        projects.forEach((project) => {
            if(!project.classList.contains("back-end")){
                project.classList.add("hidden");
            } else {
                project.classList.remove("hidden");
            }
        }); 

        // console.log("Showing back end projects...");
    }

    // full stack
    if (e.target === btnFullstack){
        projects.forEach((project) => {
            if(!project.classList.contains("full-stack")){
                project.classList.add("hidden");
            } else {
                project.classList.remove("hidden");
            }
        }); 

        // console.log("Showing full stack projects...");
    }


    // projectsContainer.style.display = "flex";
});