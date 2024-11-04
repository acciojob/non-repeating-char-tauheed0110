function firstNonRepeatedChar(str) {
    const n = str.length;

    for (let i = 0; i < n; i++) {
        let flag = false;
        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            if (str.charAt(i) === str.charAt(j)) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            return str.charAt(i);
        }
    }

    return "";
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
