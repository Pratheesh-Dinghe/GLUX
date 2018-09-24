function FillBilling(f) {
  //   alert(f);
  //   f.fname.value = "test3333";
  //   document.getElementById('fname').value = "test";
  //   if (f.billingtoo.checked == true) {
  //     f.fname.value = "test3333";
  //     f.billingname.value = f.shippingname.value;
  //     f.billingcity.value = f.shippingcity.value;
  //   }

  var cb1 = document.getElementById('chksameID');
  var shiname = document.getElementById('fname');
  var shiadd = document.getElementById('address');
  var shiadd1 = document.getElementById('address1');
  var shiadd2 = document.getElementById('address2');
  var shicountry = document.getElementById('country');
  var shipstcode = document.getElementById('pstcode');
  var shiCntnumber = document.getElementById('Cntnumber');

  var bilname = document.getElementById('fname1');
  var biladdr3 = document.getElementById('address3');
  var biladdr4 = document.getElementById('address4');
  var biladdr5 = document.getElementById('address5');
  var bilcountry = document.getElementById('country1');
  var bilpstcode = document.getElementById('pstcode1');
  var bilCntnumber = document.getElementById('Cntnumber1');


  if (cb1.checked) {

    bilname.value = shiname.value;
    biladdr3.value = shiadd.value;
    biladdr4.value = shiadd1.value;
    biladdr5.value = shiadd2.value;
    bilcountry.value = shicountry.value;
    bilpstcode.value = shipstcode.value;
    bilCntnumber.value = shiCntnumber.value;

  }
}
