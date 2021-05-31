function getGrade(score) {
    let grade;
    // Write your code here
    if(score > 25 && score <= 30){
        grade = 'A'
        return grade
    }    
    if(score > 20 && score <= 25){
        grade = 'B'
        return grade
    }    

    if(score > 15 && score <= 20){
        grade = 'C'
        return grade
    }    

    if(score > 10 && score <= 15){
        grade = 'D'
        return grade
    }    

    if(score > 5 && score <= 10){
        grade = 'E'
        return grade
    }    

    if(score > 0 && score <= 5){
        grade = 'F'
        return grade
    }    
    // return grade;
}
