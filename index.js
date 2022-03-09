var adviceText = document.querySelector(".advice-text");
var headingText = document.querySelector(".heading-text");
console.log(adviceText)


function fetchNewAdvice(){
    fetch("https://api.adviceslip.com/advice")
        .then(res =>
            res.json()
                .then(obj => {
                    console.log(obj)
                    let { slip } = obj
                    console.log(slip.id,slip.advice)
                    adviceText.innerHTML= `"${slip.advice}"`
                    headingText.innerHTML= `A D V I C E # ${slip.id}`
                }
            )
    )
}
