<template>
  <div class="not-found-page">
    <div class="page-wrapper">
      <div class="needle-wrapper">
        <div class="base"></div>
        <div class="lines">
          <div class="vertical"></div>

          <div class="horizontal"></div>
        </div>
      </div>
      <div class="disk-wrapper">
        <div class="light-left"></div>
        <div class="light-right"></div>
        <div class="disk">
          <div class="half-circle-top"></div>
          <div class="half-circle-bottom"></div>
          <div class="separator"></div>
          <div class="inner-circle">
            <span>4</span>
            <div class="dot"></div>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
    <div class="error-message">Uh oh! Looks like we've skipped a beat</div>
  </div>
</template>

<style lang="scss" scoped>
// FIXME: enable stylelint, fix errors
/* stylelint-disable */

@import url('https://fonts.googleapis.com/css?family=Montserrat:900');

@mixin flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}

$error-font: 'Montserrat', sans-serif;
$website-color: #202020;
$err-message-color: #d2ccc6;

.not-found-page {
  @include flex();

  height: 100vh;
  background-color: $website-color;
  font-family: $error-font;
  flex-direction: column;
}

.page-wrapper {
  width: 246px;
  position: relative;
}

.disk-wrapper {
  @include flex();
  @include size($width: 200px, $height: 200px);

  overflow: hidden;
  position: relative;
  border-radius: 100%;

  .light-left,
  .light-right {
    @include size($width: 25%, $height: 30%);

    position: absolute;
    background-color: #615951;
    z-index: 20;
  }

  .light-left {
    top: 20px;
    left: 20px;
    transform: rotate(-45deg);
    clip-path: polygon(0 0, 100% 0, 66% 100%, 40% 100%);
  }

  .light-right {
    clip-path: polygon(40% 0, 66% 0, 100% 100%, 0 100%);
    right: 20px;
    bottom: 20px;
    transform: rotate(-45deg);
  }
}

.disk {
  @include flex();
  @include size($width: 200px, $height: 200px);

  background-color: #050608;
  border-radius: 100%;
  position: relative;
  animation: circle 2.5s infinite linear;

  .half-circle-top {
    top: 30px;
    border: 2px solid #61595121;
    border-top-left-radius: 72px; /* 100px of height + 10px of border */
    border-top-right-radius: 72px; /* 100px of height + 10px of border */
    border-bottom: 0;
  }

  .half-circle-bottom {
    bottom: 30px;
    border: 2px solid #61595121;
    border-bottom-left-radius: 72px; /* 100px of height + 10px of border */
    border-bottom-right-radius: 72px; /* 100px of height + 10px of border */
    border-top: 0;
  }

  .half-circle-bottom,
  .half-circle-top {
    @include size($width: 140px, $height: 70px);

    position: absolute;
    background-color: #050608;
  }

  .separator {
    @include size($width: 100%, $height: 58px);

    background-color: #050608;
    position: absolute;
    top: 36%;
  }

  .inner-circle {
    @include size($width: 90px, $height: 90px);
    @include flex();

    background-color: #ef7d08;
    border-radius: 100%;
    z-index: 2;

    span {
      color: #c13017;
      font-weight: 900;
      font-size: 25px;
    }

    .dot {
      @include size($width: 10px, $height: 10px);

      background-color: black;
      border-radius: 100%;
      margin: 5px;
    }
  }
}

.needle-wrapper {
  position: absolute;
  right: 0;

  .base {
    @include size($width: 30px, $height: 30px);
    @include flex();

    background-color: #d2ccc6;
    position: relative;
    border-radius: 3px;

    &:after {
      @include size(20px);

      content: '';
      border-radius: 100%;
      background-color: #615951;
    }
  }

  .lines {
    @include flex();

    flex-direction: column;
    z-index: 4;
    position: relative;
    top: -16px;

    div {
      background-color: #d2ccc6;
      border-radius: 3px;
    }

    .vertical {
      @include size($width: 6px, $height: 50px);
    }

    .horizontal {
      @include size($width: 66px, $height: 6px);

      position: absolute;
      left: -46px;
      bottom: -13px;
      transform: rotate(-20deg);
    }
  }
}

.error-message {
  color: $err-message-color;
  margin: 30px 0;
}

@keyframes circle {
  100% {
    transform: rotate(360deg);
  }
}
</style>
