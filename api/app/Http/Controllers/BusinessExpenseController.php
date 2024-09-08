<?php

namespace App\Http\Controllers;

use App\Models\BusinessExpense;
use Illuminate\Http\Request;

class BusinessExpenseController extends Controller
{
    public function index() {
        return response()->json(BusinessExpense::all());
    }

    public function store(Request $request) {
        $expinses = BusinessExpense::create($request->all());

        return response()->json(['message' => 'تمت العملية بنجاح'], 201);
    }
}
