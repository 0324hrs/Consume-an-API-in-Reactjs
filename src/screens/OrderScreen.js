import React,{useState} from "react";
import swal from 'sweetalert'
import './Orders.css'

function OrderScreen() {
    const[name,setname]=useState('')
    const[phone,setphone]=useState('')
    const[registration,setregistration]=useState('')
    const[food,setfood]=useState('')
    const[room,setroom]=useState('')

    function validate(event){
        event.preventDefault();

        // eslint-disable-next-line no-sequences
        if(name==='maina',phone==='0701539466',registration==='CIT-223-004/2020',
        food==='chapo beans',room==='block C room 85')
        {
            swal('congratulations','food ordered!','success')
        }
        else
        {
            swal('failed','food not ordered','error')
        }

    }


    return <div className='row justify-content-center'>
        
        <div className='col-md-4'>

            <form onSubmit={validate}>
               <h1>Order your food!</h1>
               <label for="username">Username</label>
               <input type="text" placeholder='Name' className='form-control' value={name}
               onChange={(e)=>{setname(e.target.value)}} />

           
               <label for="">Registration Number</label>

               <input type="text && number" className="form-control"  placeholder="Registration Number"
               value={registration} onChange={(e)=>{setregistration(e.target.value)}}/>

              <label For="email">Food and quantity</label>

              <input type="text" placeholder='add food' className='form-control'
              value={food} onChange={(e)=>{setfood(e.target.value)}} />

              <label For="phone">Phone Number</label>

              <input type="number" placeholder='phone number' className='form-control' value={phone}
              onChange={(e)=>{setphone(e.target.value)}} />

              <label For="number">Room number</label>

              <input type="text && number" placeholder="block and room number" className='form-control'
              value={room} onChange={(e)=>{setroom(e.target.value)}} />

              <br />
              <p style={{fontWeight:'bold'}}>payment done on delivery</p>
              <p style={{fontWeight:'bold'}}>delivery done after 10-20 minutes</p>
  
        
             <button className='btn btn-primary'>order food</button>
            </form>
        </div>
        
    </div>
}

export default OrderScreen;