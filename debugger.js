let count = 0;

function init(){
    testOne();
    debuggerOutput('init');
    testOne();
    testTwo('testTwo');
    testOne();
}

function testOne(){
    debuggerOutput('testOne');
}

function testTwo(){
    debuggerOutput(text);
    testOne();
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML += text + count; //"+=" damit wird es immer dran gehängt bzw. zusätzlich nochmal eingefügt
}

