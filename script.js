//cv
function myFunction() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}
//index 
console.log("script return");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamber').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 340);
    }
});