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
        Schema::disableForeignKeyConstraints();
        Schema::create('properities', function (Blueprint $table) {
            $table->id();
            $table->string('city')->nullable();
            $table->string('zone')->nullable();
            $table->string('street')->nullable();
            $table->string('bulding_no')->nullable();
            $table->string('appartement_no')->nullable();
            $table->string('rooms')->nullable();
            $table->string('wcs')->nullable();
            $table->string('type')->nullable();
            $table->unsignedBigInteger('broker_id')->nullable();
            $table->string('status')->nullable();
            $table->date('from')->nullable();
            $table->date('untill')->nullable();
            $table->string('notes')->nullable();
            $table->timestamps();

            $table->foreign('broker_id')->references('id')->on((new \App\Models\Broker())->getTable());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properities');
    }
};
