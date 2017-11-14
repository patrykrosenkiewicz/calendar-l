<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Task;
use JavaScript;

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

    public function makeCalendar(Task $dates)
    {
        $user_id = auth()->id();
        $tasksDates = $dates->uncomplited($user_id);
        $tasksDates = json_encode($tasksDates);

        JavaScript::put([
            'tasksDates'=> $tasksDates
        ]);


        return view('calendar');
    }
}
