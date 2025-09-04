const getStoredReadList = () =>{
    //real-list
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else
    {
      return  [];
    }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id,"alrady Exists in the read List");
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
    }
}

const addToStoredWishList = (id) =>{
    const storedwishList = getStoredReadList();
    if(storedwishList.includes(id)){
        console.log(id,"alrady Exists in the read List");
    }
    else{
        storedwishList.push(id);
        const storedwishListStr =JSON.stringify(storedwishList);
        localStorage.setItem('wish-list',storedwishListStr);
    }
}

export {addToStoredReadList, addToStoredWishList,getStoredReadList};