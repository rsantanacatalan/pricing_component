import { useState, useEffect } from 'react';
import check from '../Images/icon-check.svg';
import Slider from './Slider';
import ToggleBilling from './ToggleBilling';
function PricingContainer(){

    const [price, setPrice] = useState(40);
    const [yearly, setYearly] = useState(false);
    const [monthly, setMonthly] = useState(price)
    const Discount = () => {
        if(yearly)
        {
            setMonthly(price)
            setPrice(currentPrice => {
                let discount = (currentPrice*12) - (currentPrice*12*0.25);
                return discount.toFixed(0);
            })
        }
        else
        {
            setPrice(monthly)
        }
    }   
    
    useEffect(() => {
        Discount();
    }, [yearly])

    return(
        <div className="flex flex-col gap-10 bg-Component-Background shadow-xl rounded-lg pb-5 pt-10 px-10">
            <div className="flex flex-row justify-between">
                <div className="flex items-center ">
                    <p className=" tracking-widest text-sm text-Grayish-Blue">100k PAGEVIEWS</p>
                </div>  
                <div className="flex box-content">
                    <h3 className="text-4xl  font-extrabold">${price}.00</h3>
                    <p className="text-sm text-gray-600 my-auto Manrope text-Grayish-Blue p-1">/ {yearly? 'year':'month'} </p>
                </div>
                
            </div>
            <div className="">
                <Slider currentPrice={price} updateMainPrice={setPrice} resetYearly={setYearly}/>
            </div>
            
            <div className="flex justify-end  ml-10 mr-5">
                <div className="px-1 text-Grayish-Blue">
                    <label className="text-xs px-3">Monthly Billing</label>
                    <ToggleBilling id="yearly" checked={yearly} onChange={setYearly} />
                    
                    <label className="text-xs pl-1 pr-1">Yearly Billing</label>
                </div>
                <div className="bg-Light-Grayish-Red text-center px-2 rounded-full">
                    <label className=" text-xs text-Light-Red">25% discount</label>  
                </div>
                <hr className=""></hr>
            </div>
            <hr className="box-border -mx-10"></hr>
            <div className="flex flex-row text-xs gap-2 items-center justify-between">
                <div className="flex text-Grayish-Blue ">
                    <div>
                        <div className="flex items-center"> 
                            <span className="mr-2 my-2">
                                <img title="hola" src={check} className=" "/>
                            </span>
                            <label className="inline-block">Unlimeted websites</label>
                        </div>
                        <div className="flex items-center"> 
                            <span className="mr-2 my-2">
                                <img title="hola" src={check} className=" "/>
                            </span>
                            <label className="inline-block">100% data ownership</label>
                        </div>
                        <div className="flex items-center"> 
                            <span className="mr-2 my-2">
                                <img title="hola" src={check} className=" "/>
                            </span>
                            <label className="inline-block">Email reports</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-Dark-Desaturated-Blue text-Pale-Blue px-10 py-3 rounded-full">Start my trial</button>
                </div>
            </div>
            
        </div>
    )
        
    
}
export default PricingContainer;