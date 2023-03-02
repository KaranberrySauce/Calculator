var erase = document.querySelector("#erase");
var clear = document.querySelector("#clear");
var equals = document.querySelector("#equals");

var btn_0 = document.querySelector("#zero");
var btn_1 = document.querySelector("#one");
var btn_2 = document.querySelector("#two");
var btn_3 = document.querySelector("#three");
var btn_4 = document.querySelector("#four");
var btn_5 = document.querySelector("#five");
var btn_6 = document.querySelector("#six");
var btn_7 = document.querySelector("#seven");
var btn_8 = document.querySelector("#eight");
var btn_9 = document.querySelector("#nine");
var btn_00 = document.querySelector("#doubleZero");
var btn_add = document.querySelector("#plus");
var btn_subtract = document.querySelector("#minus");
var btn_multiply = document.querySelector("#multiply");
var btn_divide = document.querySelector("#divide");
var btn_percent = document.querySelector("#percent");
var btn_decimal = document.querySelector("#decimal");

var write = document.querySelector("#type");
var result = document.querySelector("#result");

btn_0.onclick = () => {
  type_to(0);
};
btn_1.onclick = () => {
  type_to(1);
};
btn_2.onclick = () => {
  type_to(2);
};
btn_3.onclick = () => {
  type_to(3);
};
btn_4.onclick = () => {
  type_to(4);
};
btn_5.onclick = () => {
  type_to(5);
};
btn_6.onclick = () => {
  type_to(6);
};
btn_7.onclick = () => {
  type_to(7);
};
btn_8.onclick = () => {
  type_to(8);
};
btn_9.onclick = () => {
  type_to(9);
};
btn_00.onclick = () => {
  type_to("00");
};
btn_add.onclick = () => {
  type_to("+");
};
btn_subtract.onclick = () => {
  type_to("-");
};
btn_multiply.onclick = () => {
  type_to("*");
};
btn_divide.onclick = () => {
  type_to("/");
};
btn_percent.onclick = () => {
  type_to("%");
};
btn_decimal.onclick = () => {
  type_to(".");
};

document.onkeyup = (e) => {
  if (e.key == 0) {
    type_to(0);
  } else if (e.key == 1) {
    type_to(1);
  } else if (e.key == 2) {
    type_to(2);
  } else if (e.key == 3) {
    type_to(3);
  } else if (e.key == 4) {
    type_to(4);
  } else if (e.key == 5) {
    type_to(5);
  } else if (e.key == 6) {
    type_to(6);
  } else if (e.key == 7) {
    type_to(7);
  } else if (e.key == 8) {
    type_to(8);
  } else if (e.key == 9) {
    type_to(9);
  } else if (e.key == "+") {
    type_to("+");
  } else if (e.key == "-") {
    type_to("-");
  } else if (e.key == "*") {
    type_to("*");
  } else if (e.key == "/") {
    type_to("/");
  } else if (e.key == "%") {
    type_to("%");
  } else if (e.key == ".") {
    type_to(".");
  } else if (e.key == "Backspace") {
    erase_me();
  } else if (e.key == "Delete") {
    clear_me();
  } else if (e.key == "Enter") {
    equals_me();
  }
};

var type_to = (text) => {
  if (write_me.innerText == "") {
    write_me.innerText = text;
  } else if (write_me.innerText.length <= 23) {
    write_me.innerText += text;
  } else {
    alert("You can only type 24 characters");
  }
};
