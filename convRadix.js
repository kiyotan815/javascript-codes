function f1() {
  var r1 = document.getElementById("r1").value;
  var r2 = document.getElementById("r2").value;
  var v1 = document.getElementById("v1").value;
  var v = parseInt(v1, r1);
  document.getElementById("v2").value = v.toString(r2);
}
