var posts=["posts/apex.html","posts/docker.html","posts/App2.html","posts/app.html","posts/debian.html","posts/github.html","posts/steam.html","posts/steam2.html","posts/windwos.html","posts/cs2.html","posts/teamspeak.html","posts/cs2cfg.html","posts/web.html","posts/mumble.html","posts/blog.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };