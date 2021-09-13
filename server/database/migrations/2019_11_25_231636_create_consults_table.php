<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        Schema::create('consults', function (Blueprint $table) {
            $table->increments('id');
            $table->string('motive');
            $table->string('sintoma');
            $table->string('diagnostico');
            $table->string('tratamiento');
            $table->integer('id_patient_id')->unsigned();
            $table->foreign('id_patient_id')->references('id')->on('patients');
            $table->integer('id_cite_id')->unsigned();
            $table->foreign('id_cite_id')->references('id')->on('cites');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consults');
    }
}
