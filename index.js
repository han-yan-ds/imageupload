window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    changeImage(this.files);
  });
});  

function changeImage(files) {
  if (files && files[0]) {
      const img = document.getElementById('myImg');
      img.src = URL.createObjectURL(files[0]); // set src to blob url
      img.onload = alert(img.src); // have an alert showing the path to the image
  }
}

