
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
function Drag(e){
    e.addEventListener('touchstart', function(event) {
        if (event.targetTouches.length == 1) {
            document.body.style.overflow = 'hidden';
            TouchWinContent.style.overflow = "hidden";
            let touch = event.targetTouches[0];
            touchOffsetX = touch.pageX - touch.target.offsetLeft;
            touchOffsetY = touch.pageY - touch.target.offsetTop;
        }
    }, false);
    /*Передвигаем объект*/
    e.addEventListener('touchmove', function(event) {
        if (event.targetTouches.length == 1) {

            let touch = event.targetTouches[0];
            
            e.style.WebkitTransform="translate("+(touch.pageX-touchOffsetX)+"px,"+(touch.pageY-touchOffsetY)+"px)";
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
            let objWidth = e.offsetWidth;
            let objHeight = e.offsetHeight;
            let objX = e.offsetLeft;
            let objY = e.offsetTop;
            if(
                (event.changedTouches[0].pageX > objX) &&
                (event.changedTouches[0].pageX < (objX + objWidth)) &&
                (event.changedTouches[0].pageY > objY) &&
                (event.changedTouches[0].pageY < (objY + objHeight))){
                /*Мы над объектом tarobj*/
            }
        }
    }, false);
}








