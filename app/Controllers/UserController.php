<?php

namespace App\Controllers;

use App\Bootstrap\{Response, Request, Validation};
use App\Database\Query;

use Devker\Vaults\Vaults;

class UserController
{
    public static function show($params)
    {
        $userID = $params->id;
        $pageNo = $params->page_no;
        $records = $params->records;
        $count = Query::table("bio_data")->select()->count();
        if (empty($userID) && $userID !== 0) {
            $db = Query::table("bio_data")->select()
                ->pagination($pageNo, $records);

            if ($db->count() > 0) {
                $response = new Response(["statusCode" => 200, "message" => "Records found", "records" => $db->count(), "total_records" => $count, "details" => $db->get()], 200);
            } else if ($db->count() == 0) {
                $response = new Response(["statusCode" => 406, "message" => "No records found"], 406);
            } else {
                $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
            }
        } else {
            $db = Query::table("bio_data")->select()->where("user_id=?", [$userID]);
            if ($db->count() > 0) {
                $response = new Response(["statusCode" => 200, "message" => "Records found", "details" => $db->single()], 200);
            } else if ($db->count() == 0) {
                $response = new Response(["statusCode" => 406, "message" => "No records found"], 406);
            } else {
                $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
            }
        }

        echo $response->responseJSON();
    }

    public static function create(Request $req, $params)
    {
        $userID = $params->id;

        if (empty($userID) && $userID !== 0) {
            $formValues = json_decode($req->input("data"));
            $fullName = $formValues->full_name;
            $gender = $formValues->gender;
            $email = $formValues->email_id;
            $profileImage = $req->input("profile_img");

            $validator = new Validation([
                "full_name" => $fullName, "gender" => $gender,
                "email_id" => $email, "profile_img" => $profileImage
            ]);

            $validationRules = [
                "full_name" => [
                    "required" => "Full name is required",
                    "maxlength:255" => "Maximum 255 characters is allowed",
                    "minlength:10" => "Minimum 10 characters required",
                ],
                "gender" => [
                    "required" => "Gender is required",
                    "maxlength:10" => "Maximum 10 characters is allowed",
                ],
                "email_id" => [
                    "email" => "Invalid email",
                    "maxlength:150" => "Maximum 150 characters is allowed",
                    "db-unique:bio_data,email_id" => "Email ID exists",
                ],
                "profile_img" => [
                    "file-required" => "Profile picture is required",
                    "file-mime-type:image/jpg,image/jpeg,image/png" => "Upload PNG, JPG, JPEG files",
                    "file-max-size:1000000" => "Maximum allowed size : 1 MB"
                ],
            ];

            $validator->validateRules($validationRules);

            if ($validator->validate()) {
                $db = Query::table("bio_data")->insert(
                    [
                        "user_id" => date("YmdHis"), "full_name" => $fullName,  "email_id" => $email,
                        "gender" => $gender, "profile_pic" => Vaults::fileDetails($profileImage, "fileEncrypt"),
                        "profile_pic_type" => Vaults::fileDetails($profileImage, "fileType")
                    ]
                );
                if ($db->save()) {
                    $response = new Response(["statusCode" => 201, "message" => "Successfully created"], 201);
                } else {
                    $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
                }
            } else {
                $response = new Response(["statusCode" => 400, "message" => "Recorrect errors", "errors" => $validator->getErrors()], 400);
            }
        } else {
            $userData = Query::table("bio_data")->select()->where("user_id=?", [$userID]);

            if ($userData->count() > 0) {
                $profileImg = $userData->single("profile_pic");
                $profileImgType = $userData->single("profile_pic_type");

                $formValues = json_decode($req->input("data"));
                $fullName = $formValues->full_name;
                $gender = $formValues->gender;
                $email = $formValues->email_id;
                $profileImage = $req->input("profile_img");

                $validator = new Validation([
                    "full_name" => $fullName, "gender" => $gender,
                    "email" => $email, "profile_img" => $profileImage
                ]);

                $validationRules = [
                    "full_name" => [
                        "required" => "Project name is required",
                        "maxlength:255" => "Maximum 255 characters is allowed",
                        "minlength:10" => "Minimum 10 characters required",
                    ],
                    "gender" => [
                        "required" => "Gender is required",
                        "maxlength:10" => "Maximum 10 characters is allowed",
                    ],
                    "email" => [
                        "email" => "Invalid email",
                        "maxlength:150" => "Maximum 150 characters is allowed",
                        "db-unique-except:bio_data,email_id,user_id-$userID" => "Email ID exists",
                    ],
                    "profile_img" => [
                        "file-mime-type:image/jpg,image/jpeg,image/png" => "Upload PNG, JPG, JPEG files",
                        "file-max-size:1000000" => "Maximum allowed size : 1 MB"
                    ],
                ];

                $validator->validateRules($validationRules);

                if ($validator->validate()) {
                    $db = Query::table("bio_data")->update(
                        [
                            "full_name" => $fullName,  "email_id" => $email, "gender" => $gender,
                            "profile_pic" => Vaults::fileDetails($profileImage, "fileSize") > 0 ? Vaults::fileDetails($profileImage, "fileEncrypt") : $profileImg,
                            "profile_pic_type" => Vaults::fileDetails($profileImage, "fileSize") > 0 ? Vaults::fileDetails($profileImage, "fileType") : $profileImgType
                        ]
                    )->where("user_id=?", [$userID]);

                    if ($db->save()) {
                        $response = new Response(["statusCode" => 201, "message" => "Successfully updated"], 201);
                    } else {
                        $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
                    }
                } else {
                    $response = new Response(["statusCode" => 400, "message" => "Recorrect errors", "errors" => $validator->getErrors()], 400);
                }
            } else if ($userData->count() == 0) {
                $response = new Response(["statusCode" => 406, "message" => "No records found to update"], 406);
            } else {
                $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
            }
        }
        echo $response->responseJSON();
    }

    public static function delete($params)
    {
        $userID = $params->id;
        $count = Query::table("bio_data")->select()->where("user_id=?", [$userID])->count();

        if ($count > 0) {
            $db = Query::table("bio_data")->delete()->where("user_id=?", [$userID]);
            if ($db->save()) {
                $response = new Response(["statusCode" => 201, "message" => "Successfully deleted"], 201);
            } else {
                $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
            }
        } else if ($count == 0) {
            $response = new Response(["statusCode" => 406, "message" => "No records found to delete"], 406);
        } else {
            $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
        }
        echo $response->responseJSON();
    }

    public static function login(Request $req, $params)
    {
        $validator = new Validation($req->input());

        $validationRules = [
            "username" => [
                "required" => "Username is required"
            ],
            "password" => [
                "required" => "Password is required"
            ]
        ];

        $validator->validateRules($validationRules);

        if ($validator->validate()) {
            $db = Query::table("login_access")->select()
                ->where("username=? AND password=?", [$req->input("username"), $req->input("password")]);

            if ($db->count() > 0) {
                $response = new Response(["statusCode" => 200, "message" => "Successfully logged in", "data" => ["name" => "Admin", "username" => $req->input("username")]], 200);
            } else if ($db->count() == 0) {
                $response = new Response(["statusCode" => 406, "message" => "Login failed", "error" => "Wrong username/password"], 406);
            } else {
                $response = new Response(["statusCode" => 500, "message" => "Server error"], 500);
            }
        } else {
            $response = new Response(["statusCode" => 400, "message" => "Recorrect errors", "errors" => $validator->getErrors()], 400);
        }

        echo $response->responseJSON();
    }
}
