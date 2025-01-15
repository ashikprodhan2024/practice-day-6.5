const number=[1,8,6,3,2,9,10,20,12,13,15,16,17]

number.sort(function(a, b){
    return a - b;
});
for(let i = 0; i < number.length; i++){
    console.log(number[i])
}