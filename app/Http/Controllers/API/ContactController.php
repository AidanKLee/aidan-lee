<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class ContactController extends Controller
{
    public function send (Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'message' => 'required'
        ]);

        $to = env('CONTACT_MAIL');

        $name = $request->post('name');
        $email = $request->post('email');
        $message = $request->post('message');

        try {
            Mail::to($to)->send(new ContactMail($name, $email, $message));

            return Response::json(['success' => true, 'status' => 200]);
        } catch (HttpExceptionInterface $e) {
            return Response::json(['success' => false, 'message' => $e->getMessage(), 'status' => $e->getStatusCode()]);
        }
    }
}
