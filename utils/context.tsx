import { createContext, useContext, useState } from "react";

interface DropdownData {
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}
const dropDownDefaultValue: DropdownData = {
  dropdown: false,
  setDropdown: () => null,
};

export const DropdownContext = createContext<DropdownData>(dropDownDefaultValue);

export const useDropdown  = () => {
    return useContext(DropdownContext)
}


export const UtilityProvider = ({children}:{children : React.ReactNode})  => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <DropdownContext.Provider value = {{dropdown, setDropdown}}>
            {children}
        </DropdownContext.Provider>
    )
}