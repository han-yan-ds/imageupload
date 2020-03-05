window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
    saveImage(this.files);
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
  console.log(await response.json()); // this console.log only shows the structure of the data returned back after uploading
}