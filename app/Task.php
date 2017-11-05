<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function uncomplited(){
      //checks for which date tasks exist
    	$tasks = Task::all()->where('completed', '=', '0');
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
