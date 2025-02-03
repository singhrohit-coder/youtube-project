import ChatMessage from "./ChatMessage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
import { IoSend } from "react-icons/io5";

const LiveChat = () => {

    const [sendMessage, setSendMessage] = useState("");

    const dispatch = useDispatch();
    // subscribing the store
    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect (() => {
        const i = setInterval(() => { 
            // API POlling
            //console.log("API Polling");
            // Dispatch the action
            dispatch(
                addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20),
            })
        );
        }, 500);
        // clear interval or garbage collection
        return () => setInterval(i);
    }, []);

    return (
        <>
        <div className="ml-4 border border-box border-black h-[400px] w-[400px] rounded-lg bg-slate-100 flex flex-col">
            {/* Heading */}
        <div className="p-2 font-bold text-lg">Top Chat </div>
        <hr className="border-gray-300 mb-2" /> 
        {/* chat messages */}
        <div className="overflow-y-auto flex flex-col-reverse h-full">
            {chatMessage.map((c, i) => (
                <ChatMessage key={i}
                name={c.name}
                message={c.message} />
            ))
            }
            </div>
            </div>
            {/* chat box */}
            <form className="flex items-center border-t border-gray-300 p-2 bg-gray-50"
            onSubmit={(e)=> {
                e.preventDefault();
                console.log("ON FORM SUBMIT", sendMessage);
            }}
            >
                <input
                    type="text"
                    value={sendMessage}
                    onChange={(e) => {
                        setSendMessage(e.target.value);
                    }}
                    placeholder="Say something..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="ml-2 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">
                    <IoSend className="w-5 h-5" />
                </button>
            </form> 
            </>
    );
};

export default LiveChat; 