
function Header(){
    return(
        <div className="flex flex-col mt-1 mb-4 bg-Circle-Background bg-no-repeat bg-center">
            <div className="flex flex-col justify-center font-extrabold my-14 text-center">
                <p className="text-xl pb-3 sm:text-2xl">Simple, traffic-based pricing</p>
                <div className="flex flex-col justify-center sm:flex-row">
                    <p className="text-Grayish-Blue text-xs pb-3">Sign-up for our 30-day trial.</p>
                    <p className="text-Grayish-Blue text-xs">No credit card required</p>
                </div>
            </div> 
        </div>
    );
}
export default Header;