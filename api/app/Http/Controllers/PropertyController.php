<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index()
    {
        $properities = Property::with('broker')->get();
        return response()->json($properities);
    }


    public function store(Request $request)
    {
        $properity = Property::create($request->all());

        return response()->json(['message' => 'تم العملية بنجاح'], 201);
    }
}
