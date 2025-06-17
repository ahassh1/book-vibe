const getStoredBook = () =>{
   const storedBookSTR = localStorage.getItem("readList");

   if(storedBookSTR){
    const storeBookData = JSON.parse(storedBookSTR)
    return storeBookData;
   }else{
    return[];
   }
}

const addToStoredDB = (id) =>{
    const storeBookData = getStoredBook()
    if(storeBookData.include(id)){
        alert('this id is alrady exist')
    }else{
        storeBookData.push(id);
        console.log(storeBookData);
    }
}
export {addToStoredDB}