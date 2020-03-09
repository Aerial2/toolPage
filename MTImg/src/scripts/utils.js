function request(url) {
  return new Promise(function (resolve) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.send()
    xhr.addEventListener('load', function () {
      resolve(JSON.parse(this.response))
    })
  })
}
var start = "0";
function getPhotos(sort_by,start) {
  //page = page || 0
  //source = source || ''
  //return request('http://192.168.239.1:8080/images/imagelist?sort_by='+sort_by+'&start='+start);
  return request('http://tool.zhaojishun.cn/images/imagelist?sort_by='+sort_by+'&start='+start);
}
