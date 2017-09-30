$(document).ready(function() {
    // using jQuery to hack this together
    $('#main').click(() => {
      getRandNums()
        .then(nums => {
          generateBitMap(nums);
        });
    });

    function generateBitMap(arr){
      const c = document.getElementById("myCanvas");
      const ctx = c.getContext("2d");
      const imgData = ctx.createImageData(128, 128);

      let i;
      for (i = 0; i < imgData.data.length; i ++) {
        imgData.data[i * 4+0] = arr[i * 3+0];
        imgData.data[i * 4+1] = arr[i * 3+1];
        imgData.data[i * 4+2] = arr[i * 3+2];
        imgData.data[i * 4+3] = 256;
      }
      ctx.putImageData(imgData, 0, 0);
    };

    function getRandNums() {
      let nums = [];
      return new Promise(resolve => {
        let count = 0;
        for(let i = 0; i < 5; i++) {
          const randUrl = 'https://random.org/integers/?num=10000&min=0&max=256&col=1&base=10&format=plain&rnd=new';
          $.get(randUrl, data => {
            let myNums = data.split('\n');
            myNums.splice(myNums.length - 1, 1);
            nums = nums.concat(myNums);
            count++;
            if (count === 5) resolve(nums);
          });
        }
      });
    }
});
