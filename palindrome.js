function CheckPalindrome(input){
    if(input.length < 2) return true

    if(input.charAt(0) === input.charAt(input.length - 1)){
        return CheckPalindrome(input.substring(1, input.length - 1))
    }

    return false
}

console.log(CheckPalindrome('12345678900987654321'))