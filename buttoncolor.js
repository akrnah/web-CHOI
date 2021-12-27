function setBtnName(name){
         var btnName = ["btntop", "btnbottom"]

         var i = 0;
         while(i< btnName.length){
         document.getElementById(btnName[i]).value = name ;
                                                 i = 1 + i;
         }
}
var Links = {
    setColor:function (color){
        // var alist = document.querySelectorAll('a');
        // var c = 0;
        // while(c < alist.length){
        // alist[c].style.color = color;
        //        c = c + 1;
        // }
        $('a').css('color', color);
}
}


function nightDayHandler(self){
var choi = document.body.style;

if(self.value === '다크모드')
    {
    choi.backgroundColor = 'black';
    choi.color='white';

    setBtnName('화이트모드');

}else
    { choi.backgroundColor = 'white';
      choi.color='black';

    setBtnName('다크모드');
      }

if(self.value === '다크모드')
    {
    Links.setColor('blue');
    }
else
    {
    Links.setColor('yellow');
    }
}

