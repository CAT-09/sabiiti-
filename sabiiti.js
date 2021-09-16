//The first thing is that the way you commented in the file is not the right way to comment in javascript.
//The second thing is that this work in this file was not terminated.
// The first five functions have return statements which makes the variables to be acess buy any fuction.
//The return statement is used whem using var global instead of let which only local.
//The function was not called.
function tests(test1 = 10, test2 = 5) {
    var greater = test1 > test1 ? test1 : test2;
    //The console.log was not put.
    console.log(greater);
    return greater;
    //This function had no a closing bracket.
}
tests();

//Below the word cswork wasnt not to be anywhere in this fucncton so i removed it from the brackets.
//And then the function was not called.
//Some lines were empty and i had to delet them to keep my code clean.
//Here the fuction was agaian asigned as avariable which is wrong.
//The cswork was not defined.
//The 
function add() {

    var answer = cswork + tests(80, 80);
    console.log(answer);
    return answer;
}
add();


//Here the fuction was agaian asigned as avariable which is wrong.
//The bracket was not closing / a.
//And the function was not called.
//The console.log was not put.
function div(a) {
    var avg = (90 / a);
    console.log(avg);
    return avg;
}
div();

//The function was not called.
//The console.log was not put.
function mult(a) {
    var exm = avg(2) * (a / 100);
    console.log(exm);
    return exm;
}
mult();

//The console.log was not put.
//The fucntion was not called.
function exam(a) {
    var fexam = (60 / 100) * a;
    console.log(fexam);
    return fexam;
}
exam();


//dont see any problem apart from the termination.
//since is the last function down not need of putting a return statement.
function fnal() {
    let fmark = exam(75) + crsmark(40);
    console.log(fmark);

}
fnal()