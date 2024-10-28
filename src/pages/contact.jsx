import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Contact({ theme }) {
  const { user, isAuthenticated, loginWithRedirect , logout} = useAuth0();
  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject:"",
    Message: ""

  })
  let name , value
  const data =(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser(({ ...users, [name]: value }))
  }
  const senddata = async(e) =>{
const{name,email,Subject,Message}= users
e.preventDefault();
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body: JSON.stringify({name,email,Subject,Message})

}
const res = await fetch('https://e-commerce-903d3-default-rtdb.firebaseio.com/Message.json', options)
      console.log(res)
      if(res){
        alert("Your Message Sent")
      }else{
        alert("An error occured")
      }
  }

  return (
    <div className={`mt-[180px] py-20 h-full px-10 font-sans border-box ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`py-[30px] px-[40px] w-full  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} `}>
        <h1 className={`md:text-3xl text-2xl whitespace-nowrap font-bold  uppercase  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}># Contact us</h1>
        <div>
          <form action="POST" className={`py-[30px] px-[40px]  flex justify-center items-center flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} onSubmit={senddata}>
            <input className={`py-[10px] px-[30px] outline-none border-b border-black md:w-[350px] w-[250px] mt-[20px]  ${theme === 'dark' ? 'bg-black text-white border border-white' : 'bg-white text-black'}`} type="text" name="Name" value={users.Name} placeholder="Enter Your Full Name" required autoComplete="off" onChange={data} />
            <input className={`py-[10px] px-[30px] outline-none border-b border-black md:w-[350px] w-[250px] mt-[20px]  ${theme === 'dark' ? 'bg-black text-white border border-white' : 'bg-white text-black'}`} type="email" name="Email" value={users.Email} placeholder="Enter Your E-mail" required autoComplete="off" onChange={data} />
            <input type="text" className={`py-[10px] px-[30px] outline-none border-b border-black w-[250px] md:w-[350px] mt-[20px]  ${theme === 'dark' ? 'bg-black text-white border border-white' : 'bg-white text-black'}`} name="Subject" value={users.Subject} placeholder="Enter Your Subject" required autoComplete="off" onChange={data} />
            <textarea className={`py-[10px] px-[30px] outline-none border-b border-black w-[250px] md:w-[350px] mt-[20px]  ${theme === 'dark' ? 'bg-black text-white border border-white' : 'bg-white text-black'}`} name="Message" value={users.Message} placeholder="Enter Your Message" required autoComplete="off" onChange={data} />
            {
              isAuthenticated ?
              <button type="submit" className={`mt-[30px] py-[10px] px-[30px] ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}  onClick={senddata} >Send</button>
              :
              <button type="submit" className={`mt-[30px] py-[10px] px-[30px] ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}  onClick={()=>loginWithRedirect()} >Login To Send</button>
            }
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
