<?php

namespace App\Http\Controllers;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateController extends Controller
{
    public function Authenticate(Request $request)
    {
    	$credentials = $request->only('email','password');

    	try
    	{
    		if (!$token = JWTAuth::attempt($credentials)) 
    		{
    			return response()->json(['error' => 'Credenciales invalidas'], 401);
    		}
    	}
    	catch(JWTException $e)
    	{
    		return response()->json(['error' => 'No se pudo crear el token'], 500);
    	}

    	$response = compact('token');
    	$response['user'] = Auth::user()->only('name','id_rol_id');

    	return $response;
    }
}
