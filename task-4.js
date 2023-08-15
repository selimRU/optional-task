const eyeBtn = document.querySelector('img')
const inputValue = document.getElementById('pass')

eyeBtn.addEventListener('click', function () {
if (inputValue.type === 'password') {
    inputValue.type = 'text'
    eyeBtn.src = 'ey2.png'
}else{
    inputValue.type = 'password';
    eyeBtn.src = 'ey1.png'
}
})