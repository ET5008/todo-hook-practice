import { useState } from "react";

export default function inputField() {
  const [input, setInput] = useState("");

  return (
   <>
    <form action="" className="flex flex-col items-center space-y-1 border p-4"  onSubmit={(e) => {
        e.preventDefault()
        console.log(input)
        
    
        }}>
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
