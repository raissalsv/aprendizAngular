<?php
/**
 * Created by PhpStorm.
 * User: raiss
 * Date: 25/07/2016
 * Time: 00:14
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tarefas;

class TarefaController extends Controller
{


    public function incluir(Request $request){
        $tarefa = new Tarefas();
        $tarefa->texto = $request->input('texto');
        $tarefa->finalizada = 0;
        $tarefa->save();
        return response()->json("foi", 201);
    }

    public function finalizar(Request $request){
        $tarefa = Tarefas::find($request->input('id'));
        $tarefa->finalizada =$request->input('finalizada') ;
        $tarefa->save();

    }

    public function excluir(Request $request){
        $tarefa = Tarefas::find($request->input('id'));
        $tarefa->delete();

    }
}