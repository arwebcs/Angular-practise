<?php

use App\Bootstrap\Router;
use App\Controllers\UserController;


Router::apiMethods('users', [UserController::class]);
Router::post("user/login", [UserController::class, "login"]);
