var posts=["2022/03/01/Steam展柜/","2022/03/01/TeamSpeak/","2024/10/27/应用软件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };