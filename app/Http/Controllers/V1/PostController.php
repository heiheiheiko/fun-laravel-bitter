<?php

namespace App\Http\Controllers\V1;

use App\Http\Resources\V1\PostResource;
use App\Models\Post;

class PostController extends \App\Http\Controllers\Controller
{
    public function index()
    {
        return PostResource::collection(Post::all());
    }
}
