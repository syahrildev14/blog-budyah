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
            $base = Str::slug($post->title);
            $slug = $base;
            $suffix = 2;

            while (static::where('slug', $slug)->exists()) {
                $slug = "{$base}-{$suffix}";
                $suffix++;
            }

            $post->slug = $slug;
        });
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->latest();
    }

    
}
