<?php

namespace App\Http\Controllers;

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
    public function __construct(Task $dates)
    {
        $this->middleware('auth');

        #generates current date
        $this->today = Carbon::today();

        #set the array of dates with uncomplited tasks
        $this->tasksDates = $dates->uncomplited();
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(){ 

        return $this->makeCalendar($this->today);

    }
    public function makeCalendar($today)
    {
        $today = $today;
        $tempDate = Carbon::createFromDate($today->year, $today->month, 1);
        

        #setting weeeknd to start from monday
        $skip = $tempDate->dayOfWeek + 6; 
        
        #getting all the uncomplited tasks (probably has to switch it for model or another method)
        $tasksDates = $this->tasksDates;
        return view('calendar', compact('today', 'tempDate', 'skip', 'tasksDates'));
    }

    public function nextMonth(){
        $nextMonth = $this->today->addMonth();
        //return $this->makeCalendar($nextMonth);
        #you'd better not use that method there is some kind of satan in it
    }

    public function previousMonth(){
        $previousMonth = $this->today->subMonth();
        return $this->makeCalendar($previousMonth);
        #this on the other hand works fine wtf?
    }
}
