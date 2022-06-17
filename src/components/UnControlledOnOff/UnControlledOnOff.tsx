import React, {useState} from 'react';

export type OnOffType = {
    defaultOn?: boolean
}

export const UnControlledOnOff = (props: OnOffType) => {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onOffContainerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "5px",
        alignItems: "center",
        width: "200px",
        margin: "15px 0 0 15px",
    }
    const onOffStyle = {
        padding: "3px 15px",
        fontSize: "25px",
        border: "1px solid #555555",
        marginRight: "5px",
    }

    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px solid #555555",
    }

    const onStyle = {
        background: on ? "green" : "transparent"
    }
    const offStyle = {
        background: on ? "transparent" : "red"
    }
    const indicatorOnOffStyle = {
        background: on ? "green" : "red",
    }

    return (

        <div style={onOffContainerStyle}>

            <div onClick={() => setOn(props.defaultOn ? props.defaultOn : true) } style={ {...onOffStyle, ...onStyle} }>On</div>
            <div onClick={() => setOn(props.defaultOn ? props.defaultOn : false)} style={ {...onOffStyle, ...offStyle} }>Off</div>
            <div style={{...indicatorStyle, ...indicatorOnOffStyle}}></div>
        </div>

    );
};