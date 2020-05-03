export const dataArrayToObject = (dataArray) => {
    let data = {}
    dataArray && dataArray.forEach(d => {
        data[d.elementId] = d.content
    });
    return data;
}

export const dataObjectToArray = (dataObject) => {
    return Object.entries(dataObject).map(([key, value]) => {
        return {
            elementId: key,
            content: value
        }
    });
}

// const combinations = (A, k) => {
// 	let n = A.length
// 	let res = [];
// 	if (k > n) {
// 		return res
// 	} else if (k === n) {
// 		res.push(A)
// 		return res
// 	}
// 	let indices = Array.from({ length: k }, (_, i) => i);
// 	res.push(indices.map(i => A[i]));
// 	let iter = 0
// 	while (iter < 20) {
// 		for (var i in Array.from({ length: k }, (_, i) => i).reverse()) {
// 			if (indices[i] != i+n-k) {
// 				break
// 			} else {
// 				return res
// 			}
// 			indices[i] = indices[i]+1;
// 			for (var j; j>=i+1 && j<k; j++) {
// 				indices[j] = indices[j-1]+1;
// 			}
// 			res.push(indices.map(i => A[i]));
// 		}
// 		console.log(iter);
// 		iter++;
// 	}
// 	return res
// }

// console.log(combinations(["A", "B", "C", "D"], 3))

/* def combinations(A, r):
    pool = tuple(A)
    n = len(pool)
    res = []
    if r > n:
        return res
    indices = list(range(r))
    res.append(tuple(pool[i] for i in indices))
    while True:
        for i in reversed(range(r)):
            if indices[i] != i + n - r:
                break
        else:
            return res
        indices[i] += 1
        for j in range(i+1, r):
            indices[j] = indices[j-1] + 1
        res.append(tuple(pool[i] for i in indices))
    return res */