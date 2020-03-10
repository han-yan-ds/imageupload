window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', async function() {
    const imageId = await saveImage(this.files[0]); 
    const blob = await downloadImage(imageId);
    changeImage('myImg', blob);
  });
});

const changeImage = (imgId, blob) => {
  const img = document.getElementById(imgId);
  img.src = URL.createObjectURL(blob); // set src to blob url
  console.log(img.src); // have an alert showing the path to the image
}

const downloadImage = (imageId) => new Promise(async(resolve, reject) => {
  let response = await fetch(`/downloadImage/${imageId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  resolve(await response.blob());
})

const saveImage = (file) => new Promise(async (resolve, reject) => {
  const formData = new FormData();
  formData.append('fileKey', file)
  let response = await fetch('/saveImage', {
    method: 'POST',
    body: formData
  });
  const {imageId} = await response.json();
  resolve(imageId);
})