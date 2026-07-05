
import logo from "./img/Rollger SVG logo 1.png";
import homeicon from "./img/Group 1928.png";
import unbox from "./img/Group 1929.png";
import Battles from "./img/Group 2010.png";
import cashier from "./img/Group 2008.png";
import truck from "./img/Group 2012 (1).png";
import group2011 from "./img/Group 2011.png";
import alarm from "./img/Group 562.png";
import huge from "./img/Group 1987.png";
import spongebob from "./img/Group 558.png";
import leftbar from "./img/Group 2014.png";
import rainpot from "./img/Group 1999.png";
import current from  "./img/Group 1927.png";
import gamemode from  "./img/Group 2526.png";
import car from  "./img/Group 575.png";
import bag from  "./img/Group 576.png";
import shoes from "./img/Group 1990.png";
import head from "./img/Group 1991.png";
import watch from "./img/Group 1992.png";
import three from "./img/Group 1985.png";
import pay from "./img/Group 1941.png";
import B from "./img/Group 1942.png";
import C from "./img/Group 1943.png";
import L from "./img/Group 1944.png";
import visa from "./img/Group 1945.png";
import circle from "./img/Group 1946.png";
import lock from "./img/Group 1947.png";
import p from "./img/Group 1948.png";
import g from "./img/Group 1949.png";
import right from "./img/Group 2013.png";
import './App.css'
function App(){
  return(
    <div className="app">
      <div className="page">
      <header className="navbar">
         <img src={logo} alt="Rollger logo" className="logo"/>
         <img src={homeicon} alt="Home" className="homeicon"/>
         <img src={unbox} alt="unbox" className="unbox"/>
         <img src={Battles} alt="Battles" className="Battles"/>
         <img src={cashier} alt="cashier" className="cashier"/>
         <img src={truck} alt="truck" className="truck"/>
         <img src={group2011} alt="group2011" className="group2011"/>
         <img src={alarm} alt="alarm" className="alarm"/>
         <img src={huge} alt="huge" className="huge"/>
         <img src={spongebob} alt="spongebob" className="spongebob"/>
      </header>
      <div className="container">
        <aside className="leftbar">
          <img src={leftbar} alt="leftbar" className="leftbar"/>

        </aside>
        <main className="main">
        <div className="top">
          <img src={rainpot} alt="rainpot" className="rainpot"/>
          <img src={current} alt="current" className="current"/>
          </div>
          
          <img src={gamemode} alt="gamemode" className="gamemode"/>
          <div className="cards">
          <img src={car} alt="car" className="car"/>
          <img src={bag} alt="bag" className="bag"/>
        </div>
            
        <div className="last">
           <img src={shoes} alt="shoes"className="shoes"/>
           <img src={head} alt="head" className="head"/>
           <img src={watch} alt="watch" className="watch"/>
           <img src={three} alt="three" className="three"/>
        <div className="paymentheader">
           <img src={pay} alt="pay" className="pay"/>

        <div className="paymenttitle">
           <h2>Payment Methods</h2>
        </div>
  </div>
        <div className="paymenticons">
           <img src={B} alt="B" className="B"/>
           <img src={C} alt="C" className="C"/>
           <img src={L} alt="L" className="L"/>
           <img src={visa} alt="visa" className="visa"/>
           <img src={circle} alt="circle" className="circle"/>
           <img src={lock} alt="lock" className="lock"/>
           <img src={p} alt="p" className="p"/>
           <img src={g} alt="g" className="g"/>
        </div>
            <p className="crypto">
              Crypto payments with <span>Bitcoin</span>
            </p>
        <div className="rec">
          <div className="footerlinks">
            <div className="column">
            <h3>GAMES</h3>
            <p>Case Unbox</p>
            <p>Case Battles</p>
          </div>
          <div className="column">
            <h3>REWARDS</h3>
            <p>Rakeback</p>
            <p>Daily Cases</p>
            <p>Chat Rains</p>
            <p>Free Play</p>
          </div>
          <div className="column">
            <h3>SOCIALS</h3>
            <p>Twitter</p>
            <p>Discord</p>
            <p>Blog</p>
          </div>

          <div className="column">
            <h3>FEATURES</h3>
            <p>Affiliates</p>
            <p>Leaderboard</p>
            <p>Self Exclusion</p>
          </div>
          <div className="column">
            <h3>INFO</h3>
            <p>Frequent Questions</p>
            <p>Terms of Service</p>
            <p>Provably Fair</p>
          </div>

    </div>

    </div>

            <p className="footer">
               Roller is a brand name of Omnifarious Services Limited, Reg No: HE 389117, Having it's registered address at 1, Avlonos, Maria House, Nicosia, 1075 Cyprus
            </p>

        </div>
        </main>


        <aside className="rightbar">
          <img src={right} alt="right" className="right"/>
        </aside>
         
      </div>
     
    </div>
    </div>
 );
}
export default App;
