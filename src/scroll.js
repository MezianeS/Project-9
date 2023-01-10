export default function Scroll() {
    // function setup() {
    //     createCanvas(600, 600);
    // }

    // function draw() {
    //     background(0);
    // }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
 