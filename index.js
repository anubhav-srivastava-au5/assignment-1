const fs =require('fs');

const data=fs.readFileSync('data.json'); //json file with data
const detail=JSON.parse(data); //to convert data to json 
const l=detail.length;        //to get length of array
// console.log(l)

const express=require('express');
const app=express();
const port = 3000;

//get api to sort by age in ascending order

app.get('/arrangebyage',(req,res)=>{
    var i;
    for (i=0;i<l;i++){
        let minElement=i;
        for (j=i+1;j<l;j++){
            if(parseInt(detail[j].Age)<parseInt(detail[minElement].Age)){   //used parseInt to convert string to an integer
                minElement=j;
            }  
        }
        var temp=detail[minElement]                        //swapping
        detail[minElement]=detail[i]
        detail[i]=temp
    }
    res.send(detail); 
})

//get api to provide sum of all the marks

app.get('/totalmarks',(req,res)=>{
    var i,total=0;               //used i to run loop and total to add all the marks.
    for(i=0;i<l;i++){        
        total+=parseInt(detail[i].Marks)   //used parseInt to convert string to an integer so that i can add marks.
    }
    res.send("Sum of all the marks= "+total)
})

app.listen(port,()=>{
    console.log(`server is running at ${port} successfully`)
})
