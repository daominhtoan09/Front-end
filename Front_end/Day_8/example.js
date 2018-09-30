function test() {
    var name = prompt("Nhap Ten");

    var age = parseInt(prompt("nhap tuoi"));
    if (age < 18) {
        alert("tuoi nho");
        document.getElementById("age").value = age;
        document.getElementById("name").value = name;
    }



    if (isNaN(age)) {
        alert("Chua phai so");
        document.getElementById("age").value = age;
        document.getElementById("name").value = name;


    }
    else {
        if (age > 18) {
            alert("qua tuoi ");
            document.getElementById("age").value = age;
            document.getElementById("name").value = name;


        }

        else if (a > 13) {
            alert("1235");
            document.getElementById("age").value = age;
            document.getElementById("name").value = name;


        }
    }

}

function sw() {
    var x = parseInt(document.getElementById("nhap").value);
    console.log(x);

    if (isNaN(x)) {
        alert("nhap lai di ");
    }
    else {
        switch (x) {
            case 5:
            case 6:
                console.log("X la 6 hoac 5");

                break;
            case 7:
                console.log("di xa qua");
                break;
            default:
                console.log("Khong thoa man");
        }
    }

}

function random() {
    var randomNumber = Math.ceil(Math.random() * 1000);
    var inputRandom = prompt("Random number betwenen 1-1000");
    var result;
    if (randomNumber == inputRandom) {
        result = "you win";
    }
    else {
        result = "you losed"
    }
    document.getElementById("r1").value = randomNumber;
    document.getElementById("r1").value = inputNumber;

}

function getID() {

    var x = parseInt(document.getElementById("nhap").value);
    console.log(x);

    if (isNaN(x)) {
        alert("nhap lai di ");
    }
    else {
        switch (x) {
            case 5:
            case 6:
                console.log("X la 6 hoac 5");

                break;
            case 7:
                console.log("di xa qua");
                break;
            default:
                console.log("Khong thoa man");
        }
    }


}

function loopFor() {
    document.write('<table border="1">');
    for (var i = 0; i < 10; i++) {
        document.write("<tr>");
        for (var j = 0; j < 10; j++) {
            document.write("<td>" + i + " * " + j + "=" + i * j + "</td>")
            document.write("   ")
        }
        document.write("<br>");
        document.write("</tr>");
    }
    document.write("</table>");


}

function Test1() {
    var x = parseInt(prompt("Nhap vao so bat day"));
    var y = parseInt(prompt("Nhap vao so ket thuc"));
    console.log(x);
    console.log(y);
    var arr = new Array();
    var a = x;

    arr.push(x);

    while (a < y) {
        x = x + 1;
        arr.push(x);
        a++;
    }
    for (i in arr) {
        console.log(arr[i]);
    }
}


function nguyenTo() {
    var x = parseInt(prompt("nhap vao 1 so bat ki"));
    var count = parseInt(0);
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            count++;
        }
    }
    if (count == 0) {
        console.log("Day la so nguyen to");
    }
    else {
        console.log("Day khong la so nguyen to");

    }

}
function removeElement() {
    var x = parseInt(prompt("nhap so phan tu ban muon cho mang"));
    var arr = new Array();
    var count = 0;

    for (let i = 0; i <= x; i++) {
        arr.push(parseInt(prompt("nhap gia tri cho phan u")));
    }
    for (let i = 0; i <= x; i++) {
        console.log(arr[i]);
    }

    var elementrm = (prompt("nhap gia tri phan tu muon xoa"));
    var i = 0;
    for (let i in arr) {
        if (arr[i] == elementrm) {
            count++;
        }
    }

    do {


        if (arr[i] == elementrm) {

            arr.splice(i, 1);
            i--;
            count--;
        }
        else {
            i++;
        }

    } while (count > 0);


    for (let i in arr) {
        console.log(arr[i]);
    }

}


function mg() {
    var arr1 = new Array(1, 2, 3, 5);
    var arr2 = new Array(4, 5, 1);
    var arr3 = arr1.concat(arr2);
    arr3.forEach(function (element1) {
        console.log(element1);

    });
    var a = arr3.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    a.forEach(function (q) {
        console.log(q);
    });

}

function t1() {

    var dayso = ["1", "5", "5", "9"];
    var n = parseInt(prompt("Nhap So Can Xoa"));
    for (let i = 0; i < dayso.length; i++) {
        if (parseInt(dayso[i]) == n) {
            dayso.splice(i, 2);
        }
    }

    dayso.forEach(function (items) {
        console.log(items);

    });


}
function fTutorial() {
    var myVar = 100;
    function whoIsThis() {

        alert(this.myVar);
    }

    var obj1 = { myVar: 200, w: whoIsThis };
    var obj2 = { myVar: 300, w: whoIsThis };


    whoIsThis();
    whoIsThis.call(obj1);
    whoIsThis.apply(obj1);
    obj1.whoIsThis.call(window);
    whoIsThis.apply(obj2);

}

function sumAll() {
    var sum = 0;
    var i;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
function showNotifacation(name) {
    this.name = name;
    console.log(name);
    var name = "toan cuc";
    function test() {
        var name = " cuc bo";
        console.log(name);

    }
    test();
    console.log(name);

}
function multiClouse(a, b) {
    return {
        total: function () {
            return a + b;
        },
        dev: function () {
            return a * b;
        }

    }
}

function tangQua(qua) {
    console.log("da tang qua"+qua);
    
}
function moHopQua(tangQua) {
    var qua = "hoa";
    tangQua(qua);
    
}
function inThongTin(number,callback) {
    var Thongtin = "";
    if(number==0) Thongtin = "so 0";
    else if(number%2==0) Thongtin = "so CHAN";
    else Thongtin = "so le";
    if(number<0) Thongtin ="so am";
    else Thongtin = "so duong";
    callback(Thongtin);
}


