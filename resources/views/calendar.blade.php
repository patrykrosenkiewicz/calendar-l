@extends('layouts.app')

@section('calendar')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Calendar</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <h1>Welcome!</h1>
                    <p>In a near future you are going to be able to see a pretty nice webaplication to plan your life!</p>
                    <h5>JUST W8 4 IT</h5>

                              <table id="calendar-js" class="calendar">
                                <thead>
                                  <caption id="caption" class="calendar__banner--month">
                                  <h1 id="month"></h1>
                                  </caption>
                                  <tr id="dayName">
                                  </tr>
                                </thead>

                                <tbody id="tableBody">
                                  

                                </tbody>
                              </table>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection
