function display(numbers) {
  numbers.forEach(async (num) => {
    const dis = await promise(num);
    console.log(dis);
  });
}

display(nums);

// numbers.forEach(nimb => {
//     display(nimb).then(result => console.log(result))
//         .catch(error => console.log(error));
// });