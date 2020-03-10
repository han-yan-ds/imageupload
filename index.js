window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', async function() {
    await saveImage(this.files[0]);
    await downloadImage(5, (blob) => changeImage('myImg', blob))
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

async function saveImage(file) {
  const formData = new FormData();
  formData.append('fileKey', file)
  let response = await fetch('/saveImage', {
    method: 'POST',
    body: formData
  });
  console.log(await response.json()); // this console.log only shows the structure of the data returned back after uploading
}