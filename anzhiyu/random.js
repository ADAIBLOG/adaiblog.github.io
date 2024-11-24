var posts=["posts/App2.html","posts/app.html","posts/debian.html","posts/docker.html","posts/apex.html","posts/blog.html","posts/steam2.html","posts/steam.html","posts/teamspeak.html","posts/windwos.html","posts/cs2.html","posts/mumble.html","posts/cs2cfg.html","posts/web.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };