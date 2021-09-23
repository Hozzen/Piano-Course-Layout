let emailCollectorForm = document.querySelector("#email-collector")
emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault()
    // Do something with the event
    console.log("The event is firing!")

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")

    let updatedHtmlContent = `
    <h1 class="right__content__h1">Congratulations, ${userFirstName}</h1>

    <p>You're one your way to becoming a Pianist</p>

    <p class="right__content__form-tip__1">We'll never share your information</p>
    <p class="right__content__form-tip__2">without your permission</p>`

    let ourMainContent = document.querySelector("#right__content__container")
    ourMainContent.innerHTML = updatedHtmlContent
})