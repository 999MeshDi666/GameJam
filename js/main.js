// Header
let WinBtn = document.querySelector('.win_btn');
let menuWindows = document.querySelector('.menu_windows');
WinBtn.addEventListener('click', ()=>{
    WinBtn.classList.toggle('win_btn_clicked');
    menuWindows.classList.toggle('menu_windows_on')
});

function SetCurTime(){
    let CurTime = document.querySelector(".time");
    let curDate = new Date();
    if(curDate.getHours() > 11){
        CurTime.textContent = `${curDate.getHours()}:${curDate.getMinutes()} PM`;
    }
    else{
        CurTime.textContent = `${curDate.getHours()}:${curDate.getMinutes()} AM`;
    };

};
SetCurTime();


