import { useState } from 'react';
import Spinner from '../components/spinner/spinner.component';
import styles from '../styles/admin.module.scss';
import { 
  API_URL
} from '../global-variables';

const Admin = () =>{
  const [password, setPassword] = useState("");
  const [authRequestStatus, setAuthRequestStatus] = useState(null);
  const [authRequestErrMsg, setAuthRequestErrMsg] = useState(null);
  const [emails, setEmails] = useState([]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const authenticate = async () => {
    try {
      setAuthRequestStatus("pending");
      let auth = Buffer.from(`${'admin'}:${password.trim()}`).toString('base64');
      const res = await fetch(`http://localhost:8000/emails/`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Basic ${auth}`
        },
      });
      if(!res.ok){
        if(res.status == 401){
          setAuthRequestStatus("failure");
          setAuthRequestErrMsg("Unauthorized");
        }else{
          setAuthRequestStatus("failure");
          setAuthRequestErrMsg("Sorry, an internal error has occurred. Please try again later.");
        }
      }else{
        setAuthRequestStatus("success");
        const emails = await res.json();
        responseEmailsToEmailsArray(emails)
   
      }
    } catch (err) {
      setAuthRequestStatus("failure");
      setAuthRequestErrMsg("Sorry, an internal error has occurred. Please try again later.");
      return
    }
  }

  const responseEmailsToEmailsArray = (responseEmails) => {
    const emails = []
    for(const responseEmail of responseEmails){
      emails.push(responseEmail["value"])
    }
    setEmails(emails);  
  }

  return (
    <div className={styles['main-container']}>
      <div className={styles['password-input-container']}>
        {authRequestStatus === "success" ? null:
          <div>
            <input type='password' className={styles['password-input']} placeholder='Password' onChange={(e) => {handlePasswordChange(e)}}/>
            <button onClick={authenticate}>Ok</button>
          </div>
        }
        { authRequestStatus === "pending" ? <Spinner/>:
          authRequestStatus === "success" ? null:
          authRequestStatus === "failure" ? <div>{authRequestErrMsg}</div>:null}
      </div>
      {
            emails.length > 0 ? emails.map((value, index)=>{
              return <div key={index}>{value}</div>
            }):null
      }
    </div>
  )
}

export default Admin;