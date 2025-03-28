console.log('connected.')

let userHealth = 100
let cpuHealth = 100

document.getElementById('userH').textContent = `You: ${userHealth} HP`;
document.getElementById('cpuH').textContent = `CPU: ${cpuHealth} HP`;

let fireAttack = 10
let waterAttack = 20
let healing = 15

let cpuAttack = Math.floor(Math.random() * 21);

function attack(attackType) {
    console.log('attack')
    if (attackType == 'fire') {
        cpuHealth -= fireAttack;
        userHealth -= cpuAttack
    }
    else if (attackType == 'water') {
        cpuHealth -= waterAttack
        userHealth -= cpuAttack
        
    }
    else if (attackType == 'heal') {
        userHealth += healing
        userHealth -= cpuAttack
    }

    updateUI()
}

function updateUI() {
    document.getElementById('userH').textContent = `You: ${userHealth} HP`;
    document.getElementById('cpuH').textContent = `CPU: ${-cpuHealth} HP`;
}
