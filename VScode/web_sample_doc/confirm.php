<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);

    $to = "2021d12@stu.gifu-nct.ac.jp"; // 送信先のメールアドレス
    $subject = "お問い合わせフォームからのメッセージ";
    $body = "名前: $name\nメッセージ:\n$message";


    if (mail($to, $subject, $body,)) {
        echo "メールが送信されました。";
    } else {
        echo "メールの送信に失敗しました。";
    }
}