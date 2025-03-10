var posts=["posts/adguardhome.html","posts/adarkroom.html","posts/aseprite.html","posts/anzhiyutag.html","posts/docker.html","posts/HyperOS.html","posts/anzhiyu.html","posts/markdown.html","posts/github.html","posts/NextCloud.html","posts/debian.html","posts/obs.html","posts/keepass.html","posts/steam.html","posts/vercel.html","posts/teamspeak.html","posts/windwos.html","posts/alist.html","posts/winapp.html","posts/blog.html","posts/microphone.html","posts/mumble.html","posts/VSCode.html","posts/up.html","posts/Streaming.html","posts/cm83ah09n002ov4s67yqj9osj.html","posts/lively.html","posts/38.html","posts/androidapp.html","posts/gongbaojiding.html","posts/Switchpanels.html","posts/GameSetting.html","posts/life.html","posts/m.html","posts/pc.html","posts/cm83ah09t003pv4s6avb4bq14.html","posts/logout.html","posts/web.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"小旦","link":"https://satera.cn","avatar":"https://satera.cn/img/logo.png","descr":"SNTube Studio","siteshot":"https://bu.dusays.com/2023/09/16/65052aa7c13c9.png","recommend":true},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2024/11/09/672f779669ef8.jpg","recommend":true},{"name":"葱苓语畔","link":"https://blog.ciraos.top","avatar":"https://blog.ciraos.top/avatar.avif","descr":"Do not worry, be happy.","siteshot":"https://blog.criaos.top/siteshot.avif","recommend":true},{"name":"龙窝","link":"https://blog.245179.xyz","avatar":"https://blog.245179.xyz/images/atiq.png","descr":"人生近看是悲剧，远看是喜剧","siteshot":"https://blog.245179.xyz/images/web.png","recommend":true},{"name":"夏沫花火zzz🌙 (Muska_Ami)のLife","link":"https://1l1.icu/","avatar":"https://blog.1l1.icu/images/avatar.jpg","descr":"Keep doing,keep loving.","recommend":true},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","tag":"主题作者"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情","recommend":true},{"name":"辣条","link":"https://blog.owwo.fun","descr":"悠远的天空，在苍穹的尽头","avatar":"https://blog.owwo.fun/img/avatar.jpg"},{"name":"陆小启Kairo","link":"https://blog.luxq.space","avatar":"https://s21.ax1x.com/2025/02/23/pElRBdO.jpg","descr":"往者不谏，来者可追"}];
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