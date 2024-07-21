
let testScopeVar = "hello world"; //here it is defined globally - that's how it would work

function scopeTest(){
    scopeTestSecond();
}    


function scopeTestSecond(){
    console.log(testScopeVar);
}