<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'content',
        'thumbnail',
    ];

    /**
     * Auto-generate slug
     */
    protected static function booted()
    {
        static::creating(function ($post) {
            $post->slug = Str::slug($post->title);
        });
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->latest();
    }
}
