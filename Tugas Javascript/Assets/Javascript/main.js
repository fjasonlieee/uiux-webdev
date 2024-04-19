var a = 1
a = 2

var obj = {
    kelvin :{
        umur: 21,
        kelamin: "laki",
    },
    evan :{
        umur: 81,
        kelamin: "?",
    }
};

var arrObj = [
    {
        id: 1,
        data: {
            nama: "kelvin",
            umur: 21,
            kelamin: "L",
        },
    },
    {
        id: 2,
        data: {
            nama: "evan",
            umur: 20,
            kelamin: "L",
        },
    },
]
var arrTest = ["evan", "cleosa", "janice", "calvin", "jason"];

console.log("array:", arrTest[1]);

console.log("arrObj umur evan:", arrObj[1].data.umur);

const heroTitle = document.getElementsByClassName("title"); 
const heroTitle2 = document.querySelector(".title");

heroTitle[0].style.color = "red";
heroTitle2.style.backgroundColor = "yellow";

function changeTextColor() {
    heroTitle2.style.color = "white";
}

const changeBGColor = () => {
    heroTitle2.style.backgroundColor = "purple";
};

const button = document.querySelector(".buttonTest")
button.addEventListener("click", ()=> {


changeTextColor();
changeBGColor();
});