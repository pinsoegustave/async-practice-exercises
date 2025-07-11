const nums = [1, 2, 3, 4, 5];

const promise = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 200);
  });
};

//using for...of
async function display(nums) {
    for (const element of nums) {
        const dis = await promise(element)
        console.log(dis);
    }
}
display(nums);

//using forEach method
// function display(numbers) {
//     numbers.forEach(async (num) => {
//         const dis = await promise(num);
//         console.log(dis);
//     });
// }
// display(nums);


// promise(3).then((result) => console.log(result))
//     .catch((error) => console.log(error));