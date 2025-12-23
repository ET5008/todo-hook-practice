export default function inputField(){
    return(
        <form action="" className="flex flex-col items-center space-y-1 border p-4">
            <label htmlFor="input">Input field</label>
            <input type="text" id="input" name="input" className="border rounded" />
            <input type="button" className="hover:cursor-pointer border rounded mt-2 p-1" value={'Send call'} />
        </form>
    )
}