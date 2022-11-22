import React, { useEffect, useState } from 'react'

const Tab = ({ children, active = 0 } : any | {}) => {
    const [ activeTab, setActiveTab ] = useState(0);
    const [ tabsData, setTabsData ] = useState(0);

    useEffect(() => {
        let data = [];

        // React.Children.forEach(children, element => {
        //     if(!React.isValidElement(element)) return;

        //     const {props: {tab, children} } = element;
        //     data.push({children})
        // })

        // setTabsData(data);
    }, [children])

  return (
    <div>Tab</div>
  )
}

const tabParse = ({children} : any | {}) =>{
    return {children}
}

Tab.tabParse = tabParse;

export default Tab