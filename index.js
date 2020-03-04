window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('myImg');
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = alert(img.src); // have an alert showing the path to the image
      }
  });
});  