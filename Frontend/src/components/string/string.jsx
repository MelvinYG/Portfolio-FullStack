import gsap from "gsap";

const String = () => {

    const windowWidth = window.innerWidth;
    const startX = 0.1*windowWidth;
    const endX = 0.9* windowWidth;

    const initPath = `M ${startX} 200 Q ${(startX + endX)/2} 200 ${endX} 200`;

    const handleString = (dets) => {
        if(window.innerWidth < 767) return;
        const container = dets.currentTarget;
        const boundingRect = container.getBoundingClientRect();

        const newX = dets.clientX - boundingRect.left;
        const newY = dets.clientY - boundingRect.top;

        gsap.to('svg path', {
            attr: { d: `M ${startX} 200 Q ${200 + newX} ${200 + (newY - boundingRect.height / 2)} ${endX} 200` },
            duration: 0.5,
            ease: "power2.out",
        });
    }

    const handleStringLeave = () => {
        if(window.innerWidth < 767) return;
        gsap.to('svg path', {
            attr: {d : initPath},
            duration: 1,
            ease: "elastic.out(1,0.2)"
        })
    }

    return (
        <div className="string-main" onMouseMove={(dets) => handleString(dets)} onMouseLeave={() => handleStringLeave()}>
            <svg width="100%" height="400px" className="string-box">
                <path d={initPath} stroke="#eee" fill="transparent" />
            </svg>
            
        </div>
    )
};

export default String;
