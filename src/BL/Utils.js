// Return all possible ways to choose k elements from
// array, returns allowed, order matters.
export function getKs(arr, k) {
    if (k == 1) {
        return arr.map(x => [x])
    }

    let Ks = []
    for (let i = 0; i < arr.length; i++) {
        Ks.push(getKs(arr, k - 1))
        for (let j = 0; j < Ks[i].length; j++) {
            Ks[i][j].push(arr[i])
        }
    }

    let result = []
    Ks.forEach(x => {
        result.push.apply(result, x)
    })
    return result
}

export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
