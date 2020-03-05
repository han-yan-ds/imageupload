window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    saveImage(this.files);
    // saveImageMetadata('tryfetch', '/home/han/Programming/Development/JavaScript/ImageUpload');
  });
});  

function changeImage(files) {
  if (files && files[0]) {
      const img = document.getElementById('myImg');
      img.src = URL.createObjectURL(files[0]); // set src to blob url
      img.onload = alert(img.src); // have an alert showing the path to the image
  }
}

async function saveImage(files) {
  const formData = new FormData();
  formData.append('fileKey', files[0])
  let response = await fetch('/saveImage', {
    method: 'POST',
    body: formData
  });
  response.json();
}

async function saveImageMetadata(imagename, imagepath) {
  let response = await fetch('/images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({imagename, imagepath})
  });
  response.json();
}