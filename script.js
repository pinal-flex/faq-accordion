document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector(".expand-icon img");

        question.addEventListener("click", () => {
            const isOpen = answer.classList.contains("show");

            faqItems.forEach((el) => {
                el.querySelector(".faq-answer").classList.remove("show");
                el.querySelector(".expand-icon img").src = "assets/images/icon-plus.svg";
            });
            if(!isOpen){
                answer.classList.add("show");
                icon.src = "assets/images/icon-minus.svg";
            }
        });
        question.addEventListener("keydown",(e) => {
            if(e.key === "Enter" || e.key === " "){
                e.preventDefault();
                question.click();
            } else if (e.key === "ArrowDown" || e.key === "ArrowUp"){
                e.preventDefault();
                let next = e.key === "ArrowDown" ? item.nextElementSibling : item.previousElementSibling;
                if(next){
                    next.querySelector(".faq-question").focus();
                }
            }
        });
        question.addEventListener("mouseenter", () => question.classList.add("hover"));
        question.addEventListener("mouseleave", () => question.classList.remove("hover"));
        question.addEventListener("focus", () => question.classList.add("focus"));
        question.addEventListener("blur", () => question.classList.remove("focus"));
    })
})


