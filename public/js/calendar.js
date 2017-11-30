/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

var calendar = {
	polishDays: ['pon', 'wto', 'śro', 'czw', 'pią', 'sob', 'nie'],
	polishMonths: ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],

	init: function init() {
		this.cacheDom();
		this.createElements();
		this.setCurrentDate();
		this.loadCalendar();
		this.bindEvents();
	},

	cacheDom: function cacheDom() {
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

	createElements: function createElements() {
		this.tableHeadTr = document.createElement('tr');
	},

	setCurrentDate: function setCurrentDate() {
		this.now = new Date();
		this.monthIndex = this.now.getMonth();
		this.year = this.now.getFullYear();

		this.tempDate = new Date(this.year, this.monthIndex, 1);

		this.skip = this.tempDate.getDay();
		//appends a default days names
		for (i = 1; i < this.skip; ++i) {
			this.tempDate.setDate(this.tempDate.getDate() - 1);
		};
	},

	loadCalendar: function loadCalendar() {
		//set the h1 tag in caption for a current month and year
		this.month.innerHTML = this.polishMonths[this.monthIndex] + ' ' + this.year;

		this.tableHeadTr.id = 'dayName';
		this.tableHead.appendChild(this.tableHeadTr);

		this.createTableHeader();
		//creates body of the calendar table
		do {
			tr = document.createElement('tr');
			this.tableBody.appendChild(tr);
			//loops through each week
			for (i = 0; i < this.polishDaysLength; i++) {
				td = document.createElement('td');
				td.className = "calendar-cell";
				aLink = document.createElement('a');
				aLink.className = "calendar-link";
				aLink.href = 'task/' + this.tempDate.getFullYear() + '-' + (this.monthIndex + 1) + '-' + this.tempDate.getDate();

				//concatenate date parts into a string
				var dateIncluded = '"' + this.tempDate.getFullYear() + '-' + (this.monthIndex + 1) + '-' + this.tempDate.getDate() + '"';
				/*
    var tasksDates -> includes date of planned tasks
    given by back-end Laravel
    format: json
    */
				if (tasksDates) {
					if (tasksDates.includes(dateIncluded)) {
						aLink.textContent = this.tempDate.getDate() + '!';
					} else {
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
		} while (this.tempDate.getMonth() == this.monthIndex);
	},

	createTableHeader: function createTableHeader() {
		//creates a header of the calendar with polish days
		for (var i = 0; i < this.polishDaysLength; i++) {
			th = document.createElement('th');
			th.textContent = this.polishDays[i];
			this.tableHeadTr.appendChild(th);
		}
	},

	bindEvents: function bindEvents() {
		this.prevMonth.addEventListener('click', this.previousMonth.bind(this));
		this.followingMonth.addEventListener('click', this.nextMonth.bind(this));
	},

	previousMonth: function previousMonth(event) {

		for (var i = this.tr.length; i--;) {
			this.tr[i].remove();
		};

		previous = new Date(this.year, this.monthIndex - 1);
		this.monthIndex = previous.getMonth();
		this.year = previous.getFullYear();

		this.tempDate = new Date(this.year, this.monthIndex, 1);

		this.skip = this.tempDate.getDay();
		if (this.skip < 1) {
			this.skip = 7;
		};
		for (i = 1; i < this.skip; ++i) {
			this.tempDate.setDate(this.tempDate.getDate() - 1);
		};

		this.loadCalendar();
	},

	nextMonth: function nextMonth(event) {
		for (var i = this.tr.length; i--;) {
			this.tr[i].remove();
		};

		previous = new Date(this.year, this.monthIndex + 1);
		this.monthIndex = previous.getMonth();
		this.year = previous.getFullYear();

		this.tempDate = new Date(this.year, this.monthIndex, 1);

		this.skip = this.tempDate.getDay();
		if (this.skip < 1) {
			this.skip = 7;
		};
		for (i = 1; i < this.skip; ++i) {
			this.tempDate.setDate(this.tempDate.getDate() - 1);
		};

		this.loadCalendar();
	},

	taskClick: function taskClick() {
		/*
  getElementById.preventDefault()
  send with a value of href to /task
  */
	}

};

calendar.init();

/***/ })

/******/ });