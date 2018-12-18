<template>
  <div id="myDataSearch">
    <div class="myMap" id="allmap"></div>
    <div class="infoIcon">
      <img src="../assets/images/App/APP_info.png" alt="">
      <i class="redPoint"></i>
    </div>
    <div class="clickSearch">
      <img src="../assets/images/centerImage/btnSearch_03.png" alt="">
      <input type="text" placeholder="查询">
    </div>
    <div class="textBottom">
      <div class="dataOne">
        <h3>海外深究研发设备</h3>
        <p>设备编码：<span>SVV76008</span></p>
        <p>经/纬度：<span>27.577793</span> / <span>116.02354</span></p>
      </div>
      <div class="dataTwo">
        <div>上传时间：<span>2018-12-11 15:09:00</span></div>
        <div class="dataDetail">
          <div>
            <p>cod:<span>5.41</span></p>
            <p>一氧化碳:<span>0</span></p>
          </div>
          <div>
            <p>液位: <span>0.17</span></p>
            <p>流量: <span>26.1</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import iconCar from '../assets/images/App/APP_point.png' //引入自定义标注图标
  export default {
    name:'dataSearch',
    data(){
      return{
      
      }
    },
    mounted(){
      var map = new BMap.Map("allmap");    // 创建Map实例
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 10);
	    var marker = new BMap.Marker(point);  // 默认的标注图标     
      map.enableScrollWheelZoom(true);  //添加缩放
      map.enableDragging(); //添加拖拽
      //自定义的标注图标
      const deviceSize = new BMap.Size(40,50);
      const deviceIcon = new BMap.Icon(iconCar, deviceSize, { //会以base64的方式传参iconCar
        imageSize: deviceSize
      });
      const markerTwo = new BMap.Marker(point, {
        icon: deviceIcon
      });
      map.addOverlay(markerTwo); // 将标注添加到地图中
    }
  }
</script>
<style scoped>

*{
  box-sizing: border-box;
}
#myDataSearch{
  height: 100%;
  width: 100%;
}

div.clickSearch{
  position: fixed;
  top:0.54rem;
  z-index: 9;
  width:100%;
  padding: 0 0.2rem;
}
div.clickSearch img{
  width: 0.53rem;
  position: absolute;
  top: 50%;
  margin-top: -0.26rem;
  left: 0.62rem;
}

div.clickSearch input{
  width: 100%;
  height: 100%;
  border:1px solid #ddd;
  border-radius: 4px;
  padding:0.4rem 0 0.4rem 1.34rem;
  box-shadow: 0 1px 4px #ddd;
}
div.myMap{
  width: 100%;
  height: 100%;
}
div.infoIcon{
  width: 2rem;
  height: 2rem;
  position: absolute;
  top:2.8rem;
  left:0.24rem;
  background: #fff;
  border-radius: 50%;
  box-shadow: 1px 2px 10px #ddd;
  text-align: center;
  line-height: 2rem;
}
div.infoIcon img{
  width: 0.7rem;
}
div.infoIcon .redPoint{
  position: absolute;
  top:0.2rem;
  left:1.6rem;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: url(../assets/images/App/APP_red.png) center no-repeat;
  background-size:100%; 
}
div.textBottom{
  width: 100%;
  border-top:1px solid #ddd;
  position: fixed;
  bottom: 0;
  background: #fff;
  box-shadow: 1px 1px 10px #ddd;
}
div.textBottom p{
  margin: 0.25rem 0;
}
div.textBottom>div{
  padding: 0.5rem 0.4rem;
  font-size: 0.53rem;
}
div.dataOne{
  border-bottom: 1px solid #DCDCDC;
}
div.dataOne h3{
  font-size: 0.64rem;
}
div.dataDetail{
  position: relative;
}
div.dataDetail>div:last-child{
  position: absolute;
  top:0;
  left: 8.4rem;
}
</style>
