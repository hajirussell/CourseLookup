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

    const showDetailsBtn = document.getElementById("showDetailsBtn");
    showDetailsBtn.onclick = showDetailsBtnClicked;
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

function showDetailsBtnClicked() {
    //erase previous info on click
    const courseIdPara = document.getElementById("courseIdPara");
    courseIdPara.innerHTML = " ";

    const instructorPara = document.getElementById("instructorPara");
    instructorPara.innerHTML = " ";

    const locationPara = document.getElementById("locationPara");
    locationPara.innerHTML = " ";

    const startDatePara = document.getElementById("startDatePara");
    startDatePara.innerHTML = " ";

    const feePara = document.getElementById("feePara");
    feePara.innerHTML = " ";

    //get the course information from the dropdown list
    const selectCourseOption = document.getElementById("selectCourseOption");
    let selectedCourse = selectCourseOption.value;

    //making sure that the select one option is not selected
    if (selectedCourse == " ") {
        alert("Please select a valid course.");
        return;
    }

    //finding the course in the array of course data
    let matchingCourse = courseData.find(arrayElement => arrayElement.CourseId == selectedCourse);

    //display the data
    courseIdPara.innerHTML = matchingCourse.CourseId;
    instructorPara.innerHTML = matchingCourse.Instructor;
    locationPara.innerHTML = matchingCourse.Location;
    startDatePara.innerHTML = matchingCourse.StartDate;
    feePara.innerHTML = matchingCourse.Fee;
}



// function showDetailsBtnClicked() {
//     //erase previous trail info
//     const descriptionPara = document.getElementById("descriptionPara");
//     descriptionPara.innerHTML = " "

//     const lengthPara = document.getElementById("lengthPara");
//     lengthPara.innerHTML = " "

//     //get the hike selected from the dropdown list
//     const hikesDropdown = document.getElementById("hikesDropdown");
//     let selectedHikeId = hikesDropdown.value;

//     //testing to see if the user has selected "select one"
//     if (selectedHikeId == " ") {
//         alert("Please select a hike first.");
//         return;
//     }

//     //go find that hike in the array of hiking data
//     let matchingHike = hikes.find(arrayElement => arrayElement.id == selectedHikeId);

//     //display the specific matching hiking data below the button in the details area

//     descriptionPara.innerHTML = matchingHike.description;


//     lengthPara.innerHTML = "Length: " + selectedHikeId.length;
// }