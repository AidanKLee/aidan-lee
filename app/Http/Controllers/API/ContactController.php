<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
            Mail::mailer('mailtrap')->to($to)->send(new ContactMail($name, $email, $message));

            return json_encode(['success' => true, 'status' => 200]);
        } catch (HttpExceptionInterface $e) {
            return json_encode(['success' => false, 'message' => $e->getMessage(), 'status' => $e->getStatusCode()]);
        }
    }
}
