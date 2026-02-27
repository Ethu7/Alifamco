import React, { useMemo } from "react";
import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
    spring,
} from "remotion";

export const NetworkAnimation: React.FC<{ rgbColor?: string }> = ({ rgbColor = "122, 176, 106" }) => {
    const frame = useCurrentFrame();
    const { fps, width, height } = useVideoConfig();

    // Slow constant rotation
    const rotation = frame * 0.05;
    // Gentle pulse using sine wave
    const scale = interpolate(Math.sin(frame / 60), [-1, 1], [0.98, 1.02]);

    // Particles that float and pulse
    const particles = useMemo(() => {
        return Array.from({ length: 65 }).map((_, i) => ({
            id: i,
            x: (i * 21) % 100,
            y: (i * 37) % 100,
            size: i % 4 === 0 ? 6 : 4,
            delay: i * 15,
            opacityFactor: (i % 3) * 0.4 + 0.5, // varied opacity
        }));
    }, []);

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "transparent",
                overflow: "hidden",
            }}
        >
            {/* Outer spinning ring */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    width: "140vw",
                    height: "140vw",
                    border: `2px dashed rgba(${rgbColor}, 0.4)`,
                    borderRadius: "50%",
                    boxShadow: `inset 0 0 100px rgba(${rgbColor}, 0.1)`,
                }}
            />
            {/* Inner dotted ring */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${-rotation * 1.5}deg) scale(${scale * 0.8
                        })`,
                    width: "100vw",
                    height: "100vw",
                    border: `2px dotted rgba(${rgbColor}, 0.4)`,
                    borderRadius: "50%",
                }}
            />
            {/* Core ring */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${rotation * 0.8}deg) scale(${scale * 0.6
                        })`,
                    width: "60vw",
                    height: "60vw",
                    border: `2px solid rgba(${rgbColor}, 0.25)`,
                    borderRadius: "50%",
                }}
            />

            {/* Floating particles (nodes) */}
            {particles.map((p) => {
                const floatY = interpolate(
                    Math.sin((frame + p.delay) / 40),
                    [-1, 1],
                    [-20, 20]
                );
                const floatX = interpolate(
                    Math.cos((frame + p.delay) / 50),
                    [-1, 1],
                    [-10, 10]
                );
                const pulse = interpolate(
                    Math.sin((frame + p.delay * 0.5) / 30),
                    [-1, 1],
                    [0.1, p.opacityFactor]
                );

                return (
                    <div
                        key={p.id}
                        style={{
                            position: "absolute",
                            top: `${p.y}%`,
                            left: `${p.x}%`,
                            transform: `translate(calc(-50% + ${floatX}px), calc(-50% + ${floatY}px))`,
                            width: p.size,
                            height: p.size,
                            borderRadius: "50%",
                            backgroundColor: `rgb(${rgbColor})`,
                            opacity: pulse * 1.5,
                            boxShadow: `0 0 ${p.size * 6}px ${p.size * 3}px rgba(${rgbColor}, ${pulse})`,
                        }}
                    />
                );
            })}
        </AbsoluteFill>
    );
};
