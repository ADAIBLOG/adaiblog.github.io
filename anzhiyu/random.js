var posts=["2024/10/26/Steam展柜/","2022/03/01/TeamSpeak/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };