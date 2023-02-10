import { filterData } from "../constant/helper";
 export const ProcessData = (Data)=>{
  let array = [];
  let Datas = JSON.parse(Data)
  Datas?.forEach((item) => {
    
    const id = item.id;
    const propertyType = JSON.parse(item.propertyType);
    const transactionType = JSON.parse(item.transactionType);
    const location = JSON.parse(item.location);
    const details = JSON.parse(item.details);
    array.push({ id, propertyType, transactionType, location, details });
  });

const CommercialLand = filterData(array, 7,);
 const CommercialOffice = filterData(array, 6);
 const IndustrialLand = filterData(array, 10);
 const CommercialBuilding = filterData(array, 8);
 const MeetingRoom = filterData(array, 13);
 const PrivateOffice = filterData(array, 12);
 const CoWorkingSpace = filterData(array, 11);
 const CommercialShop = filterData(array, 5);
 const IndustrialBuilding = filterData(array, 9);
 const allData = [
    {
      CommercialLand,
      CommercialOffice,
      indestrialLand: IndustrialLand,
      CommercialBuilding,
      MeetingRoom,
      PriviteOffice: PrivateOffice,
      CoWorkingSpace,
      CommercialShop,
      IndestrialBuilding: IndustrialBuilding,
    },
  ];
return allData
}