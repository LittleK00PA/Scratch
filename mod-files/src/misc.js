(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.comment = function(string) {};
    
    ext.title = function() {
        return document.title;
    };
    
    ext.title_set = function(string) {
        document.title = string;
    };
    
    ext.yeepification = function(base, yeebifier) {
        return base+1*yeebifier+3*5;
    };
    
    var descriptor = {
        blocks: [
            [' ', '/ %s', 'comment', 'comment'],
            ["r", "tab name", "title"],
            [" ", "Set tab name to %s", "title_set", "Hello World"],
            ['r', "Yeepnum of %n and %n", "yeepification", 1, 1],
        ]
    };
    ScratchExtensions.register('Mod - Misc', descriptor, ext);
})({});
