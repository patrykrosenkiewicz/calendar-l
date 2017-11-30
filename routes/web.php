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
    return view('layouts/landingPage');
});

Auth::routes();

#set current date with all uncomplited tasks than call the makeCalendar method
Route::get('/calendar', 'CalendarController@makeCalendar');

Route::resource('task', 'TaskController');


Route::get('/logout', function(){
    Session::flush();
    Auth::logout();
    return Redirect::to("/");
});
