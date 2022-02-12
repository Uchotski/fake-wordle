//Toggle Overlay...
document.getElementsByClassName('close-button')[0].onclick = function() {
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('menu').onclick = function() {
    document.getElementById('overlay').style.display = 'flex';
}

//Make the keyboard typeable...