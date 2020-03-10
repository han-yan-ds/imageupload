window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', async function() {
    saveImage(this.files[0], (imageId) => 
      downloadImage(imageId, (blob) => 
        changeImage('myImg', blob)
      )
    );
  });
});

function changeImage(imgId, blob) {
  const img = document.getElementById(imgId);
  img.src = URL.createObjectURL(blob); // set src to blob url
  console.log(img.src); // have an alert showing the path to the image
}

async function downloadImage(imageId, cb = blob => blob) {
  let response = await fetch(`/downloadImage/${imageId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  cb(await response.blob());
}

async function saveImage(file, cb = imageId => imageId) {
  const formData = new FormData();
  formData.append('fileKey', file)
  let response = await fetch('/saveImage', {
    method: 'POST',
    body: formData
  });
  const {imageId} = await response.json();
  cb(imageId);
}