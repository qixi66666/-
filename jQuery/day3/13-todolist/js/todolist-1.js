$(function () {
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
    load();
    $("#title").on("keydown", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作");
            } else {
                var local = getData();
                local.push({ title: $(this).val(), done: false });
                saveData(local);
                load();
                $(this).val("");
            }
        }
    });



    // 删除
    $("ol, ul").on("click", "a", function () {
        var data = getData();
        var index = $(this).attr("id");
        console.log(index);
        data.splice(index, 1);
        saveData(data);
        load();
    });



    // 正在进行和已完成选项操作
    $("ol, ul").on("click", "input", function () {
        var data = getData();
        var index = $(this).siblings("a").attr("id");  // 点击获取对应a的索引号
        console.log(index);
        data[index].done = $(this).prop("checked");   // 当前复选框的done属性修改为当前复选框的选定状态    固有属性通过prop获取，自定义属性通过attr获取
        console.log(data);
        saveData(data);
        load();
    });



    // 读取本地 
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }


    // 保存本地
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));  // 转换成字符串之后才能进行本地存储
    }



    // 渲染加载
    function load() {
        var data = getData();
        console.log(data);
        $("ol, ul").empty();  // 清空里面的元素
        var todoCount = 0;
        var doneCount = 0;
        $.each(data, function (i, n) {
            // console.log(n);
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }

})