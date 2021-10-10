import circles from '../Images/pattern-circles.svg'
function Header(){
    return(
        <div className="flex flex-col mt-1 mb-10 bg-Circle-Background bg-no-repeat bg-center">
            <div className="flex flex-col justify-center font-extrabold my-14 text-center">
                <p className=" text-2xl">Simple, traffic-based pricing</p>
                <p className="text-Grayish-Blue text-xs">Sign-up for our 30-day trial. No credit card required</p>
            </div> 
        </div>
    );
}
export default Header;