
let input = document.querySelector("#input")
const ball = document.querySelector(".ball")
const ballID = document.querySelector("#ball")


const prompts = ["It is certain."," It is decidedly so.","Without a doubt.","Yes definitely",
 "You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now."
 ,"Concentrate and ask again."," Don't count on it."," My reply is no."," My sources say no.","Outlook not so good.","Very doubtful."]

function magicball(prompt){
    const message = prompt[Math.floor(Math.random()*20)]
    ball.innerHTML=`<h2 id="fortune">${message}</h2>`};

    document.querySelector('button').addEventListener('click', function () {

   if(input.value ===''){}

    else{
        ball.classList.add('active');

    setTimeout(()=> {
      ball.classList.remove('active');
   }, 1200)

    setTimeout(()=>{
    return magicball(prompts);
    },1000)
    
    ballID.style.backgroundImage = 'url("shake-stage.png")';
    ball.innerHTML = '';
    input.value = '';
    } 
   
   })

   document.querySelector('button').addEventListener(
    click, function(){
        
    }
)
         
      
    
    
    
   