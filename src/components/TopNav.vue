<template>
  <!-- 头部 开始 -->
  <div class="top_main wrap clear">
     <div class="fl">
       <strong>后台管理系统</strong>
     </div>
    <div class="fr">
      <p class="systime"><span>系统时间：</span><i></i></p>
      <p>欢迎您，尊敬的<em>陈文</em>管理员</p>
      <p>
        <a href="#" target="leftMenuFrame">[修改密码]</a>
        <a href="#" target="_parent">[安全退出]</a>
        <a href="#" target="_blank">[前台首页]</a></p>
    </div>
  </div>
</template>

<script>
</script>

<style>
  /*头部*/
  .top_main.wrap { background: #4d5b76; background: #3b3e40; box-shadow: inset 0 20px 10px -20px #000; }
  .top_main .fr p { color: #272822;margin-top: 0px;}
  .top_main .fr p i { color: #fff; }
  .top_main .fr p em { color: #F92672; }
  .top_main .fr p a { color: #414339 }
  .top_main .fr p a:hover { color: #F92672; }
  .top_main .fl{float: left; color: #272822;font-size: 28px;font-family: '楷体';background-color: #FFFFFF;margin-left: 400px;margin-top: 25px;}
  .wrap { width: 100%; min-width: 1000px; }
  .fr { float: right; }
  .clear { clear:both; }
</style>
