let boxSelected = document.querySelectorAll(".smallBox");
let X = document.createElement("div");
let circle = document.createElement("div");
// now we need to write the code by which when the user clicks 
// any box, an image is shown
// to make an x, write the following css code
circle.style.width = "5rem";
circle.style.height = "5rem";
circle.style.borderRadius = "50%";
circle.style.border = "1rem solid black";



// when user clicks on the small box
boxSelected.forEach((box, index) => {
    box.addEventListener("click", () => {
        box.append(circle);
        console.log(index); 
        // adding 0 and X in the box here
    
    });
});