const allCheckBoxes = document.querySelectorAll('.check-box');
const allInputfields = document.querySelectorAll('.input-box');
const errorLabel = document.querySelector('.error-label');
const progressValue = document.querySelector('.progress-value');

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let completedGoalsCount = Object.values(allGoals).filter((goal)=>{
    return goal.completed;
}).length;
progressValue.style.width = `${(completedGoalsCount/3) * 100}%`

allCheckBoxes.forEach((checkBox)=>{
    checkBox.addEventListener('click',(e)=>{
        const allInputFieldFilled = [...allInputfields].every(function (input) {
            return input.value;
        })
        if(allInputFieldFilled){
            checkBox.parentElement.classList.toggle('completed');
            const inputId = checkBox.nextElementSibling.id;
            completedGoalsCount = Object.values(allGoals).filter((goal)=> goal.completed).length;
            allGoals[inputId].completed = !allGoals[inputId].completed;
            progressValue.style.width = `${(completedGoalsCount/3) * 100}%`
            localStorage.setItem('allGoals',JSON.stringify(allGoals));
        }else{
            errorLabel.style.display = "block";
        }
    })
})

allInputfields.forEach((input)=>{
    input.value = allGoals[input.id].name;

    if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed');
    }

    input.addEventListener('focus',(e)=>{
        errorLabel.style.display = "none";
    })

    input.addEventListener('input',(e)=>{
        allGoals[input.id] = {
            name : input.value,
            completed : false
        }
        localStorage.setItem('allGoals',JSON.stringify(allGoals));
    })
})


