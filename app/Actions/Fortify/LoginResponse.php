<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        if ($request->user()?->isGuru()) {
            return redirect('/guru/dashboard');
        }

        return redirect('/'); // setelah login, redirect ke home
    }
}
