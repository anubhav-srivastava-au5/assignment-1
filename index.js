const fs =require('fs');

const data=fs.readFileSync('data.json');
const detail=JSON.parse(data);

const express=require('express');
const app=express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/arrangebyage',(req,res)=>{
    var i;
       var minElement=detail[0].Age
       for (i=0;i<4;i++){
           var minElement=i;
           for (j=i+1;j<4;j++){
               if(parseInt(detail[j].Age)<parseInt(detail[minElement].Age)){
                minElement=j;
               }  
           }
           var temp=detail[minElement]
           detail[minElement]=detail[i]
           detail[i]=temp
       }
    res.send(detail); 
})
app.get('/totalmarks',(req,res)=>{
    var i,total=0;
    for(i=0;i<4;i++){
        total+=parseInt(detail[i].Marks)
    }
    res.send("Sum of all the marks= "+total)
})

app.listen(port,()=>{
    console.log(`server is running at ${port} successfully`)
})
