<?php

namespace App\Http\Controllers;

use App\Models\OfficeExpence;
use Illuminate\Http\Request;

class OfficeExpenceController extends Controller
{
    public function index()
    {
        $expences = OfficeExpence::all();
        return response()->json($expences);
    }

    public function store(Request $request)
    {
        $officeExpence = OfficeExpence::create($request->all());

        return response()->json($officeExpence);
    }
}
