let n=6;
let str=''

for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
      if(i===0){

          str+='*'
      }
      else{
        if(j===0){
            str+='*'
        }
        else{
            str+=j+'*'
        }
      }
       
    }
    str+='\n'
}
console.log(str);
