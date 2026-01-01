"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import News from "@/components/sections/News";
import About from "@/components/sections/About";
import MotionSection from "@/components/ui/MotionSection";
// Contact はトップから外す

const IntroOverlay = dynamic(() => import("@/components/ui/IntroOverlay"), {
    ssr: false,
});

export default function HomeClient() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const done = sessionStorage.getItem("nb_intro_done");
        if (done) {
            setTimeout(() => setShowIntro(false), 0);
        }
    }, []);

    const handleFinish = useCallback(() => {
        sessionStorage.setItem("nb_intro_done", "1");
        setShowIntro(false);
    }, []);

    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            <Background />

            {showIntro && (
                <IntroOverlay
                    minDurationMs={3200}
                    fadeOutMs={700}
                    onFinish={handleFinish}
                />
            )}

            <MotionSection>
                <Hero />
            </MotionSection>

            <MotionSection delay={0.05}>
                <About />
            </MotionSection>

            <MotionSection delay={0.05}>
                <Services />
            </MotionSection>

            <MotionSection delay={0.05}>
                <Projects />
            </MotionSection>

            <MotionSection delay={0.05}>
                <News />
            </MotionSection>


        </main>
    );
}
