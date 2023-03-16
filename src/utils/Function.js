export const upperFirstLetter=(sample="")=>{
    let word=sample.split(" ")
  
    console.log(word)
   
 
let newWord=[]

    for(let i=0; i<word.length; i++){

let tempWord=""
        for(let j=0; j<word[i].length; j++){
            if(j===0){
                tempWord +=word[i][j].toLocaleUpperCase("tr-TR")
             }else{
                    tempWord +=word[i][j].toLocaleLowerCase("tr-TR")
                  }
                 }
                 newWord.push(tempWord)


    }
    const  newSample = newWord.join(" ")
    
    return newSample
}
