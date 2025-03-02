document.getElementById('question-section')
    .addEventListener('click', function(){
        window.location.href="/main.html"
    })
document.getElementById('mobile-btn')
    .addEventListener('click', function(){
        taskByBtnID()
    })


    function taskByBtnID(id){
        console.log(id)
    }