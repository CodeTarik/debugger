let count = 0;

function init(){
    debuggerOutput('A');
    debuggerOutput('A');
    testOne();
    debuggerOutput('A');
    debuggerOutput('A');
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
    debuggerLogRef.innerHTML += " " + text + count; //"+=" damit wird es immer dran gehängt bzw. zusätzlich nochmal eingefügt
}

