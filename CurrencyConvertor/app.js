let btn = document.querySelector("#convert");
let dropDown2 = document.querySelectorAll(".countries select");
let dropDown = document.querySelectorAll(".countries select");
const URL ="https://api.exchangerate-api.com/v4/latest";
const fromCurr = document.querySelector("#fromBox select");
const toCurr = document.querySelector("#toBox select");
// console.log(fromCurr.selectedOptions);


async function changeCurrency(amount) {
    for (let x of dropDown2) {
        
        console.log(x);

        x.addEventListener("change", (evt)=> {
            console.log(evt.target);
        })
        console.log("hi");
    }
}
 for (let a of dropDown) {
        console.log(a);
        a.addEventListener("change", (change)=> {
            let curr = dropDown.selectedOptions;
            console.log(curr);
        })
        console.log("hi");
    }
changeCurrency(2);
// console.log(fromCurr.value);

// this adds all the country names in the dropDown options
for (let select of dropDown) {
    for (countryCode in countryList) {
        // console.log(dropDown.selected);
        // console.log(countryCode);
        let newFlagOption = document.createElement("option");
        // console.log(countryCode);
        // rand.value = countryList[countryCode]
        newFlagOption.value = countryList[countryCode];
        // console.log(countryCode);

        newFlagOption.innerText = countryCode;
        select.append(newFlagOption);
        if (select.name === "from" && countryCode === "USD") {
            newFlagOption.selected = "USD";
        }
        if (select.name === "to" && countryCode === "INR") {
            newFlagOption.selected = "INR";
        }
    }
}
// console.log(countryCode);
// this function is used to change
const changeFlagImage = () => {
    dropDown.forEach((country) => {
        country.addEventListener("change", (event) => {
            // console.log(event);
            let img = event.target.parentElement.querySelector(".flag");
            img.src = `https://flagsapi.com/${event.target.value}/flat/64.png`;
        });
    });
}
changeFlagImage();


// so on pressing the submit button, these 3 functons will be called
// 1) code that inputs the amount of money from the user
// 2) then converts it into the latest currency exchange rate
// 3) then updates the outputAmount

// function that inputs money and retutns 



btn.addEventListener("click", async (event)=> {
    event.preventDefault();

    let amount = document.querySelector("#quantity");
    if (amount === "" || amount <1) {
        amount = 1;
    }
    
    let newUrl = `${URL}/${fromCurr.innerText}`;
    let val = await promise.json();
    let promise = await fetch(newUrl);
    // console.log(fromCurr.);/
    // console.log(fromCurr.value.toLowerCase())
    // console.log(amount.value);
    // console.log(toCurr.value);

    let currencyConvertedAmount = changeCurrency(amount);
})
