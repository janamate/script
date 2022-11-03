console.log('js연결성공');

const start = document.getElementById('startbtn');
start.addEventListener('click', function(){
    console.log('이벤트리스너작동')
    let submit = prompt('', "숫자를 입력하세요");
})