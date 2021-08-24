<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::get();
        return json_encode($users);
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->id_rol_id = $request->input('id_rol_id');
        $user->save();
        echo json_encode($user);
    }

    public function update(Request $request, $user_id)
    {
        $user = User::find($user_id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->id_rol_id = $request->input('id_rol_id');
        $user->save();
        echo json_encode($user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
    }
}
