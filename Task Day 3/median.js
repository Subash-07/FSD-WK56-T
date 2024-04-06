function main() {
    let arr1 = [1, 4, 5, 6, 10];
    let arr2 = [2, 3, 4, 5, 7];
   
    let n = arr1.length;
   
    let median = getMedian(arr1, arr2, n);
   
    console.log("Median is " + median);
   return 0;
}
   main();
