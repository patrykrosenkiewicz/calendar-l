<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    public function user(){
      return $this->belongsTo(User::class);
    }

    public function uncomplited($user_id){

      //checks for which date tasks exist
    	$tasks = Task::all()->where('completed', '=', '0')->where('user_id', '=', $user_id);
        if (count($tasks) > 0) {
            foreach ($tasks as $task) {
             $tasksDates[] = $task->task_date;
            }
         }else{
            $tasksDates[] = 0;
        }

        return $tasksDates;
    
    }
}
