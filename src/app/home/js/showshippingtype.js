function showshippingtype(val) {

  if (val === "Gstockregular") {
    document.getElementById('regID').style.visibility = 'visible';

    document.getElementById("txt").value = 'Regular (Delivered within 2-3 days)';
  } else if (val === "Gstockexpress") {
    document.getElementById('regID').style.visibility = 'visible';
    document.getElementById("txt").value = 'Express (Delivered within 1-2 days)';
  }

  if (val === "Gluxregular") {

    document.getElementById('GluxregID').style.visibility = 'visible';

    document.getElementById("txtID").value = 'Regular (Delivered within 2-3 days)';
  } else if (val === "Gluxexpress") {

    document.getElementById('GluxregID').style.visibility = 'visible';
    document.getElementById("txtID").value = 'Express (Delivered within 1-2 days)';
  }

}
