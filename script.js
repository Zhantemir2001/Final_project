var scoreList;

getScore1 = () => {
  var score1=document.getElementById("score1").value;
    score1=parseInt(score1);
    console.log(score1);
    return score1;
}
getScore2 = () => {
  var score2=document.getElementById("score2").value;
    score2=parseInt(score2);
    console.log(score2);
    return score2;
}

function getScoreList(score){
    if(score==1){
        scoreList="(1)";
        return scoreList;
        
    }
    if(score==2){
        scoreList="(1 1)(2)";
        return scoreList;
        
    }
    if(score==3){
        scoreList="(1 1 1)(1 2)(3)";
        return scoreList;
        
    }
    if(score==4){
        scoreList="(1 1 1 1)(1 3)(1 1 2)(4)";
        return scoreList;
        
    }
    if(score==5){
        scoreList="(1 1 1 1 1)(1 1 1 2)(1 2 2)(2 3)(5)";
        return scoreList;
        
    }
    if(score==6){
        scoreList="(1 1 1 1 1 1)(1 1 1 1 2)(1 1 1 3)(2 2 2)(3 3)(1 1 2 2)(6)";
        return scoreList;
        
    }
    if(score==7){
        scoreList="(1 1 1 1 1 1 1)(1 1 1 1 1 2)(1 1 1 1 3)(4 3)(5 2)(1 1 5)(2 2 2 1)(3 3 1)(7)";
        return scoreList;
        
    }
}

const compare = (s1, s2) => {
    if (s1 < s2) {
        let sheet1=getScoreList(s1);
        let sheet2=getScoreList(s2);
        document.getElementById("result").innerHTML = `If Second team scores ${s2} goals and First team only ${s1} goals, then the winner is team 2!, The score list of team 1 can be ${sheet1} and and the score list of team 2 is ${sheet2}  <br>`;
    }
    else if (s1 > s2) {
        let sheet1=getScoreList(s1);
        let sheet2=getScoreList(s2);
        document.getElementById("result").innerHTML = `If First team scores ${s1} goals and Second team only ${s2} goals, then the winner is team 1, The score list of team 1 can be ${sheet1} and and the score list of team 2 is ${sheet2}<br>`;
    }
    else {
        let sheet1=getScoreList(s1);
        let sheet2=getScoreList(s2);
        document.getElementById("result").innerHTML = `Equal opponents!<br>`;
    }

}




function calculate() {
 
    let s1 = getScore1();
    let s2 = getScore2();

    
    
    if (s1 + s2 > 7) {
        alert("The combined number of goals cannot be greater than 7. ");
    }
    else if(s1<0||s2<0){
        alert("The number of goals cannot be less than 0. ");
    }
    else {
        compare(s1, s2);
    }

}
document.getElementById("submit").addEventListener("click", calculate);//Add Event Listener to my button








