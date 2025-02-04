var posts=["posts/anzhiyutag.html","posts/aseprite.html","posts/debian.html","posts/adarkroom.html","posts/docker.html","posts/anzhiyu.html","posts/markdown.html","posts/NextCloud.html","posts/HyperOS.html","posts/obs.html","posts/keepass.html","posts/windwos.html","posts/teamspeak.html","posts/winapp.html","posts/winappcloud.html","posts/microphone.html","posts/steam.html","posts/vercel.html","posts/blog.html","posts/Streaming.html","posts/github.html","posts/mumble.html","posts/VSCode.html","posts/cm6qdrijm002k9ts62rks62fe.html","posts/up.html","posts/androidapp.html","posts/androidappcloud.html","posts/liveliy.html","posts/food.html","posts/logout.html","posts/web.html","posts/GameSetting.html","posts/Switchpanels.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"小旦","link":"https://satera.cn","avatar":"https://satera.cn/img/logo.png","descr":"SNTube Studio","siteshot":"https://bu.dusays.com/2023/09/16/65052aa7c13c9.png"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2024/11/09/672f779669ef8.jpg"},{"name":"葱苓语畔","link":"https://blog.ciraos.top","avatar":"https://blog.ciraos.top/avatar1.avif","descr":"Do not worry, be happy.","siteshot":"https://blog.criaos.top/siteshot.avif"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情"},{"name":"小旦","link":"https://satera.cn","avatar":"https://satera.cn/img/logo.png","descr":"SNTube Studio","siteshot":"https://bu.dusays.com/2023/09/16/65052aa7c13c9.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };