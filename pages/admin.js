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
      const res = await fetch(`${API_URL}/emails/`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + Buffer.from(`admin:${password.trim()}`).toString('base64')
        },
      });
      if(res.ok){
        setAuthRequestStatus("success");
        const requestEmails = await res.json();
        setEmails(requestEmailsToEmails(requestEmails));
      }
      else{
        switch(res.status){
          case 401:
            setAuthRequestErrMsg("Unauthorized.");
            break
          default:
            setAuthRequestErrMsg("Sorry, an internal error has occurred. Please try again later.");
            break
        }
        setAuthRequestStatus("failure");
      }
    } catch (err) {
      setAuthRequestStatus("failure");
      setAuthRequestErrMsg("Sorry, an internal error has occurred. Please try again later.");
      console.log(err);
    }
  }

  const requestEmailsToEmails = (requestEmails) => {
    const emails = []
    for (const requestEmail of requestEmails){
      emails.push(requestEmail["value"])
    }
    return emails
  }

  return (
    <div className={styles['main-container']}>
      <div className={styles['password-input-container']}>
        <input type='password' className={styles['password-input']} placeholder='Password' onChange={(e) => {handlePasswordChange(e)}}/>
        <button onClick={authenticate}>Ok</button>
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