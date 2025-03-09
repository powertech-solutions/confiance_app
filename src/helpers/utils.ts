export const getItemFromStore = (
    key: string,
    defaultValue?: string | boolean | null,
    store = localStorage
  ) => {
    try {
      return store.getItem(key) === null
        ? defaultValue
        : JSON.parse(store.getItem(key) as string);
    } catch {
      return store.getItem(key) || defaultValue;
    }
  };
  
  export const getItemFromSessionStore = (
      key: string,
      defaultValue?: string | boolean | null,
      store = sessionStorage
  ) => {
      try {
          return store.getItem(key) === null
          ? defaultValue
          : JSON.parse(store.getItem(key) as string);
      } catch {
          return store.getItem(key) || defaultValue;
      }
  };
    
  
  export const setItemToStore = (
    key: string,
    payload: string,
    store = localStorage
  ) => store.setItem(key, payload);
  
  export const removeItemFromStore = (
    key: string,
    store = localStorage
  ) => store.removeItem(key);
  
  
export const checkUserAccess = (
    role: string,
    layout: string,
) => {
    if (role === "ADMIN"){
        return true
    }
  
    if (role === layout){
        return true
    }
  
    return false
};