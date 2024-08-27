import gsap from "gsap";

const String = () => {

    const initPath = 'M 100 200 Q 700 200 1400 200';

    const handleString = (dets) => {
        const container = dets.currentTarget;
        const boundingRect = container.getBoundingClientRect();

        const newX = dets.clientX - boundingRect.left;
        const newY = dets.clientY - boundingRect.top;

        gsap.to('svg path', {
            attr: { d: `M 100 200 Q ${200 + newX} ${200 + (newY - boundingRect.height / 2)} 1400 200` },
            duration: 0.5,
            ease: "power2.out",
        });
    }

    const handleStringLeave = () => {
        gsap.to('svg path', {
            attr: {d : initPath},
            duration: 1,
            ease: "elastic.out(1,0.2)"
        })
    }

    return (
        <div className="" onMouseMove={(dets) => handleString(dets)} onMouseLeave={() => handleStringLeave()}>
            <svg width="100%" height="400px">
                <path d="M 100 200 Q 700 200 1400 200" stroke="#eee" fill="transparent" />
            </svg>

        </div>
    )
};

export default String;
