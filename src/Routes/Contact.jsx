import React from 'react'


export default function Contact() {
    return (
        <div style={{height:"100vh", marginLeft:"17%",display:"grid",color:"#3b3b3b", padding:20,background:"#eeeeed", gridTemplateColumns:"25% 48%", textAlign:"left"}}>
            <div style={{fontSize:25}}>Contact</div>
            <div>
                <div style={{fontSize:18, fontWeight:"500"}}>Contact Us</div>
                <p style={{fontSize:15}}>
                For all sales and order enquiries please email us anytime:
                </p>
                <div style={{fontWeight:500}}>sales@modliving.com</div>
                <p style={{fontSize:15}}>or call us Monday - Friday 10am-5.30pm, Saturday and Sunday 11am-5pm 
                    +44 (0)208 533 8024
                </p>
                <br/>
                <br/>
                <div style={{fontSize:18, fontWeight:"500"}}>Visiting our shop by appointment</div>
                <p style={{fontSize:15}}>
                    We are now accepting visitors on a by appointment basis.
                </p>
                <p style={{fontSize:15}}>
                    We have appointment slots seven days a week 11am-5pm, including Saturday and Sunday.
                </p>
                <p style={{fontSize:15}}>
                    To book please get in touch by phone or email, ideally allowing a couple of days notice. 
                    Appointments are for up to 30 minutes and measures are in place for the protection of customers and 
                    staff so there are a few simple rules to follow. 
                    It may be a little different just now but we can still offer friendly one to one help and advice.
                </p>
            </div>
        </div>
    )
}
