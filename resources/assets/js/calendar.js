var calendar = {
	 polishDays: ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'],
	 polishMonths: ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],

	 init: function(){
	 	this.cacheDom();
	 	this.setVariables();
	 	this.loadCalendar();
	 	this.bindEvents();
	 },

	 cacheDom: function(){
	 	 this.polishDaysLength = this.polishDays.length;

		//h1 tag in dom in which appends current month and year
		 this.month = document.getElementById('month');

		//table row in which appends polish day names
		 this.dayName = document.getElementById('dayName');

		 this.tableBody = document.getElementById('tableBody');
		 this.tableHead = document.getElementById('tableHead');

		 this.followingMonth = document.getElementById('nextMonth');
		 this.prevMonth = document.getElementById('previousMonth');
	 },

	 setVariables: function(){
	 	this.now = new Date();
		this.monthIndex = this.now.getMonth();
		this.year = this.now.getFullYear();

		this.tempDate = new Date(this.year, this.monthIndex, 1);

		this.skip = this.tempDate.getDay();
		//appends a default days names
		for(i=1; i<this.skip; ++i){
			this.tempDate.setDate(this.tempDate.getDate() - 1);
			};
		},

		loadCalendar: function(){
			//set the h1 tag in caption for a current month and year
			this.month.innerHTML = this.polishMonths[this.monthIndex] +' '+ this.year;

			tableHeadTr = document.createElement('tr');
			tableHeadTr.id = 'dayName';
			this.tableHead.appendChild(tableHeadTr);

			//creates a header of the calendar with polish days
				for (var i = 0; i < this.polishDaysLength; i++) {
					th = document.createElement('th');
					th.className = 'calendar__day__header';
					th.textContent =  this.polishDays[i];
					tableHeadTr.appendChild(th);
				};
			//creates body of the calendar table
			do
			    {
			        tr = document.createElement('tr')
			        this.tableBody.appendChild(tr)
			        //loops through each week
			        for(i=0; i < 7; i++)
			        {
			        	td = document.createElement('td');
			        	aLink = document.createElement('a');
			        	aLink.href = this.tempDate.getDate()+'/'+(this.monthIndex+1)+'/'+this.tempDate.getFullYear();
			        	
			        	//concatenate date parts in a string
			        	var dateIncluded ='"'+this.tempDate.getFullYear()+'-'+(this.monthIndex+1)+'-'+this.tempDate.getDate()+'"';
			        	if (tasksDates.includes(dateIncluded))
			        	 {
			        	 	aLink.textContent = this.tempDate.getDate()+'!';
			        	 }else
			        	 {
			        	 	aLink.textContent = this.tempDate.getDate();
			        	 };

			        	td.appendChild(aLink);

			            tr.appendChild(td);
			        	if (this.tempDate.getDate() == this.now.getDate() && this.tempDate.getMonth() == this.monthIndex) {
			        		td.className = 'calendar__day__cell current';
			        	}else{
			        		td.className = 'calendar__day__cell';
			        	}
			        	
			            

			            this.tempDate.setDate(this.tempDate.getDate() + 1);
			        };

			    }while(this.tempDate.getMonth() == this.monthIndex);
				
	},

	bindEvents: function(){
		this.prevMonth.addEventListener('click', this.previousMonth(this));
		this.followingMonth.addEventListener('click', this.nextMonth(this));
	},

	previousMonth: function(event){

		var tr = document.getElementsByTagName('tr');
		for (var i = tr.length; i--; ) {
	   		tr[i].remove();
		};

		previous = new Date(this.year, this.monthIndex-1,);
		this.monthIndex = previous.getMonth();
		this.year = previous.getFullYear();

		this.tempDate = new Date(this.year, this.monthIndex, 1);

		

		this.skip = this.tempDate.getDay();
		if (this.skip < 1) {
			this.skip = 7;
		};
		for(i=1; i<this.skip; ++i){
			this.tempDate.setDate(this.tempDate.getDate() - 1);
		};

		this.loadCalendar();
	},

	nextMonth: function(event){

		alert("nextMonth");
		var tr = document.getElementsByTagName('tr');
		for (var i = tr.length; i--; ) {
	   		tr[i].remove();
		};

		previous = new Date(this.year, this.monthIndex+1,);
		this.monthIndex = previous.getMonth();
		this.year = previous.getFullYear();

		this.tempDate = new Date(this.year, this.monthIndex, 1);

		

		this.skip = this.tempDate.getDay();
		if (this.skip < 1) {
			this.skip = 7;
		};
		for(i=1; i<this.skip; ++i){
			this.tempDate.setDate(this.tempDate.getDate() - 1);
		};

		this.loadCalendar();
	},



}

calendar.init();



// const polishDays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
// const polishMonths = ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

// const polishDaysLength = polishDays.length;

// //h1 tag in dom in which appends current month and year
// const month = document.getElementById('month');

// //table row in which appends polish day names
// const dayName = document.getElementById('dayName');

// const tableBody = document.getElementById('tableBody');
// const tableHead = document.getElementById('tableHead');

// var now;
// var monthIndex;
// var year;
// var skip;
// window.onload = function setVariables(){

// 	now = new Date();
// 	monthIndex = now.getMonth();
// 	year = now.getFullYear();

// 	tempDate = new Date(year, monthIndex, 1);

// 	skip = tempDate.getDay();
// 	//appends a default days names
// 	for(i=1; i<skip; ++i){
// 		tempDate.setDate(tempDate.getDate() - 1);
// 	};

// 	return loadCalendar();

// }


// function loadCalendar(){
// //set the h1 tag in caption for a current month and year
// month.innerHTML = polishMonths[monthIndex] +' '+ year;

// tableHeadTr = document.createElement('tr');
// tableHeadTr.id = 'dayName';
// tableHead.appendChild(tableHeadTr);

// //creates a header of the calendar with polish days
// 	for (var i = 0; i < polishDays.length; i++) {
// 		th = document.createElement('th');
// 		th.className = 'calendar__day__header';
// 		th.textContent =  polishDays[i];
// 		tableHeadTr.appendChild(th);
// 	};
// //creates body of the calendar table
// do
//     {
//         tr = document.createElement('tr')
//         tableBody.appendChild(tr)
//         //loops through each week
//         for(i=0; i < 7; i++)
//         {
//         	td = document.createElement('td');
//         	aLink = document.createElement('a');
//         	aLink.href = tempDate.getDate()+'/'+(monthIndex+1)+'/'+tempDate.getFullYear();
        	
//         	//concatenate date parts in a string
//         	var dateIncluded ='"'+tempDate.getFullYear()+'-'+(monthIndex+1)+'-'+tempDate.getDate()+'"';
//         	if (tasksDates.includes(dateIncluded))
//         	 {
//         	 	aLink.textContent = tempDate.getDate()+'!';
//         	 }else
//         	 {
//         	 	aLink.textContent = tempDate.getDate();
//         	 };

//         	td.appendChild(aLink);

//             tr.appendChild(td);
//         	if (tempDate.getDate() == now.getDate() && tempDate.getMonth() == monthIndex) {
//         		td.className = 'calendar__day__cell current';
//         	}else{
//         		td.className = 'calendar__day__cell';
//         	}
        	
            

//             tempDate.setDate(tempDate.getDate() + 1);
//         };

//     }while(tempDate.getMonth() == monthIndex);
// };

// document.getElementById('previousMonth').addEventListener('click', function previousMonth(){
	// var tr = document.getElementsByTagName('tr');
	// for (var i = tr.length; i--; ) {
 //   		tr[i].remove();
	// };

	// previous = new Date(year, monthIndex-1,);
	// monthIndex = previous.getMonth();
	// year = previous.getFullYear();

	// tempDate = new Date(year, monthIndex, 1);

	// console.log(tempDate);

	// skip = tempDate.getDay();
	// if (skip < 1) {
	// 	skip = 7;
	// };
	// for(i=1; i<skip; ++i){
	// 	tempDate.setDate(tempDate.getDate() - 1);
	// };

// 	return loadCalendar();

// });

// document.getElementById('nextMonth').addEventListener('click', function nextMonth(){
// 		var tr = document.getElementsByTagName('tr');
// 	for (var i = tr.length; i--; ) {
//    		tr[i].remove();
// 	};

// 	previous = new Date(year, monthIndex+1,);
// 	monthIndex = previous.getMonth();
// 	year = previous.getFullYear();

// 	tempDate = new Date(year, monthIndex, 1);

// 	console.log(tempDate);

// 	skip = tempDate.getDay();
// 	if (skip < 1) {
// 		skip = 7;
// 	};
// 	for(i=1; i<skip; ++i){
// 		tempDate.setDate(tempDate.getDate() - 1);
// 	};

// 	return loadCalendar();

// });

