onEvent("button1", "click", function( ) {
  setText("text_area1", getNumber("text_input1") + getNumber("text_input2"));
});
onEvent("button2", "click", function( ) {
  setText("text_area1", getNumber("text_input1") - getNumber("text_input2"));
});
onEvent("button3", "click", function( ) {
  setText("text_area1", getNumber("text_input1") * getNumber("text_input2"));
});
onEvent("button4", "click", function( ) {
  setText("text_area1", getNumber("text_input1") / getNumber("text_input2"));
});
