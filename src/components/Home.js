import React, { useEffect, useState } from 'react'



const Home = () => {
  const API=`https://jsonplaceholder.typicode.com/users`
  const [user,setUser]=useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id,setId]=useState("")
  

  useEffect (()=> {
    const getData=async()=>{
        //   fetch(API).then((response)=>
        //   response.json()
        //   )
        //   .then((data)=> 
        //   console.log(data)
          
        //   )
        const response=await fetch(API);
        const data=await response.json();
        console.log(data)
        // console.log(data[0].name)
        
        setUser(data)

    
      }
    getData();
   }, []);
 

 //console.log(user)



  const handleSubmit=async(e)=>{
    e.preventDefault();
    alert('clicked')
//     let res = await fetch(API, {
//   method: "POST",
//   body: JSON.stringify({
//     name: name,
//     email: email,
    
//   }).then(response=>  console.log('response',response) )
// });
//    let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         alert("dsfdsaf")       
//       } else {
        
//       }
         const data={
          name: name,
          email: email,
          id:id
          
        }
         fetch(API,{
          method:data.id?'PUT':'POST',
          headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
          },
            body: JSON.stringify(data)
         }).then(response=> {
          setName('')
          setEmail('')
          setId('')
          console.log(response)
        })
    }
  const handleDelete=()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/:id`, { method: 'DELETE' })
    .then((res)=>{
      console.log(res);
      alert('deleted')})
      
  }
  

  return (
    <div>
      <div style={{fontSize:'4rem'}}>
      Contact List

      </div>
       
        <form onSubmit={handleSubmit} style={{padding:"2rem"}}>
        <label> id</label>
            <input type='number' name='id' value={id}  onChange={(e) => setId(e.target.value)}></input>
            <label> name</label>
            <input type='text' name='name' value={name}  onChange={(e) => setName(e.target.value)}></input>
            <label> number</label>
            <input type='number' name='email' value={email}  onChange={(e) => setEmail(e.target.value)}></input>
            <input type='submit' value='submit'></input>
        </form>
    
           {user.map(person => {
            return (
              <div style={{margin:"auto",backgroundColor:'yellow',width:"40%"}}>
                  <div style={{margin:"0.5rem"}}> name:{person.name}
             <br>
             </br>
             phone:{person.phone}
             <button onClick={()=>handleDelete(id)}>DELETE</button>
             
            
             
           
              </div>
              
              </div>
            
                
              
            )
          })}
        
        
        
    </div>
  )
}

export default Home