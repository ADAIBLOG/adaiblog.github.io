var posts=["posts/App2.html","posts/debian.html","posts/apex.html","posts/app.html","posts/github.html","posts/docker.html","posts/steam.html","posts/steam2.html","posts/teamspeak.html","posts/windwos.html","posts/cs2.html","posts/cs2cfg.html","posts/mumble.html","posts/blog.html","posts/web.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };