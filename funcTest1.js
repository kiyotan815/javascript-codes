function fctn( n ) {
  if ( n == 0 ) {
    return (1);
  }else {
    return ( n * fctn( n - 1 ) );
  }
}

function fct() {
  var a = fctn ( tx1.value );
  tx2.value = a;
}
