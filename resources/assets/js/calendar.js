const polishDays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
const polishMonths = ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

const polishDaysLength = polishDays.length;

const month = document.getElementById('month');
const dayName = document.getElementById('dayName');

const now = new Date();
const monthIndex = now.getMonth();
const year = now.getFullYear();

var tempDate = new Date(year, monthIndex, 1);
var skip = tempDate.getDay();



//set the h1 tag in caption for a current month and year
month.innerHTML = polishMonths[monthIndex] +' '+ year;

window.onload = function loadCalendar(){
//appends a default days names
for(i=1; i<skip; ++i){
	tempDate.setDate(tempDate.getDate() - 1);
};

for (var i = 0; i < polishDays.length; i++) {
	th = document.createElement('th');
	th.className = 'calendar__day__header';
	th.textContent =  polishDays[i];
	dayName.appendChild(th);
};

const tableBody = document.getElementById('tableBody');

//creates body of the calendar table
do
    {
        tr = document.createElement('tr')
        tableBody.appendChild(tr)
        //loops through each week
        for(i=0; i < 7; i++)
        {
        	td = document.createElement('td');
        	aLink = document.createElement('a');
        	aLink.href = tempDate.getDate()+'/'+(monthIndex+1)+'/'+tempDate.getFullYear();
        	
        	//concatenate date parts in a string
        	var dateIncluded ='"'+tempDate.getFullYear()+'-'+(monthIndex+1)+'-'+tempDate.getDate()+'"';
        	if (tasksDates.includes(dateIncluded))
        	 {
        	 	console.log(tasksDates);
        	 	console.log(dateIncluded);
        	 	console.log(tasksDates.includes(dateIncluded));
        	 	aLink.textContent = tempDate.getDate()+'!';
        	 }else
        	 {
        	 	aLink.textContent = tempDate.getDate();
        	 };
        	console.log(aLink);
        	td.appendChild(aLink);

            tr.appendChild(td);
        	if (tempDate.getDate() == now.getDate() && tempDate.getMonth() == monthIndex) {
        		td.className = 'calendar__day__cell current';
        	}else{
        		td.className = 'calendar__day__cell';
        	}
        	
            

            tempDate.setDate(tempDate.getDate() + 1);
        };

    }while(tempDate.getMonth() == monthIndex);
};

