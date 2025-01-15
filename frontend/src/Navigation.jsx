import { ShoppingCart } from "lucide-react";
import "./Navigation.css";
import { Link } from "react-router";

function Navigation(props) {


  return (
    <div className="pt-6 pl-10 pb-12">
    <nav className="bg-[#eff5f5] pt-6 pl-10 pr-10 pb-4 flex items-center justify-between rounded-full shadow-lg w-[97%] max-w-[2000px] h-[80px] ">
    
      <div className="flex gap-x-20">
        <a className="font-semibold text-3xl" href="/">
          Mebius
        </a>
        <div className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <a href="/cart" className="flex items-center gap-4 relative">
            <p className="text-lg">{props.cartCount}</p>
            <div className="flex items-center gap-2">
              <ShoppingCart />
              Cart
            </div>
          </a>
        </div>
        {!props.name && (
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className=" text-primary ">
              Sign In
            </Link>
            <Link to="/sign-up" className=" text-primary ">
              Sign Up
            </Link>
          </div>
        )}
        {props.name && <p>Hi, {props.name}</p>}
      
      </div>
    </nav>
    </div>
    
  );
}

export default Navigation;