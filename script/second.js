document.getElementById('back-btn')
    .addEventListener('click', function(){
        window.location.href="index.html"
        
    })

    // document.getElementById('color-btn')
        // .addEventListener('click' , getElementById());

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }



    