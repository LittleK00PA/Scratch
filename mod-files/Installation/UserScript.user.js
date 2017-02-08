// ==UserScript==
// @name         Scratch-Mod-Little_Koopa-edition
// @version      0.1
// @description  By -ScratchOS- and Little_Koopa
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @match        *://scratch.mit.edu/projects/*
// @run-at       document-end
// ==/UserScript==
var script = document.createElement('script');
script.textContent = '(' + function () {
    var old = window.JSsetProjectStats;
    if (old) {
        var times = 0;
        window.JSsetProjectStats = function () {
            old.apply(this, arguments);
            if (times++) {
                // use github api to get latest sha commit hash
                // https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
                $.get('https://api.github.com/repos/LittleK00PA/Scratch/commits', function(result) {
                    $.getScript('https://cdn.rawgit.com/LittleK00PA/Scratch/' + result[0]['sha'] + '/mod-files/src/installer.js');
                });
            }
        }
    }
} + ')()';
document.body.appendChild(script);
