fetch("https://api.adviceslip.com/advice")
.then(res =>
    res.json()
.then(advice =>{

    console.log(advice)
}
))