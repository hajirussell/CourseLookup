"use strict";

let courseData = [{
    CourseId: "19SUM100",
    Title: "Introduction to HTML/CSS/Git",
    Instructor: "Wyatt",
    Location: "Classroom 7",
    StartDate: "07/08/19",
    Fee: 100.00,
},
{
    CourseId: "19SUM200",
    Title: "Introduction to JavaScript",
    Instructor: "Lynn",
    Location: "Classroom 8",
    StartDate: "07/22/19",
    Fee: 350.00,
},
{
    CourseId: "19SUM300",
    Title: "Introduction to Node.JS and Express",
    Instructor: "Gross",
    Location: "Classroom 4",
    StartDate: "09/09/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM400",
    Title: "Introduction to SQL and Databases",
    Instructor: "Wyatt",
    Location: "Classroom 6",
    StartDate: "09/16/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM500",
    Title: "Introduction to Angular",
    Instructor: "Lynn",
    Location: "Classroom 7",
    StartDate: "09/23/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM501",
    Title: "Introduction to Mathematics",
    Instructor: "Erik",
    Location: "Classroom 10",
    StartDate: "09/24/19",
    Fee: 100.00,
},
{
    CourseId: "19SUM502",
    Title: "Fundamentals of Design",
    Instructor: "Chase",
    Location: "Classroom 102",
    StartDate: "09/30/19",
    Fee: 75.00,
},
{
    CourseId: "19SUM503",
    Title: "Scriptwriting I",
    Instructor: "Piano",
    Location: "Classroom 77",
    StartDate: "09/15/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM504",
    Title: "Video Editing",
    Instructor: "Hardy",
    Location: "Classroom 71",
    StartDate: "09/20/19",
    Fee: 100.00,
},
{
    CourseId: "19SUM505",
    Title: "Studio Design",
    Instructor: "Carl",
    Location: "Classroom 15",
    StartDate: "10/30/19",
    Fee: 75.00,
}
];

window.onload = function () {
    loadCourses();
    // showDetailsBtn.onclick = showDetailsBtnClicked();
}

function loadCourses() {
    const selectCourseOption = document.getElementById("selectCourseOption");

    let selectOption = new Option("Select One...", " ");
    selectCourseOption.appendChild(selectOption);

    for (let i = 0; i < courseData.length; i++) {
        let courseFormOption = document.createElement("option");
        courseFormOption.textContent = courseData[i].Title;
        courseFormOption.value = courseData[i].CourseId;

        selectCourseOption.appendChild(courseFormOption);
    }
}

// let courseDataToFind = "The option Selected"

// function showDetailsBtnClicked() {
//     const courseDetailsDisplay = document.getElementById("courseDetailsDisplay");
//     let foundCourse = courseData.find(arrayElement => arrayElement.Title == courseDataToFind);



// }