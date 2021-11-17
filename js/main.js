//timer
let CurTime = document.querySelector(".time");
let timerId = setInterval(() => SetCurTime(), 1000);
let curDate;
function SetCurTime() {
    curDate = new Date();
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
    RegWindows.classList.toggle('desktop_win_registration_on');
})
WinAwards.addEventListener('click', ()=>{
    WinAwards.classList.toggle('win_hide');
    AwardsWindows.classList.toggle('desktop_win_awards_on');
})

// values of desktop action
let AboutWindows = document.querySelector('.desktop_win_about');
let FAQWindows = document.querySelector('.desktop_win_faq');
let RulesWindows = document.querySelector('.desktop_win_rules');
let ScheduleWindows = document.querySelector('.desktop_win_schedule');
let RegWindows = document.querySelector('.desktop_win_registration');
let AwardsWindows = document.querySelector('.desktop_win_awards')


AboutIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinAbout.classList.add('win_about_on');
    WinAbout.classList.remove('win_hide');
    AboutWindows.classList.add('desktop_win_about_on');
});
FAQIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinFAQ.classList.add('win_faq_on');
    WinFAQ.classList.remove('win_hide');
    FAQWindows.classList.add('desktop_win_faq_on');
});
RulesIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinRules.classList.add('win_rules_on');
    WinRules.classList.remove('win_hide');
    RulesWindows.classList.add('desktop_win_rules_on');
});
ScheduleIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinSchedule.classList.add('win_schedule_on');
    WinSchedule.classList.remove('win_hide');
    ScheduleWindows.classList.add('desktop_win_schedule_on');
});
RegIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinReg.classList.add('win_reg_on');
    WinReg.classList.remove('win_hide');
    RegWindows.classList.add('desktop_win_registration_on');
});
AwardsIcon.addEventListener('click',()=>{
    WinBtn.classList.remove('win_btn_clicked');
    menuWindows.classList.remove('menu_windows_on');
    WinAwards.classList.add('win_awards_on');
    WinAwards.classList.remove('win_hide');
    AwardsWindows.classList.add('desktop_win_awards_on');
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
    WinAbout.classList.remove('win_hide');
    AboutWindows.classList.add('desktop_win_about_on');
});
FAQShortcut.addEventListener('dblclick', ()=>{
    WinFAQ.classList.add('win_faq_on');
    WinFAQ.classList.remove('win_hide');
    FAQWindows.classList.add('desktop_win_faq_on');
});
RulesShortcut.addEventListener('dblclick',()=>{
    WinRules.classList.add('win_rules_on');
    WinRules.classList.remove('win_hide');
    RulesWindows.classList.add('desktop_win_rules_on');
});
ScheduleShortcut.addEventListener('dblclick', ()=>{
    WinSchedule.classList.add('win_schedule_on');
    WinSchedule.classList.remove('win_hide');
    ScheduleWindows.classList.add('desktop_win_schedule_on');
});
RegShortcut.addEventListener('dblclick', ()=>{
    WinReg.classList.add('win_reg_on');
    WinReg.classList.remove('win_hide');
    RegWindows.classList.add('desktop_win_registration_on');
});
AwardsShortcut.addEventListener('dblclick',()=>{
    WinAwards.classList.add('win_awards_on');
    WinAwards.classList.remove('win_hide');
    AwardsWindows.classList.add('desktop_win_awards_on');
});
AboutShortcut.addEventListener('mousedown', () => {
    AboutShortcut.style.border = '1px dashed grey';
});
AboutShortcut.addEventListener('mouseleave', () => {
    AboutShortcut.style.border = '';
});
FAQShortcut.addEventListener('mousedown', () => {
    FAQShortcut.style.border = '1px dashed grey';
});
FAQShortcut.addEventListener('mouseleave', () => {
    FAQShortcut.style.border = '';
});
RulesShortcut.addEventListener('mousedown', () => {
    RulesShortcut.style.border = '1px dashed grey';
});
RulesShortcut.addEventListener('mouseleave', () => {
    RulesShortcut.style.border = '';
});
ScheduleShortcut.addEventListener('mousedown', () => {
    ScheduleShortcut.style.border = '1px dashed grey';
});
ScheduleShortcut.addEventListener('mouseleave', () => {
    ScheduleShortcut.style.border = '';
});
RegShortcut.addEventListener('mousedown', () => {
    RegShortcut.style.border = '1px dashed grey';
});
RegShortcut.addEventListener('mouseleave', () => {
    RegShortcut.style.border = '';
});
AwardsShortcut.addEventListener('mousedown', () => {
    AwardsShortcut.style.border = '1px dashed grey';
});
AwardsShortcut.addEventListener('mouseleave', () => {
    AwardsShortcut.style.border = '';
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
let CloseReg = document.querySelector('.close_windows_reg');
CloseReg.addEventListener('click',()=>{
    RegWindows.classList.remove('desktop_win_registration_on');
    WinReg.classList.remove('win_reg_on');
});
let CloseAwards = document.querySelector('.close_windows_awards');
CloseAwards.addEventListener('click',()=>{
    AwardsWindows.classList.remove('desktop_win_awards_on');
    WinAwards.classList.remove('win_awards_on');
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
let MinReg = document.querySelector('.min_windows_reg');
MinReg.addEventListener('click',()=>{
    RegWindows.classList.remove('desktop_win_registration_on');
    WinReg.classList.add('win_hide');
});
let MinAwards = document.querySelector('.min_windows_awards');
MinAwards.addEventListener('click',()=>{
    AwardsWindows.classList.remove('desktop_win_awards_on');
    WinAwards.classList.add('win_hide');
});

//maximize windows
var aboutmax = false;
let MaxAbout = document.querySelector('.max_windows_about');
let MaxAboutContent = document.getElementById('about_content');
let MaxAboutHeader = document.getElementById('move_about');
MaxAbout.addEventListener('click', () => {
    if (aboutmax) {
        AboutWindows.style.width = '400px';
        AboutWindows.style.height = '360px';
        AboutWindows.style.left = '5%';
        AboutWindows.style.top = '5%';
        MaxAboutContent.style.width = 'auto';
        MaxAboutContent.style.height = '274px';
        MaxAboutHeader.id = 'move_about';
        aboutmax = false;
    } else {
        AboutWindows.style.width = '100%';
        AboutWindows.style.height = '100%';
        AboutWindows.style.left = '0px';
        AboutWindows.style.top = '0px';
        MaxAboutContent.style.width = 'auto';
        MaxAboutContent.style.height = '100%';
        MaxAboutHeader.id = 'nomove';
        aboutmax = true;
    }
});
var faqmax = false;
let MaxFAQ = document.querySelector('.max_windows_faq');
let MaxFAQContent = document.getElementById('faq_content');
let MaxFAQHeader = document.getElementById('move_faq');
MaxFAQ.addEventListener('click', () => {
    if (faqmax) {
        FAQWindows.style.width = '400px';
        FAQWindows.style.height = '360px';
        FAQWindows.style.left = '5%';
        FAQWindows.style.top = '10%';
        MaxFAQContent.style.width = '328px';
        MaxFAQContent.style.height = '274px';
        MaxFAQHeader.id = 'move_about';
        faqmax = false;
    } else {
        FAQWindows.style.width = '100%';
        FAQWindows.style.height = '100%';
        FAQWindows.style.left = '0px';
        FAQWindows.style.top = '0px';
        MaxFAQContent.style.width = 'auto';
        MaxFAQContent.style.height = '100%';
        MaxFAQHeader.id = 'nomove';
        faqmax = true;
    }
});
var rulesmax = false;
let MaxRules = document.querySelector('.max_windows_rules');
let MaxRulesContent = document.getElementById('rules_content');
let MaxRulesHeader = document.getElementById('move_rules');
MaxRules.addEventListener('click', () => {
    if (rulesmax) {
        RulesWindows.style.width = '400px';
        RulesWindows.style.height = '360px';
        RulesWindows.style.left = '5%';
        RulesWindows.style.top = '15%';
        MaxRulesContent.style.width = '328px';
        MaxRulesContent.style.height = '274px';
        MaxRulesHeader.id = 'move_about';
        rulesmax = false;
    } else {
        RulesWindows.style.width = '100%';
        RulesWindows.style.height = '100%';
        RulesWindows.style.left = '0px';
        RulesWindows.style.top = '0px';
        MaxRulesContent.style.width = 'auto';
        MaxRulesContent.style.height = '100%';
        MaxRulesHeader.id = 'nomove';
        rulesmax = true;
    }
});
var schedulemax = false;
let MaxSchedule = document.querySelector('.max_windows_schedule');
let MaxScheduleContent = document.getElementById('schedule_content');
let MaxScheduleHeader = document.getElementById('move_schedule');
MaxSchedule.addEventListener('click', () => {
    if (schedulemax) {
        ScheduleWindows.style.width = '400px';
        ScheduleWindows.style.height = '360px';
        ScheduleWindows.style.left = '5%';
        ScheduleWindows.style.top = '20%';
        MaxScheduleContent.style.overflow = "scroll";
        MaxScheduleContent.style.width = '328px';
        MaxScheduleContent.style.height = '274px';
        MaxScheduleHeader.id = 'move_about';
        
        schedulemax = false;
    } else {
        ScheduleWindows.style.width = '100%';
        ScheduleWindows.style.height = '100%';
        ScheduleWindows.style.left = '0px';
        ScheduleWindows.style.top = '0px';
        MaxScheduleContent.style.overflow = "scroll";
        MaxScheduleContent.style.width = 'auto';
        MaxScheduleContent.style.height = '100%';
        MaxScheduleHeader.id = 'nomove';
        schedulemax = true;
    }
});
var awardsmax = false;
let MaxAwards = document.querySelector('.max_windows_awards');
let MaxAwardsContent = document.getElementById('awards_content');
let MaxAwardsHeader = document.getElementById('move_awards');
MaxAwards.addEventListener('click', () => {
    if (awardsmax) {
        AwardsWindows.style.width = '400px';
        AwardsWindows.style.height = '360px';
        AwardsWindows.style.left = '5%';
        AwardsWindows.style.top = '25%';
        MaxAwardsContent.style.width = '328px';
        MaxAwardsContent.style.height = '274px';
        MaxAwardsHeader.id = 'move_about';
        awardsmax = false;
    } else {
        AwardsWindows.style.width = '100%';
        AwardsWindows.style.height = '100%';
        AwardsWindows.style.left = '0px';
        AwardsWindows.style.top = '0px';
        MaxAwardsContent.style.width = 'auto';
        MaxAwardsContent.style.height = '100%';
        MaxAwardsHeader.id = 'nomove';
        awardsmax = true;
    }
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


// language panel
let Lang = document.querySelector('.lang');
let LangPanel = document.querySelector('.lang_panel');
Lang.addEventListener('click', ()=>{
    
    LangPanel.classList.toggle('lang_panel_on');
})