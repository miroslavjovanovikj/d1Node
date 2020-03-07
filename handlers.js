const fs = require('fs');

const readFile=(req, res)=>{
 fs.readFile('studenti.json', 'utf8',(err, data)=>{
   if(err){
     console.log(err)
   }else{
     let json = JSON.parse(data)
     res.send(json)
   }
 })
}

const writeFile = (req,res)=>{
 fs.readFile('studenti.json', 'utf8',(err, data)=>{
   let json =JSON.parse(data);
    const name="name"
   json.push({student:`${req.body.name} ${req.body.lastname}`})
   fs.writeFile('studenti.json', JSON.stringify(json),(err)=>{
     res.send("succes")
   })
 })
}

module.exports ={writeFile, readFile}
