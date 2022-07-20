import React from "react"

export default function Contact(props){

return(
    <div className="contact-card">
                <img src="./images/mr-whiskerson.png"alt=""/>
                <h3>{props.names}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" alt=""/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png"alt="" />
                    <p>{props.email}</p>
                </div>
            </div>
)}
/*
import React from "react"

// Challenge: fix the bug, now that we've destructured the props object
export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

*/ 