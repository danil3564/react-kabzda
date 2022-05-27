import React, {useState} from "react";
import {RatingValueType} from "../../App";

type UnControlledRatingPropsType = {
    ratingControlled: RatingValueType
    setRatingControlled: (ratingValue: RatingValueType) => void
}

export function UnControlledRating(props:UnControlledRatingPropsType) {

    return (
        <div>
            <Star selected={1 <= props.ratingControlled} setRatingControlled={ () => props.setRatingControlled(1) }/>
            <Star selected={2 <= props.ratingControlled} setRatingControlled={ () => props.setRatingControlled(2) }/>
            <Star selected={3 <= props.ratingControlled} setRatingControlled={ () => props.setRatingControlled(3) }/>
            <Star selected={4 <= props.ratingControlled} setRatingControlled={ () => props.setRatingControlled(4) }/>
            <Star selected={5 <= props.ratingControlled} setRatingControlled={ () => props.setRatingControlled(5) }/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingControlled: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setRatingControlled}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}