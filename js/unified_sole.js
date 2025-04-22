// 统招专属JS文件

//让统招这个页面失去复制粘贴的效果
var body = document.body;
function ban(){
    return false;
}
body.onselectstart = ban;
body.oncontextmenu = ban;
body.oncopy = ban;
body.oncut = ban;
body.ondragstart = ban;


// 获取大盒子
var box = document.querySelector(".box");
//获取按钮的盒子
var btnBox = box.children[0];
//获取整个按钮里面的子元素
var btnObj = btnBox.children;
// 获取整个内容的盒子
var textBox = box.children[1];
//获取内容盒子里面的子元素
var boxObj = textBox.children;
//设置一个变量，用来存放当前的按钮的索引
var pic = 0;
//循环遍历添加点击事件以及做排他
for(var i = 0; i < btnObj.length; i++){
    btnObj[i].setAttribute("index",i);
    btnObj[i].onclick = function(){
        for(var j = 0; j < btnObj.length; j++){
            btnObj[j].removeAttribute("class");
            boxObj[j].removeAttribute("class");
        }
        this.className = "block";
        pic = this.getAttribute("index");
        boxObj[pic].className = "show";
    }
}

// 获取到需要单独修改表格样式的元素
var school = document.querySelector(".table");
//获取到该指定元素中的全部的tr标签
// 返回来的是一个数组
var first = school.getElementsByTagName("tr");
// 获取tr标签下的全部的第一个子元素
for(var i = 0; i < first.length; i++){
    //获取到每一个tr中的第一个元素
    // 这里的first要加索引，是因为上面获取到的是一个数组
    var k = first[i].children[0];
    // 给获取到的这些元素添加特殊的样式
    k.style.padding = "4px 10px";
}

//获取所有的H4标签
var h4 = document.getElementsByClassName("flod");
//获取所有的span标签
var span = document.getElementsByClassName("baomin");

var num = null;
for(var i = 0; i < h4.length; i++){
    // 自定义属性
    h4[i].setAttribute("index",i);
    // 给每一个h4标签添加事件和处理函数
    h4[i].addEventListener("click",function(){
         //判断span是隐藏的还是显示的
       num = this.getAttribute("index");
       //判断，当点击对应的按钮的时候，当前的按钮对应的span的索引显示
       if(span[num].style.display == "block"){
           span[num].style.display = "none";
       }else{
           span[num].style.display = "block";
       };
    },false);
    h4[i].addEventListener("mouseover",function(){
        this.style.cursor = "pointer";
    },false);
    h4[i].addEventListener("mouseout",function(){
        this.style.cursor = "";
    },false);
}

