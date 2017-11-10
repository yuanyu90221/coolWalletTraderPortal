<template>
  <div class="foot">
    <div class="clearDef">
      <div class="logo">CBX.io</div>
      <div class="sns"><span><i class="fa fa-youtube-play"></i></span><span><i class="fa fa-facebook"></i></span><span><i class="fa fa-twitter"></i></span><span><i class="fa fa-instagram"></i></span></div>
    </div>
    <div class="submenuArea">
      <div class="submenu">
        <div class="menuHead">About</div>
        <div class="menuLi">About us</div>
        <div class="menuLi">News</div>
        <div class="menuLi">Contact us</div>
      </div>
      <div class="submenu">
        <div class="menuHead">Help</div>
        <div class="menuLi">FAQ</div>
        <div class="menuLi">What is Bitcoin</div>
      </div>
      <div class="submenu">
        <div class="menuHead">Legal</div>
        <div class="menuLi">Privacy</div>
        <div class="menuLi">Terms of use</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$bg-color: #585757;
$icon-color: #909090;
$radius: 30px;
$font-Size: 20px;
$gap: 10px;

.foot {
  background-color: $bg-color;
  padding: 0;
  width: 100% !important;
  position: fixed;
  bottom: 0;
  min-height: 300px;
}
.clearDef {
  margin: 20px;
  padding: 10px;
  display:flex;
  width: 50%;
  color: white;
  .logo {
    display:flex;
    justify-content: flex-start;
    font-size: 2*$font-Size;
  }
  .sns {
      display: flex;
      width: 80%;
      justify-content: flex-end;
      span {
        display: flex;
        position:relative;
        height: $radius;
        width: $radius;
        font-size: $font-Size;
        background-color: $icon-color;
        border-radius: 50%;
        margin: $gap;
        justify-content:center;
        align-items: center;
      }
    }
}
.submenuArea {
    width: 50%;
    display: flex;
    flex-direction:row;
    margin-top: 20px;
  }
  .submenu {
    color: white;
    margin: 0 20px;
    padding: 0;
    min-width: 140px;
    & > div {
      margin-right: 10px;
      margin-top: 10px;
      padding: 0;
    }
    .menuHead {
      font-size: 30px;
    }
}
.foot {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media(max-width: 970px){
  .foot {
    display: flex;
    flex-direction: column;
    margin:0;
  }
  .clearDef {
    width: 95%;
  }
  .submenuArea {
    width: 95%;
    display: flex;
    flex-direction:column;
    margin-top:0;
  }
}
</style>
