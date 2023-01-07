let questions = document.querySelectorAll(".ques");
let answers = document.querySelectorAll(".ansewer");
questions.forEach((ques) => {
    ques.addEventListener("click", () => {
        ques.classList.toggle("transform");
        ques.classList.toggle("pressed");
        let thequesANS = ques.nextElementSibling;
        thequesANS.classList.toggle("hidden");


    })
})