function renewtime(){
    var nowtimme = document.getElementsByClassName("nowtime");
    var time = +new Date;
    var da = new Date();
    var M = da.getMonth() + 1;
    var D = da.getDate();
    var H = da.getHours();
    H = H<10?"0"+H : H;
    var Min = da.getMinutes();
    Min = Min<10?"0"+Min : Min;
    var Now = M + "月" + D + "日 " + H + ":" + Min;   
    nowtimme[0].innerText = "当前时间是："+ Now;
}

function getchoose(){
    var nowlink = window.location.search;
    nowlink = nowlink.substr(1,nowlink.length-1)
    my = nowlink.split("&")
    var Mysys = {};
    for(var i=0; i<my.length; i++){
        index = my[i].indexOf("=")
        jian = my[i].substr(0,index)
        zhi = my[i].substr(index+1,my[i].length-index)
        Mysys[jian] = zhi
    }
    console.log(Mysys);
    return Mysys
}
function output(a){
    var choose = a["choose"];
    var R = a["R"];
    R = decodeURI(R);
    var imgsrc = document.getElementsByClassName("photo")[0].children[0].src;
    var b = imgsrc.substr(0,imgsrc.length-5)
    imgsrc = b + choose + ".jpg"
    document.getElementsByClassName("photo")[0].children[0].src = imgsrc;
    var names = ["黄狄壮", "张健华", "高望青", "叶小婷", "尤馨徵", "邓雪"]
    document.getElementsByClassName("myname")[0].innerHTML = names[choose - 1];
    f = document.getElementsByClassName("reason")[0].innerHTML;
    f = "原因：" + R;
    console.log(f);
    document.getElementsByClassName("reason")[0].innerHTML = "原因：" + R;
}

renewtime();
a = getchoose();
a = a == undefined? 1 : a;
console.log(a);
G = "%E5%A4%96%E5%87%BA%E7%9C%8B%E7%97%85%E8%A6%81";
// G = encodeURI(H);
N = decodeURI(G)
// console.log(H)
console.log(G)
console.log(N)

output(a)

console.log(window.innerHeight)
