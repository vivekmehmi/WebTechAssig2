function addcredit() {
    var credit = document.getElementById('creditshown').innerHTML;
    credit++;
    document.getElementById('creditshown').innerHTML = credit;
}


function spin() {
    const displaypic1 = document.getElementById('pic1');
    const displaypic2 = document.getElementById('pic2');
    const displaypic3 = document.getElementById('pic3');
    const showwinning = document.getElementById('winningsshown');
    const showmessage = document.getElementById('message');
    const spinbutton = document.querySelectorAll('spinbutton');

    if(creditshown.Value > "0"){
        spinbutton.disabled = true
    }

        else{
            spinbutton.disabled = false
        }

    let spin = Math.floor(Math.random() * 8) + 1;
    let spin2 = Math.floor(Math.random() * 8) + 1;
    let spin3 = Math.floor(Math.random() * 8) + 1;
    let winningadd = 0;
    displaypic1.setAttribute("src", "images/fruit" + spin + ".png");
    displaypic2.setAttribute("src", "images/fruit" + spin2 + ".png");
    displaypic3.setAttribute("src", "images/fruit" + spin3 + ".png");
    
    if (spin === spin2 && spin === spin3 && spin3 === spin2) { 
        var addwinning = winningadd + 10;
        showmessage.innerText = (`You Got 3! + 10 Winnings!`);
        showwinning.innerText = (`${addwinning}`);
}
    else if (spin2 === spin3 && spin2 != spin && spin3 != spin) {
        var addwinning = winningadd + 5;
        showmessage.innerText = (`You Got 2! + 5 Winnings!`);
        showwinning.innerText = (`${addwinning}`)
}
    else if (spin !== spin2 && spin2 !== spin3 && spin !== spin3) {
        showmessage.innerText = (`You Lose!`)

}
    var credit = document.getElementById('creditshown').innerHTML;
    credit--;
    document.getElementById('creditshown').innerHTML = credit;
    creditshown.innerHTML = credit;
}

function collectwinnings() {
    const showwinning = document.getElementById('winningsshown');
    
}