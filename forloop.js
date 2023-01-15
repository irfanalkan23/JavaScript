let fruits = ['Apple','Banana','Grapes']
let x
for(x in fruits){
    console.log(x)  //1 2 3
}

for(x in fruits){
    console.log(fruits[x])  //Apple Banana Grapes
}

for(x of fruits){
    console.log(x)  //Apple Banana Grapes
}