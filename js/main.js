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
let ScheduleIcon = document.getElementById('schedule');
let RegIcon = document.getElementById('reg');
let AwardsIcon = document.getElementById('awards');

let WinAbout = document.querySelector('.win_about');
let WinFAQ = document.querySelector('.win_faq ');
let WinRules = document.querySelector('.win_rules');
let WinSchedule = document.querySelector('.win_schedule');
let WinReg = document.querySelector('.win_reg');
let WinAwards = document.querySelector('.win_awards');

// hide windows action
WinAbout.addEventListener('click', ()=>{
    WinAbout.classList.toggle('win_hide');
    AboutWindows.classList.toggle('desktop_win_about_on');
})
WinFAQ.addEventListener('click', ()=>{
    WinFAQ.classList.toggle('win_hide');
    FAQWindows.classList.toggle('desktop_win_faq_on');
})
WinRules.addEventListener('click', ()=>{
    WinRules.classList.toggle('win_hide');
    RulesWindows.classList.toggle('desktop_win_rules_on');
})
WinSchedule.addEventListener('click', ()=>{
    WinSchedule.classList.toggle('win_hide');
    ScheduleWindows.classList.toggle('desktop_win_schedule_on');
})
WinReg.addEventListener('click', ()=>{
    WinReg.classList.toggle('win_hide');
    // FAQWindows.classList.toggle('desktop_win_faq_on');
})
WinAwards.addEventListener('click', ()=>{
    WinAwards.classList.toggle('win_hide');
    // RulesWindows.classList.toggle('desktop_win_rules_on');
})

// values of desktop action
let AboutWindows = document.querySelector('.desktop_win_about');
let FAQWindows = document.querySelector('.desktop_win_faq');
let RulesWindows = document.querySelector('.desktop_win_rules');
let ScheduleWindows = document.querySelector('.desktop_win_schedule');


AboutIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinAbout.classList.add('win_about_on');
    AboutWindows.classList.add('desktop_win_about_on');
});
FAQIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinFAQ.classList.add('win_faq_on');
    FAQWindows.classList.add('desktop_win_faq_on');
});
RulesIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinRules.classList.add('win_rules_on');
    RulesWindows.classList.add('desktop_win_rules_on');
});
ScheduleIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinSchedule.classList.add('win_schedule_on');
    ScheduleWindows.classList.add('desktop_win_schedule_on');
});
RegIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinReg.classList.add('win_reg_on');
    // RulesWindows.classList.add('desktop_win_rules_on');
});
AwardsIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinAwards.classList.add('win_awards_on');
    // RulesWindows.classList.add('desktop_win_rules_on');
});



// shortcuts action
let AboutShortcut = document.getElementById('about_sh');
let FAQShortcut = document.getElementById('faq_sh');
let RulesShortcut = document.getElementById('rules_sh');
let ScheduleShortcut = document.getElementById('schedule_sh');
let RegShortcut = document.getElementById('reg_sh');
let AwardsShortcut = document.getElementById('awards_sh');

AboutShortcut.addEventListener('dblclick', ()=>{
    WinAbout.classList.add('win_about_on');
    AboutWindows.classList.add('desktop_win_about_on');
});
FAQShortcut.addEventListener('dblclick', ()=>{
    WinFAQ.classList.add('win_faq_on');
    FAQWindows.classList.add('desktop_win_faq_on');
});
RulesShortcut.addEventListener('dblclick',()=>{
    WinRules.classList.add('win_rules_on');
    RulesWindows.classList.add('desktop_win_rules_on');
});
ScheduleShortcut.addEventListener('dblclick', ()=>{
    WinSchedule.classList.add('win_schedule_on');
    ScheduleWindows.classList.add('desktop_win_schedule_on');
});
RegShortcut.addEventListener('dblclick', ()=>{
    WinReg.classList.add('win_reg_on');
    // FAQWindows.classList.add('desktop_win_faq_on');
});
AwardsShortcut.addEventListener('dblclick',()=>{
    WinAwards.classList.add('win_awards_on');
    // RulesWindows.classList.add('desktop_win_rules_on');
});


// close windows
let CloseAbout = document.querySelector('.close_windows_about');
CloseAbout.addEventListener('click',()=>{
    AboutWindows.classList.remove('desktop_win_about_on');
    WinAbout.classList.remove('win_about_on');
});
let CloseFAQ = document.querySelector('.close_windows_faq');
CloseFAQ.addEventListener('click',()=>{
    FAQWindows.classList.remove('desktop_win_faq_on');
    WinFAQ.classList.remove('win_faq_on');
});
let CloseRules = document.querySelector('.close_windows_rules');
CloseRules.addEventListener('click',()=>{
    RulesWindows.classList.remove('desktop_win_rules_on');
    WinRules.classList.remove('win_rules_on');
});
let CloseSchedule = document.querySelector('.close_windows_schedule');
CloseSchedule.addEventListener('click',()=>{
    ScheduleWindows.classList.remove('desktop_win_schedule_on');
    WinSchedule.classList.remove('win_schedule_on');
});


//minimize windows
let MinAbout = document.querySelector('.min_windows_about');
MinAbout.addEventListener('click',()=>{
    AboutWindows.classList.remove('desktop_win_about_on');
    WinAbout.classList.add('win_hide');
});
let MinFAQ = document.querySelector('.min_windows_faq');
MinFAQ.addEventListener('click',()=>{
    FAQWindows.classList.remove('desktop_win_faq_on');
    WinFAQ.classList.add('win_hide');
});
let MinRules = document.querySelector('.min_windows_rules');
MinRules.addEventListener('click',()=>{
    RulesWindows.classList.remove('desktop_win_rules_on');
    WinRules.classList.add('win_hide');
});
let MinSchedule = document.querySelector('.min_windows_schedule');
MinSchedule.addEventListener('click',()=>{
    ScheduleWindows.classList.remove('desktop_win_schedule_on');
    WinSchedule.classList.add('win_hide');
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


// show schedule tables
let dateFirst = document.getElementById('date_1');
let dateFirstA = document.getElementById('date_1_table');
dateFirst.addEventListener('click', ()=>{
    dateFirstA.classList.toggle('show_date_table_on');
    
});
let dateSecond = document.getElementById('date_2');
let dateSecondA = document.getElementById('date_2_table');
dateSecond.addEventListener('click', ()=>{
    dateSecondA.classList.toggle('show_date_table_on');
    
});
let dateThird = document.getElementById('date_3');
let dateThirdA = document.getElementById('date_3_table');
dateThird.addEventListener('click', ()=>{
    dateThirdA.classList.toggle('show_date_table_on');
});





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

