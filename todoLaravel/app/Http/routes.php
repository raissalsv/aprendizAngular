<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


use App\Tarefas;

Route::post('/incluir', 'TarefaController@incluir');
Route::post('/finalizar', 'TarefaController@finalizar');
Route::post('/excluir', 'TarefaController@excluir');

Route::get('/listar', function () {
    $tasks = Tarefas::orderBy('created_at', 'asc')->get();

    return  response()->json($tasks, 200);
});


Route::delete('/task/{id}', function ($id) {
    //
});

