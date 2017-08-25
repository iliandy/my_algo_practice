// Andy Li's VCC Coding Challenge Assessment

// 1. Using Node, write a function which takes two integers and multiplies them without using multiplication or division operators, bitwise operations, or loops.

function recMultiply(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return 0;
  }
  else if (num2 < 0) {
    return -num1 + recMultiply(num1, num2+1);
  }
  else {
    return num1 + recMultiply(num1, num2-1);
  }
}

// console.log(recMultiply(3, 8));
// console.log(recMultiply(3, -8));
// console.log(recMultiply(-3, -8));
// console.log(recMultiply(0, -8));


// 2. Write a program to print all permutations of a given string.
// A permutation, also called an “arrangement number” or “order,” is a rearrangement of the elements of an ordered list S into a one-to-one correspondence with S itself. A string of length n has n! permutation.
//
// Below are the permutations of string ABC.
//
// ABC ACB BAC BCA CBA CAB

function perm(arr) {
  var result = [];

  if (typeof arr == "string") {
    arr = arr.split("");
  }

  permArr(arr, arr.length);

  function permArr(arr, len) {
    if (len == 1) {
      result.push(arr.join(""));
    }
    else {
      for (let i = 0; i < len; i++) {
        permArr(arr, len-1);

        if (len % 2 == 1) {
          let temp = arr[0];
          arr[0] = arr[len-1];
          arr[len-1] = temp;
        }
        else {
          let temp = arr[i];
          arr[i] = arr[len-1];
          arr[len-1] = temp;
        }
      }
    }
  }
  return result;
}

// console.log(perm("abc"), perm("abc").length);
// console.log(perm("abcd"), perm("abcd").length);
// console.log(perm(["a", "b", "c"]), perm(["a", "b", "c"]).length);


// 3. Write a function to marshall a javascript object into a JSON String (Do not use JSON.Stringify, roll your own function)

function myJsonStringify(obj){
  var resultArr = [];

  for (let key in obj) {
    let keyValPair = "";
    key = String(key);

    if (typeof obj[key] == "string") {
      val = String(obj[key]);
      keyValPair = `"${key}":"${val}"`;
    }
    else if (typeof obj[key] == "number" || typeof obj[key] == "boolean") {
      val = String(obj[key]);
      keyValPair = `"${key}":${val}`;
    }
    else if (typeof obj[key] == "object") {
      val = obj[key];
      if (val instanceof Array) {
        keyValPair = `"${key}":[${val}]`;
      }
      else {
        val = myJsonStringify(val);
        keyValPair = `"${key}":${val}`;
      }
    }
    resultArr.push(keyValPair);
  }
  resultStr = `{${resultArr.join(",")}}`;
  return resultStr;
}

var obj = {3: 'a', "numVal": 7, "bool": true, 8: [1, 2, 3], "developer": {"fName": "Andy", "lName": "Li", "anotherObj": {"k1": "yep", "k2": [4, 5]}}};

console.log(JSON.stringify(obj));
console.log(typeof JSON.stringify(obj));

console.log(myJsonStringify(obj));
console.log(typeof myJsonStringify(obj));

console.log(JSON.stringify(obj) === myJsonStringify(obj));
