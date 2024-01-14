let count1 = 0;
let count2 = 0;

function vote(option) {
    if (option === 1) {
        count1++;
        document.getElementById('count1').innerText = count1;
    } else if (option === 2) {
        count2++;
        document.getElementById('count2').innerText = count2;
    }
}