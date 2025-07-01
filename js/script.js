const imageSets = {
    "Hospital Management System": [
        "Image/Java_home.png",
        "Image/Java_medicine.png",
        "Image/Java_facility.png"
    ],
    "Pedro Cuisine Website": [
        "Image/MainMenu.png",
        "Image/Chinese Cuisine.png",
        "Image/Malay.png"
    ],
    "Cardiovascular Disease Prediction Model":[
        "Image/cardio1.png",
        "Image/cardio2.png"
    ],
    "Simple Food Ordering System":[
        "Image/c1.png",
        "Image/c2.png",
        "Image/c3.png",
    ]
};

const imageIndices = {}; // Track current index per project

function getProjectTitle(buttonElement) {
    return buttonElement.closest(".project-box").querySelector("h2").innerText.trim();
}

function updateImage(buttonElement, direction) {
    const box = buttonElement.closest(".project-box");
    const title = getProjectTitle(buttonElement);
    const img = box.querySelector(".sliderImage");

    if (!(title in imageIndices)) imageIndices[title] = 0;

    const images = imageSets[title];
    let index = imageIndices[title];

    if (direction === "next") {
        index = (index + 1) % images.length;
    } else if (direction === "prev") {
        index = (index - 1 + images.length) % images.length;
    }

    imageIndices[title] = index;
    img.src = images[index];
}

function nextImage(btn) {
    updateImage(btn, "next");
}

function prevImage(btn) {
    updateImage(btn, "prev");
}

// scroll section
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll =()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < oddset +height){
            navLinks.forEach(links =>{
                links.classLink.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.quesrySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
