function showshippingaddr(val) {

  var chboxs = document.getElementsByName("c5");
  var vis = "none";

  //   for (var i = 0; i < chboxs.length; i++) {

  if (chboxs[0].checked == true) {

    document.getElementById('billingaddrID').style.display = "block";
  } else {
    document.getElementById('billingaddrID').style.display = vis;
  }



}
