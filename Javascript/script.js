const allCheckBoxes = document.querySelectorAll('.check-box');
const allInputfields = document.querySelectorAll('.input-box');
const errorLabel = document.querySelector('.error-label')

allCheckBoxes.forEach((checkBox)=>{
    checkBox.addEventListener('click',(e)=>{
        const allInputFieldFilled = [...allInputfields].every(function (input) {
            return input.value;
        })
        if(allInputFieldFilled){
            checkBox.parentElement.classList.toggle('completed');
        }else{
            errorLabel.style.display = "block";
        }
    })
})

allInputfields.forEach((input)=>{
    input.addEventListener('focus',(e)=>{
        errorLabel.style.display = "none";
    })
})


