<?php

namespace App\Http\Controllers;

use App\Models\Salary;
use Illuminate\Http\Request;

class SalaryController extends Controller
{
    public function index()
    {
        $salary = Salary::orderBy('date', 'desc')->with('employee')->get();
        return response()->json($salary);
    }

    public function store(Request $request)
    {
        $salary = Salary::create($request->all());
        $salaires = Salary::orderBy('date', 'desc')->with('employee')->get();

        return response()->json($salaires);
    }
}
