// main script//

let index = 0;
let attemt = 0;
let score = 0;
let wrong = 11;

let totaltime = 31;
let min = 0;
let sec = 0;
let counter = 0;



function reset(){
  totaltime=31;
  min=0;
  sec=0;
  counter=0;
}

let questions = quiz.sort(function(){
  return 0.5 - Math.random();
});
let totalquestion = questions.length;


// $(function(start){
//   alert("for better experience in mobile,just rotate it")
// })



$(function () {
  

  // timer
  // let totaltime = 30;
  // let min = 0;
  // let sec = 0;
  // let counter = 0;


  let timer = setInterval(function(){
    counter++;
    min = Math.floor((totaltime-counter)/60);// calc min
    sec = totaltime - (min*60) -counter;
    $(".time span").text(min + ":" +sec);
    // console.log("min = " +min);
    // console.log("sec = " +sec);

    if(counter==totaltime){
      shownext();


    };





  },1000);//1 sec interval



  printQuestion(index);
});
// vijay 13-10 evening



//vijay out

function printQuestion(i){


  $(".question").text(questions[i].question);
  $(".option span").eq(0).text(questions[i].option[0]);
  $(".option span").eq(1).text(questions[i].option[1]);
  $(".option span").eq(2).text(questions[i].option[2]);
  $(".option span").eq(3).text(questions[i].option[3]);



};






function checkAnswer(option){
  attemt++;


  let openclicked = $(option).data("opt");

  // console.log(questions[index]);

  if(openclicked==questions[index].answer){
    $(option).addClass("right");
    score++;
    // var allscore = score;
    // allscore.id = "sco"
  }
  else {
    $(option).addClass("wrong");
    wrong--;
  }
  $(".score span").text(score);


  $(".option span").attr("onclick","");


}


//function for next

function shownext(){
  if(index >= (questions.length - 1)){
    end();
    return;
  }
  index++;
  $(".option span").removeClass();
  $(".option span").attr("onclick","checkAnswer(this)");
  printQuestion(index);
  reset();

  

}

//end

function end(j){

  if(
    j == 1 &&
    index < questions.length-1 &&
    !confirm("do you want to end quiz ?")
  ){
    return;
  }
  $("#questionscreen").hide();
  $("#resultscreen").show();



  $("#totalquestion").text(totalquestion);
  $("#attemptQuestion").text(attemt);
  $("#correctAns").text(score);
  $("#wrongAns").text(wrong);
  $("#scorewrite").text(score);

}



