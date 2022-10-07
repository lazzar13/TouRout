//broj dana
function update() {
    var select = document.getElementById('dani');
    var option = select.options[select.selectedIndex];
    console.log(option.value);
    return option.value;
  }
  //mesto
  function update1() {
    var select = document.getElementById('mesto');
    var option = select.options[select.selectedIndex];
    console.log(option.value);
    return option.value;
  }

  //pocetna lokacija
  function update2() {
    var select = document.getElementById('mesta');
    var option = select.options[select.selectedIndex];
    console.log(option.value);
    return option.value;
  }
  //zadrzavanje na mestima
  function update3() {
  var select = document.getElementById('zadrzavanje');
  var option = select.options[select.selectedIndex];
  console.log(option.value);
  return option.value;
}
//dnevno sati
function update4() {
  var select = document.getElementById('dnevno');
  var option = select.options[select.selectedIndex];
  console.log(option.value);
  return option.value;
}
//button scroll

  

//naslov druge strane
  function stampaj(){
    x=update();
    y=update1();
    return document.getElementById("pg2").innerHTML = "Odaberite mesta iz " + y + " za vas boravak od "+x+" dana!" 
  }
//check all
  function checkAll() {  
    var inputs = document.querySelectorAll('.pl');   
    for (var i = 0; i < inputs.length; i++) {   
        inputs[i].checked = true;   
    }}
//lista mesta za posecivanje
function getCheckboxValue() {  
  
  var l1 = document.getElementById("jedan");  
  var l2 = document.getElementById("dva");  
  var l3 = document.getElementById("tri");  
  var l4 = document.getElementById("cetiri");  
  var l5 = document.getElementById("pet");  
  var l6 = document.getElementById("sest");
  var l7 = document.getElementById("sedam");  
  var l8 = document.getElementById("osam");  
  var l9 = document.getElementById("devet");  
  var l10 = document.getElementById("deset");  
  var l11 = document.getElementById("jedanaest");  
  var l12 = document.getElementById("dvanaest");      
  let res=[];   
  if (l1.checked == true){  
    var pl1 = document.getElementById("jedan").value;  
    res.push(pl1);   
  }   
  if (l2.checked == true){  
    var pl2 = document.getElementById("dva").value;  
    res.push(pl2);   
  }  
  if (l3.checked == true){  
    var pl3 = document.getElementById("tri").value;  
    res.push(pl3);    
  }  
  if (l4.checked == true){  
    var pl4 = document.getElementById("cetiri").value;  
    res.push(pl4);   
  }  
  if (l5.checked == true){  
    var pl5 = document.getElementById("pet").value;  
    res.push(pl5);    
  }  
  if (l6.checked == true){  
    var pl6 = document.getElementById("sest").value;  
    res.push(pl6); 
    } 
if (l7.checked == true){  
        var pl7 = document.getElementById("sedam").value;  
        res.push(pl7); 
        } 
    if (l8.checked == true){  
            var pl8 = document.getElementById("osam").value;  
            res.push(pl8); 
            } 
            if (l9.checked == true){  
                var pl9 = document.getElementById("devet").value;  
                res.push(pl9); 
                } 
                if (l10.checked == true){  
                    var pl10 = document.getElementById("deset").value;  
                    res.push(pl10); 
                    } 
                    if (l11.checked == true){  
                        var pl11 = document.getElementById("jedanaest").value;  
                        res.push(pl11); 
                        } 
                        if (l12.checked == true){  
                            var pl12 = document.getElementById("dvanaest").value;  
                            res.push(pl12); 
                            } 
    
return res;  
}
//check prevoz
function sopstveniPrevoz(){
  var prevoz = document.getElementById("prevoz");
  if(prevoz.checked==true){
    return true;
  }
  else{
    return false;
  }
}
function sopstveniPrevoz1(){
  var prevoz = document.getElementById("prevoz1");
  if(prevoz.checked==true){
    return true;
  }
  else{
    return false;
  }
}
function sopstveniPrevoz2(){
  var prevoz = document.getElementById("prevoz2");
  if(prevoz.checked==true){
    return true;
  }
  else{
    return false;
  }
}

//baza sa razdaljinama lokacija od pocetne lokacije
let daljina_p=[
/*0 Blaha*/    [['bsl',1.6],['mus',2],['mrkt',2.7],['bath',2.9],['prlm',3.1],['trg',3.3],['ctd',3.5],['art',3.8],['buda',4.2],['fsh',5.6],['gat',5.7],['mrg',8.0]],
/*1 Keleti*/    [['trg',2.2],['art',2.5],['bsl',2.3],['mus',2.9],['bath',4.1],['prlm',4.1],['mrkt',4.2],['ctd',4.7],['buda',5.2],['fsh',6.6],['gat',7.2],['mrg',7.4]],
/*2 Deak*/    [['bsl',1.1],['mus',1.2],['prlm',1.3],['mrkt',2.1],['bath',2.1],['trg',3.4],['ctd',3.5],['art',3.7],['buda',4],['fsh',5.3],['gat',5.8],['mrg',7.5]],
/*3 Nepliget*/    [['mus',3.3],['mrkt',4],['bath',4.5],['bsl',4.6],['trg',5.8],['art',6.1],['prlm',6.1],['ctd',6.3],['gat',6.5],['buda',8],['fsh',9.3],['mrg',10.5]],
]
//random niz c=1,2,3,4,5
//baza sa razdaljinama od lokacije do lokacije
let daljina_l=[
/*0 buda*/ [['fsh',0.6],['bath',3.3],['bsl',3.5],['mrg',3.7],['ctd',3.9],['mrkt',4],['mus',4.2],['prlm',4.9],['gat',7.1],['trg',7.2],['art',7.5]],
/*1 prlm*/ [['bsl',1.5],['mrkt',2.4],['mrg',2.5],['mus',2.7],['bath',2.8],['trg',3.4],['art',3.7],['ctd',4.3],['buda',4.9],['fsh',5.2],['gat',6.5]],
/*2 bsl*/  [['prlm',1.5],['mus',1.5],['trg',2.4],['bath',2.4],['mrkt',2.7],['art',2.7],['buda',3.5],['ctd',3.8],['fsh',5.6],['mrg',6.3],['gat',6.6]],
/*3 fsh*/  [['buda',0.6],['mrg',3.5],['bath',3.6],['ctd',4.1],['mrkt',4.3],['mus',4.5],['gat',5.2],['prlm',5.2],['bsl',5.6],['trg',6.3],['art',6.5]],
/*4 mrkt*/  [['mus',0.5],['bath',1.4],['prlm',2.4],['bsl',2.7],['ctd',3.2],['buda',4],['trg',4.1],['fsh',4.3],['art',4.4],['mrg',5],['gat',5.1]],
/*5 ctd*/  [['bath',0.6],['mus',1.6],['mrkt',3.2],['bsl',3.8],['buda',3.9],['fsh',4.1],['prlm',4.3],['art',5],['trg',5],['mrg',5.5],['gat',5.7]],
/*6 art*/  [['trg',0.1],['bsl',2.7],['prlm',3.7],['mus',3.7],['mrkt',4.4],['mrg',4.6],['bath',4.8],['ctd',5],['fsh',6.5],['gat',7],['buda',7.5]],
/*7 trg*/  [['art',0.1],['bsl',2.4],['prlm',3.4],['mus',4],['mrkt',4.1],['mrg',4.7],['bath',4.8],['ctd',5],['fsh',6.3],['gat',7.1],['buda',7.2]],
/*8 bath*/  [['ctd',0.6],['mrkt',1.4],['mus',2.2],['bsl',2.4],['gat',2.8],['prlm',2.8],['buda',3.3],['fsh',3.6],['art',4.8],['trg',4.8],['mrg',5.5]],
/*9 mus*/  [['mrkt',0.5],['bsl',1.5],['ctd',1.6],['bath',2.2],['prlm',2.7],['art',3.7],['gat',3.7],['trg',4],['buda',4.2],['fsh',4.5],['mrg',5]],
/*10 mrg*/  [['prlm',2.5],['fsh',3.5],['art',4.6],['trg',4.7],['mus',5],['mrkt',5],['bath',5.5],['ctd',5.5],['bsl',6.3],['gat',8],['buda',9]],
/*11 gat*/  [['bath',2.8],['mus',3.7],['mrkt',5.1],['fsh',5.2],['ctd',5.7],['prlm',6.5],['bsl',6.6],['art',7],['trg',7.1],['buda',7.1],['mrg',8]],
]
//nazivi
let nazivi_l=[

  [['mus','National Museum'],['fsh',"Fisherman's Bastion"],['bath','Thermal Bath'],['bsl',"St. Stephen's Basilica"],['mrg','Margaret Island'],['ctd','Gellért Hill & citadela'],['mrkt','Central Market Hall'],['prlm','Parlament'],['gat','Kopaszi gat'],['trg',"Heroes' Square"],['art','Museum of Fine Arts'],['buda','Buda Castle']]
]
//racuna razdaljine
function test(){
    polazno=update2();
    c=getCheckboxValue();
    var nazad=[];
    if(polazno==0){
      for(var i=11;i>-1;i--){
        for(var j=0;j<c.length;j++){
        if(c[j]==daljina_p[0][i][0]){
          var nazad=[daljina_p[0][i][1],daljina_p[0][i][0],i]; 
        }}
      }}
      if(polazno==1){
        for(var i=11;i>-1;i--){
          for(var j=0;j<c.length;j++){
          if(c[j]==daljina_p[1][i][0]){
            var nazad=[daljina_p[1][i][1],daljina_p[1][i][0],i];
            
          }}
        }}
        if(polazno==2){
          for(var i=11;i>-1;i--){
            for(var j=0;j<c.length;j++){
            if(c[j]==daljina_p[2][i][0]){
              var nazad=[daljina_p[2][i][1],daljina_p[2][i][0],i];
              
            }}
          }}
          if(polazno==3){
            for(var i=11;i>-1;i--){
              for(var j=0;j<c.length;j++){
              if(c[j]==daljina_p[3][i][0]){
                var nazad=[daljina_p[3][i][1],daljina_p[3][i][0]],i;
                
                }
              }}
            } 
      var gas=nazad[1];
      var str=[];
      var t=[];
      var y=[];
      //lokacije minus prva lokacija
      for(var i=0;i<c.length;i++){
        if(c[i]!=nazad[1]){
          t.push(c[i]);
        }
      }
      for(var i=0;i<c.length;i++){
        if(c[i]!=nazad[1]){
          y.push(c[i]);
        }
      }
      
      for(var z=0;z<t.length;z++){
          if(z!=0){y=o;}
         if(gas=='buda'){
          for(var i=10;i>-1;i--){
          for(var j=0;j<y.length;j++){
            if(y[j]==daljina_l[0][i][0]){
              var k=y[j];
              str[z]=[daljina_l[0][i][1],daljina_l[0][i][0]];}}}}
          else if(gas=='prlm'){
            for(var i=10;i>-1;i--){
            for(var j=0;j<y.length;j++){
              if(y[j]==daljina_l[1][i][0]){
                var k=y[j];
                str[z]=[daljina_l[1][i][1],daljina_l[1][i][0]];}}}}
            else if(gas=='bsl'){
              for(var i=10;i>-1;i--){
              for(var j=0;j<y.length;j++){
                if(y[j]==daljina_l[2][i][0]){
                  var k=y[j];
              str[z]=[daljina_l[2][i][1],daljina_l[2][i][0]];}}}}
              else if(gas=='fsh'){
                for(var i=10;i>-1;i--){
                for(var j=0;j<y.length;j++){
                  if(y[j]==daljina_l[3][i][0]){
                    var k=y[j];
                str[z]=[daljina_l[3][i][1],daljina_l[3][i][0]];}}}}
                else if(gas=='mrkt'){
                  for(var i=10;i>-1;i--){
                  for(var j=0;j<y.length;j++){
                    if(y[j]==daljina_l[4][i][0]){
                      var k=y[j];
                      str[z]=[daljina_l[4][i][1],daljina_l[4][i][0]];}}}}
                  else if(gas=='ctd'){
                    for(var i=10;i>-1;i--){
                    for(var j=0;j<y.length;j++){
                      if(y[j]==daljina_l[5][i][0]){
                          var k=y[j];
                          str[z]=[daljina_l[5][i][1],daljina_l[5][i][0]];}}}}
                    else if(gas=='art'){
                      for(var i=10;i>-1;i--){
                      for(var j=0;j<y.length;j++){
                        if(y[j]==daljina_l[6][i][0]){
                          var k=y[j];
                          str[z]=[daljina_l[6][i][1],daljina_l[6][i][0]];}}}}
                      else if(gas=='trg'){
                        for(var i=10;i>-1;i--){
                        for(var j=0;j<y.length;j++){
                          if(y[j]==daljina_l[7][i][0]){
                            var k=y[j];
                          str[z]=[daljina_l[7][i][1],daljina_l[7][i][0]];}}}}
                        else if(gas=='bath'){
                          for(var i=10;i>-1;i--){
                          for(var j=0;j<y.length;j++){
                            if(y[j]==daljina_l[8][i][0]){
                              var k=y[j];
                              str[z]=[daljina_l[8][i][1],daljina_l[8][i][0]];}}}}
                          else if(gas=='mus'){
                            for(var i=10;i>-1;i--){
                            for(var j=0;j<y.length;j++){
                              if(y[j]==daljina_l[9][i][0]){
                                var k=y[j];
                                str[z]=[daljina_l[9][i][1],daljina_l[9][i][0]];}}}}
                            else if(gas=='mrg'){
                              for(var i=10;i>-1;i--){
                              for(var j=0;j<y.length;j++){
                                if(y[j]==daljina_l[10][i][0]){
                                  var k=y[j];
                                  str[z]=[daljina_l[10][i][1],daljina_l[10][i][0]];}}}}
                              else if(gas=='gat'){
                                for(var i=10;i>-1;i--){
                                for(var j=0;j<y.length;j++){
                                  if(y[j]==daljina_l[11][i][0]){
                                    var k=y[j];
                                    str[z]=[daljina_l[11][i][1],daljina_l[11][i][0]];}}}}
                                gas=k;
                                var o=[]    
                                for(var i=0;i<y.length;i++){
                                  if(y[i]!=gas){
                                    o.push(y[i]);
                                  }
                                }
                              
                              }
                    
                    return(str);
}
function polz(){
    polazno=update2();
    c=getCheckboxValue();
    var nazad=[];
    if(polazno==0){
      for(var i=11;i>-1;i--){
        for(var j=0;j<c.length;j++){
        if(c[j]==daljina_p[0][i][0]){
          var nazad=[daljina_p[0][i][1],daljina_p[0][i][0],i]; 
        }}
      }}
      if(polazno==1){
        for(var i=11;i>-1;i--){
          for(var j=0;j<c.length;j++){
          if(c[j]==daljina_p[1][i][0]){
            var nazad=[daljina_p[1][i][1],daljina_p[1][i][0],i];
            
          }}
        }}
        if(polazno==2){
          for(var i=11;i>-1;i--){
            for(var j=0;j<c.length;j++){
            if(c[j]==daljina_p[2][i][0]){
              var nazad=[daljina_p[2][i][1],daljina_p[2][i][0],i];
              
            }}
          }}
          if(polazno==3){
            for(var i=11;i>-1;i--){
              for(var j=0;j<c.length;j++){
              if(c[j]==daljina_p[3][i][0]){
                var nazad=[daljina_p[3][i][1],daljina_p[3][i][0]],i;
                
                }
              }}
            } 
            var g=[];
            g.push(nazad[0]);
            g.push(nazad[1]);
    return (g);
          
}

function racun(){


}
function final(){
  //auto
  if(sopstveniPrevoz()==true){
    var x=[]
  var y=[]
  var y=polz();
  if(update2()==0){
  var polaznaLokacija='Blaha'}
  else if(update2()==1)
  {
    var polaznaLokacija='Keleti'}
    else if(update2()==2)
  {
    var polaznaLokacija='Deak'}
    else if(update2()==3)
  {
  var polaznaLokacija='Nepliget'}
  console.log('polazno'+y)
  var x=test();
  console.log('lokacije'+x)
  var gasenje=x.length;
  var br=update();
  console.log('br dana '+br)
  var t=update3();
  console.log('vreme '+t)
  var z=update4();
  var z=z*60;
  console.log('obilazak'+z)
  var counter=1
  var vr=0;
  console.log('counter ='+counter)
    var nesto='auto';
    var sop='automobil';
    var sum=0;
   if(y!=null&&x.length==0){
    printime(nesto,sop,counter);
    printtPolz(polaznaLokacija,sop);
    var pr=Number(y[0])/0.45
    alert(pr);
    printtPrvaLokacija(y[1],pr,sop);
    sum=pr+Number(t);
    printSumu(sum,sop)

   } 
  while(counter<=br&&x.length>0){
    sum=0
    printime(nesto,sop,counter);
    printtPolz(polaznaLokacija,sop);
    printtPrvaLokacija(y[1],y[0]/0.45,sop);
    console.log('dan je '+counter)
  
    for(var i=0;i<x.length;i++){
      if(i==0){sum=sum+Number(y[0])/0.45+Number(t);
      console.log('od '+polaznaLokacija+' do ' +y[1] +' je print '+sum.toFixed(2)+'minuta')}
      
      prom=i;
      if(i+1<x.length){
      var prom=i+1;}
      vr=Number(x[i][0])/0.45;
      console.log('vreme od '+x[i][1]+' do '+x[prom][1]+' je ' +vr.toFixed(2)+' minuta')
      sum=sum+Number(vr)+5+Number(t);if(sum<z){
        printt(x[i][1],vr,i,sop)
        gasenje--;
        }
      else{
        gasenje--;
        console.log('suma je veca')
        sum=sum-Number(vr)-5-Number(t);
        console.log('ukupna suma'+ counter +' dana je '+sum)
        var f=[];
        for(var g=i;g<x.length;g++){
            f.push(x[g][1]);
        }
        x=f;
        console.log(x);
        console.log(y)
        console.log(polz1(x));
        var misko=polz1(x)
        
        if(x.length==1&&counter+1<br){
          printtPolz(polaznaLokacija,sop);
          printtPrvaLokacija(misko[1],misko[0]/0.45,sop);
          printSumu(sum,sop)
        }
        console.log(lokc(misko,x));
        x=lokc(misko,x);
        y=misko;
        break;
      }
    }
    printSumu(sum,sop)
    
    if(gasenje==0){console.log('prekid');break;}
    counter++;
    
    sop=sop+'1';
  }}
  //bicikla to be done
  if(sopstveniPrevoz1()==true){
    var x=[]
  var y=[]
  var y=polz();
  if(update2()==0){
  var polaznaLokacija='Blaha'}
  else if(update2()==1)
  {
    var polaznaLokacija='Keleti'}
    else if(update2()==2)
  {
    var polaznaLokacija='Deak'}
    else if(update2()==3)
  {
  var polaznaLokacija='Nepliget'}
  console.log('polazno'+y)
  var x=test();
  console.log('lokacije'+x)
  var gasenje=x.length;
  var br=update();
  console.log('br dana '+br)
  var t=update3();
  console.log('vreme '+t)
  var z=update4();
  var z=z*60;
  console.log('obilazak'+z)
  var counter=1
  var vr=0;
  console.log('counter ='+counter)
    var nesto='biciklu';
    var sop='bajs';
    var sum=0;
    if(y!=null&&x.length==0){
      printime(nesto,sop,counter);
      printtPolz(polaznaLokacija,sop);
      var pr=y[0]/0.25
      printtPrvaLokacija(y[1],pr,sop);
      sum=pr+Number(t);
      printSumu(sum,sop)
  
     } 
  while(counter<=br&&x.length>0){
    sum=0;
    printime(nesto,sop,counter);
    printtPolz(polaznaLokacija,sop);
    printtPrvaLokacija(y[1],y[0]/0.25,sop);
    for(var i=0;i<x.length;i++){
      if(i==0){sum=sum+y[0]/0.25+Number(t);
      console.log('od '+polaznaLokacija+' do ' +y[1] +' je print '+sum.toFixed(2)+'minuta')}
      
      prom=i;
      if(i+1<x.length){
      var prom=i+1;}
      vr=x[i][0]/0.25;
      console.log('vreme od '+x[i][1]+' do '+x[prom][1]+' je ' +vr.toFixed(2)+' minuta')
      sum=sum+Number(vr)+1+Number(t);
      if(sum<z){
        printt(x[i][1],vr,i,sop)
        gasenje--;
        }
      
      else{
        gasenje--;
        console.log('suma je veca')
        sum=sum-Number(vr)-1-Number(t);
        console.log('ukupna suma'+ counter +' dana je '+sum)
        var f=[];
        for(var g=i;g<x.length;g++){
            f.push(x[g][1]);
        }
        x=f;
        console.log(x);
        console.log(y)
        console.log(polz1(x));
        var misko=polz1(x)
        if(x.length==1&&counter+1<br){
          printtPolz(polaznaLokacija,sop);
          printtPrvaLokacija(misko[1],misko[0]/0.25,sop);
          printSumu(sum,sop)
        }
        
        
        console.log(lokc(misko,x));
        x=lokc(misko,x);
        y=misko;
        break;
        
      }
      console.log('DASdasdsada'+gasenje)
      
      

    }printSumu(sum,sop)
    if(gasenje==0){break;}
    counter++;
    
    sop=sop+'1';
  }}
  //trotinet
  if(sopstveniPrevoz2()==true){
    var x=[]
  var y=[]
  var y=polz();
  if(update2()==0){
  var polaznaLokacija='Blaha'}
  else if(update2()==1)
  {
    var polaznaLokacija='Keleti'}
    else if(update2()==2)
  {
    var polaznaLokacija='Deak'}
    else if(update2()==3)
  {
  var polaznaLokacija='Nepliget'}
  console.log('polazno'+y)
  var x=test();
  console.log('lokacije'+x)
  var gasenje=x.length;
  var br=update();
  console.log('br dana '+br)
  var t=update3();
  console.log('vreme '+t)
  var z=update4();
  var z=z*60;
  console.log('obilazak'+z)
  var counter=1
  var vr=0;
  console.log('counter ='+counter)
    var nesto='trotinet';
    var sop='trot';
    var sum=0;
    if(y!=null&&x.length==0){
      printime(nesto,sop,counter);
      printtPolz(polaznaLokacija,sop);
      var pr=y[0]/0.2
      printtPrvaLokacija(y[1],pr,sop);
      sum=pr+Number(t);
      printSumu(sum,sop)
  
     } 
  while(counter<=br&&x.length>0){
    sum=0;
    printime(nesto,sop,counter);
    printtPolz(polaznaLokacija,sop);
    printtPrvaLokacija(y[1],y[0]/0.2,sop);
    console.log('dan je '+counter)
    
    for(var i=0;i<x.length;i++){
      if(i==0){sum=sum+y[0]/0.2+Number(t);
      console.log('od '+polaznaLokacija+' do ' +y[1] +' je print '+sum.toFixed(2)+'minuta')}
      
      prom=i;
      if(i+1<x.length){
      var prom=i+1;}
      vr=x[i][0]/0.2;
      console.log('vreme od '+x[i][1]+' do '+x[prom][1]+' je ' +vr.toFixed(2)+' minuta')
      
      sum=sum+Number(vr)+1+Number(t);
      if(sum<z){
        printt(x[i][1],vr,i,sop)
        gasenje--;
        }
      
      else{
        gasenje--;
        console.log('suma je veca')
        sum=sum-Number(vr)-1-Number(t);
        console.log('ukupna suma'+ counter +' dana je '+sum)
        var f=[];
        for(var g=i;g<x.length;g++){
            f.push(x[g][1]);
        }
        x=f;
        console.log(x);
        console.log(y)
        console.log(polz1(x));
        var misko=polz1(x)
        if(x.length==1&&counter+1<br){
          printtPolz(polaznaLokacija,sop);
          printtPrvaLokacija(misko[1],misko[0]/0.2,sop);
          printSumu(sum,sop)
        }
        
        
        console.log(lokc(misko,x));
        x=lokc(misko,x);
        y=misko;
        break;
        
      }
      console.log('DASdasdsada'+gasenje)
      
      

    }printSumu(sum,sop)
    if(gasenje==0){break;}
    counter++;
    
    sop=sop+'1';
  }}
  //peske
  if(1>0){
    var x=[]
  var y=[]
  var y=polz();
  if(update2()==0){
  var polaznaLokacija='Blaha'}
  else if(update2()==1)
  {
    var polaznaLokacija='Keleti'}
    else if(update2()==2)
  {
    var polaznaLokacija='Deak'}
    else if(update2()==3)
  {
  var polaznaLokacija='Nepliget'}
  console.log('polazno'+y)
  var x=test();
  console.log('lokacije'+x)
  var gasenje=x.length;
  var br=update();
  console.log('br dana '+br)
  var t=update3();
  console.log('vreme '+t)
  var z=update4();
  var z=z*60;
  console.log('obilazak'+z)
  var counter=1
  var vr=0;
  console.log('counter ='+counter)
    var nesto='peske';
    var sop='pesice';
    var sum=0;
    if(y!=null&&x.length==0){
      printime(nesto,sop,counter);
      printtPolz(polaznaLokacija,sop);
      var pr=y[0]/0.06
      printtPrvaLokacija(y[1],pr,sop);
      sum=pr+Number(t);
      printSumu(sum,sop)
  
     } 
  while(counter<=br&&x.length>0){
    sum=0;
    printime(nesto,sop,counter);
    printtPolz(polaznaLokacija,sop);
    printtPrvaLokacija(y[1],y[0]/0.06,sop);
    console.log('dan je '+counter)
    for(var i=0;i<x.length;i++){
      if(i==0){sum=sum+y[0]/0.06+Number(t);
      console.log('od '+polaznaLokacija+' do ' +y[1] +' je print '+sum.toFixed(2)+'minuta')}
      prom=i;
      if(i+1<x.length){
      var prom=i+1;}
      vr=x[i][0]/0.06;
      sum=sum+Number(vr)+Number(t);
      if(sum<z){
      printt(x[i][1],vr,i,sop)
      gasenje--;
      }
      else{
        gasenje--;
        console.log('suma je veca')
        sum=sum-Number(vr)-Number(t);
        console.log('ukupna suma'+ counter +' dana je '+sum)
        var f=[];
        for(var g=i;g<x.length;g++){
            f.push(x[g][1]);
        }
        x=f;
        console.log(x);
        console.log(y)
        console.log(polz1(x));
        var misko=polz1(x)
        if(x.length==1&&counter+1<br){
          printtPolz(polaznaLokacija,sop);
          console.log(polz(x)[1],polz(x)[0],sop);
          printtPrvaLokacija(misko[1],misko[0]/0.06,sop);
          printSumu(sum,sop)
        }
        
        
        console.log(lokc(misko,x));
        x=lokc(misko,x);
        y=misko;
        break;
        
      }
      console.log('DASdasdsada'+gasenje)
      
      

    }
    printSumu(sum,sop)
    if(gasenje==0){break;}
    counter++;
    
    sop=sop+'1';
  }}
  




}
function printt(x,vr,i,b){;
  var prom=i+2;
  for(var i=0;i<12;i++){
    if(x==nazivi_l[0][i][0]){
      var mesto=nazivi_l[0][i][1];
    }
  }
  const max=document.getElementById(b);
  const g=document.createElement('div');
  g.setAttribute(
    'class',
    'col',
  )
  g.setAttribute(
    'style',
    'background-color:#ffe4c4;'
  )
  g.innerHTML = '<div class="col"><h1 style="font-size:12px;">'+mesto+'</h1><img style="width:100px;height:100px;" src="img/'+x+'.jpg"><h1 style="font-size:15px;">'+prom+'. lokacija je udaljena '+vr.toFixed(1)+' minuta</h1></div> ';
  max.appendChild(g);
}
function printime(b,sop,i){
  const max=document.getElementById(b);
  const g=document.createElement('div');
  g.setAttribute(
    'class',
    'row',
  )
  g.setAttribute(
    'id',
    sop,
  )
  g.setAttribute(
    'style',
    'background-color:#ffe4c4;'
  )
  if(b=='peske'){
    g.innerHTML = '<h1>Ruta '+i+'. dana ako idete peske.</h1>';
    max.appendChild(g);
  }
  else{
  g.innerHTML = '<h1>Ruta '+i+'. dana ako koristite '+b+'.</h1>';
  max.appendChild(g);}

}
function printtPolz(x,b){
  const max=document.getElementById(b);
  const g=document.createElement('div');
  g.setAttribute(
    'class',
    'col',
  )
  g.setAttribute(
    'style',
    'background-color:#ffe4c4;'
  )
  g.innerHTML = '<div class="col"><h1 style="font-size:12px;">Polazna '+x+'.</h1><img style="width:100px;height:100px;" src="img/'+x+'.jpg"></div> ';
  max.appendChild(g);
}
function printSumu(sum,b){
  const max=document.getElementById(b);
  const g=document.createElement('div');
  g.setAttribute(
    'class',
    'col',
  )
  g.setAttribute(
    'style',
    'background-color:#ffe4c4;'
  )
  g.innerHTML = '<div class="col"><h1 style="font-size:15px; margin-top:70px;">Ukupno ste potrosili '+sum.toFixed(0)+' minuta odnosno '+(sum/60).toFixed(0)+' h. </h1></div> ';
  max.appendChild(g);


}
function printtPrvaLokacija(x,y,b){
  for(var i=0;i<12;i++){
    if(x==nazivi_l[0][i][0]){
      var mesto=nazivi_l[0][i][1];
    }
  }
  const max=document.getElementById(b);
  const g=document.createElement('div');
  g.setAttribute(
    'class',
    'col',
  )
  g.setAttribute(
    'style',
    'background-color:#ffe4c4;'
  )
  g.innerHTML = '<div class="col"><h1 style="font-size:12px;">'+mesto+'</h1><img style="width:100px;height:100px;" src="img/'+x+'.jpg"><h1 style="font-size:15px;">1. lokacija je udaljena '+y.toFixed(1)+' minuta.</h1></div> ';
  max.appendChild(g);
}


             function polz1(x){
              polazno=update2();
              c=x;
              var nazad=[];
              if(polazno==0){
                for(var i=11;i>-1;i--){
                  for(var j=0;j<c.length;j++){
                  if(c[j]==daljina_p[0][i][0]){
                    var nazad=[daljina_p[0][i][1],daljina_p[0][i][0],i]; 
                  }}
                }}
                if(polazno==1){
                  for(var i=11;i>-1;i--){
                    for(var j=0;j<c.length;j++){
                    if(c[j]==daljina_p[1][i][0]){
                      var nazad=[daljina_p[1][i][1],daljina_p[1][i][0],i];
                      
                    }}
                  }}
                  if(polazno==2){
                    for(var i=11;i>-1;i--){
                      for(var j=0;j<c.length;j++){
                      if(c[j]==daljina_p[2][i][0]){
                        var nazad=[daljina_p[2][i][1],daljina_p[2][i][0],i];
                        
                      }}
                    }}
                    if(polazno==3){
                      for(var i=11;i>-1;i--){
                        for(var j=0;j<c.length;j++){
                        if(c[j]==daljina_p[3][i][0]){
                          var nazad=[daljina_p[3][i][1],daljina_p[3][i][0]],i;
                          
                          }
                        }}
                      } 
                      var g=[];
                      g.push(nazad[0]);
                      g.push(nazad[1]);
              return (g);
                    
          }
function lokc(rt,x){
  var gas=rt[1];
  var str=[];
  var t=[];
  var y=[];
  console.log(x);
  c=x;
      //lokacije minus prva lokacija
      
      for(var i=0;i<c.length;i++){
        if(c[i]!=rt[1]){
          t.push(c[i]);
        }
      }
      for(var i=0;i<c.length;i++){
        if(c[i]!=rt[1]){
          y.push(c[i]);
        }
      }





  for(var z=0;z<t.length;z++){
    if(z!=0){y=o;}
   if(gas=='buda'){
    for(var i=10;i>-1;i--){
    for(var j=0;j<y.length;j++){
      if(y[j]==daljina_l[0][i][0]){
        var k=y[j];
        str[z]=[daljina_l[0][i][1],daljina_l[0][i][0]];}}}}
    else if(gas=='prlm'){
      for(var i=10;i>-1;i--){
      for(var j=0;j<y.length;j++){
        if(y[j]==daljina_l[1][i][0]){
          var k=y[j];
          str[z]=[daljina_l[1][i][1],daljina_l[1][i][0]];}}}}
      else if(gas=='bsl'){
        for(var i=10;i>-1;i--){
        for(var j=0;j<y.length;j++){
          if(y[j]==daljina_l[2][i][0]){
            var k=y[j];
        str[z]=[daljina_l[2][i][1],daljina_l[2][i][0]];}}}}
        else if(gas=='fsh'){
          for(var i=10;i>-1;i--){
          for(var j=0;j<y.length;j++){
            if(y[j]==daljina_l[3][i][0]){
              var k=y[j];
          str[z]=[daljina_l[3][i][1],daljina_l[3][i][0]];}}}}
          else if(gas=='mrkt'){
            for(var i=10;i>-1;i--){
            for(var j=0;j<y.length;j++){
              if(y[j]==daljina_l[4][i][0]){
                var k=y[j];
                str[z]=[daljina_l[4][i][1],daljina_l[4][i][0]];}}}}
            else if(gas=='ctd'){
              for(var i=10;i>-1;i--){
              for(var j=0;j<y.length;j++){
                if(y[j]==daljina_l[5][i][0]){
                    var k=y[j];
                    str[z]=[daljina_l[5][i][1],daljina_l[5][i][0]];}}}}
              else if(gas=='art'){
                for(var i=10;i>-1;i--){
                for(var j=0;j<y.length;j++){
                  if(y[j]==daljina_l[6][i][0]){
                    var k=y[j];
                    str[z]=[daljina_l[6][i][1],daljina_l[6][i][0]];}}}}
                else if(gas=='trg'){
                  for(var i=10;i>-1;i--){
                  for(var j=0;j<y.length;j++){
                    if(y[j]==daljina_l[7][i][0]){
                      var k=y[j];
                    str[z]=[daljina_l[7][i][1],daljina_l[7][i][0]];}}}}
                  else if(gas=='bath'){
                    for(var i=10;i>-1;i--){
                    for(var j=0;j<y.length;j++){
                      if(y[j]==daljina_l[8][i][0]){
                        var k=y[j];
                        str[z]=[daljina_l[8][i][1],daljina_l[8][i][0]];}}}}
                    else if(gas=='mus'){
                      for(var i=10;i>-1;i--){
                      for(var j=0;j<y.length;j++){
                        if(y[j]==daljina_l[9][i][0]){
                          var k=y[j];
                          str[z]=[daljina_l[9][i][1],daljina_l[9][i][0]];}}}}
                      else if(gas=='mrg'){
                        for(var i=10;i>-1;i--){
                        for(var j=0;j<y.length;j++){
                          if(y[j]==daljina_l[10][i][0]){
                            var k=y[j];
                            str[z]=[daljina_l[10][i][1],daljina_l[10][i][0]];}}}}
                        else if(gas=='gat'){
                          for(var i=10;i>-1;i--){
                          for(var j=0;j<y.length;j++){
                            if(y[j]==daljina_l[11][i][0]){
                              var k=y[j];
                              str[z]=[daljina_l[11][i][1],daljina_l[11][i][0]];}}}}
                          gas=k;
                          var o=[]    
                          for(var i=0;i<y.length;i++){
                            if(y[i]!=gas){
                              o.push(y[i]);
                            }
                          }
                        
                        }
              
              return(str);
}
