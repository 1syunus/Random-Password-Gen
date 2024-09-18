const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_",
    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

const weakPasswords = ["password", "123456", "qwerty", "letmein", "password1"]

//Check input strength
function checkPasswordStrength(password) {
    if (weakPasswords.includes(password)) {
        return "Weak"
    } else if (password.length < 8) {
        return "Weak"
    } else if (password.length >= 8 && password.length < 12) {
        return "Moderate"
    } else {
        return "Strong"
    }
}

document.getElementById("check-strength-btn").addEventListener("click", function() {
    const password = document.getElementById("password-input").value
    const strength = checkPasswordStrength(password)
    document.getElementById("strength-result").textContent = `Password is: ${strength}`
})


// Function to generate a random password of a given length
function generateRandomPassword(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

// Error handling for invalid inputs
function showError(message) {
    document.getElementById("error-message").textContent = message
}

// Clear errors
function clearError() {
    document.getElementById("error-message").textContent = ""
}

function clearPasswords() {
    document.getElementById("password1").textContent = ""
    document.getElementById("password2").textContent = ""
    clearError()  // Clear error message (if any)
}


// Event listener for password generation (generate-btn)
document.getElementById("generate-btn").addEventListener("click", function() {
    const length = parseInt(document.getElementById("password-length").value, 10)

    //Clear previous
    clearPasswords()    

    // Validate length between 8 and 16
    if (isNaN(length) || length < 8 || length > 16) {
        showError("Password length must be between 8 and 16 characters")
        return
    }

    // Render random passwords
    const password1 = generateRandomPassword(length)
    const password2 = generateRandomPassword(length)
    
    document.getElementById("password1").textContent = password1
    document.getElementById("password2").textContent = password2
})

//Reset Event Listener
document.getElementById("clear-btn").addEventListener("click", clearPasswords)