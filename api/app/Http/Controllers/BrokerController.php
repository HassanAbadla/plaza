<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Broker;

class BrokerController extends Controller
{
    public function index() {
        $brokers = Broker::all();
        return response()->json($brokers);
    }

    
    public function store(Request $request)
    {
        $broker = Broker::create($request->all());

        return response()->json(['message' => 'تم إضافة وسيط جديد بنجاح'], 201);
    }
}
