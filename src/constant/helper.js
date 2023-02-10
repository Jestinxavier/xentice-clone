export const  filterData = (array,id)=>{
    let data =array.filter(x=>{
    return  x.propertyType.id==id
    })
    return data
  }
export const  filterNameData = (array,id)=>{
    let data =array.filter(x=>{
    return  x.name==id
    })
    return data
  }