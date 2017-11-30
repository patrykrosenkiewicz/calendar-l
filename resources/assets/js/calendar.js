var calendar = {
	 polishDays: ['pon', 'wto', 'śro', 'czw', 'pią', 'sob', 'nie'],
	 polishMonths: ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],

	 init: function(){
	 	this.cacheDom();
	 	this.createElements();
	 	this.setCurrentDate();
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

		 this.tr = document.getElementsByTagName('tr');

	 },

	 createElements: function(){
	 	this.tableHeadTr = document.createElement('tr');
	 },

	 setCurrentDate: function(){
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

			
			this.tableHeadTr.id = 'dayName';
			this.tableHead.appendChild(this.tableHeadTr);

			this.createTableHeader();
			//creates body of the calendar table
			do
			    {
			        tr = document.createElement('tr')
			        this.tableBody.appendChild(tr)
			        //loops through each week
			        for(i=0; i < this.polishDaysLength; i++)
			        {
			        	td = document.createElement('td');
			        	td.className = "calendar-cell";
			        	aLink = document.createElement('a');
			        	aLink.className = "calendar-link";
			        	aLink.href = 'task/'+this.tempDate.getFullYear()+'-'+(this.monthIndex+1)+'-'+this.tempDate.getDate();
			        	
			        	//concatenate date parts into a string
			        	var dateIncluded ='"'+this.tempDate.getFullYear()+'-'+(this.monthIndex+1)+'-'+this.tempDate.getDate()+'"';
			        	/*
							var tasksDates -> includes date of planned tasks
							given by back-end Laravel
							format: json
			        	*/
			        	if (tasksDates) {
			        		if (tasksDates.includes(dateIncluded))
			        	 {
			        	 	aLink.textContent = this.tempDate.getDate()+'!';
			        	 }else
			        	 {
			        	 	aLink.textContent = this.tempDate.getDate();
			        	 };

			        	}
			        	td.appendChild(aLink);

			            tr.appendChild(td);
			        	if (this.tempDate.getDate() == this.now.getDate() && this.tempDate.getMonth() == this.monthIndex) {
			        		td.className = 'calendar-cell current';
			        	}
			        	//set date for a next day
			            this.tempDate.setDate(this.tempDate.getDate() + 1);
			        };

			    }while(this.tempDate.getMonth() == this.monthIndex);
				
	},

	createTableHeader: function(){
		//creates a header of the calendar with polish days
				for (var i = 0; i < this.polishDaysLength; i++) {
					th = document.createElement('th');
					th.textContent =  this.polishDays[i];
					this.tableHeadTr.appendChild(th);
				}
			},

	bindEvents: function(){
		this.prevMonth.addEventListener('click', this.previousMonth.bind(this));
		this.followingMonth.addEventListener('click', this.nextMonth.bind(this));
	},

	previousMonth: function(event){

		for (var i = this.tr.length; i--; ) {
	   		this.tr[i].remove();
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
		for (var i = this.tr.length; i--; ) {
	   		this.tr[i].remove();
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

taskClick: function(){
	/*
	getElementById.preventDefault()
	send with a value of href to /task
	*/
}


}

calendar.init();

