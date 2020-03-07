window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    saveImage(this.files[0]);
  });
});  

function changeImage(files) {
  if (files && files[0]) {
      const img = document.getElementById('myImg');
      img.src = URL.createObjectURL(files[0]); // set src to blob url
      img.onload = alert(img.src); // have an alert showing the path to the image
  }
}

async function downloadImage(imageId) {
  let response = await fetch(`/downloadImage/:${imageId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({imageId});
  });
  console.log(await response.json());
}

async function saveImage(file) {
  const formData = new FormData();
  formData.append('fileKey', file)
  let response = await fetch('/saveImage', {
    method: 'POST',
    body: formData
  });
  console.log(await response.json()); // this console.log only shows the structure of the data returned back after uploading
}