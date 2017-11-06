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

    private $task;

    public function __construct(Task $task)
    {
        $this->middleware('auth');

        $this->task = $task;
    }

    /**
     * Show the application dashboardw with selected day.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($day, $month, $year)
    {
        #returns view of a day with all the tasks for the day

        $date = $year.'-'.$month.'-'.$day;
        $tasks = \DB::table("tasks")->where('task_date', '=', $date)->get();

        return view('task', compact('tasks', 'day', 'month', 'year', 'date'));
    }

    public function store(){
        #saves the task in a db

      $task = $this->task;

      $task->title = request('title');
      $task->body = request('body');
      $task->task_date = request('task_date');
      $task->user_id = auth()->id();

      $task->save();

      return back();

    }

    public function currentDayTask(){
        
    }
}
