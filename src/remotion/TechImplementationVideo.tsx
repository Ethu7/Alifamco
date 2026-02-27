import React from "react";
import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    Img,
    Sequence,
    spring,
    staticFile,
} from "remotion";

export const TechImplementationVideo: React.FC<{
    theme?: string;
    images?: string[];
    titles?: string[]
}> = ({
    theme = "oak",
    images = [
        "/images/tech/dashboard.png",
        "/images/tech/architecture.png",
        "/images/tech/datacenter.png",
    ],
    titles = [
        "Data Mapping & Discovery",
        "Consent Architecture",
        "Policy Enforcement"
    ]
}) => {
        const frame = useCurrentFrame();

        const themeColors: Record<string, string> = {
            oak: "122, 176, 106",     // #7AB06A
            amber: "251, 191, 36",    // #FBBF24
            cyan: "34, 211, 238",     // #22D3EE
        };
        const rgbColor = themeColors[theme] || themeColors.oak;

        const sceneDuration = 400;

        return (
            <AbsoluteFill style={{ backgroundColor: "transparent", overflow: "hidden" }}>
                {images.map((img, i) => (
                    <Sequence key={i} from={i * sceneDuration} durationInFrames={sceneDuration}>
                        <Scene
                            title={titles[i] || ""}
                            imagePath={img}
                            rgbColor={rgbColor}
                            isSingle={images.length === 1}
                        />
                    </Sequence>
                ))}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `linear-gradient(rgba(${rgbColor}, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgbColor}, 0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                        opacity: 0.3,
                        transform: `translate(${-(frame % 60)}px, ${-(frame % 60)}px)`,
                    }}
                />
            </AbsoluteFill>
        );
    };

const Scene: React.FC<{
    title: string;
    imagePath: string;
    rgbColor: string;
    isSingle: boolean;
}> = ({ title, imagePath, rgbColor, isSingle }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const imageOpacity = spring({ frame, fps, config: { damping: 12 } });
    const scale = interpolate(frame, [0, 400], [1, 1.1]);
    const textTranslateY = interpolate(spring({ frame: frame - 15, fps, config: { damping: 12 } }), [0, 1], [50, 0]);
    const textOpacity = interpolate(spring({ frame: frame - 15, fps, config: { damping: 12 } }), [0, 1], [0, 1]);
    const fadeOutOpacity = isSingle ? 1 : interpolate(frame, [370, 400], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

    return (
        <AbsoluteFill style={{ opacity: fadeOutOpacity }}>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: imageOpacity * 0.5,
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                }}
            >
                <Img src={staticFile(imagePath)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, rgba(17, 19, 24, 1) 10%, rgba(17, 19, 24, 0.4) 60%, rgba(17, 19, 24, 1) 100%)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "8%",
                    right: "6%",
                    transform: `translateY(${textTranslateY}px)`,
                    opacity: textOpacity,
                    padding: "16px 24px",
                    borderLeft: `4px solid rgb(${rgbColor})`,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "0 12px 12px 0",
                    maxWidth: "25%",
                }}
            >
                <h2
                    style={{
                        margin: 0,
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontFamily: "system-ui, sans-serif",
                    }}
                >
                    {title}
                </h2>
                <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap", zIndex: 50 }}>
                    {["SYSTEM_ACTIVE", "SYNC_OK"].map(badge => (
                        <span
                            key={badge}
                            style={{
                                fontSize: "11px",
                                padding: "4px 8px",
                                backgroundColor: `rgba(${rgbColor}, 0.15)`,
                                color: `rgb(${rgbColor})`,
                                borderRadius: "4px",
                                border: `1px solid rgba(${rgbColor}, 0.3)`,
                                fontFamily: "monospace",
                            }}
                        >
                            • {badge}
                        </span>
                    ))}
                </div>
            </div>
        </AbsoluteFill>
    );
};
