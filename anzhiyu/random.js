var posts=["posts/apex.html","posts/App2.html","posts/app.html","posts/debian.html","posts/docker.html","posts/blog.html","posts/steam.html","posts/steam2.html","posts/teamspeak.html","posts/windwos.html","posts/cs2.html","posts/cs2cfg.html","posts/mumble.html","posts/web.html","posts/github.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };