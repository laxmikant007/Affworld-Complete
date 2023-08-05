export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("res");
    
  
  
  };

  export const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem("user");
    
    // const result = localStorage.getItem("user");
    const user = JSON.parse(userData); // Parse the JSON data
  
    
    return user;
  };