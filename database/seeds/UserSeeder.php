<?php

use Illuminate\Database\Seeder;
use App\User;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(User $user)
    {
        //'name', 'email', 'password', 'updated_at', 'created_at')
        $user->create([
            'name' => 'Fulano de Tal',
            'email' => 'teste@teste.com',
            'password' => '123',
            'updated_at' => now()->format('Y-m-d H:i:s'),
            'created_at' => now()->format('Y-m-d H:i:s'),

        ]);

        $user->create([
            'name' => 'Ciclano da Silva',
            'email' => 'ciclano@ciclano.org',
            'password' => '321',
            'updated_at' => now()->format('Y-m-d H:i:s'),
            'created_at' => now()->format('Y-m-d H:i:s'),
        ]);
        $user->create([
            'name' => 'Beltrano Lopes',
            'email' => 'beltrano@belts.com',
            'password' => '104',
            'updated_at' => now()->format('Y-m-d H:i:s'),
            'created_at' => now()->format('Y-m-d H:i:s'),
        ]);
    }
}
