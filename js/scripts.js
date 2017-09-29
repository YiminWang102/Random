$(document).ready(function() {
    // all custom jQuery will go here
    console.log('hellow world');
    function generateBitMap(arr){
      const c = document.getElementById("myCanvas");
      const ctx = c.getContext("2d");
      const imgData = ctx.createImageData(128, 128);

      let i;
      for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i+0] = arr[i+0];
        imgData.data[i+1] = arr[i+0] - 255;
        imgData.data[i+2] = arr[i+0] - 255;
        imgData.data[i+3] = arr[i+0];
      }
      ctx.putImageData(imgData, 0, 0);
    }
    $('#main').click(() => {
      const arr = [];
      for (let i = 0; i < 128*128*4; i++) arr.push(255);
      generateBitMap(arr);
    });
});
