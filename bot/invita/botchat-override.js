var botElement = document.querySelector('#bot');
var arrow = document.querySelector('.arrow');
var close = document.querySelector('.close');
var open = document.querySelector('.open');
var poweredby = document.querySelector('.poweredby');

// botElement.style.opacity = 0;
// close.style.display = "none";
// poweredby.style.display = "none";
arrow.style.display = "none";
showBot = function () {
    if (botElement.style.opacity == 0) {
        botElement.style.opacity = 1;
        arrow.style.display = "none";
        poweredby.style.display = "block";
        close.style.display = "block";
    } else {
        botElement.style.opacity = 0;
        arrow.style.display = "block";
        poweredby.style.display = "none";
        close.style.display = "none";
    }
};

maximizeBot = function () {
    var panel = document.querySelector('.wc-chatview-panel');
    var poweredby = document.querySelector('.poweredby');
    var expanded_close_bottom = "630px";
    if (close.style.bottom != expanded_close_bottom) {
        panel.style.width = '500px';
        panel.style.height = '650px';
        close.style.bottom = expanded_close_bottom;
        open.style.bottom = expanded_close_bottom;
        poweredby.style.width = '484px';
    } else {
        panel.style.width = '350px';
        panel.style.height = '500px';
        close.style.bottom = '480px';
        open.style.bottom = '480px';
        poweredby.style.width = '334px';
    }

}
BotChat.App({
    directLine: { secret: 'hoDyTQLzjV4.cwA.JLo.R2Mtw3p_DgXy0X-tYFytBTF7SCHx1YdSYTYRkZfPB4U' },
    user: { id: '98ae465e-647e-4abd-9c84-cb8203c732eb' },
    bot: { id: '}une}hDHP7C-$[&J' },
    resize: 'detect'
}, document.getElementById("bot"));