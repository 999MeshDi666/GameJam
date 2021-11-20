
let TouchMoveAboutSh = document.getElementById('about_sh');
let TouchMoveFAQSh = document.getElementById('faq_sh');
let TouchMoveRulesSh = document.getElementById('rules_sh');
let TouchMoveScheduleSh = document.getElementById('schedule_sh');
let TouchMoveRegSh = document.getElementById('reg_sh');
let TouchMoveAwardsSh = document.getElementById('awards_sh');


Drag(TouchMoveAboutSh);
Drag(TouchMoveFAQSh);
Drag(TouchMoveRulesSh);
Drag(TouchMoveScheduleSh);
Drag(TouchMoveRegSh);
Drag(TouchMoveAwardsSh);


let TouchMoveWinAbout = document.querySelector('.desktop_win_about');
Drag(TouchMoveWinAbout);
let TouchWinContent = document.querySelector('.win_content');


/*Ловим касание*/
function Drag(elem) {
    elem.ondragstart = () => false;
    elem.addEventListener('touchmove', function (event) {
        elem.style.position = 'absolute';
        var touch = event.targetTouches[0];
        elem.style.left = touch.pageX - 50 + 'px';
        elem.style.top = touch.pageY - 50 + 'px';
        event.preventDefault();
    }, false);
}









