
let prev_state_s = accessInfo(de('state',date2))
storeInfo(en('state',date2), 'cost')
let curentAmount = 0;
if (accessInfo(en('logged',date1))){
    // alert('logged '+ accessInfo(en('logged',date1)))
}else{
    window.location.assign('../login')
}

storeInfo(en('logged',date1),'false')

const qi = document.getElementById('quantity');

qi.value=1;

document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const totalCostElement = document.getElementById('totalCost');
    const costPerNSPanel = 1200; // Cost per NSPanel

    function updateTotalCost() {
        const quantity = parseInt(quantityInput.value);
        const totalCost = quantity * costPerNSPanel;
        totalCostElement.textContent = 'R' + totalCost.toFixed(2);
        curentAmount = totalCost.toFixed(2);
    }

    // Update the total cost when the page loads
    updateTotalCost();

    // Add an event listener to update the total cost when the quantity changes
    quantityInput.addEventListener('input', updateTotalCost);
});

const username = accessInfo(en('username', date1));
if (username) {
    const username_ = document.querySelector('.Uname');
    username_.textContent = de(username, date1);
} else {
    window.location.assign("../login/");
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let dt = document.querySelector('.date');
dt.textContent = currentYear;

const continue_ = document.querySelector('.continue');

continue_.addEventListener('click', () => {
    if (curentAmount >= 1200) {
        const amount = curentAmount;
        const NumNSpanels = amount / 1200;
        // alert(`${amount} for ${NumNSpanels} NSPs`);
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const emailC= de(accessInfo(en('email',date1)),date1)
    if (emailC){
       
        document.querySelector('.eml').textContent = emailC
    }else{
        
        window.location.assign('../login')
    }
    let dataC={ email_P: emailC + "+check"  }
    
    fetch(line+ '/resend_c', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataC)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message=='Nverified'){
            window.location.assign(`../verify`)
    
        }
       
    })
    .catch(error => {
        console.log(error)
    });
    })