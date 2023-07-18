import '../../../scss/components/list.scss';
import React from "react";

export const List = ({airline, onclick}) => {
    return (
        <div className="airlines-information__list" onClick={() => {
            onclick(airline?.id)
        }}>
            <div className="airlines-information__list-name">
                {airline.name}
            </div>
            <div className="airlines-information__list-country">
                {airline.country}
            </div>
            <div className="airlines-information__list-logo">
                <img src={airline.logo} alt={airline.name}/>
            </div>
        </div>
    );
}