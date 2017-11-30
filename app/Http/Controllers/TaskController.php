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
    public function show($date)
    {
        #returns view of a day with all the tasks for the day
        $tasks = \DB::table("tasks")->where('task_date', '=', $date)->get();

        return view('calendar.task', compact('tasks','date'));
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

    public function edit($id){
        $task = $this->task::find($id);
        return view('calendar.edit', compact('id', 'task'));
    }

    public function update($id){
      $task = $this->task;
        
      $task = $task->find($id);

      $task->title = request('title');
      $task->body = request('body');
      $task->task_date = request('task_date');

      $task->save();

      return redirect('/task/'.request('task_date'));
    }
}
