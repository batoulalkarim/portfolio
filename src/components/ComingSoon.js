import React from 'react';
import Sparkle from "react-sparkle";

const ComingSoon = () => {
    return (
        <div className="comingSoonContainer">
            <div className="csSecond">
            {/* <div className="cSAnimation"> */}
                <Sparkle
                    color={'#FFF'}
                    count={150}
                    minSize={5}
                    maxSize={8}
                    overflowPx={0}
                    fadeOutSpeed={20}
                    newSparkleOnFadeOut={true}
                    flicker={true}
                    flickerSpeed={'normal'}
                />
            {/* </div> */}
            <div className="cSText">COMING SOON</div>
            </div>
        </div>
    )
}

export default ComingSoon;
