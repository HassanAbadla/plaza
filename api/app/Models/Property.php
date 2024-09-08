<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'properities';

    public function broker()
    {
        return $this->belongsTo(Broker::class);
    }

    public function businessExpenses()
    {
        return $this->hasMany(BusinessExpense::class, 'properity_id');
    }

    public function sales()
    {
        return $this->hasMany(Sale::class, 'properity_id');
    }

}
