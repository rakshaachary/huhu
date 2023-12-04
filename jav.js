const music = new Audio('audio\Believer.mp3');
//music.play();

const songs = [
   {
    id:"1",
    songName: 'Believer <br> <div class="subtitle">Imagine Dragons</div>',
    poster:"Image/1.jpg"
   } ,
   {
    id:"2",
    songName: 'Bones <br> <div class="subtitle">Imagine Dragons</div>',
    poster:"Image/2.jpg"
   } ,
   {
    id:"3",
    songName: 'Chaleya <br> <div class="subtitle">Arijit singh</div>',
    poster:"Image/3.jpg"
   } ,
   {
    id:"4",
    songName: 'Control <br> <div class="subtitle">Imagine Dragons</div>',
    poster:"Image/4.jpg"
   } ,
   {
    id:"5",
    songName: 'Darshana <br> <div class="subtitle">Darshana-Hesham</div>',
    poster:"Image/5.jpg"
   } ,
   {
    id:"6",
    songName: 'Despacito <br> <div class="subtitle">Louis Fonsi</div>',
    poster:"Image/6.jpg"
   } ,
   {
    id:"7",
    songName: 'Escapism <br> <div class="subtitle">Raye</div>',
    poster:"Image/7.jpg"
   } ,
   {
    id:"8",
    songName: 'Gasolina <br> <div class="subtitle">Daddy Yankee</div>',
    poster:"Image/8.jpg"
   } ,
   {
    id:"9",
    songName: 'Harleys in hawai <br> <div class="subtitle">Katy pery</div>',
    poster:"Image/9.jpg"
   } ,
   {
    id:"10",
    songName: 'Hass hass <br> <div class="subtitle">Diljit-Sia</div>',
    poster:"Image/10.jpg"
   } ,
   {
    id:"11",
    songName: 'Ik Junoon <br> <div class="subtitle">Shankar-Ehsaan</div>',
    poster:"Image/11.jpg"
   } ,
   {
    id:"12",
    songName: 'Levitating <br> <div class="subtitle">Dua Lipa</div>',
    poster:"Image/12.jpg"
   } ,
   {
    id:"13",
    songName: 'Lover <br> <div class="subtitle">Taylor Swift</div>',
    poster:"Image/13.jpg"
   } ,
   {
    id:"14",
    songName: 'no lie <br> <div class="subtitle">dua-sean</div>',
    poster:"Image/14.jpg"
   } ,
   {
    id:"15",
    songName: 'Obsessed <br> <div class="subtitle">Riar Saab</div>',
    poster:"Image/15.jpg"
   } ,
   {
    id:"16",
    songName: 'one Love <br> <div class="subtitle">Shubh</div>',
    poster:"Image/16.jpg"
   } ,
   {
    id:"17",
    songName: 'Running up that hill <br> <div class="subtitle">Kate Bush</div>',
    poster:"Image/17.jpg"
   } ,
   {
    id:"18",
    songName: 'Suzume <br> <div class="subtitle">RADWIMPS</div>',
    poster:"Image/18.jpg"
   } ,
   {
    id:"19",
    songName: 'Tumhe jo maine dekha <br> <div class="subtitle">Abhijeet-Shreya</div>',
    poster:"Image/19.jpg"
   } ,
   {
    id:"20",
    songName: 'Without me<br> <div class="subtitle">Eminem</div>',
    poster:"Image/20.jpg"
   } 
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
           music.play();
           wave.classList.add('active1');
           masterPlay.classList.remove('bi-play-fill');
           masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{;
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');

    })
    
}


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';

    })
    
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
//index++;
//console.log(index);

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        //console.log(index);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `Image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index -1].style.background = "rgb(105,105,105,.1)";
        makeAllplays(); 
        el.target.classList.remove('bi-play-circle-fill' );
        
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);

    //console.log(min1);

    if (sec1 < 10){
           sec1 =`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;
  

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;


});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;

});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0]; 
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;
console.log(index);
back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
         index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src =`audio/${index}.mp3`;
    poster_master_play.src = `Image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let{songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105,.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wavw.classList.add('active1');
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click' , ()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click' , ()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx= document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click' , ()=>{
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click' , ()=>{
    Artists_bx.scrollLeft -= 330;
});


