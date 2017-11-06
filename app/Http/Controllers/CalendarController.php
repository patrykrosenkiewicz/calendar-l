<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Task;

class CalendarController extends Controller
{
    private $today;
    private $tasksDates;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');

        #generates current date
        $this->today = Carbon::today();

        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

    public function makeCalendar(Task $dates)
    {
        $today = $this->today;
        $tempDate = Carbon::createFromDate($today->year, $today->month, 1);

        #set the array of dates with uncomplited tasks
        $user_id = auth()->id();
        $this->tasksDates = $dates->uncomplited($user_id);

        #setting weeeknd to start from monday
        $skip = $tempDate->dayOfWeek + 6; 
        
        #getting all the uncomplited tasks (probably has to switch it for model or another method)
        $tasksDates = $this->tasksDates;
        return view('calendar', compact('today', 'tempDate', 'skip', 'tasksDates'));
    }

    public function nextMonth(){
    }

    public function previousMonth(){
    }
}
