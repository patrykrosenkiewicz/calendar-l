<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Task;

class CalendarController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $today = Carbon::today();
        $tempDate = Carbon::createFromDate($today->year, $today->month, 1);
        $skip = $tempDate->dayOfWeek + 6;
        $tasks = Task::all()->where('completed', '=', '0');
        if (count($tasks) > 0) {
            foreach ($tasks as $task) {
             $tasksDates[] = $task->task_date;
            }
         }else{
            $tasksDates[] = 0;
        }
        return view('calendar', compact('today', 'tempDate', 'skip', 'tasksDates'));
    }
}
