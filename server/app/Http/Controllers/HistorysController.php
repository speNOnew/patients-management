<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Historys;

class HistorysController extends Controller
{
    // public function index()
    // {
    //     $historys = Historys::get();
    //     return json_encode($historys);
    // }

    // public function store(Request $request)
    // {
    //     $cite = new Cites();
    //     $cite->patient = $request->input('patient');
    //     $cite->doctor = $request->input('doctor');
    //     $cite->especialidad = $request->input('especialidad');
    //     $cite->date = $request->input('date');
    //     $cite->save();
    //     echo json_encode($cite);
    // }

    // public function update(Request $request, $cite_id)
    // {
    //     $cite = Cites::find($cite_id);
    //     $cite->patient = $request->input('patient');
    //     $cite->doctor = $request->input('doctor');
    //     $cite->especialidad = $request->input('especialidad');
    //     $cite->date = $request->input('date');
    //     $cite->save();
    //     echo json_encode($cite);
    // }

    // public function destroy($id)
    // {
    //     $cite = Cites::find($id);
    //     $cite->delete();
    // }
}
