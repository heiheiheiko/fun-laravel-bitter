<?php

namespace Tests\Integration\Http\Controllers\V1;

use App\Models\User;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    private const API_URL = 'api/v1/posts';

    private const SCHEMA = [
        'id',
        'message',
        'user'  => [
          'id',
          'email',
          'color',
          'email_verified_at',
          'created_at',
          'updated_at'
        ],
        'created_at',
        'updated_at'
    ];

    private const RESOURCE_SCHEMA = [
        'data' => self::SCHEMA
    ];

    private const COLLECTION_SCHEMA = ['data' => ['*' => self::SCHEMA]];


    /*******************/
    /*  create action  */
    /*******************/
    public function test_WhenCreateIsCalled_AndAnInvalidRequestIsGiven_ThenAValidationErrorShouldBeReturned()
    {
        User::factory()->create(['email' => 'joker@arkham-asylum.dc']);
        $body = ['message' => 'HAHA!'];
        $response = $this->json('POST', self::API_URL, $body);

        $response
          ->assertStatus(422)
          ->assertJsonFragment(['message' => 'The given data was invalid.']);
    }

    public function test_WhenCreateIsCalled_AndAValidRequestIsGiven_ThenAPostShouldBeCreatedAndReturned()
    {
        User::factory()->create(['email' => 'joker@arkham-asylum.dc']);
        $body = ['message' => 'HAHAAHAHAHAHAHHA!'];
        $response = $this->json('POST', self::API_URL, $body);

        $response
          ->assertStatus(201)
          ->assertJsonStructure(self::RESOURCE_SCHEMA)
          ->assertJsonFragment(['email' => 'joker@arkham-asylum.dc'])
          ->assertJsonFragment(['message' => 'HAHAAHAHAHAHAHHA!']);
    }


    /******************/
    /*  index action  */
    /******************/
    public function test_WhenIndexIsCalled_AndAValidRequestIsGiven_ThenAllPostsShouldBeReturned()
    {
        User::factory()
          ->hasPosts(1, ['message' => 'HAHA!'])
          ->create(['email' => 'joker@arkham-asylum.dc']);
        $response = $this->get(self::API_URL);

        $response
          ->assertStatus(200)
          ->assertJsonStructure(self::COLLECTION_SCHEMA)
          ->assertJsonFragment(['email' => 'joker@arkham-asylum.dc'])
          ->assertJsonFragment(['message' => 'HAHA!']);
    }
}
