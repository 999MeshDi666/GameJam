// windows drag
let MoveAbout = document.getElementById('move_about');
let MoveWinAbout = document.querySelector('.desktop_win_about');

let MoveFAQ = document.getElementById('move_faq');
let MoveWinFAQ = document.querySelector('.desktop_win_faq');

let MoveRules = document.getElementById('move_rules');
let MoveWinRules = document.querySelector('.desktop_win_rules');

let MoveSchedule = document.getElementById('move_schedule');
let MoveWinSchedule = document.querySelector('.desktop_win_schdule');

let MoveReg = document.getElementById('move_reg');
let MoveWinReg = document.querySelector('.desktop_win_registration');

let MoveAwards = document.getElementById('move_awards');
let MoveWinAwards = document.querySelector('.desktop_win_awards');
DragWindows(MoveAbout, MoveWinAbout);
DragWindows(MoveFAQ, MoveWinFAQ);
DragWindows(MoveRules, MoveWinRules);
DragWindows(MoveSchedule, MoveWinSchedule);
DragWindows(MoveReg, MoveWinReg);
DragWindows(MoveAwards, MoveWinAwards);


// let MoveAboutSh = document.getElementById('about_sh');
// let MoveFAQSh = document.getElementById('faq_sh');
// let MoveRulesSh = document.getElementById('rules_sh');
// let MoveScheduleSh = document.getElementById('schedule_sh');
// let MoveRegSh = document.getElementById('reg_sh');
// let MoveAwardsSh = document.getElementById('awards_sh');
// DragElem(MoveAboutSh);
// DragElem(MoveFAQSh);
// DragElem(MoveRulesSh);
// DragElem(MoveScheduleSh);
// DragElem(MoveRegSh);
// DragElem(MoveAwardsSh);

function DragWindows(header, windows){
    header.addEventListener('mousedown', ()=>{
        DragElem(windows);
    });
};

function DragElem(elem){
    elem.onmousedown = function(e){
        let shiftX = e.clientX - elem.getBoundingClientRect().left;
        let shiftY = e.clientY - elem.getBoundingClientRect().top;
        document.body.style.overflow = 'hidden';
        moveAt(e.pageX, e.pageY);
        function moveAt(pageX, pageY) {
            elem.style.left = pageX - shiftX + 'px';
            elem.style.top = pageY - shiftY + 'px';
        }
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
    
        document.addEventListener('mousemove',onMouseMove);
        

        elem.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            elem.onmouseup = null;
        };
        let WinBodyAbout = document.getElementById('about_content');
        let WinBodyFAQ = document.getElementById('faq_content');
        let WinBodyRules = document.getElementById('rules_content');
        let WinBodySchedule = document.getElementById('schedule_content');
        let WinBodyReg = document.getElementById('reg_content');
        let WinBodyAwards = document.getElementById('awards_content');
        OffDrag(WinBodyAbout);
        OffDrag(WinBodyFAQ);
        OffDrag(WinBodyRules);
        OffDrag(WinBodySchedule);
        OffDrag(WinBodyReg);
        OffDrag(WinBodyAwards);

        let WinFooterAbout = document.getElementById('about_footer');
        let WinFooterFAQ = document.getElementById('faq_footer');
        let WinFooterRules = document.getElementById('rules_footer');
        let WinFooterSchedule = document.getElementById('schedule_footer');
        let WinFooterAwards = document.getElementById('awards_footer');
        OffDrag(WinFooterAbout);
        OffDrag(WinFooterFAQ);
        OffDrag(WinFooterRules);
        OffDrag(WinFooterSchedule);
        OffDrag(WinFooterAwards);

        function OffDrag(win){
            win.style.userSelect = 'text';
            win.onmousedown = function(){
                elem.onmousedown = function(){
                    console.log('false');
                    elem.preventDefault();
                };
            };
        };
        
       
    };
    elem.ondragstart = function() {
        return false;
    };
  
    
    
};