// 百度地图API功能
export default function positionCity() {
    //浏览器定位
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var gc = new BMap.Geocoder();
            var pointAdd = new BMap.Point(r.point.lng, r.point.lat);
            gc.getLocation(pointAdd, function(rs){
                window.positionCity = rs
            })
        }
        else {
            console.error('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true});
}
