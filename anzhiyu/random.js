var posts=["2024/10/26/Steam展柜/","2022/03/01/TeamSpeak/","2024/10/27/应用软件/","2024/10/30/cs2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };