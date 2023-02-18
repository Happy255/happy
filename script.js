const  songsContainer = document.querySelector(".songs")

const songsArr = [
    {
        name: "beshram rang",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music : "s1.mp3"
    },
    {
        name: "tu rundi",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music : "s2.mp3"
    },
    {
        name: "toofan",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music : "s3.mp3"
    },
    {
        name: "toofan",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music : "s3.mp3"
    },
    {
        name: "toofan",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music : "s3.mp3"
    },
    {
        name: "toofan",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music : "s3.mp3"
    },
]

let isPlaying = false;

const audio = new Audio("s1.mp3")

songsContainer.innerHTML = songsArr.map(song => (
    `<div  class="song">
                <div class="songImg">
                    <img src=${song.photo} alt="">
                </div>
                <h3> ${song.name}</h3>
                <audio
        controls
        src=${song.music}>
            <a href=${song.music}>
                Download audio
            </a>
    </audio>
                <button class="playSong">
               play
                </button>
                <button class="pauseSong">
               pause
                </button>
                </div>`
               
)).join(" ")
 
const playSong = document.querySelector(".playSong")
const pauseSong = document.querySelector(".pauseSong")

playSong.addEventListener("click", () => {
    audio.play(); 
    // isPlaying = true;
})
pauseSong.addEventListener("click", () => {
    audio.pause(); 
    // isPlaying = true;
})

