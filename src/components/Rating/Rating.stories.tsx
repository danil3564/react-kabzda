import React, {useState} from "react";
import {Rating} from "./Rating";
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating,
}

const callback = action("111")

export const Rating1 = () => <Rating value={1} setRatingValue={callback} />
export const Rating2 = () => <Rating value={2} setRatingValue={callback} />
export const Rating3 = () => <Rating value={3} setRatingValue={callback} />
export const Rating4 = () => <Rating value={4} setRatingValue={callback} />
export const Rating5 = () => <Rating value={5} setRatingValue={callback} />
export const RatingChanging = () => {
    const [ratingValue, setRatingValue] = useState<number>(0)
    return <Rating value={ratingValue} setRatingValue={setRatingValue}/>
}