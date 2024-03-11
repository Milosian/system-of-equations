function oblicz(){
  var a1 = document.getElementById("a1").value;
  var b1 = document.getElementById("b1").value;
  var c1 = document.getElementById("c1").value;
  var a2 = document.getElementById("a2").value;
  var b2 = document.getElementById("b2").value;
  var c2 = document.getElementById("c2").value;
  
  let w = a1*b1 -b1*a2;
  let wX = c1*b2 - b1*c2;
  let wY = a1*c2 - c1*a2;

  document.getElementById("w").innerHTML = "W = "+ w;
  document.getElementById("wX").innerHTML = "Wx = "+wX;
  document.getElementById("wY").innerHTML ="Wy = "+ wY;

  if(w != 0){
    document.getElementById("warunek1").innerHTML = "W jest różne od 0, więc posiada jedno rozwiązanie:";
    let x = wX/w;
    let y = wY/w;
    document.getElementById("x").innerHTML ="x = "+ x;
    document.getElementById("y").innerHTML ="y = "+ y;
  }else if(w == 0 && (wX != 0 || wY != 0)){
    document.getElementById("warunek2").innerHTML = "Nie posiada rozwiązań";
  }/* else if(a1 != 0  b1 != 0 && a2 != 0 && b2 != 0){
    document.write("Nieskończenie wiele rozwiązań")
  } */
}