




import React from 'react'
import { useState } from 'react'

const Home:React.FC = () => {
    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')

        const SendEmail = async (e:React.FormEvent) => {
                e.preventDefault()
                try {
                    const response = await fetch('http://localhost:6009/email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                         body: JSON.stringify({ to, subject, text }),
                    });
                        if(response.ok) {
                            setMessage('User submitted the email successfully')
                        } else {
                            setMessage('Email was not sent successfully')
                        }
                     }catch(error) {
                         setMessage('Email was not sent successfully')
                        }
                 }


  return (
    <>
    
            <div>
                <div><h3>User Email Send Notifications Form</h3></div>
                <form onSubmit={SendEmail}>
                    <div><input onChange={(e) => setTo(e.target.value)} type="email" placeholder="Recipient Email" value={to} /> </div>
                    <div><input onChange={(e) => setSubject(e.target.value)} type="text"placeholder="Subject"value={subject} /></div>
                    <div><textarea onChange={(e) => setText(e.target.value)} placeholder="Message" value={text}/></div>
                    <div><button >Send Email</button></div>
                </form>
            </div>
                <div>
                { message && <p>{message} </p> } 
                </div>

                   
    
    </>
  )
}

export default Home



