@extends('/layouts.app')

@section('calendar')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">

                
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div class="calendar-description">
                      <h3>Welcome</h3>
                      <p>plan your days!</p>
                    </div>
                            <div class="table-responsive">
                              <table id="calendar-js" class="table table-condensed table-bordered">
                                <thead id="tableHead">
                                  <caption id="caption" class="calendar__banner--month">
                                  <div class="calendar-nav">
                                    <button id="previousMonth"><</button>
                                    <h1 id="month" class="mark month"></h1>
                                    <button id="nextMonth">></button>
                                  </div>
                                  </caption>


                                </thead>

                                <tbody id="tableBody">
                                  

                                </tbody>
                              </table>
                </div>
            </div>
        </div>
</div>
  @section('scripts')
    @parent
      <script src="{{ asset('js/calendar.js') }}"></script>
  @endsection
@endsection
