function palindrome(str) {
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            alert( 'It is not a palindrome');
        }
    }
    console.log( 'It is a palindrome');
}
palindrome(55)