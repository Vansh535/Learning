
function generatePassword( _length, includeuppercase, includeNumbers, includeSymbols, includeLowercase) {

    let password = "";
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*';
    let allowedchars = "";
    allowedchars += includeuppercase ? uppercase : "";
    allowedchars += includeLowercase ? lowercase : "";
    allowedchars += includeNumbers ? numbers : "";
    allowedchars += includeSymbols ? symbols : "";
    if (_length<=0) {
        return "length should be greater than 0";
    }
    if (allowedchars.length === 0)
    {
        return "atleast one should be selected";
    }
    for (let i = 0; i < _length; i++) {
        const randomidx = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomidx];
        
    }
    

    return password;
}


const passwordlenght = 12;
const includeuppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = generatePassword(passwordlenght, includeuppercase, includeNumbers, includeSymbols, includeLowercase);
console.log(`generated password is: ${password}`);