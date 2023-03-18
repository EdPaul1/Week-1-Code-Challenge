const grader = function(){
    let grade = prompt('Enter your Grade: ');
    if(grade >= 0 && grade <= 100){
        console.log('Your input is ' + grade);
        if (grade > 79){
            console.log('Your grade is A');
        }else if(grade > 60 && grade <= 79){
            console.log('Your grade is B');
        } else if(grade > 49 && grade <= 59){
            console.log('Your grade is C');
        }else if (grade >= 40 && grade <= 49){
            console.log('Your grade is D');
        }else if (grade < 40){
            console.log('Your grade is E');
        };
    }else{
        console.log('Incorrect value');
    }
}
grader();