const formData = document.getElementById('signInForm')

formData.addEventListener('submit', async function(event) {
    event.preventDefault();
 
   
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);
    const mobile = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value;

   
    if (username === "" || email === "" || isNaN(age) || mobile === "" || password === "") {
        alert("All fields are required.");
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    
    if (age < 18) {
        alert("Please enter a valid age.");
        return;
    }

    
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must be exactly 10 digits.");
        return;
    }

    
    const formData = {
        username,
        email,
        age,
        mobile,
        password
    };

    try {
       
        const response = await fetch('http://localhost:4502/bin/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
    },
            body: JSON.stringify(formData)
        });

       
        if (response.ok) {
            alert("Sign-in successful!");
           
        } else {
            alert("Failed to sign in. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});