var play = document.getElementsByClassName("fi-rr-play")[0];
var pause = document.getElementsByClassName("fi-rs-pause-circle");
var getMusic = document.getElementsByTagName("tr");
var leftarrow = document.getElementsByClassName("fi-rr-arrow-small-left")[0];
var rightarrow = document.getElementsByClassName("fi-rr-arrow-small-right")[0];
var range = document.getElementById("progressBar");
var music_name = document.getElementById("music-name");
var ritem = document.querySelectorAll(".ritemcard");
var mainmusicimg = document.getElementById("main-music-img");
var musicworld = document.getElementById("music-world");
var eachitem = document.getElementsByClassName("each-item")[0];
var back = document.getElementById("back");
var tabledata = document.querySelectorAll("#song-name");




back.addEventListener("click",()=>{
    musicworld.style.display = "block";
    eachitem.style.display = "none";
    play.classList.remove("fi-rs-pause-circle");
    play.classList.add("fi-rr-play");
    song.pause();

})
eachitem.style.display = "none";
var imagesrc;

ritem.forEach((r)=>{
    r.addEventListener("click",()=>{
    imagesrc = r.getElementsByTagName("img")[0].getAttribute("src");
    mainmusicimg.setAttribute("src",imagesrc);
    musicworld.style.display = "none";
    eachitem.style.display = "flex";
    eachitem.scrollIntoView({ behavior: 'smooth',block: 'start'});
    window.scrollBy({ top: -1000, behavior: 'smooth' });
    })
})

Array.from(getMusic).forEach((music, index) => {
    music.id = `song-${index}`;
});


var songs = 
[
    {
        "filepath" : "./songs/1.mp3",
        "id":"song-1",
        "name":"Meenama",
        "artist":"Hariharan"
    },
    {
        "filepath" : "./songs/2.mp3",
        "id":"song-2",
        "name":"Kaadhala Kaadhala",
        "artist":"Hariharan"
    },
    {
        "filepath" : "./songs/3.mp3",
        "id":"song-3",
        "name":"Rosapoo Chinna Rosapoo",
        "artist":"Hariharan"
    },
    {
        "filepath" : "./songs/4.mp3",
        "id":"song-4",
        "name":"Poiyavadhu Sol Kanne",
        "artist":"Hariharan"
    },
    {
        "filepath" : "./songs/5.mp3",
        "id":"song-5",
        "name":"Kadhal Kaditham",
        "artist":"Hariharan"
    },
];

var index = 0 ;
rightarrow.addEventListener("click",()=>{
    index++;
    if(index >songs.length-1){
        index = 0;
    }
    music_name.innerText = songs[index].name;
    song.src = songs[index].filepath;
    song.load();
    if(play.className == "fi fi-rs-pause-circle"){
        song.play();
        return;
    }
    if(play.className == "fi fi-rr-play"){
        song.pause();
        return;
    }
})

leftarrow.addEventListener("click",()=>{
    if(index == 0){
        index = songs.length-1;
    }
    else{
        index--;
    }
    song.src = songs[index].filepath;
    music_name.innerText = songs[index].name;
    song.load();
    if(play.className == "fi fi-rs-pause-circle"){
        song.play();
        return;
    }
    if(play.className == "fi fi-rr-play"){
        song.pause();
        return;
    }
})



var song = new Audio(songs[index].filepath);
music_name.innerText = songs[0].name;
play.addEventListener("click",()=>{
    if(play.className == "fi fi-rr-play"){
        play.classList.remove("fi-rr-play");
        play.classList.add("fi-rs-pause-circle");
        song.play();
    }else{
        play.classList.remove("fi-rs-pause-circle");
        play.classList.add("fi-rr-play");
        song.pause();
    }
})

var song_duration = 0;
var song_currentTime = 0;
song.addEventListener("timeupdate",()=>{
    song_duration = Math.floor(song.duration);
    song_currentTime = Math.floor(song.currentTime);
    range.max = song_duration;
    range.value = song_currentTime;
    if(range.value == song_duration){
        play.classList.remove("fi-rs-pause-circle");
        play.classList.add("fi-rr-play");
    }
    console.log(range.value);
    console.log(song_duration);
})

range.addEventListener("click",()=>{3
    if(play.className == "fi fi-rs-pause-circle"){
        song.currentTime = range.value;
    }
    if(range.value == Math.floor(song.duration)){
        console.log("hi");
    }
})

tabledata.forEach((td,i) =>{
    td.parentElement.addEventListener("click",()=>{

        songs.forEach(sg =>{
            if(td.innerText == sg.name){
                song.src = sg.filepath; // Update the audio source
                music_name.innerText = sg.name; // Update the song name display
                song.load(); // Load the new song
                song.play(); // Play the new song
                play.classList.remove("fi-rr-play");
                play.classList.add("fi-rs-pause-circle");
            }
        })
           
    })
})