let display = document.getElementById("display");
function press(value) {
  display.value += value;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "math error";
  }
}
function clearDisplay() {
  display.value = "";
}
function backspace() {
  display.value = display.value.slice(0, -1);
}
