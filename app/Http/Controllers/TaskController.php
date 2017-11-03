<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Task;

class TaskController extends Controller
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
     * Show the application dashboardw with selected day.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($day, $month, $year)
    {
        $date = $year.'-'.$month.'-'.$day;
        $tasks = \DB::table("tasks")->where('task_date', '=', $date)->get();
        return view('task', compact('tasks', 'day', 'month', 'year', 'date'));
    }

    public function store(){
      $task = new Task;

      $task->title = request('title');
      $task->body = request('body');
      $task->task_date = request('task_date');

      $task->save();

      return back();

    }

    public function currentDayTask(){
        $today = $today = Carbon::today();
        
    }
}
