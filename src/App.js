import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navigation,
  SubHeader,
  HeaderDetailContainer,
  Sublistheader,
  ProductListing,
} from "./Components";
import { filterNameData } from "./constant/helper";
import { getAllData } from "./axios/Homepage";
import { ProcessData } from "./Functionality/Homepage";
import {subHeaderData} from './constant/defaultvalue'

function App() {
  const [Data, setData] = useState(null);
  const [AllProcessData, SetAllProcessData] = useState(null);
  React.useEffect(() => {
    getAllData().then((res) => {
      setData(res);
    });
  }, []);
  React.useEffect(() => {
    if (Data) {
      let Result = ProcessData(Data);
      SetAllProcessData(Result);
    }
  }, [Data]);
  let CommercialLand =filterNameData(subHeaderData,"Commercial Land")
  let CommercialShop =filterNameData(subHeaderData,"Commercial Shop")
  let CommercialOffice =filterNameData(subHeaderData,"Commercial Office")
  let CommercialBuilding =filterNameData(subHeaderData,"Commercial Building")
  let IndustrialBuilding =filterNameData(subHeaderData,"Industrial Building")
  let IndustrialLand =filterNameData(subHeaderData,"Industrial Land")
  let CoWorkingSpace =filterNameData(subHeaderData,"Co-working Space")
  let PrivateOffice =filterNameData(subHeaderData,"Private Office")
  let MeetingRoom =filterNameData(subHeaderData,"Meeting Room")
  console.log(AllProcessData, "AllProcessData");
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <SubHeader />
        <HeaderDetailContainer />
        <Sublistheader />
        
        {AllProcessData ?<>
        
          <ProductListing allData={AllProcessData[0]['CommercialLand']} mainData={CommercialLand[0]} />
          <ProductListing allData={AllProcessData[0]['CommercialBuilding']} mainData={CommercialBuilding[0]} />
          <ProductListing allData={AllProcessData[0]['CommercialOffice']} mainData={CommercialOffice[0]} />
          <ProductListing allData={AllProcessData[0]['CoWorkingSpace']} mainData={CoWorkingSpace[0]} />
          <ProductListing allData={AllProcessData[0]['CommercialShop']} mainData={CommercialShop[0]} />
          <ProductListing allData={AllProcessData[0]['IndestrialBuilding']} mainData={IndustrialBuilding[0]} />
          <ProductListing allData={AllProcessData[0]['MeetingRoom']} mainData={MeetingRoom[0]} />
          <ProductListing allData={AllProcessData[0]['PriviteOffice']} mainData={PrivateOffice[0]} />
          <ProductListing allData={AllProcessData[0]['indestrialLand']} mainData={IndustrialLand[0]} />
          </>: <div style={{    display: "flex",
    background: '#f5f7f9',
    justifyContent: "center"}}>
          <img src="/Loading.gif" />
          </div>
        }
      </header>
    </div>
  );
}

export default App;
