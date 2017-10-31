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
    if(!window['replacing main page initialized']){
        var body = $('body'),
            head = $('head');

        window['replacing main page initialized'] = true;

        body.html('<iframe id="replacedPage" src="https://start.me"></iframe>');
        head.html('');
        body.css('margin', '0').css('padding', '0').css('border', '0').css('height', '100%');
        body.children('iframe').css('margin', '0').css('padding', '0').css('border', '0').css('width', '100%').css('height', '100%').load(()=>{
            $(this).contents().find('html').css('overflow', 'hidden')
        });
        $('html').css('height', '100%');
    }
})()