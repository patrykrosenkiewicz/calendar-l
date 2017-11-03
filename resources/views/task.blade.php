@extends('layouts.app')

@section('task')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
			<h1 class="col-12">Plan something for your chosen date: {{$date}}</h1>
			<form class="" action="/task" method="post">
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
				<input type="hidden" name="task_date" value="{{$date}}">
				<input class="btn btn-primary" type="submit" name="submit" value="submit">
			</form>


			@if(count($tasks)>=1)
				<h1>Your tasks for this day</h1>
			<ul>
			  @foreach ($tasks as $task)
			  <li>
			    {{$task->title}}
			  </li>
			  @endforeach
			</ul>
			@else
			<h1>You have no tasks for this day</h1>
			@endif
		</div>
	</div>
</div>
@endsection
