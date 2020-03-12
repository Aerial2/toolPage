var Application = function (gallery) {
  this.gallery = gallery
  this.spinner = document.querySelector('.spinner')
  this.modal = new Modal()
  this.loading = false
  this.page = 0
  this.sort_by = 1
  this.start = 0
  this.load()
//sort_by:0回复，1发布，2随机
 //start：开始 0 新开始
  window.addEventListener('scroll', this.scroll.bind(this))
  document.addEventListener('click', this.click.bind(this))
}

Application.prototype.click = function (event) {
  var $target = event.target
  if ($target.className == 'gallery-image') {
    this.modal.show($target.dataset.large, $target.clientWidth, $target.clientHeight)
  }
}

Application.prototype.scroll = function () {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  if (scrollTop + innerHeight >= document.body.clientHeight && !this.loading) {
    this.load()
  }
}

Application.prototype.loaded = function (photos) {
  if(photos.code == 200){
  	this.spinner.style.display = 'none'
  	this.loading = false
  	this.start = photos.data.start;
  	this.gallery.append(photos)
  }else{
  	limit(photos.message);
  }
 }

Application.prototype.load = function () {
  this.spinner.style.display = 'block'
  this.loading = true
  console.log(2);
  getPhotos(this.sort_by, this.start).then(this.loaded.bind(this))
}
