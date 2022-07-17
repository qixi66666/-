$(function () {
    // alert(11);
    // 1. 按下回车   keyCode = 13   把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]

    // 每次页面一加载自动渲染加载数据
    load();
    $("#title").on("keydown", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作");
            } else {
                // 先读取本地存储原来的数据
                var local = getData();
                // console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                // 把这个数组local 存储给本地存储saveData(date)中的todelist  
                saveData(local);
                // 2. toDoList 本地存储数据渲染加载到页面
                load();
                $(this).val("");
                // 按下回车之后清空当前文本框
            }
        }
    });



    // 3. toDoList 删除操作
    // 因为li是动态生成的，所以通过on添加事件，给li里面的a标签添加事件委托
    $("ol, ul").on("click", "a", function () {
        // alert(11);
        // 先获取本地存储
        var data = getData();
        console.log(data);

        // 修改数据
        var index = $(this).attr("id");
        console.log(index);
        data.splice(index, 1);
        // 保存到本地存储
        saveData(data);
        // 重新渲染页面
        load();
    });



    // 4. toDoList 正在进行和已完成选项操作
    $("ol, ul").on("click", "input", function () {
        // alert(11);
        // 先获取本地存储的数据
        var data = getData();
        // 修改数据
        var index = $(this).siblings("a").attr("id");  // 点击获取对应a的索引号
        console.log(index);
        // data[?].done = ?
        data[index].done = $(this).prop("checked");   // 当前复选框的done属性修改为当前复选框的选定状态    固有属性通过prop获取，自定义属性通过attr获取
        console.log(data);

        // 保存到本地存储
        saveData(data);
        // 重新渲染页面
        load();
    });



    // 读取本地存储的数据 
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的  转换成对象JSON.parse();
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));  // 转换成字符串之后才能进行本地存储
    }



    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getData();
        console.log(data);
        // 遍历之前先要清空ol里面的元素内容，否则会出现两组重复的数据，因为页面加载之后会调用load   按回车之后又会调用一次load
        $("ol, ul").empty();  // 清空里面的元素
        var todoCount = 0; // 正在进行的个数
        var doneCount = 0; // 已经完成的个数
        // 遍历这个数据
        $.each(data, function (i, n) {
            // console.log(n);
            if (n.done) {
                // prepend 追加小li
                // n.title  每个li里面的内容显示出来
                // 根据done属性的状态判断，如果是未完成的事件追加到ul里面，已完成的事件追加到ol里面
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }

        });
        // span里面的值改成ul和ol里面分别存在的数量
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }

})