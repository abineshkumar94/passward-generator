document.addEventListener('DOMContentLoaded', () => {
    let inputslider = document.getElementById("inputslider");
    let slidervalue = document.getElementById("slidervalue");
    let uppercase = document.getElementById("uppercase");
    let lowercase = document.getElementById("lowercase");
    let number = document.getElementById("number");
    let symbol = document.getElementById("symbol");
    let passBox = document.getElementById("passBox");
    let genbtn = document.getElementById("genbtn");
    let copyIcon = document.getElementById("copyIcon");
  
    slidervalue.textContent = inputslider.value;
    inputslider.addEventListener('input', () => {
      slidervalue.textContent = inputslider.value;
    });
  
    genbtn.addEventListener('click', () => {
      passBox.value = generatePassword();
    });
  
    function generatePassword() {
      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      let password = '';
      const length = inputslider.value;
  
      let selectedCharacters = '';
      if (uppercase.checked) {
        selectedCharacters += uppercaseLetters;
      }
      if (lowercase.checked) {
        selectedCharacters += lowercaseLetters;
      }
      if (number.checked) {
        selectedCharacters += numbers;
      }
      if (symbol.checked) {
        selectedCharacters += symbols;
      }
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
        password += selectedCharacters[randomIndex];
      }

      passBox.className = "passBox generated-password";
  
      return password;
    }
    copyIcon.addEventListener('click', ()=>{
      navigator.clipboard.writeText(passBox.value);
    })

  });
  