const form = document.getElementById("form");
const error = document.getElementById("error")
let errorMsg = document.getElementById("errorMsg")


form.addEventListener('submit', function(event){

    event.preventDefault()
    const email = document.getElementById("email")

   
        if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            email.style.border = '2px solid red'
            email.style.borderRadius = '28px'
            error.style.display = 'flex'
            errorMsg.innerHTML = 'Please provide a valid email'
        }
        if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            email.style.border = ''
            email.style.borderRadius = ''
            error.style.display = 'none'
            errorMsg.innerHTML = ''
        }
})