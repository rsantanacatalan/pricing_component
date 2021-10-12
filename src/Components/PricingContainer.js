import { useState, useEffect } from 'react';
import check from '../Images/icon-check.svg';
import Slider from './Slider';
import ToggleBilling from './ToggleBilling';
function PricingContainer(){

    const [price, setPrice] = useState(40);
    const [yearly, setYearly] = useState(false);
    const [monthly, setMonthly] = useState(price);
    const Discount = () => {
        if(yearly)
        {
            setMonthly(price)
            setPrice(currentPrice => {
                let discount = (currentPrice*12) - (currentPrice*12*0.25);
                return discount.toFixed(0)*1;
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
        <div className="flex flex-col gap-10 bg-Component-Background shadow-xl rounded-lg pb-5 pt-10 px-10 mx-4">
            <div className="flex flex-col  items-center sm:justify-between sm:flex-row">
                <div className="flex justify-center">
                    <p className=" tracking-widest text-sm text-Grayish-Blue">100k PAGEVIEWS</p>
                </div>    
                <div className="justify-center hidden sm:flex ">
                    <h3 className="text-4xl font-extrabold">${price}.00</h3>
                <p className="text-sm text-gray-600 my-auto Manrope text-Grayish-Blue p-1">/ {yearly? 'year':'month'} </p>
            </div>  
            </div>
            
            <div className="">
                <Slider currentPrice={price} updateMainPrice={setPrice} resetYearly={setYearly}/>
            </div>
            <div className="flex justify-center sm:hidden">
                <h3 className="text-4xl  font-extrabold">${price}.00</h3>
                <p className="text-sm text-gray-600 my-auto Manrope text-Grayish-Blue p-1">/ {yearly? 'year':'month'} </p>
            </div>
            <div className="flex flex-row justify-end sm:ml-10 sm:mr-5 ">
                <div className="flex px-1 text-Grayish-Blue items-center">
                    <label className="text-xs sm:px-3">Monthly Billing</label>
                    <ToggleBilling id="yearly" checked={yearly} onChange={setYearly} />
                    
                    <label className="text-xs sm:pl-1 sm:pr-1">Yearly Billing</label>
                </div>
                <div className="flex bg-Light-Grayish-Red text-center px-2 py-0.5 sm:px-2 rounded-full">
                    <label className=" text-xs text-Light-Red flex sm:hidden">-</label>
                    <label className=" text-xs text-Light-Red">25%</label>
                    <label className=" text-xs text-Light-Red hidden sm:flex">discount</label>  
                </div>
               
            </div>
            <hr className="box-border -mx-10"></hr>
            <div className="flex flex-col sm:flex-row text-xs gap-2 items-center sm:justify-between">
                <div className="flex text-Grayish-Blue text-center">
                    <div className="flex flex-col pb-5 sm:pb-1">
                        <div className="flex items-center justify-center sm:justify-start"> 
                            <span className="mr-2 my-2">
                                <img alt=" " title="hola" src={check} className=" "/>
                            </span>
                            <label className="inline-block">Unlimeted websites</label>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start"> 
                            <span className="mr-2 my-2">
                                <img alt=" " title="hola" src={check} className=" "/>
                            </span>
                            <label className="inline-block">100% data ownership</label>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start"> 
                            <span className="mr-2 my-2">
                                <img alt=" " title="hola" src={check} className=" "/>
                            </span>
                            <label className="inline-block">Email reports</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pb-3 sm:pb-0">
                    <button className="bg-Dark-Desaturated-Blue text-Pale-Blue px-10 py-3 rounded-full hover:text-White-hover">Start my trial</button>
                </div>
            </div>
            
        </div>
    )
        
    
}
export default PricingContainer;