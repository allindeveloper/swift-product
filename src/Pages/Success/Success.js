import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import "./success.scss";
const Success = (props) => { 
    
    
    const [email, setemail] = useState("")
   
  useEffect(() => {
    if(props.location.search){
        const value = decodeURIComponent(props.location.search)
        const splitted = value.split("=")
        if(splitted){
            const email = splitted[1]
            setemail(email)
        }else{
            props.history.push("/")
        }
    }else{
        props.history.push("/")
    }
  }, []);
  return (
    <>
      <div id="success">
        <div class="successcard ">
          <div 
          style={{borderRadius:"200px",height:"200px",width:"200px",background:"#F8FAF5",margin:"auto"}}>
           <img src="https://img.icons8.com/emoji/96/000000/check-mark-emoji.png" style={{marginTop:"25%"}}/> 
          </div>
          <h1>Success</h1>
          <p>
              Hello {email}<br/>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Success);
