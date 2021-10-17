<?php

namespace App\Http\Controllers\V1;

use App\Http\Resources\V1\PostResource;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostController extends \App\Http\Controllers\Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'message' => 'required|min:12|max:255',
        ]);

        $post = Post::make($request->all());
        $post->user_id = User::all()->random()->id;
        $post->save();
        return new PostResource($post);
    }

    public function index()
    {
        return PostResource::collection(Post::all());
    }
}
