
const allFunctionsCounter = () => {
    let count = 0;
    let standardMessage = 'El contador no puede bajar de cero ni superar el numero 8.';
    const counter = document.querySelector('.counter');
    const message = document.querySelector('.message');
    message.textContent = standardMessage.toUpperCase();
    

    const incrementCounter = () =>{
        count++;
        counter.textContent = count;
    }

    const decrementCounter =  () => {
        count--;
        counter.textContent = count;
    }

    const restartCounter = () => {
        count = 0;
        counter.textContent = count;
    
    }
    const showErrorMessageIncrement = () => {
        
        message.classList.add('errormessage')
        message.textContent = 'ERROR NO SE PUEDE INCREMENTAR EL CONTADOR MAYOR A 8';
    }   
    const showErrorMessageDecrement = () => {
        
        message.classList.add('errormessage')
        message.textContent = 'ERROR NO SE PUEDE DECREMENTAR EL CONTADOR MENOR A 0';
    }   
    const showStandardMesssage = () =>{
        if(message.classList.contains('errormessage')){
            message.classList.remove('errormessage');
        }
       
       message.textContent = standardMessage.toUpperCase();;
    } 

  const registerEventListeners = () => {

        const incrementButton = document.querySelector('.increment');
        incrementButton.addEventListener('click',() => {
             showStandardMesssage();
            if(count === 8){
                return showErrorMessageIncrement();
            }
            incrementCounter();
    
        })

        const decrementButton = document.querySelector('.decrement');
        decrementButton.addEventListener('click',() => {
            showStandardMesssage();
            if(count === 0){
                return showErrorMessageDecrement();
            }
            decrementCounter();
    
        })

        const restartButton = document.querySelector('.restart');
        restartButton.addEventListener('click',() => {
            showStandardMesssage();
            restartCounter();
    
        })
    }
    registerEventListeners();
}
allFunctionsCounter();
