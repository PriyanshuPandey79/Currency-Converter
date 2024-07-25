import Card from "./Card"
import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom] = useState("usd");
  const [to ,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo =useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  

  function change(){
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    console.log(convertedAmount)
  
  }
 
  function converter(){
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
    <div className="bg-cover bg-center h-screen" style={{backgroundImage:'url("https://images.pexels.com/photos/378442/pexels-photo-378442.jpeg?cs=srgb&dl=dawn-nature-sky-378442.jpg&fm=jpg")'}}>
   <div className="flex items-center justify-center h-full">
   <div className="bg-white h-[50vh] w-[40vw] rounded-xl opacity-80  border-[0.2vw] border-green-900 p-3 space-y-7 ">
    <form
    onSubmit={(e) => {
      e.preventDefault();
      converter()

  }}>
   <Card t={0} action="From" amount={amount} selectedCurrency={from} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)}
   onAmountChange={(amount)=>setAmount(amount)} 
   />
   <button 
        className="bg-green-800 text-white font-bold p-3 w-20 rounded-xl border-white border-2 relative z-20 top-[-2.5vh] ml-64"
         
         onClick={change}>
            
        Swap</button>
   <Card t={-37}  action="To" amount={convertedAmount} selectedCurrency={to} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            
                            />
   <button type="submit"
   className="bg-green-700 text-white font-bold p-2 ml-48 w-64 rounded-md border-2 border-black relative " 
   style={{top:-12}}
  
   >
        Convert {from} to {to}
    </button>
    </form>
   </div>
   </div>
   </div>
    
    </>
  )
}

export default App
