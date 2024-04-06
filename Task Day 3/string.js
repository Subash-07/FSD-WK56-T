const str = "geeks for geeks";
let titleCase = "";
str.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
console.log(titleCase);

