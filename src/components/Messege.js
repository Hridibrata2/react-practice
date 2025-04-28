import { useState } from "react";

const Messege = (props) => {
    const [messsege, setMessege] = useState('welcome visitor')
    return <div>
        <h1>{messsege}</h1>
        <button onClick={() => setMessege('Thanks for subscribing') }>Subscribe</button>
    </div> 
  };
  
  export default Messege;
