// type NumberArr = number[];

// function getFirstelement(arr: (string | number)[]) {
//     return arr[0];
// }

// let ans1=getFirstelement([1,2,3]);
// let ans2=getFirstelement(["one", "two", "three"]);
// console.log(ans1);
// console.log(ans2);

function swap<T , U>(a:T , b:U) :[U , T] {
    return [b,a];
}
let ans1= swap(1, "one")
let ans2= swap("one" , 1 )


 