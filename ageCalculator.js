
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const button = document.getElementById("button");

const errorMessage1 = document.getElementById("errorMessage1");
const errorMessage2 = document.getElementById("errorMessage2");
const errorMessage3 = document.getElementById("errorMessage3");

const textDay = document.getElementById("textDay");
const textMonth = document.getElementById("textMonth");
const textYear = document.getElementById("textYear");

const displayYear = document.getElementById("displayYear");
const displayMonth = document.getElementById("displayMonth");
const displayDay = document.getElementById("displayDay");


button.addEventListener("click", () => {

  const valueDay = parseInt(dayInput.value);
  const valueMonth = parseInt(monthInput.value) - 1;
  const valueYear = parseInt(yearInput.value);

  const isLeapYear = (valueYear % 4 === 0 && valueYear % 100 !== 0) || valueYear % 400 === 0;
  const maxDaysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (valueMonth < 0 || valueMonth > 11) {

    monthInput.classList.add("highlight-border");
    textMonth.classList.add("highlight-border");
    errorMessage2.innerHTML = "Must be a valid month";

  } else if (valueDay < 1 || valueDay > maxDaysInMonth[valueMonth]) {

    dayInput.classList.add("highlight-border");
    textDay.classList.add("highlight-border");
    errorMessage1.innerHTML = "Must be a valid date";

  } else if (valueYear > 2023) {

    yearInput.classList.add("highlight-border");
    textYear.classList.add("highlight-border");

    errorMessage3.innerHTML = "Must be in the past";

  } else if (

    (valueDay.toString() === "NaN" || valueMonth.toString() === "NaN" || valueYear.toString() === "NaN") ||
    (valueDay.toString() === "" || valueMonth.toString() === "" || valueYear.toString() === "")

  ){

    monthInput.classList.add("highlight-border");
    textMonth.classList.add("highlight-border");
    errorMessage2.innerHTML = "This field is required";

    dayInput.classList.add("highlight-border");
    textDay.classList.add("highlight-border");
    errorMessage1.innerHTML = "This field is required";

    yearInput.classList.add("highlight-border");
    textYear.classList.add("highlight-border");
    errorMessage3.innerHTML = "This field is required";

  } else {

    dayInput.classList.remove("highlight-border");
    textDay.classList.remove("highlight-border");
    errorMessage1.innerHTML = "";

    monthInput.classList.remove("highlight-border");
    textMonth.classList.remove("highlight-border");
    errorMessage2.innerHTML = "";

    yearInput.classList.remove("highlight-border");
    textYear.classList.remove("highlight-border");
    errorMessage3.innerHTML = "";

    const inputDate = new Date(valueYear, valueMonth, valueDay);
    const today = new Date();

    const differenceInMilliseconds = today - inputDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    const yearDiff = Math.floor(differenceInDays / 365);
    const monthDiff = Math.floor((differenceInDays % 365) / 30);
    const dayDiff = Math.floor((differenceInDays % 365) % 30);

    displayYear.innerHTML = yearDiff;
    displayMonth.innerHTML = monthDiff;
    displayDay.innerHTML = dayDiff;

  }

});


button.addEventListener("mouseover",()=>{

  button.classList.add("mousebotao2")

})

button.addEventListener("mouseout",()=>{

  button.classList.remove("mousebotao2")
  button.classList.add("mousebotao1")

})

dayInput.addEventListener("mouseover",()=>{
  
  dayInput.classList.remove("mousetexto1")
  dayInput.classList.add("mousetexto2")  
  
})

dayInput.addEventListener("mouseout",()=>{

  dayInput.classList.remove("mousetexto2")
  dayInput.classList.add("mousetexto1")  
  

})

monthInput.addEventListener("mouseover",()=>{
  
  monthInput.classList.remove("mousetexto1")
  monthInput.classList.add("mousetexto2")  
  
})

monthInput.addEventListener("mouseout",()=>{

  monthInput.classList.remove("mousetexto2")
  monthInput.classList.add("mousetexto1")   

})

yearInput.addEventListener("mouseover",()=>{
  
  yearInput.classList.remove("mousetexto1")
  yearInput.classList.add("mousetexto2")  
  
})

yearInput.addEventListener("mouseout",()=>{

  yearInput.classList.remove("mousetexto2")
  yearInput.classList.add("mousetexto1")   

})


// dayInput.addEventListener("mouseover", function() {
//   dayInput.style.borderColor = "hsl(259, 100%, 65%)"; // Altere a cor de fundo para a cor desejada
// });

// dayInput.addEventListener("mouseout", function() {
//   dayInput.style.borderColor = ""; // Reverta para a cor de fundo original
// });


// yearInput.addEventListener("focus", () => {
//   yearInput.value = "";
// });



// const timestamp = Date.now();
// const inputDate = new Date(yearInput, monthInput - 1, dayInput); // Mês é baseado em zero (janeiro = 0, fevereiro = 1, etc.)
// const today = new Date();
// const differenceInMilliseconds = inputDate - today;
// const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));


// console.log(today);
// console.log(differenceInDays);






//   border-color: hsl(0, 100%, 67%);