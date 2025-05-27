let n=5;
sum=" ";
for(i=1;i<=n;i++){
 sum+="* "
 console.log(sum);
}

console.log("===========================");

n=5;

for(i=n;i>=1;i--){
    sum="";
    for(j=i;j>=1;j--){
        sum+="* ";
    }
    console.log(sum);
}

console.log("===============================");

n=5;
let gap="";

for(i=n;i>=1;i--){
    res="";
    for(j=i;j>=1;j--){
        res+="* ";
        
    }
   let  result=gap+res;
    console.log(result);
    gap+=" ";
}

console.log("===============================")
n=5;
gap="";

for(i=n;i>=1;i--){
    res="";
    for(j=i;j>=1;j--){
        res+="* ";
        
    }
   let  result=gap+res;
    console.log(result);
    gap+=" ";
}

console.log("===============================");

n=5;
gap="";


for(i=n;i<0;i++){
    star="";
    for(j=n;j>=i;j++){
       star+="* "; 
        
    }
    result=gap+star;
  console.log(result);
  gap+=" "
}