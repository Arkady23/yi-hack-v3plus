var req,id2="debug";

function ltri(c){
return c.replace(/^(\s)+/g,'')}

function rtri(c){
return c.replace(/(\s)+$/g,'')}

function ale(x){
  document.getElementById(id2).innerHTML=x;
}

function go(url2,j){
  if(req){req.abort()}
  req=null;
  try{req= new XMLHttpRequest()}catch(e){}
  if(req){
    var d="",r="",o
    try{o=document.getElementById(id2)}catch(e){}
    if(o){
      o.innerHTML="Data sending...";
      f=document.getElementsByTagName('FORM')[typeof(j)=="number"?j:0];
      if(typeof(f)=="object"){
        for(i=0; i<f.length ;i++){
          if(f[i].tagName=="INPUT"){
            t=f[i].type;
            if(t!="button"&&t!="reset"&&t!="submit"&&t!="file"&&t!="image"){
              if(t=="text"||t=="radio"){
                d+=f[i].value+"\t";
              }else{
                if(t=="checkbox"){
                  d+=(f[i].checked?"1":"")+"\t";
                }else{
                  r+=rand(f[i].value)+"\t";
                }
              }
            }
          }else{
            if(f[i].tagName=="TEXTAREA"){
              d+=f[i].value+"\t";
            }
          }
        }
      }
    }
    req.open("POST",url2,true);
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    req.onreadystatechange=go1;
    req.send(encodeURIComponent(d)+r);
  }
}

function go1(){
var o=document.getElementById(id2);
  try{
    switch(req.readyState){
    case 2:
      o.innerHTML="The request received. Wait...";
      break;
    case 3:
      o.innerHTML="Getting data...";
      break;
    case 4:
      if(req.status==200){
        o.innerHTML="";
        go2();
      }else{
        o.innerHTML="Couldn't get data: "+req.statusText;
      }
    }
  }catch(e){
    o.innerHTML="Error in the go2() function: "+e.name;
  }
}
