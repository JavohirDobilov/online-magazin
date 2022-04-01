export const filteredProducts = (products,vidFilter,companiesFilter,camerasFilter) =>{
   
    let filterproducts = products
    console.log(companiesFilter);
    if(companiesFilter.length !==0){
      filterproducts = filterproducts.filter(item => companiesFilter.includes(item.companiy))
    }
    if(vidFilter.length !==0){
        filterproducts = filterproducts.filter(item =>vidFilter.includes(item.vid))
    }
    if(camerasFilter.length !==0){
        filterproducts = filterproducts.filter(item =>camerasFilter.includes(item.camera))
    }
    return filterproducts
   
  }