if(localStorage.getItem("first"))
{
    alert("欢迎回来！");
}
else
{
    localStorage.setItem("first",233);
    alert("你好，新朋友！");
    var BigMonth={};
    var date=new Date();
    var year=date.getFullYear();
    var y1="y"+year;
    var y2="y"+(year+1);
    //alert(y2);
    var y3="y"+(year+2);
    var y4="y"+(year+3);
    BigMonth[y1]=[{},{},{},{},{},{},{},{},{},{},{},{}];
    BigMonth[y2]=[{},{},{},{},{},{},{},{},{},{},{},{}];
    BigMonth[y3]=[{},{},{},{},{},{},{},{},{},{},{},{}];
    BigMonth[y4]=[{},{},{},{},{},{},{},{},{},{},{},{}];
    localStorage.setItem("BigMonth",JSON.stringify(BigMonth));
}