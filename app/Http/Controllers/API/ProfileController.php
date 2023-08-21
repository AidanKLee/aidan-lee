<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'id' => 'integer',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'marketing' => 'required|boolean'
        ]);

        $isAuthenticatedUser = Auth::check() && Auth::id() === (int)$request->post('id');

        if ($isAuthenticatedUser) {
            $user = User::where('id', '=', Auth::id())->first();
    
            $user->first_name = $request->post('first_name');
            $user->last_name = $request->post('last_name');
            $user->email = $request->post('email');
            $user->marketing = $request->post('marketing');
            $user->updated_at = now();
            $user->save();

            return Response::json(['success' => true, 'status' => 200, 'data'=> $user]);
        } else {
            return Response::json(['success' => false, 'message' => 'Unauthorised', 'status' => 401]);
        }
    }
}
