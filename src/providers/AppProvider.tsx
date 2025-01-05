import {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useEffect,
    useReducer,
} from 'react';
import { getItemFromStore } from '@/helpers/utils';
import { Config, initialConfig } from '@/config';
import { ACTIONTYPE, configReducer, SET_CONFIG } from '@/reducers/ConfigReducer';
  
    interface AppContextInterFace {
        config: Config;
        configDispatch: Dispatch<ACTIONTYPE>;
        toggleTheme: () => void;
        setConfig: (payload: Partial<Config>) => void;
    }
  
export const AppContext = createContext({} as AppContextInterFace);
    
const AppProvider = ({ children }: PropsWithChildren) => {
    
    const configState: Config = {
        isNavbarVerticalCollapsed: getItemFromStore(
        'isNavbarVerticalCollapsed',
        initialConfig.isNavbarVerticalCollapsed
        ),
        openNavbarVertical: initialConfig.openNavbarVertical,
        theme: getItemFromStore('theme', initialConfig.theme),
        isRTL: getItemFromStore('isRTL', initialConfig.isRTL),
        isDark: getItemFromStore('isDark', initialConfig.isDark),
        apiBaseUrl: '',
    };
  
    const [config, configDispatch] = useReducer(configReducer, configState); // initail

    const setConfig = (payload: Partial<Config>) => {
        configDispatch({
        type: SET_CONFIG,
        payload
        });
    };
  
    const toggleTheme = () => {
        configDispatch({
        type: SET_CONFIG,
        payload: {
            theme: config.isDark !== false ? 'light' : 'dark'
        }
        });
    };
  
    useEffect(() => {
        if (config.isNavbarVerticalCollapsed) {
        document.documentElement.classList.add('navbar-vertical-collapsed');
        } else {
        document.documentElement.classList.remove('navbar-vertical-collapsed');
        }
    }, [config]);
  
    
  
    const value = {
        config,
        setConfig,
        toggleTheme,
        configDispatch
    }
  
    return (
        <AppContext.Provider
            value={value}>
            {children}
        </AppContext.Provider>
    );
};
  
export const useAppContext = () => useContext(AppContext);

export default AppProvider;