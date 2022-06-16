import React from 'react';

export type OnOffType = {
    switchOn: boolean
    setSwitchOn: () => void
}

export const OnOff = (props: OnOffType) => {

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
        background: props.switchOn ? "green" : "transparent"
    }
    const offStyle = {
        background: props.switchOn ? "transparent" : "red"
    }
    const indicatorOnOffStyle = {
        background: props.switchOn ? "green" : "red",
    }

    return (

        <div style={onOffContainerStyle}>
            <div style={ {...onOffStyle, ...onStyle} } onClick={props.setSwitchOn}>On</div>
            <div style={ {...onOffStyle, ...offStyle} } onClick={props.setSwitchOn}>Off</div>
            <div style={{...indicatorStyle, ...indicatorOnOffStyle}}></div>
        </div>

    );
};