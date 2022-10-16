const pianoKeys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.white-keys')
const blackKeys = document.querySelectorAll('.black-keys')
const btn2b     = document.querySelectorAll('.btn-2d')
const btn3w     = document.querySelectorAll('.btn-3d')
const keys      = document.querySelectorAll('.keys')
const mouth     = document.querySelector('.mouth')
const letter    = document.querySelector('.letter')

const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', ]
const BLACK_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']



//piano sound when click
function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}


pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = 'sounds/24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
    
    
})

// ----------------


//data for press keybord
var keyData = {
0: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key01.mp3']
    }),
    
},
1: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key02.mp3']
    }),
    
},
2: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key03.mp3']
    }),
    
},

3: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key04.mp3']
    }),
    
},
4: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key05.mp3']
    }),
    
},
5: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key06.mp3']
    }),
   
},
6: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key07.mp3']
    }),
    
},
7: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key08.mp3']
    }),
    
},
8: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key09.mp3']
    }),
    
},
9: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key10.mp3']
    }),
    
},
q: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key11.mp3']
    }),
    
},
w: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key12.mp3']
    }),
    
},
e: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key13.mp3']
    }),
    
},
r: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key14.mp3']
    }),
    
},
t: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key15.mp3']
    }),
    
},
y: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key16.mp3']
    }),
    
},
u: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key17.mp3']
    }),
    
},
i: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key18.mp3']
    }),
    
},
o: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key19.mp3']
    }),
    
},
p: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key20.mp3']
    }),
    
},
a: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key21.mp3']
    }),
    
},
s: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key22.mp3']
    }),
    
},
d: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key23.mp3']
    }),
    
},
f: {
    sound: new Howl({
      urls: ['/sounds/24-piano-keys/key24.mp3']
    }),
    
},

}



//piano sound when press keybord
pianoKeys[0].addEventListener("keydown", onKeyDown); 

for (const pianoKey of pianoKeys) {
    pianoKey.addEventListener("keydown",  onKeyDown);        
    
  
  }

 
document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)
  if (whiteKeyIndex > -1) playNote(btn3w[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(btn2b[blackKeyIndex])
})




function onKeyDown(event) {
  
    if(keyData[event.key]){
      
        console.log(keyData[event.key])
        keyData[event.key].sound.play();

       
    }
   
    mouth.classList.add('activee')
   

}


function playNote(key) {
  //if (isRecording()) recordNote(pianoKeys)
  pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    
    const newUrl = 'sounds/24-piano-keys/key' + number + '.mp3'
    key.classList.add('active')
    
    pianoKey.classList.remove('active')
  
  });
  }

//eye animation 

  var ball = document.getElementsByClassName("dot");
            document.onmousemove=function(event){
                var x=event.clientX*55/window.innerWidth+"%";
                var y=event.clientY*55/window.innerHeight+"%";

                for(var i=0;i<2;i++){
                    ball[i].style.left=x/2;
                    ball[i].style.top=y/2;
                    ball[i].style.transform="translate("+x+","+y+")";
                }
            }

            for (const pianoKey of pianoKeys) {
              pianoKey.addEventListener("keydown", (e) => {
                console.log(e.key)
                letter.innerHTML = e.key;
              });        
              
            
            }