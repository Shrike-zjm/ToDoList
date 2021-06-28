//test
var test1=document.getElementById("test1");
var height=window.screen.height;//不能删 后面用到了
var height6=(height-80-60)/6;
//test1.innerHTML=height6;
//test1.style.visibility="hidden";
// var t=passXDays(2021,5,20,12);
// alert(`${t.y}.${t.m}.${t.d}`);


//全局
var less=document.getElementById("less");
var more=document.getElementById("more");
var add=document.getElementById("add");
var del=document.getElementById("del");
var justshow=document.getElementById("justshow");
var showoutside=document.getElementById("showoutside");
var justshow2=document.getElementById("justshow2");
var justshow3=document.getElementById("justshow3");
var showoutside2=document.getElementById("showoutside2");
var date=new Date();
var nowYear=date.getFullYear();//4位
var nowYearStr=String(nowYear);
var nowMonth=date.getMonth();//0-11 这特么是个假的NowMonth
var nowDay=date.getDate();//1-31
var theStatus=1;

//这部分是每个界面分别的变量 但是必须写在这了(╯°Д°)╯︵┴┴┴┴(╯°Д°)╯︵┴┴┴┴(╯°Д°)╯︵┴┴┴┴
//      1       2           3       4       5       6
//  BigMonth DetailMonth

//BigMonth
    
    var BigMonth;
    var goalBM=document.getElementById("goalBM");
    var MT=document.getElementById("MonthTitle");
    var BMOK=document.getElementById("BMOK");
    //refreshBM(); 草 为什么要写在初始化之前呢


//DetailMonth
    var DetailMonth;
    var goalDMList=[];
    goalDMList.push(document.getElementById("DM1"));
    goalDMList.push(document.getElementById("DM2"));
    goalDMList.push(document.getElementById("DM3"));
    goalDMList.push(document.getElementById("DM4"));
    goalDMList.push(document.getElementById("DM5"));
    goalDMList.push(document.getElementById("DM6"));
    var i;
    for(i=0;i<=5;i++)
    {
        goalDMList[i].style.height=height6-20+"px";
        goalDMList[i].style.top=(100+i*(height6-20))+"px";
    }
    var DMnowLine=0;
    test1.innerHTML=DMnowLine;
    var DMOKList=[];
    DMOKList.push(document.getElementById("DMOK1"));
    DMOKList.push(document.getElementById("DMOK2"));
    DMOKList.push(document.getElementById("DMOK3"));
    DMOKList.push(document.getElementById("DMOK4"));
    DMOKList.push(document.getElementById("DMOK5"));
    DMOKList.push(document.getElementById("DMOK6"));
    for(i=0;i<=5;i++)
    {
        DMOKList[i].style.top=(100+i*(height6-20))+"px";
    }


//BigWeek
    var BigWeek;
    var BWlines=0;
    var goalBWList=[];
    var goalBWDList=[];
    var BWOKList=[];
    goalBWList.push(document.getElementById("BW1"));
    goalBWList.push(document.getElementById("BW2"));
    goalBWList.push(document.getElementById("BW3"));
    goalBWList.push(document.getElementById("BW4"));
    goalBWList.push(document.getElementById("BW5"));
    goalBWList.push(document.getElementById("BW6"));
    goalBWDList.push(document.getElementById("BWD1"));
    goalBWDList.push(document.getElementById("BWD2"));
    goalBWDList.push(document.getElementById("BWD3"));
    goalBWDList.push(document.getElementById("BWD4"));
    goalBWDList.push(document.getElementById("BWD5"));
    goalBWDList.push(document.getElementById("BWD6"));
    BWOKList.push(document.getElementById("BWOK1"));
    BWOKList.push(document.getElementById("BWOK2"));
    BWOKList.push(document.getElementById("BWOK3"));
    BWOKList.push(document.getElementById("BWOK4"));
    BWOKList.push(document.getElementById("BWOK5"));
    BWOKList.push(document.getElementById("BWOK6"));
//这部分是每个界面分别的变量 但是必须写在这了(╯°Д°)╯︵┴┴┴┴(╯°Д°)╯︵┴┴┴┴(╯°Д°)╯︵┴┴┴┴

if(localStorage.getItem("first2"))
{
    alert("欢迎回来！");
    BigMonth=localStorage.getItem("BigMonth");
    BigMonth=JSON.parse(BigMonth);

    DetailMonth=localStorage.getItem("DetailMonth");
    DetailMonth=JSON.parse(DetailMonth);

    BigWeek=localStorage.getItem("BigWeek");
    BigWeek=JSON.parse(BigWeek);
    //alert(BigMonth[`y${nowYearStr}`][0].goal);
}
else
{
    localStorage.setItem("first2",233);
    alert("你好，新朋友！");
    //BigMonth
        BigMonth={};
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
        BigMonth.born={year:nowYear,month:nowMonth,day:nowDay};
        localStorage.setItem("BigMonth",JSON.stringify(BigMonth));

    //DetailMonth
        DetailMonth={};
        var i,j;
        for(i=0;i<=3;i++)
        {
            DetailMonth[`y${(year+i)}`]=[];
            for(j=0;j<=11;j++)
            {
                DetailMonth[`y${(year+i)}`].push([]);
            }
        }
        localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));

    //BigWeek
    var nowMonth1to12=nowMonth+1;
        BigWeek={};
        BigWeek.Weeks=[];
        var firstWeek={};
        firstWeek.s={};
        firstWeek.t={};
        if(whatDay(nowYear,1,1)!=1)
        {
            firstWeek.s.y=nowYear-1;
            firstWeek.s.m=12;
            firstWeek.s.d=33-whatDay(nowYear,1,1);
            firstWeek.t.y=nowYear;
            firstWeek.t.m=1;
            firstWeek.t.d=8-whatDay(nowYear,1,1);
        }
        else
        {
            firstWeek.s.y=nowYear;
            firstWeek.s.m=1;
            firstWeek.s.d=1;
            firstWeek.t.y=nowYear;
            firstWeek.t.m=1;
            firstWeek.t.d=7;
        }
        BigWeek.Weeks.push(firstWeek);
        
        var i;
        for(i=0;(BigWeek.Weeks[i].t.y<nowYear)||((BigWeek.Weeks[i].t.y==nowYear)&&(BigWeek.Weeks[i].t.m<(nowMonth1to12+1)));i++)
        {
            if((BigWeek.Weeks[i].t.y==nowYear)&&(BigWeek.Weeks[i].t.m==nowMonth1to12)&&(BigWeek.Weeks[i].t.d==Monthdays(nowYear,nowMonth1to12)))break;
            var obj={};
            obj.s=passXDays(BigWeek.Weeks[i].s.y,BigWeek.Weeks[i].s.m,BigWeek.Weeks[i].s.d,7);
            obj.t=passXDays(BigWeek.Weeks[i].t.y,BigWeek.Weeks[i].t.m,BigWeek.Weeks[i].t.d,7);
            BigWeek.Weeks.push(obj);
        }
        BigWeek.FirstMondayDays=(pastYearDays(year)+yearDays(year,1)+1);
        if(BigWeek.Weeks[0].s.d!=1)
        {
            BigWeek.FirstMondayDays-=(32-BigWeek.Weeks[0].s.d);
        }
        localStorage.setItem("BigWeek",JSON.stringify(BigWeek));
}


refreshBM();


var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent)
            element.attachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    removeHandler: function (element, type, handler) {
        if(element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if(element.detachEvent)
            element.detachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    /**
     * 监听触摸的方向
     * @param target            要绑定监听的目标元素
     * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
     * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
     * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
     * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
     * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
     */
    listenTouchDirection: function (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
        this.addHandler(target, "touchstart", handleTouchEvent);
        this.addHandler(target, "touchend", handleTouchEvent);
        this.addHandler(target, "touchmove", handleTouchEvent);
        var startX;
        var startY;
        function handleTouchEvent(event) {
            switch (event.type){
                case "touchstart":
                    startX = event.touches[0].pageX;
                    startY = event.touches[0].pageY;
                    break;
                case "touchend":
                    var spanX = event.changedTouches[0].pageX - startX;
                    var spanY = event.changedTouches[0].pageY - startY;

                    if(Math.abs(spanX) > Math.abs(spanY)){      //认定为水平方向滑动
                        if(spanX > 30){         //向右
                            if(rightCallback)
                                rightCallback();
                        } else if(spanX < -30){ //向左
                            if(leftCallback)
                                leftCallback();
                        }
                    } else {                                    //认定为垂直方向滑动
                        if(spanY > 30){         //向下
                            if(downCallback)
                                downCallback();
                        } else if (spanY < -30) {//向上
                            if(upCallback)
                                upCallback();
                        }
                    }

                    break;
                case "touchmove":
                    //阻止默认行为
                    if(isPreventDefault)
                        event.preventDefault();
                    break;
            }
        }
    }
};
function up()
{
    //alert('up');
    switch(theStatus)
    {
        case 2:
            {
                if((DetailMonth[`y${nowYearStr}`][nowMonth].length)==0||DMnowLine==Math.floor(((DetailMonth[`y${nowYearStr}`][nowMonth].length)-1)/6)*6)
                {
                    alert("已经到底了啊(╯°Д°)╯︵┴┴┴┴");
                }
                else
                {
                    DMnowLine+=6;
                    test1.innerHTML=DMnowLine;
                    lineRefreshDm();
                }
                break;
            }
    }
}
function down()
{
    //alert('down');
    switch(theStatus)
    {
        case 2:
            {
                if(DMnowLine==0)
                {
                    alert("已经到顶了啊(╯°Д°)╯︵┴┴┴┴");
                }
                else
                {
                    DMnowLine-=6;
                    test1.innerHTML=DMnowLine;
                    lineRefreshDm();
                }
                break;
            }
    }
}
function left()
{
    //alert(`${status}`);
    switch(theStatus)
    {
        case 1:
            {
                
                if(nowMonth==11)
                {
                    if(nowYear==(BigMonth.born.year+3))
                    {
                        alert("没有更多啦(╯°Д°)╯︵┴┴┴┴");
                    }
                    else
                    {
                        nowMonth-=11;
                        nowYear+=1;
                        nowYearStr=String(nowYear);
                    }
                }
                else
                {
                    nowMonth+=1;
                }
                refreshBM();
                break;
            }
        case 2:
            {
                
                if(nowMonth==11)
                {
                    if(nowYear==(BigMonth.born.year+3))
                    {
                        alert("没有更多啦(╯°Д°)╯︵┴┴┴┴");
                    }
                    else
                    {
                        nowMonth-=11;
                        nowYear+=1;
                        nowYearStr=String(nowYear);
                    }
                }
                else
                {
                    nowMonth+=1;
                }
                refreshDM();
                break;
            }
        case 201:
            {
                break;
            }
        case 3:
            {
                if(nowMonth==11)
                {
                    if(nowYear==(BigMonth.born.year+3))
                    {
                        alert("没有更多啦(╯°Д°)╯︵┴┴┴┴");
                    }
                    else
                    {
                        nowMonth-=11;
                        nowYear+=1;
                        nowYearStr=String(nowYear);
                    }
                }
                else
                {
                    nowMonth+=1;
                }
                refreshBW();
                break;
            }
        default:alert('default');
    }
}
function right()
{
    //alert('right');
    switch(theStatus)
    {
        case 1:
            {
                if(nowMonth==0)
                {
                    if(nowYear==BigMonth.born.year)
                    {
                        alert("没有更多啦(╯°Д°)╯︵┴┴┴┴");
                    }
                    else
                    {
                        nowMonth+=11;
                        nowYear-=1;
                        nowYearStr=String(nowYear);
                    }
                }
                else
                {
                    nowMonth-=1;
                }
                refreshBM();
                break;
            }
        case 2:
            {
                if(nowMonth==0)
                {
                    if(nowYear==BigMonth.born.year)
                    {
                        alert("没有更多啦(╯°Д°)╯︵┴┴┴┴");
                    }
                    else
                    {
                        nowMonth+=11;
                        nowYear-=1;
                        nowYearStr=String(nowYear);
                    }
                }
                else
                {
                    nowMonth-=1;
                }
                refreshDM();
                break;
            }
        case 201:
            {
                break;
            }
        case 3:
            {
                if(nowMonth==0)
                {
                    if(nowYear==BigMonth.born.year)
                    {
                        alert("没有更多啦(╯°Д°)╯︵┴┴┴┴");
                    }
                    else
                    {
                        nowMonth+=11;
                        nowYear-=1;
                        nowYearStr=String(nowYear);
                    }
                }
                else
                {
                    nowMonth-=1;
                }
                refreshBW();
                break;
            }
        default:
            {
                alert("default");
            }
    }
}

//使用的时候很简单，只需要向下面这样调用即可
//其中下面监听的是整个DOM
//up, right, down, left为四个回调函数，分别处理上下左右的滑动事件
EventUtil.listenTouchDirection(document, true, up, right, down, left);

//PC端
document.onkeydown=keyDown;
function keyDown(event)
{
    var event=event||window.event;
    switch(event.keyCode)
    {
        case 37:case 65:right();break;
        case 39:case 68: left();break;
        case 38:case 87: down();break;
        case 40:case 83: up();break;
        case 107:addClick();break;
    }
    return false;
}



//————一堆按钮————————一堆按钮————————一堆按钮————————一堆按钮————————一堆按钮————————一堆按钮————————一堆按钮————————一堆按钮————————一堆按钮————

more.onclick=moreClick;
function moreClick()
{
    //alert("hello");
    switch(theStatus)
    {
        case 1:
            {
                //alert("hello");
                theStatus=2;
                refreshDM();
                break;
            }
        case 2:
            {
                theStatus=3;
                refreshBW();
                break;
            }
    }
}

less.onclick=lessClick;
function lessClick()
{
    switch(theStatus)
    {
        case 2:
            {
                theStatus=1;
                refreshBM();
                break;
            }
        case 3:
            {
                theStatus=2;
                refreshDM();
                break;
            }
    }
}

add.onclick=addClick;
function addClick()
{
    switch(theStatus)
    {
        case 2:
            {
                var str=prompt("来写一条详细计划吧！","");
                if(str!=null && str!="")
                {
                    var data={};
                    data.goal=str;
                    data.isOK=0;
                    DetailMonth[`y${nowYearStr}`][nowMonth].push(data);
                    localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));
                    DMnowLine=Math.floor(((DetailMonth[`y${nowYearStr}`][nowMonth].length)-1)/6)*6;
                    test1.innerHTML=DMnowLine;
                    lineRefreshDm();
                }
                break;
            }
        default:alert("default");
    }
}

del.onclick=delClick;
function delClick()
{
    
    switch(theStatus)
    {
        case 2:
            {
                if(DetailMonth[`y${nowYearStr}`][nowMonth].length==0)
                {
                    alert("这里啥计划都还没有啊(╯°Д°)╯︵┴┴┴┴");
                }
                else
                {
                    //alert("hello");
                    showoutside2.style.visibility="visible";
                    showoutside2.style.bottom=15+"px";
                    justshow2.innerHTML="点击计划以删除";
                    justshow3.innerHTML="点击回收按钮以返回";
                    var i;
                    for(i=0;i<=5;i++)
                    {
                        DMOKList[i].style.visibility="hidden";
                    }
                    more.style.visibility="hidden";
                    less.style.visibility="hidden";
                    add.style.visibility="hidden";
                    theStatus=201;
                }
                break;
            }
        case 201:
            {
                showoutside2.style.visibility="hidden";
                theStatus=2;
                var i;
                for(i=0;i<=5;i++)
                {
                    DMOKList[i].style.visibility="visible";
                }
                more.style.visibility="visible";
                less.style.visibility="visible";
                add.style.visibility="visible";
                lineRefreshDm();
                break;
            }
    }
}
//————————————————————————————以上均为全局变量——————————————————————————————————————————

//————BigMonth is here————————BigMonth is here————————BigMonth is here————————BigMonth is here————————BigMonth is here————————BigMonth is here————
function refreshBM()
{
    BMOK.style.visibility="visible";
    less.style.visibility="hidden";
    goalBM.style.visibility="visible";
    add.style.visibility="hidden";
    del.style.visibility="hidden";
    showoutside.style.visibility="hidden";
    showoutside2.style.visibility="hidden";
    var i;
    for(i=0;i<=5;i++)
    {
        DMOKList[i].style.visibility="hidden";
    }
    for(i=0;i<=5;i++)
    {
        goalDMList[i].style.visibility="hidden";
    }

    switch(nowMonth)
        {
            case 0:MT.innerHTML="January"+" "+String(nowYear);break;
            case 1:MT.innerHTML="February"+" "+String(nowYear);break;
            case 2:MT.innerHTML="March"+" "+String(nowYear);break;
            case 3:MT.innerHTML="April"+" "+String(nowYear);break;
            case 4:MT.innerHTML="May"+" "+String(nowYear);break;
            case 5:MT.innerHTML="June"+" "+String(nowYear);break;
            case 6:MT.innerHTML="July"+" "+String(nowYear);break;
            case 7:MT.innerHTML="August"+" "+String(nowYear);break;
            case 8:MT.innerHTML="September"+" "+String(nowYear);break;
            case 9:MT.innerHTML="October"+" "+String(nowYear);break;
            case 10:MT.innerHTML="November"+" "+String(nowYear);break;
            case 11:MT.innerHTML="December"+" "+String(nowYear);break;
        }
    

    if(BigMonth[`y${nowYearStr}`][nowMonth].goal)
    {
        goalBM.innerHTML=BigMonth[`y${nowYearStr}`][nowMonth].goal;
        if(BigMonth[`y${nowYearStr}`][nowMonth].isOK)
        {
            if(BigMonth[`y${nowYearStr}`][nowMonth].isOK==1)BMOK.src="pic/green.png";
            else BMOK.src="pic/grey.png";
        }
        else
        {
            BMOK.src="pic/grey.png";
        }
    }
    else
    {
        goalBM.innerHTML="这个月的计划是什么呢";
        BMOK.src="pic/grey.png";
    }
    
}


goalBM.onclick=goalBMClick;
function goalBMClick()
{
    var old=goalBM.innerHTML;
    var str=prompt("来写你的计划吧！",`${old}`);
    if(str!=null && str!="")
    {
        BigMonth[`y${nowYearStr}`][nowMonth].goal=str;
        localStorage.setItem("BigMonth",JSON.stringify(BigMonth));
        goalBM.innerHTML=str;
    }
}


BMOK.onclick=BMOKclick;
function BMOKclick()
{
    if(BigMonth[`y${nowYearStr}`][nowMonth].goal)
    {
        if(BigMonth[`y${nowYearStr}`][nowMonth].isOK)
        {
            if(BigMonth[`y${nowYearStr}`][nowMonth].isOK==1)
            {
                BigMonth[`y${nowYearStr}`][nowMonth].isOK=0;
                localStorage.setItem("BigMonth",JSON.stringify(BigMonth));
                BMOK.src="pic/grey.png";
            }
            else
            {
                BigMonth[`y${nowYearStr}`][nowMonth].isOK=1;
                localStorage.setItem("BigMonth",JSON.stringify(BigMonth));
                BMOK.src="pic/green.png";
            }
        }
        else
        {
            BigMonth[`y${nowYearStr}`][nowMonth].isOK=1;
            localStorage.setItem("BigMonth",JSON.stringify(BigMonth));
            BMOK.src="pic/green.png";
        }
    }
    else
    {
        alert("先把计划写上才能打勾啊(╯°Д°)╯︵┴┴┴┴");
    }


}
//————BigMonth is here————————BigMonth is here————————BigMonth is here————————BigMonth is here————————BigMonth is here————————BigMonth is here————






//————DetailMonth is here————————DetailMonth is here————————DetailMonth is here————————DetailMonth is here————————DetailMonth is here————
function refreshDM()
{
    BMOK.style.visibility="hidden";
    less.style.visibility="visible";
    more.style.visibility="visible";
    add.style.visibility="visible";
    del.style.visibility="visible";
    goalBM.style.visibility="hidden";
    MT.style.visibility="visible";
    var i;
    for(i=0;i<=5;i++)
    {
        goalBWList[i].style.visibility="hidden";
    }
    for(i=0;i<=5;i++)
    {
        goalBWDList[i].style.visibility="hidden";
    }
    for(i=0;i<=5;i++)
    {
        BWOKList[i].style.visibility="hidden";
    }
    DMnowLine=0;
    test1.innerHTML=DMnowLine;
    switch(nowMonth)
        {
            case 0:MT.innerHTML="January"+" "+String(nowYear);break;
            case 1:MT.innerHTML="February"+" "+String(nowYear);break;
            case 2:MT.innerHTML="March"+" "+String(nowYear);break;
            case 3:MT.innerHTML="April"+" "+String(nowYear);break;
            case 4:MT.innerHTML="May"+" "+String(nowYear);break;
            case 5:MT.innerHTML="June"+" "+String(nowYear);break;
            case 6:MT.innerHTML="July"+" "+String(nowYear);break;
            case 7:MT.innerHTML="August"+" "+String(nowYear);break;
            case 8:MT.innerHTML="September"+" "+String(nowYear);break;
            case 9:MT.innerHTML="October"+" "+String(nowYear);break;
            case 10:MT.innerHTML="November"+" "+String(nowYear);break;
            case 11:MT.innerHTML="December"+" "+String(nowYear);break;
        }
    lineRefreshDm();
}
function lineRefreshDm()
{
    if(DetailMonth[`y${nowYearStr}`][nowMonth].length==0)
    {
        showoutside.style.visibility="visible";
        showoutside.style.top=(height/2-40)+"px";
        justshow.innerHTML="点击右上角写一个具体目标吧！";
        var i;
        for(i=0;i<=5;i++)
        {
            goalDMList[i].style.visibility="hidden";
            DMOKList[i].style.visibility="hidden";
        }
    }
    else
    {
        showoutside.style.visibility="hidden";
        var i;
        var nowLine=DMnowLine;
        for(i=0;i<=5;i++,nowLine++)
        {
            if(nowLine>DetailMonth[`y${nowYearStr}`][nowMonth].length-1)
            {
                goalDMList[i].style.visibility="hidden";
                DMOKList[i].style.visibility="hidden";
            }
            else
            {
                goalDMList[i].style.visibility="visible";
                goalDMList[i].innerHTML=DetailMonth[`y${nowYearStr}`][nowMonth][nowLine].goal;
                
                DMOKList[i].style.visibility="visible";
                if(DetailMonth[`y${nowYearStr}`][nowMonth][nowLine].isOK)
                {
                    if(DetailMonth[`y${nowYearStr}`][nowMonth][nowLine].isOK==1)DMOKList[i].src="pic/green.png";
                    else DMOKList[i].src="pic/grey.png";
                }
                else
                {
                    DMOKList[i].src="pic/grey.png";
                }


            }
        }
    }
    
}

var i;
for(i=0;i<=5;i++)
{
    goalDMList[i].onclick=DMiClick(i);
    DMOKList[i].onclick=DMOKClick(i);
}

function DMiClick(i)
{
    var f=function()
    {
        switch(theStatus)
        {
            case 2:
                {
                    var old=goalDMList[i].innerHTML;
                    var str=prompt("来写你的计划吧！",`${old}`);
                    if(str!=null && str!="")
                    {
                        DetailMonth[`y${nowYearStr}`][nowMonth][DMnowLine+i].goal=str;
                        localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));
                        goalDMList[i].innerHTML=str;
                    }
                    break;
                }
            case 201:
                {
                    DetailMonth[`y${nowYearStr}`][nowMonth].splice(DMnowLine+i,1);
                    localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));
                    if(DetailMonth[`y${nowYearStr}`][nowMonth].length==DMnowLine&&DetailMonth[`y${nowYearStr}`][nowMonth].length!=0)
                    {
                        DMnowLine-=6;
                        test1.innerHTML=DMnowLine;
                    }
                    lineRefreshDm();
                    var ii;
                    for(ii=0;ii<=5;ii++)
                    {
                        DMOKList[ii].style.visibility="hidden";
                    }
                    break;
                }
        }
    }
    return f;
}


function DMOKClick(i)
{
    var f=function()
    {
        if(DetailMonth[`y${nowYearStr}`][nowMonth][DMnowLine+i].isOK)
        {
            if(DetailMonth[`y${nowYearStr}`][nowMonth][DMnowLine+i].isOK==1)
            {
                DetailMonth[`y${nowYearStr}`][nowMonth][DMnowLine+i].isOK=0;
                localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));
                DMOKList[i].src="pic/grey.png";
            }
            else
            {
                DetailMonth[`y${nowYearStr}`][nowMonth][DMnowLine+i].isOK=1;
                localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));
                DMOKList[i].src="pic/green.png";
            }
        }
        else
        {
            DetailMonth[`y${nowYearStr}`][nowMonth][DMnowLine+i].isOK=1;
            localStorage.setItem("DetailMonth",JSON.stringify(DetailMonth));
            DMOKList[i].src="pic/green.png";
        }
    }
    return f;
}


//————DetailMonth is here————————DetailMonth is here————————DetailMonth is here————————DetailMonth is here————————DetailMonth is here————



//————BigWeek is here————————BigWeek is here————————BigWeek is here————————BigWeek is here————————BigWeek is here————————BigWeek is here————
function pastYearDays(y)
{
	var days=0;
	days=365*(y-1)+Math.floor((y-1)/400)+Math.floor((y-1)/4)-Math.floor((y-1)/100);
	return days;
}

function yearDays(y,m)
{
	var i=0,days=0;
	for(i=1;i<m;i++)
	{
		switch(i)
		{
			case 1:case 3:case 5:case 7:case 8:case 10:case 12:days+=31;break;
			case 4:case 6:case 9:case 11:days+=30;break;
			case 2:if(y%400==0||(y%4==0&&y%100!=0)){days+=29;}else{days+=28;}break; 
		}
	}
	return days;
}

function Monthdays(y,m)
{
	switch(m)
		{
			case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;break;
			case 4:case 6:case 9:case 11:return 30;break;
			case 2:if(y%400==0||(y%4==0&&y%100!=0)){return 29;}else{return 28;}break; 
		}
}

function whatDay(y,m,d)  //1-7代表Monday-Sunday
{
    var day=((pastYearDays(y)+yearDays(y,m)+d)%7);
    if(day==0)return 7;
    else return day;
}

function howManyLines(y,m)
{
    var imaginaryDays=Monthdays(y,m)+whatDay(y,m,1)-1;
    var lines=Math.ceil(imaginaryDays/7);
    return lines;
}

function passXDays(y,m,d,X)//不超过一个月的小规模跳转
{
    var result={
        y:0,
        m:0,
        d:0
    }
    var monthday=Monthdays(y,m);
    if(d+X<=monthday)
    {
        result.y=y;
        result.m=m;
        result.d=d+X;
    }
    else
    {
        result.d=d+X-monthday;
        result.m=m+1;
        if(result.m==13)
        {
            result.m=1;
            result.y=y+1;
        }
        else
        {
            result.y=y;
        }
    }
    return result;
}

function refreshBW()
{
    more.style.visibility="hidden";
    add.style.visibility="hidden";
    del.style.visibility="hidden";
    showoutside.style.visibility="hidden";
    showoutside2.style.visibility="hidden";
    var i;
    for(i=0;i<=5;i++)
    {
        DMOKList[i].style.visibility="hidden";
    }
    for(i=0;i<=5;i++)
    {
        goalDMList[i].style.visibility="hidden";
    }
    switch(nowMonth)
    {
        case 0:MT.innerHTML="January"+" "+String(nowYear);break;
        case 1:MT.innerHTML="February"+" "+String(nowYear);break;
        case 2:MT.innerHTML="March"+" "+String(nowYear);break;
        case 3:MT.innerHTML="April"+" "+String(nowYear);break;
        case 4:MT.innerHTML="May"+" "+String(nowYear);break;
        case 5:MT.innerHTML="June"+" "+String(nowYear);break;
        case 6:MT.innerHTML="July"+" "+String(nowYear);break;
        case 7:MT.innerHTML="August"+" "+String(nowYear);break;
        case 8:MT.innerHTML="September"+" "+String(nowYear);break;
        case 9:MT.innerHTML="October"+" "+String(nowYear);break;
        case 10:MT.innerHTML="November"+" "+String(nowYear);break;
        case 11:MT.innerHTML="December"+" "+String(nowYear);break;
    }
    var len=BigWeek.Weeks.length;
    var nowMonth1to12=nowMonth+1;
    if((BigWeek.Weeks[len-1].s.y<nowYear)||((BigWeek.Weeks[len-1].s.y==nowYear)&&(BigWeek.Weeks[len-1].s.m<nowMonth1to12)))
    {
        for(i=len-1;(BigWeek.Weeks[i].t.y<nowYear)||((BigWeek.Weeks[i].t.y==nowYear)&&(BigWeek.Weeks[i].t.m<(nowMonth1to12+1)));i++)
        {
            if((BigWeek.Weeks[i].t.y==nowYear)&&(BigWeek.Weeks[i].t.m==nowMonth1to12)&&(BigWeek.Weeks[i].t.d==Monthdays(nowYear,nowMonth1to12)))break;
            var obj={};
            obj.s=passXDays(BigWeek.Weeks[i].s.y,BigWeek.Weeks[i].s.m,BigWeek.Weeks[i].s.d,7);
            obj.t=passXDays(BigWeek.Weeks[i].t.y,BigWeek.Weeks[i].t.m,BigWeek.Weeks[i].t.d,7);
            BigWeek.Weeks.push(obj);
        }
        localStorage.setItem("BigWeek",JSON.stringify(BigWeek));
    }
    BWlines=howManyLines(nowYear,(nowMonth+1));
    //alert(BWlines);
    switch(BWlines)
    {
        case 4:
            {
                for(i=0;i<=3;i++)
                {
                    //alert(i);
                    goalBWList[i].style.visibility="visible";
                    goalBWList[i].style.height=height6-10+"px";
                    goalBWList[i].style.top=(130+i*(height6-10))+"px";
                    goalBWDList[i].style.top=(130+i*(height6-10))+"px";
                    // BWOKList[i].style.visibility="visible";
                    // BWOKList[i].style.top=(130+i*(height6-10))+"px";
                }
                for(i=4;i<=5;i++)
                {
                    goalBWList[i].style.visibility="hidden";
                }
                break;
            }
        case 5:
            {
                for(i=0;i<=4;i++)
                {
                    //alert(i);
                    goalBWList[i].style.visibility="visible";
                    goalBWList[i].style.height=height6-20+"px";
                    goalBWList[i].style.top=(130+i*(height6-20))+"px";
                    goalBWDList[i].style.top=(130+i*(height6-20))+"px";
                }
                for(i=5;i<=5;i++)
                {
                    goalBWList[i].style.visibility="hidden";
                }
                break;
            }
        case 6:
            {
                for(i=0;i<=5;i++)
                {
                    //alert(i);
                    goalBWList[i].style.visibility="visible";
                    goalBWList[i].style.height=height6-20+"px";
                    goalBWList[i].style.top=(100+i*(height6-20))+"px";
                    goalBWDList[i].style.top=(100+i*(height6-20))+"px";
                }
                
                break;
            }
        default:alert("lines default!");
    }

    //我了个大草 加载这么简单？？？
    var nowPastDays=pastYearDays(nowYear)+yearDays(nowYear,nowMonth+1)+1;
    var delta=nowPastDays-BigWeek.FirstMondayDays;
    var index=Math.floor(delta/7);
    for(i=0;i<=BWlines-1;i++)
    {
        goalBWDList[i].style.visibility="visible";
        goalBWDList[i].innerHTML=`Week${i+1}\n${BigWeek.Weeks[index+i].s.m}.${BigWeek.Weeks[index+i].s.d}-${BigWeek.Weeks[index+i].t.m}.${BigWeek.Weeks[index+i].t.d}`;
        if(BigWeek.Weeks[index+i].goal)
        {
            goalBWList[i].innerHTML=BigWeek.Weeks[index+i].goal;
            BWOKList[i].style.visibility="visible";
            switch(BWlines)
            {
                case 6:
                    {
                        BWOKList[i].style.top=(100+i*(height6-20))+"px";
                        break;
                    }
                case 4:case 5:
                    {
                        BWOKList[i].style.top=(130+i*(height6-20))+"px";
                        break;
                    }
                default:
                    alert('BWOKDefault!');
            }

            if(BigWeek.Weeks[index+i].isOK)
            {
                if(BigWeek.Weeks[index+i].isOK==1)BWOKList[i].src="pic/green.png";
                else BWOKList[i].src="pic/grey.png";
            }
            else BWOKList[i].src="pic/grey.png";
        }
        else
        {
            goalBWList[i].innerHTML="Goal for this week is...";
            BWOKList[i].style.visibility="hidden";
        }
    }
    for(i=BWlines;i<=5;i++)
    {
        //goalBWDList[i].visibility="hidden"; 什么!@#$%^&*玩意！？
        goalBWDList[i].style.visibility="hidden";
        BWOKList[i].style.visibility="hidden";
    }
    //alert(delta);
    //alert(index);
}

var i;
for(i=0;i<=5;i++)
{
    goalBWList[i].onclick=BWClick(i);
    BWOKList[i].onclick=BWOKClick(i);
}

function BWClick(i)
{
    var f=function()
    {
        var nowPastDays=pastYearDays(nowYear)+yearDays(nowYear,nowMonth+1)+1;
        var delta=nowPastDays-BigWeek.FirstMondayDays;
        var index=Math.floor(delta/7);
        var old=goalBWList[i].innerHTML;
        var str=prompt("写下这周的目标吧！",`${old}`);
        if(str!=null && str!="")
        {
            BigWeek.Weeks[index+i].goal=str;
            localStorage.setItem("BigWeek",JSON.stringify(BigWeek));
            //goalBWList[i].innerHTML=str;
        }
        refreshBW();
    }
    return f;
}

function BWOKClick(i)
{
    var f=function()
    {
        var nowPastDays=pastYearDays(nowYear)+yearDays(nowYear,nowMonth+1)+1;
        var delta=nowPastDays-BigWeek.FirstMondayDays;
        var index=Math.floor(delta/7);
        if(BigWeek.Weeks[index+i].isOK)
        {
            if(BigWeek.Weeks[index+i].isOK==1)
            {
                BigWeek.Weeks[index+i].isOK=0;
                localStorage.setItem("BigWeek",JSON.stringify(BigWeek));
                BWOKList[i].src="pic/grey.png";
            }
            else
            {
                BigWeek.Weeks[index+i].isOK=1;
                localStorage.setItem("BigWeek",JSON.stringify(BigWeek));
                BWOKList[i].src="pic/green.png";
            }
        }
        else
        {
            BigWeek.Weeks[index+i].isOK=1;
            localStorage.setItem("BigWeek",JSON.stringify(BigWeek));
            BWOKList[i].src="pic/green.png";
        }
    }
    return f;
}

//————BigWeek is here————————BigWeek is here————————BigWeek is here————————BigWeek is here————————BigWeek is here————————BigWeek is here————