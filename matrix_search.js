// Page 91. Given 2 different 2D arrays, containing integers between 0 and 65535. Each 2D array represents a gray-scale image, where each integer value is a pixel. The second image might be found somewhere within larger one. Return whether it is.
//
// Given matrix1: [ [12, 34, 45, 56],     and matrix2: [ [67, 78],
//                  [98, 87, 76, 65],                    [43, 32] ]
//                  [56, 67, 78, 89],
//                  [54, 43, 32, 21] ]
// return true.

var matrixSearch = (mat1, mat2) => {
  var found = false;
  var mat1_width = mat1[0].length,
      mat1_height = mat1.length,
      mat2_width = mat2[0].length,
      mat2_height = mat2.length;
  // flatten matrices to arrays
  var mat1_arr = [].concat.apply([], mat1),
      mat2_arr = [].concat.apply([], mat2);

  // return false if either matrix 2 height or width is greater than matrix 1 height or width
  if (mat2_width > mat1_width || mat2_height > mat1_height) {
    return false;
  }

  // for (let i = 0; i < mat1_arr.length; i++) {
  //   for (let j = 0; j < mat2_arr.length; j++) {
  //     console.log("m2 val:", mat2_arr[j]);
  //     console.log("m1 val:", mat1_arr[i]);
  //     if (mat2_arr[j] == mat1_arr[i]){
  //       found = true;
  //       if (j % mat2_width == 0 && i + mat1_width - mat2_width <= mat1_arr.length) {
  //         i += mat1_width - mat2_width - 1;
  //         // console.log("ind i:", i);
  //         // continue;
  //       }
  //       console.log("ind i:", i, "val:", mat1_arr[i]);
  //       console.log("ind j:", j, "val:", mat2_arr[j]);
  //       // continue;
  //     }
  //     else {
  //       found = false;
  //     }
  //   }
  // }
  // return found;
  var i = 0, j = 0;
  while (i < mat2_arr.length) {
    while (j < mat1_arr.length) {
      console.log("ind i:", i, "val:", mat2_arr[i]);
      console.log("ind j:", j, "val:", mat1_arr[j]);
      if (mat2_arr[j] == mat1_arr[i]){
        found = true;
        if (i % mat2_width == 0 && j + mat1_width - mat2_width <= mat1_arr.length) {
          j += mat1_width - mat2_width - 1;
        }
        console.log("ind i:", i, "val:", mat1_arr[i]);
        console.log("ind j:", j, "val:", mat2_arr[j]);
        // continue;
      }
      else {
        found = false;
      }
      j++;
    }
    i++;
    console.log(i);
  }
  return found;




}

var mat1 = [ [12, 34, 45, 56],
             [98, 87, 76, 65],
             [56, 67, 78, 89],
             [54, 43, 32, 21], ],

    mat2 = [ [67, 78],
             [43, 32], ];


console.log(matrixSearch(mat1, mat2));
