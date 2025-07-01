// function chunkArray(array,chunkSize) {
//     const result = [];
//     console.log(result);
//     const copy = array.slice();
//     console.log(copy);

// while (copy.length > 0) {
//     result.push(copy.splice(0,chunkSize));
// }
// return result;
// }
// let languages = ['HTML', 'CSS', 'JS'];
// let chunkedLanguages = chunkArray(languages, 1);
// console.log(chunkedLanguages);

function chunkArray(array, chunkSize) {
    const result = [];
    for(let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i+ chunkSize);
        result.push(chunk);
    }
    return result;
}

const languages = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const chunks = chunkArray(languages, 2);

console.log(chunks);
