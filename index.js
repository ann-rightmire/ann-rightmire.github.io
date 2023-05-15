// https://dirask.com/posts/JavaScript-change-image-on-click-1wAYZp
// https://www.w3schools.com/java/ref_keyword_return.asp
// Set counter equal to 0 to track how many times the user has clicked/which photo
let counter = 0;

// Define changeImage function, change image depending on how many times the user has clicked
function changeImage() {
    let image = document.querySelector("#image");
    if (counter == '0') {
        image.src = "media/beach.jpeg";
        counter++;
        return counter;
    }
    if (counter == "1") {
        image.src = "media/snow.jpeg";
        counter++;
        return counter;
    }
    if (counter == "2") {
        image.src = "media/sunset.jpg";
        counter++;
        return counter;
    }
    if (counter == "3") {
        image.src = "media/mtn.JPG";
        counter++;
        return counter;
    }
    if (counter == "4") {
        image.src = "media/mtnlake.jpg";
        counter++;
        return counter;
    }
    if (counter == "5") {
        image.src = "media/lake.jpg";
        counter++;
        return counter;
    }
    if (counter == "6") {
        image.src = "media/rainbow.jpg";
        counter = 0;
        return counter;
    }
}
