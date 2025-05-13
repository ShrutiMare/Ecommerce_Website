    function validateForm() {
        var username = document.getElementById("user").value;
        var password = document.getElementById("psw").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("mail").value;
        var radio = document.querySelector('input[name="register"]:checked');
        var isValid = true;

        document.querySelectorAll('.error').forEach(function(error) {
            error.textContent = '';
        });

        if (username.length < 6 || username.length > 15) {
            document.getElementById("usernameError").textContent = "Username must be between 6 and 15 characters.";
            isValid = false;
        }

        var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            document.getElementById("passwordError").textContent = "Password must include at least 1 capital letter, 1 lowercase letter, 1 number, and 1 special character.";
            isValid = false;
        }

        var phoneRegex = /^[6789]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            document.getElementById("phoneError").textContent = "Mobile number must be 10 digits and start with 6, 7, 8, or 9.";
            isValid = false;
        }

        if (email == "") {
            document.getElementById("emailError").textContent = "Email cannot be empty.";
            isValid = false;
        }

        if (!radio) {
            document.getElementById("roleError").textContent = "Please select a role (Customer or Seller).";
            isValid = false;
        }

        return isValid;  
    }
