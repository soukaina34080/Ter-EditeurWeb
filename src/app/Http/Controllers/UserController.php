<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illiminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        //ici on test l'unicité de l'mail dans la base de donnée
        $user = User::where('email',$request['email'])->first();
        if($user){
            $response['status']=0;
            $response['message']='Email déja utilisé';
            $response['code']=409;
        } else{


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $response['status']=1;
        $response['message']='User register successfuly';
        $response['code']=200;
        }
        return response()->json($response);

    }
    //
    public function login(Request $request){
        $credentials= $request->only('email','password');
        try{
            if(!JWTAuth::attempt($credentials)){
                $response['status']=0;
                $response['code']=401;
                $response['data']=null;
                $response['message']="Email ou mot de passe incorrect";
                return response()->json($response);

            }
        }catch (JWTException $e){
            $response['data']=null;
            $response['code']=500;
           $response['message']="Could not create token";
           return response()->json($response);

        }
        $user=auth()->user();
        $data['token']=auth()->claims([
            'user_id'=> $user->id,
            'email'=> $user->email,
            'name'=>$user->name
        ])->attempt($credentials);
        $response['data']=$data;
        $response['status']=1;
        $response['code']=200;
        $response['message']="Login successfully";
        return response()->json($response);





    }
}
