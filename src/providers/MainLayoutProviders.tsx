import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';
  
interface MainLayoutContextInterface {
  module: string;
  setModule: Dispatch<SetStateAction<string>>;
}
  
export const MainLayoutContext = createContext(
  {} as MainLayoutContextInterface
);
  
const MainLayoutProvider = ({ children }: PropsWithChildren) => {
  const [module, setModule] = useState("")
  return (
    <MainLayoutContext.Provider
      value={{ module, setModule }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};
  
export const useMainLayoutContext = () => useContext(MainLayoutContext);

export default MainLayoutProvider;