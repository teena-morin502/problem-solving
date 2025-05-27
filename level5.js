//bubble sort

function bubbleSort(arr){
let n=arr.length-1;
let i,j,temp,swapped;
for(i=0;i<=n;i++){
    swapped=false;
    for(j=0;j<=n-i-1;j++){
    if(arr[j]>arr[j+1]){
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        swapped=true;
    }
    }
}
console.log(arr)
}
bubbleSort([1,7,2,4,8,0,2,4,7])

console.log("=================================================");
// split the value [1,2,3,4,5,6,7,8,9,10] split=3 output =>[[1,2,3],[4,5,6],[7,8,9],[10]]
function List(value,split){
    let arr =[];
    let concatArr=[];
         for(let i=0;i<=value.length-1;i++){
         if(arr.length<=split-1){
           arr.push(value[i]);
          if(arr.length==split){
            concatArr.push(arr); 
             arr=[];
        }else if(i==value.length-1){
             concatArr.push(arr); 
             arr=[];
         }
      } 
     }
     return concatArr;
    }
     console.log(List([1,2,3,4,5,6,7,8,9,10],4))
     console.log(List([1,2,3,4,5,6,7,8,9,10],3))
    console.log(List([1,2,3,4,5,6,7,8,9,10],5))

    console.log("======================================")




    