<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $errors = [];
        if (empty($_POST['email'])) {
            $errors['email'] = 'Поле не заполнено.';
        } elseif (empty($_POST['tel'])) {
            $errors['telephone'] = 'Поле не заполнено.';
        } else {
            $form = $_POST;
            $to = 'order@salesgenerator.pro, skpr19+lead@mail.amocrm.ru';
            $headers = 'From: retrocow@mail.ru; Content-type: text; charset=\"utf-8\"';
            foreach ($form as $key => $val) {
                $valArr[] = $key . ' = ' . $val;
            };
            $valStr = implode(",\n", $valArr);
            $message = mb_convert_encoding("Были переданы значения:\n" . $valStr . "\n", "UTF-8");
            mail($to, 'Заявка Бикетов', $message, $headers);
            header('Location: /');
        }
    }
?>