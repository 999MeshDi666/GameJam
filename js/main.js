// header
let WinBtn = document.querySelector('.win_btn');
let menuWindows = document.querySelector('.menu_windows');
WinBtn.addEventListener('click', ()=>{
    WinBtn.classList.toggle('win_btn_clicked');
    menuWindows.classList.toggle('menu_windows_on')
});

// menu icons action
let AboutIcon = document.getElementById('about');
let FAQIcon = document.getElementById('faq');
let RulesIcon = document.getElementById('rules');
let WinAbout = document.querySelector('.win_about');
let WinFAQ = document.querySelector('.win_faq ');
let WinRules = document.querySelector('.win_rules');

AboutIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinAbout.classList.add('win_about_on');
});
FAQIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinFAQ.classList.add('win_faq_on');
});

RulesIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinRules.classList.add('win_rules_on');
});

// shortcuts action
let AboutShortcut = document.getElementById('about_sh');
let FAQShortcut = document.getElementById('faq_sh');
let RulesShortcut = document.getElementById('rules_sh');

AboutShortcut.addEventListener('dblclick', ()=>{
    WinAbout.classList.add('win_about_on');
});
FAQShortcut.addEventListener('dblclick', ()=>{
    WinFAQ.classList.add('win_faq_on');
});
RulesShortcut.addEventListener('dblclick',()=>{
    WinRules.classList.add('win_rules_on');
});


// show faq questions
let questionFirst = document.getElementById('question_1');
let questionFirstA = document.getElementById('question_1_answer');
questionFirst.addEventListener('click', ()=>{
    questionFirstA.classList.toggle('text_answer_on');
    
});
let questionSecond = document.getElementById('question_2');
let questionSecondA = document.getElementById('question_2_answer');
questionSecond.addEventListener('click', ()=>{
    questionSecondA.classList.toggle('text_answer_on');
    
});
let questionThird = document.getElementById('question_3');
let questionThirdA = document.getElementById('question_3_answer');
questionThird.addEventListener('click', ()=>{
    questionThirdA.classList.toggle('text_answer_on');
    
});

let questionFourth = document.getElementById('question_4');
let questionFourthA = document.getElementById('question_4_answer');
questionFourth.addEventListener('click', ()=>{
    questionFourthA.classList.toggle('text_answer_on');
   
});
let questionFifth = document.getElementById('question_5');
let questionFifthA = document.getElementById('question_5_answer');
questionFifth.addEventListener('click', ()=>{
    questionFifthA.classList.toggle('text_answer_on');
 
});



// shortcuts moveing
// AboutShortcut.addEventListener('mousedown',(e)=>{

//     var coords = getCoords(AboutShortcut);
//     var shiftX = e.pageX - coords.left;
//     var shiftY = e.pageY - coords.top;

//     AboutShortcut.style.position = 'absolute';
//     moveAt(e);

//     AboutShortcut.style.zIndex = 1000;

//     function moveAt(e){
//         AboutShortcut.style.left = e.pageX - shiftX + 'px';
//         AboutShortcut.style.top = e.pageY - shiftY  + 'px';
//     }

//     document.onmousemove = function(){
//         moveAt(e);
//     };

//     AboutShortcut.addEventListener('mouseup', ()=>{
//         document.onmousemove = null;
//         AboutShortcut.onmouseup = null;
//     });

//     AboutShortcut.addEventListener('dragstart', ()=>{
//         return false;
//     });
//     function getCoords(elem){
//         var box = elem.getBoundingClientRect();
//         return{
//             top: box.top + pageYOffset,
//             left: box.left + pageXOffset
//         };
//     }

// });


//timer
let CurTime = document.querySelector(".time");
let curDate = new Date();

function SetCurTime(){
   
    if(curDate.getHours() > 11){
        if(curDate.getMinutes() > 9){
            CurTime.textContent = `${curDate.getHours()}:${curDate.getMinutes()} PM`;
        }
        else{
            CurTime.textContent = `${curDate.getHours()}:0${curDate.getMinutes()} PM`;
        }
    }
    else{
        if(curDate.getMinutes() > 9){
            CurTime.textContent = `${curDate.getHours()}:${curDate.getMinutes()} AM`;
        }
        else{
            CurTime.textContent = `${curDate.getHours()}:0${curDate.getMinutes()} AM`;
        }
    };
};
setInterval(SetCurTime(), 1000);

