
    <!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <title>قول ميو</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 id="greeting"></h1>
        <p>لو شوشو مامي قول ميو 🐱</p>
        <input type="text" id="meowInput" placeholder="اكتب هنا">
        <p id="result"></p>
    </div>

    <script>
        // استرجاع الاسم من الصفحة السابقة
        const username = sessionStorage.getItem("username") || "ضيف";
        document.getElementById("greeting").innerText = `أهلًا ${username}!`;

        // تحقق من إدخال "ميو" فقط
        document.getElementById("meowInput").addEventListener("input", function() {
            const value = this.value;
            const result = document.getElementById("result");

            if (value === "ميو") {
                result.innerText = "✔️ شاطر/ة 😄";
                result.style.color = "green";
            } else {
                this.value = "";
                result.innerText = "❌ ممنوع إلا ميو";
                result.style.color = "red";
            }
        });
    </script>
</body>
</html>