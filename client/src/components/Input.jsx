import { useState } from "react";

export default function inputField() {
  const [input, setInput] = useState("");
  const [request, setRequest] = useState("")
  return (
   <>
    <form action="" className="flex flex-col items-center space-y-1 border p-4"  onSubmit={(e) => {
        e.preventDefault()
        console.log(input)
        
    
        }}>
        <div className="space-x-3">
            <label htmlFor="input">Input field</label>
            <input
                type="text"
                id="input"
                name="input"
                className="border rounded"
                value={input}
                onChange={(e) => {
                setInput(e.target.value);
                console.log(input);
                }}
            />
        </div>
        <div className="space-x-3">
            <label htmlFor="request-select">Request type</label>
            <select value = {request} name="request" id="request-select" className="border rounded" onChange={ (e) =>
              {
                setRequest(e.target.value)
                }
            }>
                <option value="Get">Get</option>
                <option value="Post">Post</option>
                <option value="Put">Put</option>
                <option value="Delete">Delete</option>
            </select>

        </div>
        <input
            type="submit"
            className="hover:cursor-pointer border rounded mt-2 p-1"
            value={"Send call"}
            />
        
    </form>
    <div>
        <p className="text-2xl">{input}</p>
    </div>
   </>
   

  );
}
