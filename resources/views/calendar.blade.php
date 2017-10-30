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

  <table class="calendar">
    <caption class="calendar__banner--month">
      <h1>{{$today->format('F Y')}}</h1>
    </caption>
    <tr>
      <th class="calendar__day__header">Mon</th>
      <th class="calendar__day__header">Tue</th>
      <th class="calendar__day__header">Wed</th>
      <th class="calendar__day__header">Thu</th>
      <th class="calendar__day__header">Fri</th>
      <th class="calendar__day__header">Sat</th>
      <th class="calendar__day__header">Sun</th>
    </tr>
  </thead>
  <tbody>
    @php
        for($i = 0; $i < $skip; $i++)
          {
            $tempDate->subDay();
          }


          //loops through month
       do
       {
           echo '<tr>';
           //loops through each week
           for($i=0; $i < 7; $i++)
           {
             if($tempDate->month == $today->month && $tempDate->day == $today->day){
                echo '<td class="calendar__day__cell current"><a href="'.$tempDate->format("j")."/".$tempDate->format("n")."/".$tempDate->format("Y").'">';
             }else{
               echo '<td class="calendar__day__cell"><a href="'.$tempDate->format("j")."/".$tempDate->format("n")."/".$tempDate->format("Y").'">';
               }
             if(in_array($tempDate->day . " " . $tempDate->month, $tasksDates)){
                   echo "! ";
             }
               echo $tempDate->day;
               echo '</a></td>';

               $tempDate->addDay();
           }
           echo '</tr>';

       }while($tempDate->month == $today->month);

          @endphp
        </tbody>
          </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
