function showcheckbox (box) {
  
  if (box=="id1" || box=="id0") {  
     
    var chboxs = document.getElementsByName("chkcategory");
    var vis = "none";
    
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "inline-block";
          document.getElementById("id0").style.display = vis;
            break;
           
        }
    }
    document.getElementById(box).style.display = vis;
    document.getElementById("id0").style.display = vis;
 }
 if (box=="id2" || box=="id0"){  
    var chboxs = document.getElementsByName("chkgender");
    var vis = "none";
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "inline-block";
         document.getElementById("id0").style.display = vis;
            break;
        }
    }
    document.getElementById(box).style.display = vis;
    document.getElementById("id0").style.display = vis;
}

if (box=="id3" || box=="id0"){  
    var chboxs = document.getElementsByName("chkdesigner");
    var vis = "none";
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "inline-block";
         document.getElementById("id0").style.display = vis;
            break;
        }
    }
    document.getElementById(box).style.display = vis;
    document.getElementById("id0").style.display = vis;
}

if (box=="id4" || box=="id0"){  
    var chboxs = document.getElementsByName("chkcondition");
    var vis = "none";
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "inline-block";
         document.getElementById("id0").style.display = vis;
            break;
        }
    }
    document.getElementById(box).style.display = vis;
    document.getElementById("id0").style.display = vis;
}

if (box=="id5" || box=="id0"){  
    var chboxs = document.getElementsByName("chkattributes");
    var vis = "none";
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "inline-block";
         document.getElementById("id0").style.display = vis;
            break;
        }
    }
    document.getElementById(box).style.display = vis;
    document.getElementById("id0").style.display = vis;
}
}

