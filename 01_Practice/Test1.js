let myDate = new Date();

console.log(myDate); // 2023-10-30T02:28:16.039Z
console.log(myDate.toDateString()); // Mon Oct 30 2023
console.log(myDate.toLocaleDateString()); // 10/30/2023
console.log(myDate.toLocaleString()); // 10/30/2023, 2:29:18 AM


console.log(myDate.getTime()); // 1698632958716
console.log(myDate.toLocaleString('default',{
    day:'numeric'
})); // 30