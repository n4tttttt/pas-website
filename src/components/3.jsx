import { useEffect, useState } from 'react'
import product from '../images/products.png'
export default function Three(){
    const [number, updatecount] = useState(0)
    const [buy, setbuybool] = useState(false)
    const [total, settotal] = useState(0)
    useEffect(() => {
        if (number < 0) {
            updatecount(0)
        }
        settotal(number * 89000)
        
    }, [number]);
    function confirmation() {
        if (number > 0) {
            setbuybool(true)
        }
    }
    return (
    <>
    <img src={product} alt='product.png' className='productdisplay'/>
        <div className='display'>
            <h1>Eco Tumbler</h1>
            <h1>Beli Disini!</h1>
            <button onClick={()=> updatecount(number - 1)}>-</button>
            <input type='number' value={number} onChange={(e)=> updatecount(e.target.value)}/>
            <button onClick={()=> updatecount(number + 1)}>+</button>
            <h1>Rp. {total}</h1>
            <button onClick={confirmation}>Konfirmasi Bayar</button>
        </div>
    <h1 className='yellow'>Limited Edition</h1>
    {buy && <div className='confirm'>
        <div className='block'>

        </div>
        <div className='block box'>
            
            <div>
                <button onClick={()=> setbuybool(false)} className='X'>X</button>
                <h1>Terima kasih sudah membeli {number} Eco Tumbler!</h1>
                <h1>Total: Rp. {total}</h1>
                <h1 className='motto'>TUMBLER KEREN BUMI JUGA AMAN</h1>
                <button onClick={()=> setbuybool(false)} className='OK'>OK</button>
            </div>
        </div>
        <div className='block'>

        </div>
    </div>}
    </>
    )
}