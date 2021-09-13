<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Consults;
use App\Patients;
use App\Cites;

class ConsultsController extends Controller
{
    public function index()
    {
        $consults = Consults::get();
        // $consults = Consults::with('id')->orderBy('id_cite_id', 'ASC')->paginate(10);
        return json_encode($consults);
    }

    public function store(Request $request)
    {
        $consult = new Consults();
        $consult->motive = $request->input('motive');
        $consult->sintoma = $request->input('sintoma');
        $consult->diagnostico = $request->input('diagnostico');
        $consult->tratamiento = $request->input('tratamiento');
        $consult->id_patient_id = $request->input('id_patient_id');
        $consult->id_cite_id = $request->input('id_cite_id');
        $consult->save();
        echo json_encode($consult);
    }

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
