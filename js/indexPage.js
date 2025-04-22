    window.onload = function(){
        //定义一个获取id的函数
        function my$(id) {
            return document.getElementById(id);
        }
        //获取最大的盒子
        var box = my$("box");
        //获取相框
        var inner = box.children[0];
        //获取相框的宽度
        var innerWidth = inner.offsetWidth;
        //获取ul
        var ulObj = inner.children[0];
        //获取ul里面的li
        var liObj = ulObj.children;
        //获取ol
        var olObj = inner.children[1];
        //获取焦点的盒子
        var arr = box.children[1];
        //获取左边焦点
        var left = my$("left");
        //获取右边焦点
        var right = my$("right");

        
        //设置一个全局变量
        pic = 0;
        //循环遍历的方式，给ol中注册按钮
        for(var i = 0; i < liObj.length; i++){
            //创建li标签
            var list = document.createElement("li");
            //追加到ol中
            olObj.appendChild(list);
            //设置自定义属性，作为索引存放
            list.setAttribute("index",i);
            //同时给每一个list添加鼠标点击事件
            list.onclick = clickHandle;
        }
        //在这里，设置默认的第一个按钮添加颜色
        olObj.children[0].className = "current";

        //设置无缝轮播图
        //克隆第一个li以及其属性
        //谁调用，就克隆谁
        ulObj.appendChild(ulObj.children[0].cloneNode(true));
        
        //自动播放
        var timeId = setInterval(chickHandle,5000);

        //鼠标进入box的时候
        box.onmouseover = function(){
            //焦点盒子显示
            arr.style.display = "block";
            clearInterval(timeId);
        }
        //鼠标移出box的时候
        box.onmouseout = function(){
            //焦点盒子隐藏
            arr.style.display = null;
            timeId = setInterval(chickHandle,5000);
        }
        
        //点击右边焦点按钮
        //封装右侧焦点事件
        function chickHandle(){
            //判断，如果pic的值是li的个数减1的时候，应该让ul的left值归零
            if(pic == liObj.length-1){
                //让pic变量的值等于0
                pic = 0;
                //并且，让ul的left值等于0
                ulObj.style.left = 0+ "px";
            }
            //上面执行完成后，pic++;
            pic ++;
            //执行动画
            animation(ulObj, -pic*innerWidth);
            //判断，如果当前的pic的值等于5（显示的是第6张 图片）
            //此时应该让按钮的第一个添加背景颜色
            if(pic == liObj.length-1){
                //按钮中的长度-1（4）的索引的按钮的背景颜色清除
                olObj.children[olObj.children.length-1].className = "";
                olObj.children[0].className = "current";
            }else{
                //按钮的排他功能
                for(var i = 0; i < olObj.children.length; i++){
                    olObj.children[i].removeAttribute("class");
                }
                //按钮中对应的pic索引的按钮颜色显示
                olObj.children[pic].className = "current";
            }
            

        }

        //点击右边焦点按钮
        right.onclick = chickHandle;
        //点击左边焦点按钮
        left.onclick = function(){
            //判断，如果pic等于0的时候
            if(pic == 0){
                //此时应该让pic等于5，等于最大的按钮个数
                pic = olObj.children.length;
                //并且让ul的left值等于相框的宽度程宇pic的值的结果
                //此处的值要加单位
                ulObj.style.left = -pic * innerWidth + "px";
            }
            //点击左边焦点按钮的时候，此时pic的值应该减
            pic --;
            //此时ul也应该有动画函数效果
            animation(ulObj, -pic * innerWidth);
            //此时需要设置小按钮的颜色，进行同步
            //按钮的排他功能
            for(var i = 0; i < olObj.children.length; i++){
                //清除所有的小按钮的颜色
                olObj.children[i].removeAttribute("class");
            }
            //按钮中对应的pic索引的按钮颜色显示
            olObj.children[pic].className = "current";
        }
        
        
        
        //list的鼠标点击事件处理函数
        function clickHandle(){
            for(var i = 0; i <olObj.children.length; i++){
                //清除所有的类样式
                olObj.children[i].removeAttribute("class");
            }
            //当前的这个li标签设置class类样式
            this.className = "current";
            //获取当前按钮的索引
            pic = this.getAttribute("index");
            //调用动画函数，
            animate(ulObj, -pic * innerWidth);
        }
    }
    //封装getScroll兼容性代码
    function getScroll(){
        //返回的是兼容性的属性
        return {
            /*
                left的值是，
                页面便宜的X轴，
                或者浏览器的html的向左卷曲的距离，
                或body向左卷曲的距离
                如果都不能获取，就让其获取的值为0，防止报错

            */
            left: window.pageXoffset || document.documentElement.scrollLeft ||
             document.body.scrollLeft || 0,
            top: window.pageYoffset || document.documentElement.scrollTop ||
            document.body.scrollTop || 0
        }
    }
    //如果页面向上卷曲的距离超过大于等于多少的时候，执行下面的代码
    //固定导航栏的
    //除了JS卷曲方法以外，CSS的定位模式中的粘性定位也可以解决这个问题。
    // window.onscroll = function(){
    //     if(getScroll().top >= my$("top").offsetHeight){
    //         my$("nav").style.position = "fixed";
    //         my$("nav").style.marginLeft = "260px";
    //         my$("nav").style.top = "8px";
    //         my$("nav").style.zIndex = 999;
    //         my$("box").style.marginTop = "60px";
    //     }else{
    //         my$("nav").style.position = "";
    //         my$("nav").style.marginLeft = "";
    //         my$("nav").style.top = "";
    //         my$("nav").style.zIndex = 0;
    //         my$("box").style.marginTop = "";
    //     }
    // }
    