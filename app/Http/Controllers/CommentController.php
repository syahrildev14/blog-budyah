<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'post_id' => 'required|exists:posts,id',
            'name'    => 'required|string|max:100',
            'content' => 'required|string|max:500',
        ]);

        Comment::create($validated);

        return back();
    }
    
}
