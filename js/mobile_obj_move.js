


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
/*Ловим касание*/
function Drag(e){
    e.addEventListener('touchstart', function(event) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            touchOffsetX = touch.pageX - touch.target.offsetLeft;
            touchOffsetY = touch.pageY - touch.target.offsetTop;
        }
    }, false);
    /*Передвигаем объект*/
    e.addEventListener('touchmove', function(event) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            e.style.left = touch.pageX-touchOffsetX + 'px';
            e.style.top = touch.pageY-touchOffsetY + 'px';
        }
    }, false);
}

Drop(TouchMoveAboutSh);
Drop(TouchMoveFAQSh);
Drop(TouchMoveRulesSh);
Drop(TouchMoveScheduleSh);
Drop(TouchMoveRegSh);
Drop(TouchMoveAwardsSh);
function Drop(e){
    e.addEventListener('touchend', function(event) {
        if (event.changedTouches.length == 1) {
            var tarWidth = e.offsetWidth;
            var tarHeight = e.offsetHeight;
            var tarX = e.offsetLeft;
            var tarY = e.offsetTop;
            if(
                (event.changedTouches[0].pageX > tarX) &&
                (event.changedTouches[0].pageX < (tarX + tarWidth)) &&
                (event.changedTouches[0].pageY > tarY) &&
                (event.changedTouches[0].pageY < (tarY + tarHeight))){
                /*Мы над объектом tarobj*/
            }
        }
    }, false);
}










// TouchShortcutElem(TouchMoveAboutSh);
// TouchShortcutElem(TouchMoveFAQSh);
// TouchShortcutElem(TouchMoveRulesSh);
// TouchShortcutElem(TouchMoveScheduleSh);
// TouchShortcutElem(TouchMoveRegSh);
// TouchShortcutElem(TouchMoveAwardsSh);

// function TouchShortcutElem(elem){
//     elem.ondragstart = () => false;
//     let rect = elem.getBoundingClientRect();
//     let css = getComputedStyle(elem);
//     document.body.style.overflow = 'hidden';
//     elem.ontouchstart = e => {
//         elem.style.position = 'absolute';
//         let saveX = e.offsetX;
//         let saveY = e.offsetY;
        

//         document.ontouchmove = e => {
//             elem.style.position = 'absolute';
//             elem.style.top = e.pageY - parseInt(css.margin) - saveY + 'px';
//             elem.style.left = e.pageX - parseInt(css.margin) - saveX + 'px';
//         };
//     };

//     elem.ontoucend = e => {
//         document.ontouchmove = () => false;
//     };
// };

