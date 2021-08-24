<?php

use Illuminate\Database\Seeder;
//AGREGAR APP/USER PARA LLAMAR AL MODELO USER Y PODEr USAR LA CREACION DE USUARIO
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = array(
            ['name' => 'Demo', 'email' => 'demo', 'password' => Hash::make('demo'), 'id_rol_id' => 1],
            ['name' => 'AppAdmin', 'email' => 'AppAdmin', 'password' => Hash::make('123'), 'id_rol_id' => 1],
            ['name' => 'Yibran', 'email' => 'ypereira@sti.com.ve', 'password' => Hash::make('m10m10'), 'id_rol_id' => 1]
        );
        foreach ($users as $user) 
        {
        	User::create($user);
        }
    }
}
