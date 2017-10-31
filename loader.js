(function(){
    var backupObjects = {},
        defTurn = false;
    
    backupObjects.console = console;
    backupObjects._console = new Proxy({}, {
        get(){
          return ()=>{};
        },
        set(){
          return true;
        }
    });
    window.turnConsole = (on = defTurn)=>{
        defTurn = !defTurn;
        if(on){
            console = backupObjects.console
        } else {
            console = backupObjects._console
        }
    }
    turnConsole();
})()