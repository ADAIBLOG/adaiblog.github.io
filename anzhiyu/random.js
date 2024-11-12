var posts=["2024/10/30/Debian系统/","2024/11/01/Docker/","2024/10/26/Steam展柜/","2022/03/01/TeamSpeak/","2024/10/30/cs2/","2024/11/08/mumble/","2024/10/27/应用软件/","2024/10/31/Windows/","2024/11/12/网站推荐/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };