<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\Sale;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function index()
    {
        $sales = Sale::with('customers')->get();
        return response()->json($sales);
    }

    public function store(Request $request)
    {
        $sale = Sale::create($request->all());
        $properity = Property::where('id', $request->properity_id)->first();
        if ($properity) {
            $properity->update([
                'from' => $request->start_date,
                'untill' => $request->end_date
            ]);
        }else{
            return response()->json(['error' => 'هذا العقار غير مسجل'], 201);
        }
        

        return response()->json(['message' => 'تم العملية بنجاح'], 201);
    }
}
