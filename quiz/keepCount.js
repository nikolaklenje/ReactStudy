export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    
    const [zero, zeroFunc] = React.useState(0)
    function minusClick(){
    
        zeroFunc(zero-1)
    }
    function plusClick(){
        zeroFunc(zero +1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusClick}>–</button>
            <div className="counter--count">
                <h1>{zero}</h1>
            </div>
            <button className="counter--plus" onClick={plusClick}>+</button>
        </div>
    )
}
