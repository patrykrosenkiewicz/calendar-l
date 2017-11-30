
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class LandingController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function index(){

    	return view('layouts.landingPage');
    }

    public function sendEmail(){

    }

    
}
