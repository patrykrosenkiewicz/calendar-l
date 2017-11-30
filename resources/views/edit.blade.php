@extends('layouts.app')

@section('edit')

<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
			<h1 class="col-12">Edit: {{$task->task_date}}</h1>
			<form class="" action="/task/{{$id}}" method="post">
				<input type="hidden" name="_method" value="PUT">
				<div class="form-group">
				  {{ csrf_field() }}

					  <div class="col-12">
					    <input class="form-control" name="title" type="text" id="title-input" placeholder="enter here the title of your task" required>
					  </div>
					 </div>
				<div class="form-group">
    		      <div class="col-12">
    		      	<textarea class="form-control" id="bodyTextarea" name="body" placeholder="what do you want to do?" rows="3" required></textarea>
    		      </div>
				</div>
				<input type="hidden" name="task_date" value="{{$task->task_date}}">
				<input class="btn btn-primary" type="submit" name="submit" value="submit">
			</form>
		</div>
	</div>
</div>
