for (var i = 1; i <= 31; i++) {
    document.getElementById("day").innerHTML +=
        "<option value=" + i + ">" + i + "</option>"
}

for (var i = 1; i <= 12; i++) {
    document.getElementById("month").innerHTML +=
        "<option value=" + i + ">" + i + "</option>"
}

for (var i = 1980; i <= 2019; i++) {
    document.getElementById("year").innerHTML +=
        "<option value=" + i + ">" + i + "</option>";
}

var valueI = [1, 2, 3, 4, 5, 6, 7];
var textI = ["Chuyên đề Java", "CSDL Web", "Trí tuệ nhân tạo", "Công nghệ phần mềm", "Lập trình Windows", "Cấu trúc dữ liệu", "Lập trình hướng đối tượng"];

var valueO = [];
var textO = [];

function next() {
    var s = document.getElementById("subjectlist");
    var text = s.options[s.selectedIndex].text;
    var value = s.options[s.selectedIndex].value;

    document.getElementById("subjectchooose").innerHTML +=
        "<option value=" + value + ">" + text + "</option>";

    document.getElementById("subjectlist").innerHTML = "";

    var temp = "";

    for (var i = 0; i <= valueI.length - 1; i++) {
        if (value != valueI[i]) {
            document.getElementById("subjectlist").innerHTML +=
                "<option value=" + valueI[i] + ">" + textI[i] + "</option>";
        }
        else {
            temp = i;
            valueO.splice(0, 0, valueI[i]);
            textO.splice(0, 0, textI[i]);
        }
    }
    valueI.splice(temp, 1);
    textI.splice(temp, 1);
}

function back() {
    var s = document.getElementById("subjectchooose");
    var text = s.options[s.selectedIndex].text;
    var value = s.options[s.selectedIndex].value;

    document.getElementById("subjectlist").innerHTML +=
        "<option value=" + value + ">" + text + "</option>";

    document.getElementById("subjectchooose").innerHTML = "";

    var temp = "";

    for (var i = 0; i <= valueO.length - 1; i++) {
        if (value != valueO[i]) {
            document.getElementById("subjectchooose").innerHTML +=
                "<option value=" + valueO[i] + ">" + textO[i] + "</option>";
        }
        else {
            temp = i;
            valueI.splice(0, 0, valueO[i]);
            textI.splice(0, 0, textO[i]);
        }
    }
    valueO.splice(temp, 1);
    textO.splice(temp, 1);
}

function forward() {
    for (var i = valueI.length - 1; i >= 0; i--) {
        document.getElementById("subjectchooose").innerHTML +=
            "<option value=" + valueI[i] + ">" + textI[i] + "</option>";
        valueO.splice(0, 0, valueI[i]);
        textO.splice(0, 0, textI[i]);
        valueI.splice(i, 1);
        textI.splice(i, 1);
    }
    document.getElementById("subjectlist").innerHTML = "";
}

function backward() {
    for (var i = valueO.length - 1; i >= 0; i--) {
        document.getElementById("subjectlist").innerHTML +=
            "<option value=" + valueO[i] + ">" + textO[i] + "</option>";
        valueI.splice(0, 0, valueO[i]);
        textI.splice(0, 0, textO[i]);
        valueO.splice(i, 1);
        textO.splice(i, 1);
    }
    document.getElementById("subjectchooose").innerHTML = "";
}


function closenow() {
    document.getElementById("popup-bg").style.display = "none";
}

var codeI = [];
var nameI = [];
var genderI = [];
var dobI = [];
var subjectI = [];

function register() {
    var code = formMain.code.value;
    var name = formMain.name.value;
    var gender = formMain.gender.value;
    var day = formMain.day.value;
    var month = formMain.month.value;
    var year = formMain.year.value;

    if (!parseInt(code)) {
        alert("Mã số phải là kí tự số");
        return false;
    }

    for (var i = 0; i <= codeI.length - 1; i++) {
        if (code == codeI[i]) {
            alert("Mã số đăng ký này đã tồn tại");
            return false;
        }
    }

    if (code.length == 0 || name.length == 0 || gender.length == 0) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return false;
    }

    document.getElementById("table-body").innerHTML +=
        // "<a href='#' onclick='someFunction(); return false;'>" +
        // "<div class='col-md-3'>" + code + "</div>" +
        // "<div class='col-md-5'>" + name + "</div>" +
        // "<div class='col-md-2'>" + gender + "</div>" +
        // "<div class='col-md-2'>" + day + "/" + month + "/" + year + "</div>" 
        // "</a>";

        // "<tr onclick="window.location.href = 'detailMore(code)';"">" +
        // "<td>" + code + "</td>" +
        // "<td>" + "<a href='#' onclick='someFunction(); return false;'>" + name + "</a>" + "</td>" +
        // "<td>" + gender + "</td>" +
        // "<td>" + day + "/" + month + "/" + year + "</td>" +
        // "</tr>";

        "<a class='table-row' href='#' onclick='detailMore(" + code + ")'>" +
        "<div class='table-cell table-data'>" + code + "</div>" +
        "<div class='table-cell table-data'>" + name + "</div>" +
        "<div class='table-cell table-data'>" + gender + "</div>" +
        "<div class='table-cell table-data'>" + day + "/" + month + "/" + year + "</div>" +
        "</a>";

    var dob = day + "/" + month + "/" + year;
    var subject = "<br>";
    for (var i = 0; i <= textO.length - 1; i++) {
        subject += "&nbsp; &nbsp; &nbsp; - &nbsp;" + textO[i] + "<br>";
    }

    codeI.splice(0, 0, code);
    nameI.splice(0, 0, name);
    genderI.splice(0, 0, gender);
    dobI.splice(0, 0, dob);
    subjectI.splice(0, 0, subject);
}

function listview() {
    if (codeI[0] == null) {
        alert("Chưa có dữ liệu đăng ký học phần");
        return false;
    }

    document.getElementById("detail-here-partner").innerHTML = ""

    for (var i = codeI.length - 1; i >= 0; i--) {
        document.getElementById("detail-here-partner").innerHTML +=
            "<p> Mã số: <span id='popup-code'>" + codeI[i] + "</span> </p>" +
            "<p> Họ tên: <span id='popup-name'>" + nameI[i] + "</span> </p>" +
            "<p> Giới tính: <span id='popup-gender'>" + genderI[i] + "</span> </p>" +
            "<p> Ngày sinh: <span id='popup-dob'>" + dobI[i] + "</span> </p>" +
            "<p> Môn học đăng ký: <span id='popup-subject'>" + subjectI[i] + "</span> </p> <hr>";
    }

    document.getElementById("popup-bg").style.display = "block";
}

function detailMore(code) {
    document.getElementById("detail-here-partner").innerHTML =
        "<p> Mã số: <span id='popup-code'>" + "</span> </p>" +
        "<p> Họ tên: <span id='popup-name'>" + "</span> </p>" +
        "<p> Giới tính: <span id='popup-gender'>" + "</span> </p>" +
        "<p> Ngày sinh: <span id='popup-dob'>" + "</span> </p>" +
        "<p> Môn học đăng ký: <span id='popup-subject'>" + "</span> </p>";

    for (var i = 0; i <= codeI.length - 1; i++) {
        if (code == codeI[i]) {
            document.getElementById("popup-code").innerHTML = codeI[i];
            document.getElementById("popup-name").innerHTML = nameI[i];
            document.getElementById("popup-gender").innerHTML = genderI[i];
            document.getElementById("popup-dob").innerHTML = dobI[i];
            document.getElementById("popup-subject").innerHTML = subjectI[i];
        }
    }

    document.getElementById("popup-bg").style.display = "block";
}