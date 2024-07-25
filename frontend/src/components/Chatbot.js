import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FaCompactDisc } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { GoogleGenerativeAI } from "@google/generative-ai"

const Chatbot = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'incoming', text: 'Welcome to Musicify. How can I help you?' },
    ]);
    const [newMessage, setNewMessage] = useState('');
    const chatboxRef = useRef(null);
    const chatInputRef = useRef(null);
    const inputInitHeight = useRef(0);

    const genAI = new GoogleGenerativeAI('AIzaSyBwSVCcrnno9QvKZ6kdApqbpaFf177_BQw');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    const createChatLi = (message, className) => {
        return { type: className, text: message };
    };

    const generateResponse = async (userMessage) => {
        try {
            const prompt = userMessage;
            const result = await model.generateContent([prompt]);

            const message = result.response.text();
            setMessages((prevMessages) => [...prevMessages, createChatLi(message, 'incoming')]);
            chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
        } catch (error) {
            const errorMessage = 'Oops! Something went wrong. Please try again.';
            setMessages((prevMessages) => [
                ...prevMessages,
                createChatLi(errorMessage, 'incoming error'),
            ]);
        }
    };

    const handleChat = () => {
        const userMessage = newMessage.trim();
        if (!userMessage) return;

        setMessages((prevMessages) => [...prevMessages, createChatLi(userMessage, 'outgoing')]);
        setNewMessage('');
        chatInputRef.current.style.height = `${inputInitHeight.current}px`;
        chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

        setTimeout(() => {
            chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
            generateResponse(userMessage);
        }, 600);
    };

    useEffect(() => {
        inputInitHeight.current = chatInputRef.current.scrollHeight;
    }, []);

    useEffect(() => {
        const handleEnterPress = (e) => {
            if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
                e.preventDefault();
                handleChat();
            }
        };

        const chatInput = chatInputRef.current;
        chatInput.addEventListener('keydown', handleEnterPress);
        return () => {
            chatInput.removeEventListener('keydown', handleEnterPress);
        };
    }, [newMessage]);

    useEffect(() => {
        if (showChatbot) {
            document.body.classList.add('show-chatbot');
        } else {
            document.body.classList.remove('show-chatbot');
        }
    }, [showChatbot]);

    return (
        <>
            <button className={`chatbot-toggler ${showChatbot ? 'show-chatbot' : ''}`} onClick={toggleChatbot}>
                <span className="material-symbols-rounded"><FaCompactDisc style={{ height: '40px', width: '40px', marginTop: '5px' }} className='logo' /></span>
                <span className="material-symbols-outlined"><FaCompactDisc style={{ height: '40px', width: '40px', marginTop: '5px' }} className='logo' /></span>
            </button>
            <div className={`chatbot `}>
                <header>
                    <h2>Musicify</h2>
                    <span className="close-btn material-symbols-outlined" onClick={toggleChatbot}><ImCancelCircle /></span>
                </header>
                <ul className="chatbox" ref={chatboxRef}>
                    {messages.map((message, index) => (
                        <li key={index} className={`chat ${message.type}`}>
                            {message.type === 'incoming' && <span className="material-symbols-outlined"><FaCompactDisc style={{ height: '30px', width: '30px' }} /></span>}
                            <p>{message.text}</p>
                        </li>
                    ))}
                </ul>
                <div className="chat-input">
                    <textarea
                        ref={chatInputRef}
                        placeholder="Enter a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        spellCheck="false"
                        required
                    ></textarea>
                    <span id="send-btn" onClick={handleChat}>Send</span>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
