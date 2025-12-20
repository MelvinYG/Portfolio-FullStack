import gsap from "gsap";
import { useRef, useState } from "react";
import './string.css';

const String = () => {

    const windowWidth = window.innerWidth;
    const startX = 0.1*windowWidth;
    const endX = 0.9* windowWidth;

    const pathRef = useRef(null);
    const hintRef = useRef(null);

    const [hasInteracted, setHasInteracted] = useState(false);

    const initPath = `M ${startX} 200 Q ${(startX + endX)/2} 200 ${endX} 200`;

    const handleStringDragSuggestion = () => {
        if (window.innerWidth < 767) return;

        if (!hasInteracted) {
            setHasInteracted(true);
            gsap.to(hintRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    hintRef.current.style.display = "none";
                }
            });
        } else {
            setHasInteracted(false);
            gsap.to(hintRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                onComplete: () => {
                    hintRef.current.style.display = "block";
                }
            });
        }
    };

    const handleString = (dets) => {
        if(window.innerWidth < 767) return;
        const container = dets.currentTarget;
        const boundingRect = container.getBoundingClientRect();

     
        const stringPath = pathRef.current;

        const newX = dets.clientX - boundingRect.left;
        const newY = dets.clientY - boundingRect.top;

        gsap.to(stringPath, {
            attr: { d: `M ${startX} 200 Q ${200 + newX} ${200 + (newY - boundingRect.height / 2)} ${endX} 200` },
            duration: 0.5,
            ease: "power2.out",
        });
    }

    const handleStringLeave = () => {
        if(window.innerWidth < 767) return;
        const stringPath = pathRef.current;
        gsap.to(stringPath, {
            attr: {d : initPath},
            duration: 1,
            ease: "elastic.out(1,0.2)"
        })
    }

    return (
        <div className="string-main" onMouseEnter={handleStringDragSuggestion} onMouseLeave={handleStringDragSuggestion} onMouseMove={(dets) => handleString(dets)} onMouseLeave={() => handleStringLeave()}>
            <div ref={hintRef} className="string-hint">
                Drag and release the string
            </div>
            <svg width="100%" height="400px" className="string-box">
                <path ref={pathRef} d={initPath} stroke="#eee" fill="transparent" />
            </svg>
            
        </div>    
    )
};

export default String;
