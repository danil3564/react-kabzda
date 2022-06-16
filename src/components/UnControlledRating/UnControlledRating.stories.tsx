import React, {useState} from "react";
import {UnControlledRating} from "./UnControlledRating";
import {RatingValueType} from "../../App";

export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
}

export const Rating1 = () => <UnControlledRating defaultRating={1} />
export const Rating2 = () => <UnControlledRating defaultRating={2} />
export const Rating3 = () => <UnControlledRating defaultRating={3} />
export const Rating4 = () => <UnControlledRating defaultRating={4} />
export const Rating5 = () => <UnControlledRating defaultRating={5} />