document.getElementById('question-section')
    .addEventListener('click', function(){
        window.location.href="/main.html"
    })

// Card 1 logic

    document.getElementById('mobile-btn')
        .addEventListener('click',function(){
            // Alert section
            alert('Board updated successfully');
            // sub section
            const oldTask = document.getElementById('task-assigned').innerText;
            const convertedOldTask = parseInt(oldTask); 
            const newTask = convertedOldTask - 1;
            document.getElementById('task-assigned').innerText = newTask;
            // add section
            const oldCheck = document.getElementById('nav-check-box').innerText;
            const convertedOldCheck = parseInt(oldCheck);
            const newCheck = convertedOldCheck + 1;
            document.getElementById('nav-check-box').innerText = newCheck;
            // disable section
            document.getElementById('mobile-btn').setAttribute('disabled',true);
            // add history section;

            // card title subsection;
            const title1 = document.getElementById('card-1-title').innerText;

            const date = new Date();  
            const newHistoryDiv = document.getElementById('New-history-div');
            const p = document.createElement("p");
            p.innerText =`
            You completed the task ${title1} at ${date}
            `
            console.log(p);
            p.classList.add('new-history');
            newHistoryDiv.appendChild(p);
        })



        // card - 2
        document.getElementById('btn-dark')
        .addEventListener('click',function(){
            // Alert section
            alert('Board updated successfully');
            // sub section
            const oldTask = document.getElementById('task-assigned').innerText;
            const convertedOldtask = parseInt(oldTask); 
            const newTask = convertedOldtask - 1;
            document.getElementById('task-assigned').innerText = newTask;
            // add section
            const oldCheck = document.getElementById('nav-check-box').innerText;
            const convertedOldCheck = parseInt(oldCheck);
            const newCheck = convertedOldCheck + 1;
            document.getElementById('nav-check-box').innerText = newCheck;
            // disable section
            document.getElementById('btn-dark').setAttribute('disabled',true);
            // add history section;


            const date = new Date();  
            // card title subsection;
            const title2 = document.getElementById('card-2-title').innerText;


            const newHistoryDiv = document.getElementById('New-history-div');
            const p = document.createElement("p");
            p.innerText =`
            You completed the task ${title2} at ${date}
            `
            console.log(p);
            p.classList.add('new-history');
            newHistoryDiv.appendChild(p);
        })


        // Card-3
        document.getElementById('Home-btn')
        .addEventListener('click',function(){
            // Alert section
            alert('Board updated successfully');
            // sub section
            const oldTask = document.getElementById('task-assigned').innerText;
            const convertedOldtask = parseInt(oldTask); 
            const newTask = convertedOldtask - 1;
            document.getElementById('task-assigned').innerText = newTask;
            // add section
            const oldCheck = document.getElementById('nav-check-box').innerText;
            const convertedOldCheck = parseInt(oldCheck);
            const newCheck = convertedOldCheck + 1;
            document.getElementById('nav-check-box').innerText = newCheck;
            // disable section
            document.getElementById('Home-btn').setAttribute("disabled", true);
            // add history section;


            const date = new Date();  
            // card title subsection;
            const title3 = document.getElementById('card-3-title').innerText;
            const newHistoryDiv = document.getElementById('New-history-div');
            const p = document.createElement("p");
            p.innerText =`
            You completed the task ${title3} at ${date}
            `
            console.log(p);
            p.classList.add('new-history');
            newHistoryDiv.appendChild(p);
        })
        // Card -4
        document.getElementById('emoji-btn')
        .addEventListener('click',function(){
            // Alert section
            alert('Board updated successfully');
            // sub section
            const oldTask = document.getElementById('task-assigned').innerText;
            const convertedOldtask = parseInt(oldTask); 
            const newTask = convertedOldtask - 1;
            document.getElementById('task-assigned').innerText = newTask;
            // add section
            const oldCheck = document.getElementById('nav-check-box').innerText;
            const convertedOldCheck = parseInt(oldCheck);
            const newCheck = convertedOldCheck + 1;
            document.getElementById('nav-check-box').innerText = newCheck;
            // disable section
            document.getElementById('Home-btn').setAttribute("disabled", true);
            // add history section;
            // card title subsection;
            const title4 = document.getElementById('card-4-title').innerText;

            const date = new Date(); 
            const newHistoryDiv = document.getElementById('New-history-div');
            const p = document.createElement("p");
            p.innerText =`
            You completed the task ${title4} at  ${date}
            `
            console.log(p);
            p.classList.add('new-history');
            newHistoryDiv.appendChild(p);
        })

        // Card-5 
        document.getElementById('api-btn')
        .addEventListener('click',function(){
            // Alert section
            alert('Board updated successfully');
            // sub section
            const oldTask = document.getElementById('task-assigned').innerText;
            const convertedOldtask = parseInt(oldTask); 
            const newTask = convertedOldtask - 1;
            document.getElementById('task-assigned').innerText = newTask;
            // add section
            const oldCheck = document.getElementById('nav-check-box').innerText;
            const convertedOldCheck = parseInt(oldCheck);
            const newCheck = convertedOldCheck + 1;
            document.getElementById('nav-check-box').innerText = newCheck;
            // disable section
            document.getElementById('api-btn').setAttribute("disabled", true);
            // add history section;

            // card title subsection;
            const title5 = document.getElementById('card-5-title').innerText;

            const date = new Date(); 
            const newHistoryDiv = document.getElementById('New-history-div');
            const p = document.createElement("p");
            p.innerText =`
            You completed the task ${title5} at ${date}
            `
            console.log(p);
            p.classList.add('new-history');
            newHistoryDiv.appendChild(p);
        })

        // card-6 
        document.getElementById('job-btn')
        .addEventListener('click',function(){
            // Alert section
            alert('Board updated successfully');
            // sub section
            const oldTask = document.getElementById('task-assigned').innerText;
            const convertedOldtask = parseInt(oldTask); 
            const newTask = convertedOldtask - 1;
            document.getElementById('task-assigned').innerText = newTask;
            // add section
            const oldCheck = document.getElementById('nav-check-box').innerText;
            const convertedOldCheck = parseInt(oldCheck);
            const newCheck = convertedOldCheck + 1;
            document.getElementById('nav-check-box').innerText = newCheck;
            // disable section
            document.getElementById('job-btn').setAttribute("disabled", true);
            // add history section;


            







            // card title subsection;
            const title6 = document.getElementById('card-6-title').innerText;

            const date = new Date();
            const newHistoryDiv = document.getElementById('New-history-div');
            const p = document.createElement("p");
            p.innerText =`
            You completed the task ${title6} at ${date}
            `
            console.log(p);
            p.classList.add('new-history');
            newHistoryDiv.appendChild(p);
        })



                        // Clear history section 

        document.getElementById('clear-btn')
        .addEventListener('click', function(){
            const allHistory = document.getElementById('New-history-div');
            allHistory.innerHTML='';
            
        })


        

    
    const newDate = document.getElementById('new-date');
    const date = new Date("Wed Mar 05 2025 06:00:00 GMT+0600");
const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
console.log(formattedDate);
newDate.innerText = formattedDate;