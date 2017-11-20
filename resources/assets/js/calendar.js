const polishDays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
const polishMonths = ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

const polishDaysLength = polishDays.length;

//h1 tag in dom in which appends current month and year
const month = document.getElementById('month');

//table row in which appends polish day names
const dayName = document.getElementById('dayName');

const tableBody = document.getElementById('tableBody');
const tableHead = document.getElementById('tableHead');

var now;
var monthIndex;
var year;
var skip;
window.onload = function setVariables(){

	now = new Date();
	monthIndex = now.getMonth();
	year = now.getFullYear();

	tempDate = new Date(year, monthIndex, 1);

	skip = tempDate.getDay();
	//appends a default days names
	for(i=1; i<skip; ++i){
		tempDate.setDate(tempDate.getDate() - 1);
	};

	return loadCalendar();

}


function loadCalendar(){
//set the h1 tag in caption for a current month and year
month.innerHTML = polishMonths[monthIndex] +' '+ year;

tableHeadTr = document.createElement('tr');
tableHeadTr.id = 'dayName';
tableHead.appendChild(tableHeadTr);

//creates a header of the calendar with polish days
	for (var i = 0; i < polishDays.length; i++) {
		th = document.createElement('th');
		th.className = 'calendar__day__header';
		th.textContent =  polishDays[i];
		tableHeadTr.appendChild(th);
	};
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
        	 	aLink.textContent = tempDate.getDate()+'!';
        	 }else
        	 {
        	 	aLink.textContent = tempDate.getDate();
        	 };

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

document.getElementById('previousMonth').addEventListener('click', function previousMonth(){
	var tr = document.getElementsByTagName('tr');
	for (var i = tr.length; i--; ) {
   		tr[i].remove();
	};

	previous = new Date(year, monthIndex-1,);
	monthIndex = previous.getMonth();
	year = previous.getFullYear();

	tempDate = new Date(year, monthIndex, 1);

	console.log(tempDate);

	skip = tempDate.getDay();
	if (skip < 1) {
		skip = 7;
	};
	for(i=1; i<skip; ++i){
		tempDate.setDate(tempDate.getDate() - 1);
	};

	return loadCalendar();

});

document.getElementById('nextMonth').addEventListener('click', function nextMonth(){
		var tr = document.getElementsByTagName('tr');
	for (var i = tr.length; i--; ) {
   		tr[i].remove();
	};

	previous = new Date(year, monthIndex+1,);
	monthIndex = previous.getMonth();
	year = previous.getFullYear();

	tempDate = new Date(year, monthIndex, 1);

	console.log(tempDate);

	skip = tempDate.getDay();
	if (skip < 1) {
		skip = 7;
	};
	for(i=1; i<skip; ++i){
		tempDate.setDate(tempDate.getDate() - 1);
	};

	return loadCalendar();

});

