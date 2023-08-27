import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css'

function Content() {
    const url="https://jsonplaceholder.typicode.com/users";
    const [data,Setdata]=useState(null);
    useEffect(()=>{
        axios.get(url).then((response)=>{
           Setdata(response.data)
        })

    },[]);

    function handleDelete(id){
      const filterdata=data.filter((e)=>e.id!=id);
      Setdata(filterdata);
      

    };
    function handleEdit(id){
      handleDelete(id);
     const itemindex=(data.findIndex((item)=>{return item.id==id}));
      const filteredit=data.filter((e)=>e.id==id)[0];
      console.log(filteredit)
       window.scrollTo(0,0)
     document.getElementById('name').value=filteredit.name;
     document.getElementById('user-name').value=filteredit.username;
     document.getElementById('email').value=filteredit.email;
     document.getElementById('phone').value=filteredit.phone;
     document.getElementById('inputAddress').value=filteredit.address.street;
     document.getElementById('inputAddress2').value=filteredit.address.suite;
     document.getElementById('inputCity').value=filteredit.address.city;
     document.getElementById('inputZip').value=filteredit.address.zipcode;
      

    };

    function add(event){
      event.preventDefault()
      const id=data.length+1;
      const name=document.getElementById('name').value;
      const username=document.getElementById('user-name').value;
      const email=document.getElementById('email').value;
      const phone=document.getElementById('phone').value;
      const street=document.getElementById('inputAddress').value;
      const suite=document.getElementById('inputAddress2').value;
      const city=document.getElementById('inputCity').value
      const zipcode=document.getElementById('inputZip').value;
      const address={street:street,suite:suite,city:city,zipcode:zipcode};
   const addeduser={id:id,name:name,username:username,email:email,phone:phone,address:address}
data.push(addeduser);
Setdata([...data]);    
document.getElementById("form").reset();

    }

    

  return (
   <>
  
   <div className='form'>
    
   <form className="row g-3 " onSubmit={add} id='form' >
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="user-name" className="form-label">UserName</label>
        <input type="text" className="form-control" id="user-name" required />
      </div>

      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email"  required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="phone" required />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          required
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" required/>
      </div>
      {/* <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <input type="text" className="form-control" id="inputState" />
      </div> */}
      <div className="col-md-6">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" required/>
      </div>
      <div className="col-12 mx-3">
        <button type="submit" className="btn btn-primary">Add a user</button>
      </div>
    </form>
    </div>
    
   
  
    
   
   <div className='d-flex '>
   
   <div className='card-outer'>
   {data?.map((ele)=>(
    
    <div key={ele.id} className='card'>
        <p>Name:{ele.name}</p>
        <p>UserName:{ele.username}</p>
        <p>Email:{ele.email}</p>
        <p>Address:{ele.address.suite},{ele.address.street},{ele.address.city}</p>
         <p>Phone:{ele.phone}</p>  
         <p>Zip:{ele.address.zipcode}</p>
        <div className='button-group'>
            <button className='btn btn-info' onClick={()=>{handleEdit(ele.id)}}>Edit</button>
            <button className='btn btn-danger' onClick={()=>{handleDelete(ele.id)}}>Delete</button>
        </div>
    </div>
    
   ))}
   </div>
   </div>
   
   </>
  )
}

export default Content