<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Patients;

class PatientsController extends Controller
{
    public function index()
    {
        $patients = Patients::get();
        return json_encode($patients);
    }

    public function store(Request $request)
    {
        $patient = new Patients();
        $patient->ci = $request->input('ci');
        $patient->name = $request->input('name');
        $patient->name2 = $request->input('name2');
        $patient->last_name = $request->input('last_name');
        $patient->last_name2 = $request->input('last_name2');
        $patient->sexo = $request->input('sexo');
        $patient->state = $request->input('state');
        $patient->date_birth = $request->input('date_birth');
        $patient->direction = $request->input('direction');
        $patient->phone = $request->input('phone');
        $patient->email = $request->input('email');
        $patient->allergies = $request->input('allergies');
        $patient->diseases = $request->input('diseases');
        $patient->surgerys = $request->input('surgerys');
        $patient->parient = $request->input('parient');
        $patient->disease = $request->input('disease');
        $patient->save();
        echo json_encode($patient);
    }

    public function update(Request $request, $patient_id)
    {
        $patient = Patients::find($patient_id);
        $patient->ci = $request->input('ci');
        $patient->name = $request->input('name');
        $patient->name2 = $request->input('name2');
        $patient->last_name = $request->input('last_name');
        $patient->last_name2 = $request->input('last_name2');
        $patient->sexo = $request->input('sexo');
        $patient->state = $request->input('state');
        $patient->date_birth = $request->input('date_birth');
        $patient->direction = $request->input('direction');
        $patient->phone = $request->input('phone');
        $patient->email = $request->input('email');
        $patient->allergies = $request->input('allergies');
        $patient->diseases = $request->input('diseases');
        $patient->surgerys = $request->input('surgerys');
        $patient->parient = $request->input('parient');
        $patient->disease = $request->input('disease');
        $patient->save();
        echo json_encode($patient);
    }

    public function destroy($id)
    {
        $patient = Patients::find($id);
        $patient->delete();
    }
}