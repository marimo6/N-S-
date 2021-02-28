"use strict";

const yearInput = document.getElementById("year");
const schoolInput = document.getElementById("school");
const monthInput = document.getElementById("month");
const gradeInput = document.getElementById("grade");
const idInput = document.getElementById("id");
const submitButton = document.getElementById("submit");
const resultArea = document.getElementById("result-area")

submitButton.onclick = () => {
    const year = yearInput.value;
    const school = schoolInput.value;
    let month = monthInput.value;
    const grade = gradeInput.value;
    const id = idInput.value;
    let cours = 0;
    if (school == "N") {
        cours = year - 15;
    } else {
        cours = year - 20;
    }
    switch (month) {
        case "1":
            month = "4";
            break;
        case "2":
            month = "7";
            break;
        case "3":
            month = "10";
            break;
        case "4":
            month = "1";
            break;
    }
    resultArea.innerText = school + "高に20" + year + "年に入学した" + cours + "期生の" + month + "月生で、入学した年の学年は" + grade + "年生です（でした）。\n同時期に同じ学年で入学した" + id + "番目の生徒です。";
}
