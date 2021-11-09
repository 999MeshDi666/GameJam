// windows moveing
let MoveAbout = document.getElementById('move_about');
let MoveFAQ = document.getElementById('move_faq');
let MoveRules = document.getElementById('move_rules');
let MoveSchedule = document.getElementById('move_schedule');
let MoveReg = document.getElementById('move_reg');
let MoveAwards = document.getElementById('move_awards');

DragElem(MoveAbout);
DragElem(MoveFAQ);
DragElem(MoveRules);
DragElem(MoveSchedule);
DragElem(MoveReg);
DragElem(MoveAwards);

let MoveAboutSh = document.getElementById('about_sh');
let MoveFAQSh = document.getElementById('faq_sh');
let MoveRulesSh = document.getElementById('rules_sh');
let MoveScheduleSh = document.getElementById('schedule_sh');
let MoveRegSh = document.getElementById('reg_sh');
let MoveAwardsSh = document.getElementById('awards_sh');
DragElem(MoveAboutSh);
DragElem(MoveFAQSh);
DragElem(MoveRulesSh);
DragElem(MoveScheduleSh);
DragElem(MoveRegSh);
DragElem(MoveAwardsSh);

function DragElem(elem){
    elem.onmousedown = function(e){
        let shiftX = e.clientX - elem.getBoundingClientRect().left;
        let shiftY = e.clientY - elem.getBoundingClientRect().top;
        // Move.style.position = 'absolute';
        // e.style.zIndex = 4;
        // document.body.append(elem);
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
    
        
    };
    elem.ondragstart = function() {
        return false;
    };

};