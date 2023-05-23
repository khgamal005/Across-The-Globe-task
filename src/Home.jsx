import React, { Fragment } from 'react'
import PageOne from "./PageOne";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageTwo from './PageTwo';
import PageThree from './PageThree';
export default function Home() {
    return (
        <Fragment>
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive />
            <PageSix />
            <PageSeven />
        </Fragment>
    )
}
