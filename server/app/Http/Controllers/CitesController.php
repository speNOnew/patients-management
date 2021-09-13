<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cites;
use Carbon\Carbon;
use App\Patients;
use Illuminate\Support\Facades\DB;

class CitesController extends Controller
{
    public function index()
    {
        $fecha = Carbon::now()->format('Y-m-d');
        $consulta = DB::table('cites')->join('patients', 'patients.id', '=', 'cites.id_patient_id')->join('medico', 'medico.id', '=', 'cites.id_medico_id')->join('especialidades', 'especialidades.id', '=', 'cites.id_especialidad_id')->select('cites.id','patients.ci','patients.name as name_p','patients.last_name as last_name_p','medico.name as name_m','medico.last_name as last_name_m','especialidades.especialidad','cites.date')->where('cites.date', '=', $fecha)->get();
        return json_encode($consulta);
        // $fecha = Carbon::now()->format('Y-m-d');
        // $cites = Cites::where('date', '=', $fecha)->get();
        // return json_encode($cites);
    }

    public function store(Request $request)
    {
        $id_patient = Patients::select('id')->where('ci', '=', $request->input('ci'))->get();
        $cite = new Cites();
        $cite->date = $request->input('date');
        $cite->id_patient_id = $id_patient[0]['id'];
        $cite->id_especialidad_id = $request->input('id_especialidad_id');
        $cite->id_medico_id = $request->input('id_medico_id');
        $cite->save();
        echo json_encode($cite);
    }

    public function update(Request $request, $cite_id)
    {
        $cite = Cites::find($cite_id);
        $cite->date = $request->input('date');
        $cite->save();
        echo json_encode($cite);
    }

    public function destroy($id)
    {
        $cite = Cites::find($id);
        $cite->delete();
    }
}
