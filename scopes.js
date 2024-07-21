

function scopeTest(){
    let testScopeVar = "hello world"; //
    scopeTestSecond();
}    


function scopeTestSecond(){
    console.log(testScopeVar);
}