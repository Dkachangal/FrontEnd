let boxSelected = document.querySelectorAll(".smallBox");

boxSelected.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log(index);
    });
});