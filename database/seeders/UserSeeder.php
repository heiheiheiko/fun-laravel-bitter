<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Post;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::whereNotNull('id')->delete();

        $user = User::factory()->create([
            'email' => 'joker@arkham-asylum.dc',
            'name' => 'Joker',
            'color' => 'purple'
        ]);
        Post::factory()->create([
            'user_id' => $user->id,
            'message' => 'HAH AH HA HA HA H HA HA H HA HAH.'
        ]);
    

        $user = User::factory()->create([
            'email' => 'harley-quinn@arkham-asylum.dc',
            'name' => 'Harley Quinn',
            'color' => 'red'
        ]);
        Post::factory()->create([
            'user_id' => $user->id,
            'message' => 'Sweetie, Get Mommy`s Bazooka.'
        ]);


        $user = User::factory()->create([
            'email' => 'riddler@arkham-asylum.dc',
            'name' => 'Riddler',
            'color' => 'green'
        ]);
        Post::factory()->create([
            'user_id' => $user->id,
            'message' => 'A diamond plate, a glowing grate, a place you never leave. Where am I?'
        ]);
    

        $user = User::factory()->create([
            'email' => 'poison-ivy@arkham-asylum.dc',
            'name' => 'Poison Ivy',
            'color' => 'green'
        ]);
        Post::factory()->create([
            'user_id' => $user->id,
            'message' => 'So many people to kill... so little time.'
        ]);

    
        $user = User::factory()->create([
            'email' => 'mr-freeze@arkham-asylum.dc',
            'name' => 'Mr Freeze',
            'color' => 'blue'
        ]);
        Post::factory()->create([
            'user_id' => $user->id,
            'message' => 'I just require a moment of your time.'
        ]);
    }
}
