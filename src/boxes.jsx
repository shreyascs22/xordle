function Boxes(){
    return(
        <div className="h-screen flex justify-center items-center">
            <div class="grid grid-cols-5 grid-rows-6 gap-3 w-1/6">
                {Array.from({ length: 30 }, (i, index) => (
                    <input type="text" maxLength={1} className="w-10 h-10 border-black font-mono text-center text-2xl font-bold uppercase"></input>
                ))}
            </div>
        </div>
    )
}
export default Boxes;