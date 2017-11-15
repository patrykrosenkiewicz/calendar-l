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

var polishDays = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
var polishMonths = ['styczeń', 'luty', 'marzec', 'kwiecieć', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

var polishDaysLength = polishDays.length;

var month = document.getElementById('month');
var dayName = document.getElementById('dayName');

var now = new Date();
var monthIndex = now.getMonth();
var year = now.getFullYear();

var tempDate = new Date(year, monthIndex, 1);
var skip = tempDate.getDay();

for (i = 1; i < skip; ++i) {
    tempDate.setDate(tempDate.getDate() - 1);
};

//set the h1 tag in caption for a current month and year
month.innerHTML = polishMonths[monthIndex] + ' ' + year;

//appends a default days names 

for (var i = 0; i < polishDays.length; i++) {
    th = document.createElement('th');
    th.className = 'calendar__day__header';
    th.textContent = polishDays[i];
    dayName.appendChild(th);
};

var tableBody = document.getElementById('tableBody');

//creates body of the calendar table
do {
    tr = document.createElement('tr');
    tableBody.appendChild(tr);
    //loops through each week
    for (i = 0; i < 7; i++) {
        td = document.createElement('td');
        aLink = document.createElement('a');
        aLink.href = tempDate.getDate() + '/' + (monthIndex + 1) + '/' + tempDate.getFullYear();

        //concatenate date parts in a string
        var dateIncluded = '"' + tempDate.getFullYear() + '-' + (monthIndex + 1) + '-' + tempDate.getDate() + '"';
        if (tasksDates.includes(dateIncluded)) {
            console.log(tasksDates);
            console.log(dateIncluded);
            console.log(tasksDates.includes(dateIncluded));
            aLink.textContent = tempDate.getDate() + '!';
        } else {
            aLink.textContent = tempDate.getDate();
        };
        console.log(aLink);
        td.appendChild(aLink);

        tr.appendChild(td);
        if (tempDate.getDate() == now.getDate() && tempDate.getMonth() == monthIndex) {
            td.className = 'calendar__day__cell current';
        } else {
            td.className = 'calendar__day__cell';
        }

        tempDate.setDate(tempDate.getDate() + 1);
    };
} while (tempDate.getMonth() == monthIndex);

/***/ })

/******/ });