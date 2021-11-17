// windows drag
let TouchMoveAbout = document.getElementById('move_about');
let TouchMoveWinAbout = document.querySelector('.desktop_win_about');

let TouchMoveFAQ = document.getElementById('move_faq');
let TouchMoveWinFAQ = document.querySelector('.desktop_win_faq');

let TouchMoveRules = document.getElementById('move_rules');
let TouchMoveWinRules = document.querySelector('.desktop_win_rules');

let TouchMoveSchedule = document.getElementById('move_schedule');
let TouchMoveWinSchedule = document.querySelector('.desktop_win_schedule');

let TouchMoveReg = document.getElementById('move_reg');
let TouchMoveWinReg = document.querySelector('.desktop_win_registration');

let TouchMoveAwards = document.getElementById('move_awards');
let TouchMoveWinAwards = document.querySelector('.desktop_win_awards');
TouchDragWindows(TouchMoveAbout, TouchMoveWinAbout);
TouchDragWindows(TouchMoveFAQ, TouchMoveWinFAQ);
TouchDragWindows(TouchMoveRules, TouchMoveWinRules);
TouchDragWindows(TouchMoveSchedule, TouchMoveWinSchedule);
TouchDragWindows(TouchMoveReg, TouchMoveWinReg);
TouchDragWindows(TouchMoveAwards, TouchMoveWinAwards);


function TouchDragWindows(header, windows) {
    header.addEventListener('mousedown', () => {
        TouchDragWinElem(header, windows);
    });
};

function TouchDragWinElem(header, elem){
    elem.ontouchstart = function(e){
        let coords = getCoords(elem)
        let shiftX = e.clientX - coords.left;
        let shiftY = e.clientY - coords.top;

        document.body.style.overflow = 'hidden';

        TouchMoveAt(e.pageX, e.pageY);
        function TouchMoveAt(pageX, pageY) {
            elem.style.left = pageX - shiftX + 'px';
            elem.style.top = pageY - shiftY + 'px';
        }

        function onTouchMove(e) {
            TouchMoveAt(e.pageX, e.pageY);
        }
    
        document.addEventListener('touchmove',onTouchMove);

        if (header.id == 'nomove') {
            document.removeEventListener('touchmove',onTouchMove);
            elem.ontouchend = null;
        }

        elem.ontouchend = function() {
            document.removeEventListener('touchmove',onTouchMove);
            elem.ontouchend = null;
        };
        elem.ontouchcancle = function () {
            document.removeEventListener('touchmove',onTouchMove);
            elem.ontouchend = null;
        };
       
    };
    let TouchWinBodyAbout = document.getElementById('about_content');
    let TouchWinBodyFAQ = document.getElementById('faq_content');
    let TouchWinBodyRules = document.getElementById('rules_content');
    let TouchWinBodySchedule = document.getElementById('schedule_content');
    let TouchWinBodyReg = document.getElementById('reg_content');
    let TouchWinBodyAwards = document.getElementById('awards_content');
    TouchOffDrag(TouchWinBodyAbout);
    TouchOffDrag(TouchWinBodyFAQ);
    TouchOffDrag(TouchWinBodyRules);
    TouchOffDrag(TouchWinBodySchedule);
    TouchOffDrag(TouchWinBodyReg);
    TouchOffDrag(TouchWinBodyAwards);

    let TouchWinFooterAbout = document.getElementById('about_footer');
    let TouchWinFooterFAQ = document.getElementById('faq_footer');
    let TouchWinFooterRules = document.getElementById('rules_footer');
    let TouchWinFooterSchedule = document.getElementById('schedule_footer');
    let TouchWinFooterAwards = document.getElementById('awards_footer');
    TouchOffDrag(TouchWinFooterAbout);
    TouchOffDrag(TouchWinFooterFAQ);
    TouchOffDrag(TouchWinFooterRules);
    TouchOffDrag(TouchWinFooterSchedule);
    TouchOffDrag(TouchWinFooterAwards);

    function TouchOffDrag(win){
        win.ontouchstart = function(){
            elem.ontouchstart = function(){
                console.log('false');
                // elem.preventDefault();
                return false
            };
        };
    };

    elem.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {  
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
    };
};




// let MoveAboutSh = document.getElementById('about_sh');
// let MoveFAQSh = document.getElementById('faq_sh');
// let MoveRulesSh = document.getElementById('rules_sh');
// let MoveScheduleSh = document.getElementById('schedule_sh');
// let MoveRegSh = document.getElementById('reg_sh');
// let MoveAwardsSh = document.getElementById('awards_sh');
// DragShortcutElem(MoveAboutSh);
// DragShortcutElem(MoveFAQSh);
// DragShortcutElem(MoveRulesSh);
// DragShortcutElem(MoveScheduleSh);
// DragShortcutElem(MoveRegSh);
// DragShortcutElem(MoveAwardsSh);

// function DragShortcutElem(elem){
//     elem.ondragstart = () => false;
//     let rect = elem.getBoundingClientRect();
//     let css = getComputedStyle(elem);
//     document.body.style.overflow = 'hidden';
//     elem.onmousedown = e => {
//         elem.style.position = 'absolute';
//         let saveX = e.offsetX;
//         let saveY = e.offsetY;

//         document.onmousemove = e => {
//             elem.style.position = 'absolute';
//             elem.style.top = e.pageY - parseInt(css.margin) - saveY + 'px';
//             elem.style.left = e.pageX - parseInt(css.margin) - saveX + 'px';
//         };
//     };

//     elem.onmouseup = e => {
//         document.onmousemove = () => false;
//     };
// };

