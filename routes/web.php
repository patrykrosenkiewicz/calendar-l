<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

#set current date with all uncomplited tasks than call the makeCalendar method
Route::get('/calendar', 'CalendarController@makeCalendar');


Route::get('calendar/next', 'CalendarController@nextMonth');
Route::get('calendar/previous', 'CalendarController@previousMonth');

Route::get('/{month}/{day}/{year}', 'TaskController@index');

Route::post('/task', 'TaskController@store');



