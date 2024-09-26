let suaidade;
let comédia;
let aventura;
let romance;
let título;
let corpo;
let filme ={
  menor10:{
  comédia:"meu malvado favorito",
  aventura:"gato de bota",
  romance:"os batutinas",
 },
  entre10e14:{
  comédia:"ela é o cara", 
  aventura:"moana",
  romance:"10 coisas que eu odeio em voce",  
},
   entre14e16:{
   comédia:"tá rindo do que",
   aventura:"máquinas mortais",
    romance:"simplesmente acontece",
   },
  entre16e18:{
  comédia:"a mentira",
  aventura:"círculo de fogo",
  romance:"amor sem fim",
  },
  maior18:{
  comédia:"todos meos voce",
  aventura:"cidade perdida",
  romance:"after",
  }
}; 
  
let button;  
  
 function setup(){
  createCanvas(850,400).position(100,100);
createSpan("qual sua idade").position(670,530).addClass("hidden");
suaidade =createInput("").position(630,585).addClass("hidden");
romance =createCheckbox("gosto de filme romance?❤").position(100,600).addClass("hidden");
aventura =createCheckbox("gosto de filme aventura? 😉 ").position(100,650).addClass("hidden");
comédia =createCheckbox("gosto de filme comedia?😂 ").position(100,700).addClass("hidden");
 título = "Sevillana";
 corpo ="Montserrat";
  button = createButton("aperta o botão😉").position(width/2,520);
   button.mousePressed(bota);
   button.addClass("botao")
}
 
function bota(){
  selectAll('.hidden').forEach((el)=>
el.removeClass('hidden'));   
  button.hide();
}

function draw(){
  background("whith");
  let idade = parseInt(suaidade.value());
  let checkromance = romance.checked();
  let checkcomédia = comédia.checked();
  let checkaventura = aventura.checked();
  let filme = "Insira sua preferências";
  if(suaidade.value()!==""){
  filme = mostrafilme(idade, checkromance, checkcomédia, checkaventura);
  }
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(filme, width/2, height/2);
  textFont(título);
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHORES TIPOS DE FILMES",width/2, 30);
 textFont(corpo);
}
function mostrafilme(idade, checkromance, checkcomédia, checkaventura) {
  if(isNaN(idade)){
  return"idade Inválida";
  }else
  if(idade <5){
  return "Sai daqui, você é uma criança"
  } else
    if(idade >120){
    return"Já morreu,enterra"
    }
  if(idade >= 5 && idade < 10){
  if(checkcomédia) { 
  return filme [" menor10 "]["comédia"];
  }   
  if(checkaventura) { 
  return filme[" menor10"][" avetura "];
}
  if(checkromance) { 
    return filme[" menor10"][" romance "];
  }
 }
  if(idade >= 10 && idade < 14){
  if(checkcomédia) { 
   return filme[" entre10e14 "][" comédia "];
  }
 
  if(checkaventura) { 
 return filme[" entre10e14 "][" aventura" ];
  }

  if(checkromance) { 
 return filme[" entre10e14 "][" romance" ];
  }
 } 
 else if(idade >= 14 && idade < 16){
  if(checkcomédia) { 
 return filme[" entre14e16 "][" comédia" ];
  }
 
  if(checkaventura) { 
 return filme[" entre14e16 "][" aventura" ];
  }
  
  if(checkromance) { 
 return filme[" entre14e16 "][" romance" ];
  } 
 }
else if(idade >= 16 && idade < 18){
   if(checkcomédia){
    return filme[" entre16e18"]["comédia"];  
    }  
 
    if(checkaventura){
    return filme[" entre16e18"][" aventura"];  
    }
  }  
    else if(idade >= 16 && idade < 18){
  if(checkromance) { 
 return filme[" entre14e16 "][" romance" ];
  } 
 }
  else if(idade > 18){
   if(checkcomédia){
    return filme[" maior18"]["comédia"];  
    }  

    if(checkaventura){
    return filme[" maior18"][" aventura"];
    }
 
  if(checkromance) { 
 return filme[" maior18 "][" romance" ];
  }
  }
  }