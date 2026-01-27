let dropDown = document.querySelectorAll(".countries select");
let button = document.querySelector("button");
const baseUrl = "https://api.exchangerate-api.com/v4/latest";
let fromCurrency = "USD";
let fromBox = document.querySelector("#fromBox select");

// adding all country options to the dropdown
dropDown.forEach(optionText => {
    for (let countryKey in countryList) {

        let newOption = document.createElement("option");
        newOption.innerText = countryKey;
        optionText.append(newOption);

        if (optionText.name === "from" && newOption.value == "USD") {
            optionText.value = "USD";
        }
        if (optionText.name === "to" && newOption.value === "INR") {
            optionText.value = "INR";
        }
    }
});



// changing the flag as country changes in dropdown
dropDown.forEach(option => {
    option.addEventListener("change", (evt) => {
        let imgDiv = option.parentElement;
        let img = imgDiv.querySelector("img");
        // fromCurrency = option.value;
        
        img.src = `https://flagsapi.com/${countryList[option.value]}/flat/64.png`;
    });
});

// getting the amount 
// as soon as button is pressed => 
    // 1) we get the amount entered in the amountBox
    // 2) we get 1.from = how many to (currency exchange rate)
    // 3) we perform the calculation (amount * from)
    // 4) we display the output in the outputBox


function getFromCurrency() {
    fromBox.addEventListener("change", (evt)=> {
        fromCurrency = evt.target.value;
        return evt.target.value;
    });   
}
getFromCurrency();

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    // getting the amount
    let amount = document.querySelector("input");
    
    if (amount.value === "" || amount.value < 1) amount.value = 1;

    //getting currency exchange rate
    let URL = `${baseUrl}/${fromCurrency}`;
    console.log(URL);
    


});
