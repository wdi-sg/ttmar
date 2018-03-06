document.addEventListener('DOMContentLoaded', function(){
    
    let count = 0;

    // change background color of body
    const colorArr = ['#F2AC70', '#EB6E69', '#FEF4AF', '#B0F566'];

    // check current count
    const checkCount = () => {
        if(count === 5){
            alert('You have clicked 5 times');
        }
    };

    // randomizes color of BG
    const randomBG = () => {
        let randomNum = Math.floor(Math.random() * 4);
        let currentColor = body.style.backgroundColor || 'white';
        body.style.backgroundColor = colorArr[randomNum];
        setTimeout(function(){
            body.style.backgroundColor = currentColor;
        }, 5000);
        count++;
        checkCount();
    };

    let body = document.getElementsByTagName('body')[0];
    console.log(body);
    let firstLink = document.getElementById('first_paragraph');
    // firstLink.addEventListener('click', function(){
    //     let randomNum = Math.floor(Math.random() * 4);
    //     body.style.backgroundColor = colorArr[randomNum];
    // });
    firstLink.addEventListener('click', randomBG);

    // for second link
    let secondLink = document.getElementById('second_paragraph');
    let secondPara = document.getElementsByClassName('second_paragraph')[0];
    secondLink.addEventListener('click', function(){
        secondPara.style.display='block';
        randomBG();
    });

    // for third link
    let thirdLink = document.getElementById('first_chorus');
    let thirdPara = document.getElementsByClassName('first_chorus')[0];
    thirdLink.addEventListener('click', function(){
        thirdPara.style.display = 'block';
        randomBG();
    });

    // for fourth link
    let fourthLink = document.getElementById('third_paragraph');
    let fourthParas = document.getElementsByClassName('third_paragraph');
    fourthLink.addEventListener('click', () => {
        Array.from(fourthParas).forEach(para => {
            para.style.display = 'block';
        });
        randomBG();
    });

    // for fifth link
    let fifthLink = document.getElementById('fourth_paragraph');
    let fifthParas = document.getElementsByClassName('fourth_paragraph');
    fifthLink.addEventListener('click', () => {
        Array.from(fifthParas).forEach(para => {
            para.style.display = 'block';
        });
        randomBG();
    });

    // for sixth link
    let sixthLink = document.getElementById('second_chorus');
    let sixthParas = document.getElementsByClassName('second_chorus');
    sixthLink.addEventListener('click', () => {
        let clickCount = 0;
        Array.from(sixthParas).some(para => {
            if(para.style.display === 'none'){
                para.style.display = 'block';
                return true;
            }
            // para.style.display = 'block';
        });
        randomBG();
    });

    // inputing of element via the textbox
    const submitInput = () => {
        console.log('form submitted');
    }

});