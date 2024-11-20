var posts=["2024/10/30/Debian系统/","2024/11/01/Docker/","2024/11/13/Github搭建个人博客/","2024/10/26/Steam展柜/","2024/10/31/Windows/","2022/03/01/TeamSpeak/","2024/10/30/cs2/","2024/11/08/mumble/","2024/11/17/cscfg/","2024/10/27/APP导航/","2024/11/20/APP导航(云盘版)/","2024/11/12/网站导航/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };