//定义一个获取id的函数
function my$(id) {
    return document.getElementById(id);
}
// //定义一个动画函数
function animate(element,target){
    //先清除一次定时器
    clearInterval(element.timeId);
    //设置定时器
    element.timeId = setInterval(function(){
        //获取任意元素当前的位置
        var current = element.offsetleft;
        //每一次移动多少
        var step = 10;
        //判断是走正数还是负数
        step = current < target ? step : -step;
        //每次移动后当前元素的位置
        current += step;
        //判断
        if(Math.abs(target - current) > Math.abs(step)){
            element.style.left = current + "px";
        }else{
            element.style.left = target + "px";
            clearInterval(element.timeId);
        }
    },300);
}
//封装动画函数
function animation(element,target){
    clearInterval(element.timeId);
    element.timeId = setInterval(function(){
        //获取元素当前的位置
        var current = element.offsetLeft;
        //每一次移动多少像素
        var step = 10;
        //判断是移动正数还是负数
        step = current < target ? step : -step;
        //移动一次之后当前元素的位置
        current += step;
        //判断目标位置减去当前位置的值是否大于每一次移动的距离
        if(Math.abs(target-current) > Math.abs(step)){
            element.style.left = current + "px";
        }else{
            element.style.left = target + "px";
            clearInterval(element.timeId);
        }
    },10);
}

