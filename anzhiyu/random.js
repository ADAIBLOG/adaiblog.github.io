var posts=["posts/apex.html","posts/app.html","posts/App2.html","posts/debian.html","posts/steam.html","posts/blog.html","posts/docker.html","posts/steam2.html","posts/windwos.html","posts/cs2.html","posts/teamspeak.html","posts/cs2cfg.html","posts/mumble.html","posts/web.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };