import React, { useContext } from 'react';
import { ApiContext } from './Assets/Context';
export default function Icon() {
    let { animation } = useContext(ApiContext);
    function click(num) {
        document.querySelector("#Opaque_Ring").style.strokeDasharray = ` ${num} ,1000`;
        animation()
    }
    return (
        <svg version="1.1" id="transring" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 414 414"
            style={{ enableBackground: "new 0 0 414 414" }} xmlSpace="preserve">

            <path id="Transparent_Ring" class="transrg"
                style={{ opacity: 0.4, fill: "none", stroke: "#FFFFFF", strokeWidth: 2, strokeMiterlimit: 10, enableBackground: "new" }}
                d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
        c-47.8,0-91-19.4-122.3-50.7"></path>

            <path id="Opaque_Ring" class="transrgwht" strokeDasharray="1"
                style={{ fill: "none", stroke: "white", strokeWidth: 2, strokeMiterlimit: 10, strokeDasharray: " 0 ,1000" }}
                d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
        c-47.8,0-91-19.4-122.3-50.7"></path>
            <a href='#one'>
                <g id="Dots1" class="dots-nav" onClick={() => {
                    click(0)
                }}>
                    <g>
                        <path class="dotsst dotsfill1" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }} d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z" />
                    </g>
                    <g>
                        <path class="dotsstro1" style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10, }} d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z" />
                    </g>
                </g>
            </a>
            <a href='#two'>
                <g id="Dots2" class="dots-nav" onClick={() => click(135)}>
                    <g>
                        <path class="dotsst dotsfill2" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
                            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"></path>
                    </g>
                    <g>
                        <path class="dotsstro2"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10 }}
                            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"></path>
                    </g>
                </g>
            </a>
            <g id="Dots3" class="dots-nav" onClick={() => {
                click(280)

            }}>
                <a href='#three'>
                    <g>
                        <path class="dotsst dotsfill3" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
                            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"></path>
                    </g>
                    <g>
                        <path class="dotsstro3"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10 }}
                            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"></path>
                    </g>
                </a>
            </g>
            <g id="Dots4" class="dots-nav" onClick={() => {
                click(410)
            }}>
                <a href='#four'>
                    <g>
                        <path class="dotsst dotsfill4" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
                            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
                        <path class="dotsstro4"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10 }}
                            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
                    </g>
                </a>
            </g>
            <g id="Dots5" class="dots-nav" onClick={() => click(540)}>
                <a href='#five'>
                    <path class="dotsst dotsfill5" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
                        d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"></path>
                    <g>
                        <path class="dotsstro5"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10 }}
                            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"></path>
                    </g>
                </a>
            </g>
            <g id="Dots6" class="dots-nav" onClick={() => click(680)}>
                <a href='#six'>
                    <g>
                        <path class="dotsst dotsfill6" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
                            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"></path>
                    </g>
                    <g>
                        <path class="dotsstro6"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokeWidth: 2, strokeMiterlimit: 10 }}
                            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"></path>
                    </g>
                </a>
            </g>
            <g id="Dots7" class="dots-nav" onClick={() => click(810)}>
                <a href='#seven'>
                    <g>
                        <path class="dotsst dotsfill7" style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
                            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"></path>
                    </g>
                    <g>
                        <path class="dotsstro7"
                            style={{ opacity: 1, fill: "none", stroke: "rgb(255, 255, 255)", strokewidth: 2, strokemiterlimit: 10 }}
                            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"></path>
                    </g>
                </a>
            </g>
        </svg>

    )
}
