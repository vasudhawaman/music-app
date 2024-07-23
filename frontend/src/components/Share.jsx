import React from "react"
import {
    EmailShareButton,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
   
  } from "react-share";
 
export default function Share({shareUrl}){
      
           return(
            <div id="share" className="text-white text-base h-12 w-56 bg-white flex flex-row hidden">
            <EmailShareButton url={shareUrl} size={32}>
             <img src='./emailLogo.webp' className="h-8 w-8 m-2" />
             </EmailShareButton>
             <WhatsappShareButton url={shareUrl} size={32} >
             <img src='./whatsapp.jpg' className="h-8 w-8 m-2"/>
            </WhatsappShareButton>
            <TelegramShareButton url={shareUrl} size={32}>
            <img src='./telegramLogo.png' className="h-8 w-8 m-2"/>
            </TelegramShareButton>
            <TwitterShareButton url={shareUrl} size={32}>
            <img src='./twitter.png' className="h-8 w-8 m-2"/>
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} size={32}>
            <img src='./facebookIcon.svg' className="h-8 w-8 m-2"/>
            </FacebookShareButton>
            </div>
           )
  }