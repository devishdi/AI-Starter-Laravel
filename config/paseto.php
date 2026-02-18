<?php

return [
    'key' => env('PASETO_KEY'),
    'audience' => env('PASETO_AUDIENCE', 'Marry'),
    'subject' => env('PASETO_SUBJECT', 'ISHDI'),
    'app_id' => env('PASETO_APP_ID'),
    'app_secret' => env('PASETO_APP_SECRET'),
    'app_pwd' => env('PASETO_APP_PWD'),
    'default_mmid' => env('PASETO_DEFAULT_MMID', '1234'),
    'iss' => env('PASETO_ISS', 'ISHDI'),
    'sy_id' => env('PASETO_SYID', '123'),
];
