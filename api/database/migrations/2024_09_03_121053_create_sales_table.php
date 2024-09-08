<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('properity_id');
            $table->unsignedBigInteger('customer_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->decimal('rent_price', 10, 2);
            $table->decimal('elec_counter', 10)->nullable();
            $table->string('notes')->nullable();
            $table->timestamps();

            $table->foreign('properity_id')->references('id')->on((new \App\Models\Property())->getTable());
            $table->foreign('customer_id')->references('id')->on((new \App\Models\Customer())->getTable());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
