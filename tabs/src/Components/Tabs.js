import React, {useState} from 'react';

const Tabs = (props) => {
    const [tabIndex, setTabIndex] = useState(0);
    // const [msg, setMsg] = useState("");

    
    const handleContent = (index) => {
        // e.preventDefault();
        setTabIndex(index);
        console.log(tabIndex);
        // setMsg("This is showing tab " +  tabIndex + "content!"); 
        // setMsg("");
        // setTabIndex(0);

    }

    return (
        <div>
            <div className='tabscontainer'>
                <div 
                className={ tabIndex === 1 ? "tabs-active" : "tabs" } 
                onClick={ () => handleContent(1)}
                >Tab 1</div>
                <div 
                className={ tabIndex === 2 ? "tabs-active" : "tabs" } 
                onClick={ () => handleContent(2)}
                >Tab 2</div>
                <div 
                className={ tabIndex === 3 ? "tabs-active" : "tabs" } 
                onClick={ () => handleContent(3)}
                >Tab 3</div>
            </div>
            {/* <div className='message'> 
                {tabIndex !== 0 ? <h2>Tab { tabIndex } content is showing here!</h2> : " "}
            </div> */}
            {tabIndex !== 0 ? <div className='message'>Tab { tabIndex } content is showing here!</div> : " "}
        </div>
    );
}

export default Tabs;
