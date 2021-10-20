$(function(){

    // 천단위 구분 쉼표
    let comma = document.getElementsByClassName("numComma");
    for (let i = 0; i < comma.length; i++) {
        
        console.log(comma[i].innerText);
        
        
    }
    // test
    let money = 1234567890;
    let res = money.toLocaleString();

});
