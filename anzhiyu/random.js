var posts=["posts/apex.html","posts/App2.html","posts/docker.html","posts/debian.html","posts/app.html","posts/blog.html","posts/steam.html","posts/steam2.html","posts/teamspeak.html","posts/windwos.html","posts/cs2.html","posts/cs2cfg.html","posts/mumble.html","posts/web.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };