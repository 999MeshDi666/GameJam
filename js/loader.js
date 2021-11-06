document.body.onload = function(){
    setTimeout(function(){
        let loader = document.querySelector('.loader');
        if(!loader.classList.contains('off_loader')){
            loader.classList.add('off_loader');
        };
    }, 9000);
};