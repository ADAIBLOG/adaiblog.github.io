var posts=["posts/apex.html","posts/App2.html","posts/app.html","posts/debian.html","posts/docker.html","posts/blog.html","posts/steam.html","posts/windwos.html","posts/teamspeak.html","posts/cs2.html","posts/steam2.html","posts/cs2cfg.html","posts/web.html","posts/mumble.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };