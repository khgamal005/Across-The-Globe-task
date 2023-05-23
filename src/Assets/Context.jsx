import { createContext, useRef } from "react";
import gsap from 'gsap';
export let ApiContext = createContext("");
function ApiContextProvider(props) {
    const page = useRef(null);
    const pageText = useRef(null);
    const Image1 = useRef(null);
    function animation() {
        gsap.fromTo(document.querySelectorAll(".head"), {
            opacity: "0",
            y: "-30",
        }, {
            y: "0",
            opacity: "1",
        })
        gsap.fromTo(document.querySelectorAll(".footer"), {
            opacity: "0",
            y: "-40",
        }, {
            y: "0",
            opacity: "1",
        })
        // page one 
        gsap.fromTo(document.querySelector(".img-one"), {
            x: "-270",
        }, {
            x: "0",
        })
        gsap.fromTo(document.querySelector(".img-two"), {
            y: "400",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".img-three"), {
            y: "-500",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".img-four"), {
            x: "500",
        }, {
            x: "0",
        })
        gsap.fromTo(document.querySelector(".img-five"), {
            x: "500",
        }, {
            x: "0",
        })
        // Page Two
        gsap.fromTo(document.querySelector(".fitnsess"), {
            y: "900",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".counter"), {
            y: "-500",
        }, {
            y: "0",
        })
        // Page Three
        gsap.fromTo(document.querySelector(" .Blockchain2"), {
            y: "900",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".Blockchain1"), {
            y: "-500",
        }, {
            y: "0",
        })
        // pageFour
        gsap.fromTo(document.querySelector(" .dawnload1"), {
            y: "600",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".dawnload2"), {
            y: "600",
        }, {
            y: "0",
        }).delay(.1)
        // pageFive
        gsap.fromTo(document.querySelector(".f-img-one"), {
            y: "-400",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".f-img-two"), {
            y: "-500",
        }, {
            y: "0",
        }).delay(.1)
        gsap.fromTo(document.querySelector(".f-img-three"), {
            x: "500",
        }, {
            x: "0",
        }).delay(.2)
        gsap.fromTo(document.querySelector(".f-img-four"), {
            y: "400",
        }, {
            y: "0",
        })
        gsap.fromTo(document.querySelector(".f-img-five"), {
            y: "500",
        }, {
            y: "0",
        }).delay(.1)
        // pageSix 
        gsap.fromTo(document.querySelector(".erp"), {
            y: "1000",
        }, {
            y: "0",
        })
        // page seven
        gsap.fromTo(document.querySelector(".millto2"), {
            x: "-2000",
        }, {
            x: "0",
        })
        gsap.fromTo(document.querySelector(".millto1"), {
            x: "2000",
        }, {
            x: "0",
        })
    }
    return <ApiContext.Provider value={{ Image1, page, pageText, animation }}>
        {props.children}
    </ApiContext.Provider>
}
export default ApiContextProvider;

