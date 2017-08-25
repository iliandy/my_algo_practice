function dedupe(str) {
	var temp_str = ""; 
    var de_str = "";
	for(let i = str.length - 1; i >= 0; i--){
		if(temp_str.indexOf(str[i]) == -1){
			temp_str += str[i]
			console.log(temp_str)
		}
		// continue;
	}
	for(let i = temp_str.length - 1; i >= 0; i--){
		de_str += temp_str[i];
		console.log(de_str)
	}
	return de_str;
}

// console.log(dedupe("Snaps! crackles! pops!"))

function dedupeII(str){
	var new_str = ""
	for(var x = 0; x < str.length; x++){
		if(str.lastIndexOf(str[x]) == x)
			// console.log(str.lastIndexOf(str[x]))
			new_str += str[x]
	}
	return new_str;
}

// console.log(dedupeII("Snaps! crackles! pops!"))

function first_unique(str){
	for(let i = 0; i < str.length; i++){
		if(str.slice(i+1).indexOf(str[i]) == -1){
			console.log(str.slice(i+1))
			return i;
		}
	}
}

// console.log(first_unique("dog god add"))
// // var str = "Snap! Crackle! Poop!"

function is_permutation(str1, str2){
	if(str1.length != str2.length){
		return false
	}
	for(let i = 0; i < str1.length; i++){
		if(str2.indexOf(str1[i]) == -1){
			return false
		}
	}
	return true
}

// console.log(is_permutation('aaab', 'bbba'))

function permutaionII(str1, str2){
	var arr1 = [];
	var arr2 = [];

	for(var x=0; x < str2.length; x++){
		if(str1.indexOf(str2[x]) == -1){
			return false
		}
		arr1.push(str1[x])
		// console.log('Array 1:', arr1)
		arr2.push(str2[x])
		// console.log("Array 2:", arr2)
	}
	var str1 = arr1.sort().join('')
	// console.log('String 1:', str1)
	var str2 = arr2.sort().join('')
	// console.log('String 2:', str2)
	if(str1 == str2){
		return true;
	} else {
		return false;
	}
}

// console.log(permutaionII('mister', 'stimers'))

function panagram(str){
	var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var lc_str = str.toLowerCase();
	for(let i = 0; i < alpha.length; i++){
		if(lc_str.indexOf(alpha[i]) == -1){
			return false;
		}
	}
	return true
}

// console.log(panagram('How quickly daft jumping zebras vxxx!'))

function all_permutations(str){
	arr = str.split('')
	perm_arr = [];
	for(var i = arr.length - 1; i > 0; i--){
		 var j = Math.floor(Math.random() * arr.length)
		 // console.log('Variable J:', j)
		 var temp = arr[i];
		 // console.log('Array[i]:', arr[i]);
		 arr[i] = arr[j];
		 // console.log('Array[j]:', arr[j])
		 arr[j] = temp;
		 // console.log('Temp:', temp)
		 var new_str = perm_arr.push(arr.join(''))
		 if(perm_arr.indexOf(new_str[i]) == -1){
		 	continue
		 	// return all_permutations(str)
		 }
		 return all_permutations(str)
	}
	return perm_arr
}


// console.log(all_permutations('meat'))

function makeStrPal(str){
	for (var i = 0; i < str.length; i++){
		if(str[i] != str[str.length - 1 - i]){
			if(str[i] == str[str.length - 1 - (i + 1)]){
				return str[str.length-1-i];
			} else {
				return str[i];
			}
		}
	} return "already pal";
}

// console.log(makeStrPal('damnit im mad'))

function uniqueOrder(str){
	var arr = [];
	for(var i = 0; i < str.length; i++){
		if(str[i] != str[i+1]){
			arr.push(str[i])
		}
	} return arr;
}

// console.log(uniqueOrder('AABBCcDAABB'))

function tribonacci(sig, n){
	for(var i = 0; i < n-3; i++){
		sig.push(sig[i] + sig[i+1] + sig[i+2]);
	}
	return sig.slice(0, n);
}
	// if(n == 0){
	// 	sig = [];
	// }
	// if(n == 1){
	// 	sig = [sig[0]];
	// }
	// if(n == 2){
	// 	sig = [sig[0], sig[1]];
	// }
	// for(var x = 0; x < n-3; x++){
	// 	var sum = 0;
	// 	for(var i = 0; i < sig.length; i++){
	// 		sum = sig[sig.length-1] + sig[sig.length-2] + sig[sig.length-3];
	// 	}
	// 	sig.push(sum)
	// } return sig;
// }

// console.log(tribonacci([1,2,3], 10))

function findOdd(n){
	n.sort();
	// console.log(n);
	var count = 1;
	for(let i in n){
		if(n[i] == n[i+1]){
			count++;
		} else {
			continue;
		}
	}
}

// console.log(findOdd([1,2,3,4,5,1,2,3,4,5,2]))

function str2wordArr(str) {
	var arr = [];
	var word = "";
	for (var i = 0; i < str.length; i++){
		if (str[i] != " ") {
			word += str[i];
		} else {
			arr.push(word);
			word = "";
		}
	} arr.push(word);
	return arr;
}

// console.log(str2wordArr("Life is not a drill!"))

function reverseWordOrder(str) {
	return str.split(" ").reverse().join(" ");
}

console.log(reverseWordOrder("This is a test"))