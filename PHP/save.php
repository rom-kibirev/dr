<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = $_POST['data'];
    $sourceFile = $_POST['source'];
    $fp = fopen("../public/XHRResponse/". $_POST['place'], "w+");
    fwrite($fp, $data);
    fclose($fp);
    echo 'Данные сохранены - ' . $_POST['file'];
}