// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {

  new YT.Player('player', {
    videoId: 'PRAGLqfNK1o',  //최초 재생할 유튜브 영상 ID
    playerVars:{
      autoplay:true, // 자동재생 유무
      loop: true, // 반복재생 유무
      playlist: 'PRAGLqfNK1o'
    },
    events: {
      onReady:function(event){
        event.target.mute() // 음소거 
      }
    } 
  });
}



