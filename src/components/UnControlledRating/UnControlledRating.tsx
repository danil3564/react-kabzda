import React, {useState} from "react";
import {RatingValueType} from "../../App";

export type UnControlledRatingPropsType = {
    defaultRating: RatingValueType
}

export function UnControlledRating(props: UnControlledRatingPropsType) {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(props.defaultRating ? props.defaultRating : 0 )
    return (
        <div>
            <Star selected={1 <= ratingValue} setRatingValue={ () => setRatingValue(1) }/>
            <Star selected={2 <= ratingValue} setRatingValue={ () => setRatingValue(2) }/>
            <Star selected={3 <= ratingValue} setRatingValue={ () => setRatingValue(3) }/>
            <Star selected={4 <= ratingValue} setRatingValue={ () => setRatingValue(4) }/>
            <Star selected={5 <= ratingValue} setRatingValue={ () => setRatingValue(5) }/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setRatingValue}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}