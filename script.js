


    var container = $('#cont')
    var workhrs = [9, 10, 11, 12, 1, 2, 3, 4, 5]
    var todayDate = moment().format('dddd, MMM Do YYYY');
    var thisHr = moment().hours()
    var todoList = []
    var todoList = JSON.parse( localStorage.todoList || [
    {
            '9': { time: '9', plans: '' }, '10': { time: '10', plans: '' }, '11': { time: '11', plans: '' }, '12': { time: '12', plans: '' },
            '13': { time: '13', plans: '' }, '14': { time: '14', plans: '' }, '15': { time: '15', plans: '' }, '16': { time: '16', plans: '' }, '17': { time: '17', plans: '' }
        }
    ])

//display current date
    function showNow() {
        $('#currentDay').html(`${todayDate}`)
    }
    showNow()


//creating the time slot elements on the page and assignign class (past, present, future) 
    function populateTime() {
        for (i = 9, j = 0; i <= 17, j < workhrs.length; i++, j++) {
            container.append(`<div id='${i}' class="input-group timeSlot ${i < thisHr ? 'past' : i === thisHr ? 'present' : 'future'
                }">
    <span class="input-group-text timeAt${i}" style="width: 70px" id="basic-addon1 timeAt${i}">${workhrs[j]}:00</span>
    <button class="btn btn-outline-secondary saveBtn" onclick="saveThis(event)" type="button" id="button-addon1 ${i}"><i class='fas fa-save' id='${i}'></i></button>
    <input type="text" class="textarea form-control " id= "txt${i}" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">  
</div>`)
        }
    }

//filling time slot  elements with local storage data if available or ''
    function hasplans(){
        for(i=9; i<18; i++){
            thisPlan = JSON.parse(localStorage.todoList)
            if( thisPlan[i].plans != ''){
            document.getElementById(`txt${i}`).value = thisPlan[i].plans
            }else{
                document.getElementById(`txt${i}`).value = ''
            }
        }
    }

// obtaining  user input and saving in loacalStorage then refresh page
    function saveThis(event) {
         if (event) event.preventDefault()
         x = event.target.id
         console.log(x);

        var thisText = document.getElementById(`txt${x}`).value
        console.log(thisText);
        todoList[x].plans = thisText;
        localStorage.todoList = JSON.stringify( todoList )
        window.location.href = window.location.href
    }


    populateTime()
    hasplans()


