var num1=10

function fun(){
    console.log(num1)
    var a=1;
    console.log('a =' + a);
    console.log('b='+b);
    var b=2;
    console.log('b='+b);
    var strTen='10';
    var numTen=10;

    console.log(strTen == numTen);
    console.log(strTen===numTen);
    console.log(1/0);
    console.log(-1/0);

    //loops
    var myKannadaVocabulary=['beku','beda','gothu','kannada gothila'];
    var howManyWordsIKnow=myKannadaVocabulary.length;
    var wordIndex=0;
    while(wordIndex < howManyWordsIKnow){
        console.log(myKannadaVocabulary[wordIndex]);
        wordIndex++;
    }
    for(var wordIndex =0,howManyWordsIKnow=myKannadaVocabulary.length;wordIndex<howManyWordsIKnow;wordIndex++){
        console.log(myKannadaVocabulary[wordIndex]);
    }

    function sayHello(){
        console.log('helo there');
    }
    sayHello();
    console.log(sayHello());

    var sumOrConcatenate = function(a,b){
        return a+b;
    };
    console.log(sayHello);

    var sayHello=function(){
        console.log('hello there');
    }
    sayHello()

}
fun()