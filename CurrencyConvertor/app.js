let btn = document.querySelector("#convert");
let dropDown = document.querySelectorAll(".countries select");


// this adds all the country names in the dropDown options
for (let select of dropDown) {
    for (countryCode in countryList) {
        let newFlagOption = document.createElement("option");
        newFlagOption.value = countryList[countryCode];
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

// this function is used to change
const changeFlagImage = () => {
    dropDown.forEach((country) => {
        country.addEventListener("change", (event) => {
            let img = event.target.parentElement.querySelector(".flag");
            img.src = `https://flagsapi.com/${event.target.value}/flat/64.png`;
        });
    });
}
changeFlagImage();