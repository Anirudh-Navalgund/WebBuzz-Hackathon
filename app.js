const form = document.getElementById('playerForm')
const errorMessage = document.getElementById('errorMessage');
let players = []
let jersies = []
function displaySelection() {
    const match = document.querySelector('input[name="match"]:checked').value;
    document.getElementById("reciept_match").innerHTML = match;
    console.log(match);
    if(match=="test"){
        reg_fees = "₹5000"
        console.log(reg_fees);
        document.getElementById("reciept_fees").innerHTML = reg_fees
    }
    else if(match=="odi"){
        reg_fees = "₹2000"
        console.log(reg_fees);
        document.getElementById("reciept_fees").innerHTML = reg_fees
    }
    else if(match=='t20'){
        reg_fees = "₹1000"
        console.log(reg_fees);
        document.getElementById("reciept_fees").innerHTML = reg_fees
    }
    return match
}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const teamName = document.getElementById('teamName').value.trim();
    const jerseyNumber = document.getElementById('jersey').value.trim()
//     const match = document.getElementById('match').value
//     console.log(match);

            // Validate inputs
    if (!name || !email || !phone || !teamName || !jerseyNumber) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Invalid email format.';
        return;
    }

    if (!validatePhone(phone)) {
        errorMessage.textContent = 'Invalid phone number.';
        return;
    }

            //Player One
    const name_1 = document.getElementById('name1').value.trim();
    const jersey_1 = document.getElementById('jersey1').value.trim();
    players.push(name_1)
    jersies.push(jersey_1)

            //Player Two
    const name_2 = document.getElementById('name2').value.trim();
    const jersey_2 = document.getElementById('jersey2').value.trim();
    players.push(name_2)
    jersies.push(jersey_2)

            //Player Three
    const name_3 = document.getElementById('name3').value.trim();
    const jersey_3 = document.getElementById('jersey3').value.trim();
    players.push(name_3)
    jersies.push(jersey_3)

            //Player Four
    const name_4 = document.getElementById('name4').value.trim();
    const jersey_4 = document.getElementById('jersey4').value.trim();
    players.push(name_4)
    jersies.push(jersey_4)

            //Player Five
    const name_5 = document.getElementById('name5').value.trim();
    const jersey_5 = document.getElementById('jersey5').value.trim();
    players.push(name_5)
    jersies.push(jersey_5)

            //Player Six
    const name_6 = document.getElementById('name6').value.trim();
    const jersey_6 = document.getElementById('jersey6').value.trim();
    players.push(name_6)
    jersies.push(jersey_6)

            //Player Seven
    const name_7 = document.getElementById('name7').value.trim();
    const jersey_7 = document.getElementById('jersey7').value.trim();
    players.push(name_7)
    jersies.push(jersey_7)

            //Player Eight
    const name_8 = document.getElementById('name8').value.trim();
    const jersey_8 = document.getElementById('jersey8').value.trim();
    players.push(name_8)
    jersies.push(jersey_8)

            //Player Nine
    const name_9 = document.getElementById('name9').value.trim();
    const jersey_9 = document.getElementById('jersey9').value.trim();
    players.push(name_9)
    jersies.push(jersey_9)

            //Player Ten
    const name_10 = document.getElementById('name10').value.trim();
    const jersey_10 = document.getElementById('jersey10').value.trim();
    players.push(name_10)
    jersies.push(jersey_10)

    console.log(players);
    console.log(jersies);
            
            
            // to clear any previous error messages
    errorMessage.textContent = '';
    document.getElementById("output").style.display = 'flex';
//     document.getElementById("players").style.display = 'none';
//     document.querySelector('body').style.overflowY = 'hidden';
    const register = document.getElementById("reg")
    const output = document.getElementById("output")
    register.parentNode.replaceChild(output,register)
    document.getElementById("captain_jersey").innerHTML = jerseyNumber;
    document.getElementById("captain_name").innerHTML = name; 
    document.getElementById("captain_email").innerHTML = email;
    document.getElementById("captain_phone").innerHTML = phone;
    document.getElementById("team_name").innerHTML = teamName;
    document.getElementById("receipt_mid").innerHTML = (Math.random().toFixed(4))*1000
    

    document.getElementById("out1").innerHTML = jersies[0]+"\n"+players[0]
    document.getElementById("out2").innerHTML = jersies[1]+"\n"+players[1]
    document.getElementById("out3").innerHTML = jersies[2]+"\n"+players[2]
    document.getElementById("out4").innerHTML = jersies[3]+"\n"+players[3]
    document.getElementById("out5").innerHTML = jersies[4]+"\n"+players[4]
    document.getElementById("out6").innerHTML = jersies[5]+"\n"+players[5]
    document.getElementById("out7").innerHTML = jersies[6]+"\n"+players[6]
    document.getElementById("out8").innerHTML = jersies[7]+"\n"+players[7]
    document.getElementById("out9").innerHTML = jersies[8]+"\n"+players[8]
    document.getElementById("out10").innerHTML = jersies[9]+"\n"+players[9]
});
    
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10}$/; 
        return phonePattern.test(phone);
    }
