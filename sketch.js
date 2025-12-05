
let rainSound
let osc
let sound=false
let sound4=false
let sound2=false
let sound3=false
let soundleaves=false
let soundfall=false
let soundchufang=false
let soundshui=false
let soundplate=false
let soundmicro=false
let oscon=false
let dis
let dis2
let dis3
let img
let img1
 let dis4
 let trans=0
 let X
 let Y
 let x=400
 let y=400
 let volume=0
 
 let water
 let plate
 let knife
 let soundknife=false
 let micro
 let jiantou
 let roads=[]
let num=0
let room
let soundalone=false
let alone
let color
let light
let lightoff
let enter
let enteris=false
let windowis=false
let windowsound
let pouring
let pouringis=false
let clicksound
let tran4=0
let tran5=0
let abstract
let dream
let dreamis=false
let typing
let onon=false
let xx=0
let yy=0
let info=[]
let stars
let zuobiao=[]
let b1=false
let b2=false
let b3=false
let b4=false
let linesaved=[]
let pick=[]
let barr=[]
let truenum=0
let r=255
let g=255
let b=255
let door2
let door2is=false
let san


let zimu = [
  '0','1','2','3','4','5','6','7','8','9',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  '!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|',';',':',',','.',
  '<','>','?','`','~',"'",'"','/',' '
];
let inputtext=''




function preload(){

  for(let i=1;i<31;i+=1){
  let filename='assets/frame_' + i + '.png'
  let road=loadImage(filename)
  roads.push(road)
}
san=loadImage('assets/san.PNG')
door2=loadSound('assets/door2.mp3')
cake=loadImage('assets/cake.jpg')
dog=loadImage('assets/dog.jpg')
moon=loadImage('assets/moon.jpg')
stars=loadImage('assets/start.jpg')
typing=loadSound('assets/typing.mp3')
abstract=loadImage('assets/abstract.jpg')
dream=loadSound('assets/dream.mp3')
clicksound=loadSound('assets/click.mp3')
pouring=loadSound('assets/pouring.mp3')
windowsound=loadSound('assets/window.mp3')
enter=loadSound('assets/enter.mp3')
lightoff=loadImage('assets/lightoff.PNG')
light=loadImage('assets/light.PNG')
color=loadImage('assets/IMG_2213.jpg')
alone=loadSound('assets/alone.mp3')
room=loadImage('assets/room.jpg')
  Soundknife=loadSound('assets/knife.mp3')
  rainSound = loadSound('assets/archivo.mp3')
  yu2Sound= loadSound('assets/2yu.mp3')
  yu3Sound= loadSound('assets/3yu.mp3')
  yu4Sound=loadSound('assets/yusan.mp3')
  img = loadImage('assets/fall.jpg'); 
  img1=loadImage('assets/chufang.jpg')
  leavesSound=loadSound('assets/leaves.mp3')
  windSound=loadSound('assets/citywalk.mp3')
  Soundfall=loadSound('assets/Lullabye No.108 - The Mini Vandals.mp3')
  Soundchufang=loadSound('assets/chufang.mp3')
  Soundshui=loadSound('assets/mabu.mp3')
  Soundplate=loadSound('assets/household.mp3')
  Soundmicro=loadSound('assets/micro.mp3')
  water=loadImage('assets/3.jpg')
  plate=loadImage('assets/1.jpg')
  knife=loadImage('assets/4.jpg')
  micro=loadImage('assets/5.jpg')
   jiantou=loadImage('assets/jiantou.jpg')
}
let soundvolume
function setup(){
   let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
ball4=new Ball4(width/4,height/3)
ball5=new Ball4(width/2,height/6)
ball6=new Ball4(4*width/7,5*height/6)
ball7=new Ball4(4*width/5,height/2)
abstract.filter(BLUR,3)
stars.filter(BLUR,6)
moon.filter(BLUR,6)
cake.filter(BLUR,6)
dog.filter(BLUR,6)
san.filter(BLUR,7)

osc = new p5.Oscillator("sine");

  
}
let ball=[]
let ball1=[]
let ball2=[]
let ball3=[]
let ballhaqi=[]
let ball4//light spot1
let ball5
let ball6
let ball7
let timer=0
let timer1=0
let timer2=0
let timer3=0
let isaction=true
let isaction1=true
let isaction2=true
let isaction3=true
let trigger = 0
let trans1=0
let trans2=0
let trans3=0
let trans4=0
let trans5=0
let disexit1 
let dia=100
let speed=0.2
let tran=0
let amp=0.11
let tran1=220
let tran2=0
let tran3=0
let on=false
let rate=0.7
let moon
let dog
let cake
function draw() {
  
  background(0)


  
  if(sound===true){
  volume+=0.005
  if(volume>0.4){
        volume=0.4
      }
     rainSound.setVolume(volume)
    }
if(trigger===3){
dis=dist(mouseX,mouseY,width/4,height/3)
dis2=dist(mouseX,mouseY,width/2,height/6)
dis3=dist(mouseX,mouseY,4*width/7,5*height/6)
dis4=dist(mouseX,mouseY,4*width/5,height/2)

push()
stroke(255,1)
strokeWeight(2)
  barr=[b1,b2,b3,b4]
  
  truenum=0
  for(let i=0;i<barr.length;i++){
   
    if(barr[i]===true){
      truenum+=1
    }
     
  }
  
     if(truenum>=2){
 linesaved.push(pick[0],pick[1],pick[2],pick[3])
  for(let i=0;i<linesaved.length;i+=4){
    line(linesaved[i],linesaved[i+1],linesaved[i+2],linesaved[i+3])
  }
  

  }
 pop()







if(dis<100||dis2<100||dis3<100||dis4<100){
      if (yu4Sound.isLoaded() && sound4===false) {
        yu3Sound.stop()
    yu4Sound.loop();
    yu4Sound.setVolume(0.03);
    sound4 = true; 
    sound3=false
    }
  } 
  else {
    if(sound3===false){
    yu3Sound.loop()
      yu3Sound.setVolume(0.5)
      yu4Sound.stop()
      sound4=false
      sound3=true
    }
  }
  
      if(dis<100 && soundfall===false){
        if(Soundfall.isLoaded()){
        Soundfall.loop()
        Soundfall.setVolume(0.005)
        soundfall=true
        }
      }

      if(dis2<100 && soundchufang===false){
        if(Soundchufang.isLoaded()){
        Soundchufang.loop()
        Soundchufang.setVolume(0.006)
        soundchufang=true
        }
      }
      if(dis3<100 && soundalone===false){
        if(alone.isLoaded()){
           alone.loop()
           alone.setVolume(0.01)
           
           soundalone=true
        }

      }

      if(dis4<100&&dreamis===false){
        if(dream.isLoaded()){
           dream.loop()
           dream.setVolume(0.01)
           
           dreamis=true
        }
      }
      

      if(dis>=100){
        soundfall=false
        Soundfall.stop()
       

      }
      if(dis2>=100){
         soundchufang=false
        Soundchufang.stop()
      }
      if(dis3>=100){
        alone.stop()
        soundalone=false
      }
      if(dis4>=100){
        dream.stop()
        dreamis=false
      }
  
      


  push()

   noStroke()
   push()
    translate(width/4,height/3)
  
  if(dis<100){
    fill(255)

    for(let i=0;i<2*PI;i+=PI/6){
      for(let t=0;t<50;t+=1){
        fill(255,255,255,1.3)
        circle(cos(frameCount*0.02+i)*130,sin(frameCount*0.02+i)*130,t)
      }

          
    }


  }
  pop()
  push()
  translate(width/2,height/6)
  if(dis2<100){
    fill(255)

    for(let i=0;i<2*PI;i+=PI/6){
      for(let t=0;t<50;t+=1){
        fill(255,255,255,1.3)
        circle(cos(frameCount*0.02+i)*130,sin(frameCount*0.02+i)*130,t)
      }
          
    }


  }
  pop()
  push()
  translate(4*width/7,5*height/6)
  if(dis3<100){
    fill(255)

    for(let i=0;i<2*PI;i+=PI/6){
      for(let t=0;t<50;t+=1){
        fill(255,255,255,1.3)
        circle(cos(frameCount*0.02+i)*130,sin(frameCount*0.02+i)*130,t)
      }
          
    }


  }
  pop()
  push()
  translate(4*width/5,height/2)
  if(dis4<100){
    fill(255)

    for(let i=0;i<2*PI;i+=PI/6){
      for(let t=0;t<50;t+=1){
        fill(255,255,255,1.3)
        circle(cos(frameCount*0.02+i)*130,sin(frameCount*0.02+i)*130,t)
      }
          
    }


  }
  pop()
      
    
  
  pop()
  
  noStroke()
  push()
  ball4.move()
  ball4.display()
  ball5.move()
  ball5.display()
  ball6.move()
  ball6.display()
  ball7.move()
  ball7.display()
  pop()








}


if(trigger===7){
  
  
 fill(0,0,0)
  noStroke()
  rect(0,0,width,height)




push()
  fill(r,g,b,120)
 circle(mouseX,mouseY,100)
 
  fill(0,0,0,200)
  textSize(30)
  text('✨',width/5,height/5)
  text('🐾',width/2,height/2)
  text('🍰',4*width/5,3*height/7)
  textSize(25)
  text('🌙',width/7,3*height/5)
  
  textSize(20)
  text('Raindrops fell on the car window, like stars!!',width/5-70,height/5+170)
  text('flawed moon, but the moonlight is truly beatiful',width/7-70,3*height/5+170)
  text('a wriggle of puppy',width/2-20,height/2+170)
  text('What one cake cannot solve is...',4*width/5-70,3*height/7+130)
  pop()



   push()
 stroke(255,150)
  line(width/5,height/5,width/7,3*height/5)
  line(width/5,height/5,width/2,height/2)
  line(width/2,height/2,4*width/5,3*height/7)
  pop()

  push()
  
  tint(255, 40)
  image(abstract,0,0,width,height)
  pop()


  push()
tint(255,90)
image(stars,width/5,height/5,100,140)
image(moon,width/7,height*3/5,100,140)
image(dog,width/2,height/2,100,140)
image(cake,4*width/5,3*height/7,140,100)






  pop()

  push()

  
  noStroke()
  fill(202,195,212,100)
  circle(width/9,height/6,60)
  fill(203,196,188,100)
  circle(width/9,height/6+80,60)
  fill(228,206,206,100)
  circle(width/9,height/6+160,60)

   fill(198,175,117,100)
   circle(2*width/3,height/8,60)
   fill(118,134,146,100)
   circle(2*width/3+80,height/8,60)
   fill(167,121,121,100)
   circle(2*width/3+160,height/8,60)

   if(dist(mouseX,mouseY,width/9,height/6)<=60){
    r=202
    g=195
    b=212
   }
   if(dist(mouseX,mouseY,width/9,height/6+80)<=60){
    r=203
    g=196
    b=188
   }
   if(dist(mouseX,mouseY,width/9,height/6+160)<=60){
    r=228
    g=206
    b=206
   }
   if(dist(mouseX,mouseY,2*width/3,height/8)<=60){
    r=198
    g=175
    b=117
   }
   if(dist(mouseX,mouseY,2*width/3+80,height/8)<=60){
    r=118
    g=134
    b=146
   }
   if(dist(mouseX,mouseY,2*width/3+160,height/8)<=60){
    r=167
    g=121
    b=121
   }
pop()
  
push()
fill(255,150)
textSize(16)
text('click and leave your letter...',width/15,height/15)
pop()


   push()
  stroke(0)
  strokeWeight(3)
  fill(r,g,b,170)
   textSize(19)
    text(inputtext, xx, yy);
  
  for(let i=0;i<zuobiao.length;i+=2){
    text(info[i/2],zuobiao[i],zuobiao[i+1])
  }
  pop()
  push()
if(dist(mouseX,mouseY,width,height)<=width/5){
 if(door2is===false) {
  door2is=true
door2.play()
door2.setVolume(0.08)
 }
}
else if(dist(mouseX,mouseY,width,height)>width/5){
  door2.stop()
  door2is=false
}



  pop()




   
  



}
if(trigger===6){

  alone.rate(rate)
  amp+=0.004
  osc.amp(amp);
  if(oscon===false){
  osc.start()
  
  osc.amp(amp);
  osc.freq(58);
  oscon=true
  }
  push()
  
  if(amp>0.55){
amp=0.55
  }
  image(room,0,0,width,height)
  fill(0,tran1)
  rect(0,0,width,height)
  pop()
  push()
  noStroke()
  
  if(tran>=250){
    tran=250
    amp-=0.005
    tran1-=0.3
  }
  if(amp<0.0){
amp=0
if(tran3>240){
   
if(windowis===false){
  windowsound.play()
  windowsound.setVolume(0.1)
  windowis=true
}


  if(distdoor<=150){
    image(color,0,0,width,height)
     if(enteris===false){
      enter.play()
      enter.setVolume(0.1)
      enteris=true
     }

  }
  else if(distdoor>150){
    enteris=false
    enter.stop()
  }

push()
imageMode(CENTER)
if(on===true){
image(lightoff,mouseX,mouseY,width/10,width/10)
push()
fill(255,130)
rect(0,0,width,height)

fill(255,24)
for(let i=0;i<250;i+=11){
  
    ellipse(0.65*width,0.22*height,i,i*0.8)
  
}




pop()
rate+=0.0007
if(rate>=1.2){
  rate=1.2
}
push()

fill(255,0,0)
push()
textSize(50)
stroke(0)
strokeWeight(10)
text('DAMN IT',width/10,height/2)
pop()
  push()

tran4+=0.1
if(tran4>=250){
  tran4=250
}
if(tran4=250){
  tran5+=0.07
}
if(tran5>=250){
  tran5=250
}
fill(255,0,0,tran4)
textSize(23)

stroke(0)
strokeWeight(4)
text('the light in this room looks just like a flawless moon',width/10,height/2+100)
push()
fill(255,tran5)
textSize(23)
noStroke()
text('Well, maybe it is better this way. Maybe.',width/2+100,height/2+200)
pop()
pop()
pop()

}

if(on===false){
image(light,mouseX,mouseY,width/10,width/10)
rate-=0.001
if(rate<=0.7){
  rate=0.7
}
 





  
}


pop()

}
distdoor=dist(mouseX,mouseY,7*width/24,6*height/7)
  
if(tran1<0){
  tran1=0
}
tran2+=0.5
alone.setVolume(0.022)

push()
textSize(23)
push()

fill(255,255,255,tran2)
text('There is no moon out tonight.',50,112)
pop()
if(tran2>240){
  tran3+=0.5
  if(pouringis===false){
    pouring.play()
    pouring.setVolume(0.1)
    pouringis=true
  }

}
push()
fill(255,255,255,tran3)
text('I took a sip of ice water and opened the window.',380,112)
pop()




pop()





  }


fill(255,255,255,tran)
  noStroke()
  textSize(23)
  tran+=0.5
  text('There is that feeling again, my mind a blur, struggling for breath. ',50,50)

    pop()
  
  
     
     
    


}
else{
  oscon=false
  windowis=false
  pouringis=false
  tran1=220
  tran2=0
  tran3=0
  

}

if(trigger===5){
  image(img1,0,0,width,height)
  
  let disshui=dist(mouseX,mouseY,width/3,height/2)
  let displate=dist(mouseX,mouseY,width/2,2*height/3)
  let dismicro=dist(mouseX,mouseY,0.78*width,0.48*height)
  let disknife=dist(mouseX,mouseY,0.73*width,0.8*height)
  
if(disshui<150){
  if(soundshui===false){
    Soundshui.loop()
    Soundshui.setVolume(0.1)
    soundshui=true
  }
  
  image(water,0,0,width,height)

  
}
else if(disshui>=150){
  Soundshui.stop()
  soundshui=false
  
}
if(displate<150){
  if(soundplate===false){
    Soundplate.loop()
    Soundplate.setVolume(0.1)
    soundplate=true
  }
  image(plate,0,0,width,height)
}
else if(displate>=150){
  Soundplate.stop()
  soundplate=false
}
if(dismicro<100){
  if(soundmicro===false){
    Soundmicro.play()
    Soundmicro.setVolume(0.2)
    Soundmicro.rate(0.8)
    soundmicro=true
    
  }
  image(micro,0,0,width,height)
}
else if(dismicro>=100){
  Soundmicro.stop()
  soundmicro=false
  
}
if(disknife<100){
  image(knife,0,0,width,height)
  if(soundknife===false){
  Soundknife.loop()
  soundknife=true
  Soundknife.setVolume(0.02)
  }
}
else if(disknife>=100){
  Soundknife.stop()
  soundknife=false
}


  
  
  image(jiantou,3*width/4,0,width/4,height/4)
  push()
  fill(0,0,0,130)
  rect(0,0,width,height)
  fill(255,253,208,150)
  stroke(255,70)
  strokeWeight(2)
  circle(mouseX,mouseY,20)
  
  pop()
  if(mouseX>2*width/3 && mouseY<2*height/7){
    Soundchufang.setVolume(0.001)
  }
  else{
    Soundchufang.setVolume(0.006)
  }

  
}

if(trigger===4){

  if(mouseIsPressed){
    push()
    stroke(255)
    line(pmouseX,pmouseY,mouseX,mouseY)

  pop()
  }
  trans1+=0.4
  if(trans1>160){
    trans1=160
    trans2+=0.4
  }
  if(trans2>160){
    trans2=160
    trans3+=0.4
  }
  if(trans3>160){
    trans3=160
    trans4+=0.4
  }
  if(trans4>160){
    trans4=160
    trans5+=0.4
  }
  if(trans5>160){
    trans5=160
    
  }
    push()
    imageMode(CENTER)
  image(roads[num],width/2,height/2,height*0.8,height*0.8)
  stroke(255)
  line(0,height*0.1,width,height*0.1)
  line(0,height*0.9,width,height*0.9)
  line(width/2-0.4*height,0,width/2-0.4*height,width)
  line(width/2+0.4*height,0,width/2+0.4*height,width)
  if(disexit1<180){
  push()
  fill(192,192,192,150)
  rect(0,height*0.1,width/2-0.4*height,0.8*height)
  fill(240,240,240,150)
  rect(width/2-0.4*height,0.9*height,0.8*height,height/10)
  fill(136,136,136,150)
  rect(width/2+0.4*height,0,width/2-0.4*height,height/10)
  pop()
  }


  if(frameCount%10==0){
    num=(num+1)%roads.length
  }
    pop()

    push()
    fill(0,0,0,80)
    rect(0,0,width,height)
    pop()
    if(soundleaves===false){
      leavesSound.loop()
      leavesSound.setVolume(0.1)
      windSound.loop()
      windSound.setVolume(0.025)
      soundleaves=true
    }

for (let i = 0; i < random(0, 3); i++) {
    ballhaqi.push(new Ballhaqi(mouseX, mouseY));
  }
  
  for(let i=0;i<ballhaqi.length;i+=1){
    ballhaqi[i].display()
    ballhaqi[i].move()
  }
push()
fill(255,trans1)
textSize(17)
text('Back then, we talked for a long time',width/20,height*0.16)
fill(255,trans2)
text('You said the wind was too loud to hear clearly, but you saw the puffs of my breath as I spoke',width/20,height*0.16+30)
fill(255,trans3)
text('You said they were like smoke rings, dissolving into the boundless expanse of the world',width/20,height*0.16+60)
fill(255,trans4)
text('......',width/20,height*0.16+120)
fill(255,trans5)
text('Yet the world feels so small',width/20,height*0.16+180)
pop()

disexit1 =dist(mouseX,mouseY,3*width/20,height*0.16+320)
if(disexit1<180){

  Soundfall.setVolume(0.001)
  leavesSound.setVolume(0.02)
  windSound.setVolume(0.005)
  yu4Sound.setVolume(0.08);
  
}
else if(disexit1>=180){
  Soundfall.setVolume(0.005)
  leavesSound.setVolume(0.1)
  windSound.setVolume(0.025)
  yu4Sound.setVolume(0.03);

}
    

}
else{
   windSound.stop()
   leavesSound.stop()
   soundleaves=false
}







if(isaction){
  timer+=0.5
}
if(isaction1){
  timer1+=0.5
}
if(isaction2){
  timer2+=0.5
}
if(isaction3){
  timer3+=0.5
}
  

  if(timer>20){

    ball.push(new Ball())
    timer=0
  }
    for(let i=0;i<ball.length;i+=1){
ball[i].move()
ball[i].display()
    }

    if(timer1>20){

    ball1.push(new Ball())
    timer1=0
  }
    for(let i=0;i<ball1.length;i+=1){
ball1[i].move()
ball1[i].display()
    }
    
if(timer2>20){

    ball2.push(new Ball())
    timer2=0
  }
    for(let i=0;i<ball2.length;i+=1){
ball2[i].move()
ball2[i].display()
    }

    if(timer3>20){

    ball3.push(new Ball())
    timer3=0
  }
    for(let i=0;i<ball3.length;i+=1){
ball3[i].move()
ball3[i].display()
    }
  }
  
 


class Ball{
constructor(){
this.x=random(0,width)
this.y=random(0,height)
this.dia=0
this.trans=255
this.trans2=255
}
display(){
  noFill()
  stroke(255,this.trans)
  circle(this.x,this.y,this.dia)
  stroke(255,this.trans2)
  if(this.dia>20){
    circle(this.x,this.y,this.dia-20)
  }
   
}
move(){
this.dia+=0.5
this.trans-=0.6
this.trans2-=0.6
}
}

function mousePressed(){
  
if (trigger === 0) {
    isaction = false;
    trigger = 1; 
    if (rainSound.isLoaded() && sound===false) {
      
      
    rainSound.loop();
    //rainSound.setVolume(volume);
    sound = true; 
  }
  } else if (trigger === 1) {
if (yu2Sound.isLoaded() && sound2===false) {
  rainSound.stop()
    yu2Sound.loop();
    yu2Sound.setVolume(0.4);
    sound2 = true; 
}

    if (isaction === false) { 
      isaction1 = false;
      trigger = 2; 
    }
  } else if (trigger === 2) {

if (yu3Sound.isLoaded() && sound3===false) {
  yu2Sound.stop()
    yu3Sound.loop();
    yu3Sound.setVolume(0.5);
    
    sound3 = true; 
}
    if (isaction1 === false) {
      isaction2 = false;
      trigger = 3; 
    }
    

  
}else if (trigger===3){

if(pick.length>=4){
    pick.splice(0,2)
    
  }
  if(dis<=100){
    b1=true
    pick.push(width/4,height/3)
    
  }
  if(dis2<=100){
    b2=true
    pick.push(width/2,height/6)
    
  }
  if(dis3<=100){
    b3=true
    pick.push(4*width/7,5*height/6)
    
  }
  if(dis4<=100){
    b4=true
    pick.push(4*width/5,height/2)
    
  }





  on=false
  if(dis<100){
    trigger=4
  }
  if(dis2<100){
    trigger=5
  }
  if(dis3<100){
    trigger=6
  }
  if(dis4<100){
    trigger=7
  }
}
else if(trigger===4){

  if(disexit1<180){
    trigger=3
  }
}
else if(trigger===5){
  if(mouseX>2*width/3 && mouseY<2*height/7){
    trigger=3
  }
}
else if(trigger===6){
  
  if(tran3>243){
  clicksound.play()
  clicksound.setVolume(0.1)
  if(distdoor<=150){
    trigger=3
  }
  
  }

  
}
 else if(trigger===7){
  
  if(onon===false){
    onon=true
    xx=mouseX
    yy=mouseY
    
    
    
  }
  else{
    
    info.push(inputtext)
    

    
    zuobiao.push(xx)
    zuobiao.push(yy)
    inputtext=''
    xx=mouseX
    yy=mouseY

  }

  if(dist(mouseX,mouseY,width,height)<=width/5){
    trigger=3
  }

}

if(trigger==6){
  if(tran3>243){
  if(on===false){
    on=true
  }
  else if(on===true){
    on=false
  }
}
  
}





}

function keyPressed(){
  if(trigger===7){
    typing.play()
    typing.setVolume(0.1)
  }
push()
  stroke(0)
  fill(0)
   
  if(onon===false) return
  if (key === "Backspace") {
    inputtext = inputtext.slice(0, -1);
  }
 

  else if (zimu.includes(key)) {
    inputtext += key;
  }
  
  
  pop()

}


class Ball4{
  
  constructor(X,Y){
    this.dia=90
    this.trans=200
    this.speed=0.17
    this.x=X
    this.y=Y
  }
  move(){
    this.dia+=this.speed
    if(this.dia>90||this.dia<50){
      this.speed=-this.speed
    }
  }
  display(){
   
    for(let i=0;i<this.dia;i+=1){
      fill(255,255,255,1.2)
      circle(this.x,this.y,2*i)
    }
  }
}

class Ballhaqi{
  constructor(X,Y){
    this.x=X
    this.y=Y
    this.speedx=random(-1.3,1.0)
    this.speedy=random(-1.3,1.0)
    this.dia=57
    this.speed=0
  }
move(){
  this.speed+=0.002
  this.x+=this.speedx+random(-0.5,0.5)
  this.y+=this.speedy+random(-0.5,0.5)
 
  this.dia-=this.speed
  if(this.dia<0){
    this.dia=0
  }
  
}
  display(){
    fill(255,5)
    noStroke()
    circle(this.x,this.y,this.dia)
  }
}




