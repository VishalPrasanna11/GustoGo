import mobileimg from "../assets/mobile.png";
import appimg from "../assets/app.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white round-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
       <h1 className="text-5xl font-bold tracking-tight" style={{color:"#0A0A0A"}}> 
       Savor the Flavor, Wherever You Are!
       </h1>
       <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
      <img src={mobileimg}/>
      <div className="flex flex-col gap-5 items-center justify-center text-center">
        <span className="font-bold text-3xl tracking-tighter">
            Order from your favorite restaurants
        </span>
        <span>
            Download the app now!
        </span>
        <img src={appimg}/>

    </div>
    </div>
    </div>
  );
}   
export default HomePage;