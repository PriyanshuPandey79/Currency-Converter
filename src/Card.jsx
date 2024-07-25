
function Card({t,action,amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions={},
    selectedCurrency="usd",
    amountDisable = false,
    currencyDisable = false,
    className=""
}){
    return(
        <>
        <div className="bg-black h-28 w-[38vw] rounded-xl relative z-10 text-white" style={{top:t }} >
        <div className="ml-4 flex p-2">
            <div>
            <label>{action} </label><br/>
            <input type="number"
            className="bg-gray-800 rounded-lg border-white border-1 mt-5 h-8 text-white" 
            value={amount}
            disabled={amountDisable}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
                
          
            </div>
            <div className="ml-56">
                <label>Currency Type</label> 
                <select  
                className="bg-gray-800 rounded-lg border-white border-1 mt-5 h-8 w-36 text-white"
                disabled={currencyDisable}
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                 
                 {currencyOptions.map((currency) => (
  <option value={currency} key={currency}>
    {currency}
  </option>
))}

                 <option>{currencyOptions[9]}</option>
                </select>
            </div>
        </div>
        </div>
        
        </>
    );
}
export default Card;