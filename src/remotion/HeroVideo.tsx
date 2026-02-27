"use client";

import { Player } from "@remotion/player";
import { TechImplementationVideo } from "./TechImplementationVideo";

export interface HeroVideoProps {
    theme?: "oak" | "amber" | "cyan";
    images?: string[];
    titles?: string[];
}

export function HeroVideo({ theme = "oak", images, titles }: HeroVideoProps) {
    const frameCount = images ? images.length * 400 : 1200;
    const themeColors = {
        oak: "122, 176, 106",  // oak-400
        amber: "251, 191, 36", // amber-400
        cyan: "34, 211, 238",   // cyan-400
    };

    return (
        <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen overflow-hidden">
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "max(100vw, 177.77vh)",
                    height: "max(56.25vw, 100vh)",
                }}
            >
                <Player
                    component={TechImplementationVideo}
                    durationInFrames={frameCount}
                    compositionWidth={1920}
                    compositionHeight={1080}
                    fps={30}
                    loop
                    autoPlay
                    inputProps={{
                        theme,
                        ...(images && { images }),
                        ...(titles && { titles }),
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    controls={false}
                    acknowledgeRemotionLicense={true}
                />
            </div>
        </div>
    );
}
