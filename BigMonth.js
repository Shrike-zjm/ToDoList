//test
var test1=document.getElementById("test1");
var height=window.screen.height;
test1.innerHTML=height;

//全局
var date=new Date();
var nowYear=date.getFullYear();//4位
var nowYearStr=String(nowYear);
var nowMonth=date.getMonth();//0-11
var nowDay=date.getDate();//1-31
var status=1;

var BigMonth;
var goalBM=document.getElementById("goalBM");
//      1       2           3       4
//  BigMonth DetailMonth   Week    Day

var MT=document.getElementById("MonthTitle");

//refreshBM(); 草 为什么要写在初始化之前呢

if(localStorage.getItem("first2"))
{
    alert("欢迎回来！");
    BigMonth=localStorage.getItem("BigMonth");
    BigMonth=JSON.parse(BigMonth);
    //alert(BigMonth[`y${nowYearStr}`][0].goal);
}
else
{
    localStorage.setItem("first2",233);
    alert("你好，新朋友！");
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
    // var i,j;
    // for(i=0;i<=3;i++)
    // {
    //     for(j=0;j<=11;j++)
    //     {
    //         BigMonth[`y${(year+i)}`][j].goal="None";
    //     }
    // }
    localStorage.setItem("BigMonth",JSON.stringify(BigMonth));
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
}
function down()
{
    //alert('down');
}
function left()
{
    //alert(`${status}`);
    switch(status)
    {
        case '1':
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
        default:alert('default');
    }
}
function right()
{
    //alert('right');
    switch(status)
    {
        case '1':
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
        
    }
    return false;
}


//————————————————————————————以上均为全局变量——————————————————————————————————————————
function refreshBM()
{
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
    }
    else
    {
        goalBM.innerHTML="为铁校服务";
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