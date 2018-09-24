function uncheckall(funID) {
    
if (funID==1){
    var items=document.getElementsByName('chkcategory');
     
        for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox')
            items[i].checked=false;
            
        }
       
        
  }
  if (funID==2){
    var items=document.getElementsByName('chkgender');
     
          for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox')
		items[i].checked=false;
        }
        
  }
  if (funID==3){
    var items=document.getElementsByName('chkdesigner');
     
          for(var i=0; i<items.length; i++){
		 if(items[i].type=='checkbox')
		 items[i].checked=false;
        }
      
  }

  if (funID==4){
    var items=document.getElementsByName('chkcondition');
     
        for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox')
		items[i].checked=false;
        }
        
  }

  if (funID==5){
    var items=document.getElementsByName('chkattributes');
     
        for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox')
		items[i].checked=false;
        }
        
  }


   if(funID==0){
    var items = document.querySelectorAll(".checkboxes");
    
        for(var i=0; i<items.length; i++){

		if(items[i].type=='checkbox')
		items[i].checked=false;
        }
       
        
  }

}

 


  
  
