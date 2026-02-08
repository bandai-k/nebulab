"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import Background from "@/components/ui/Background";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Promises from "@/components/sections/Promises";
import NrtLoftIntro from "@/components/sections/NrtLoftIntro";
import BottomCta from "@/components/sections/BottomCta";
import MotionSection from "@/components/ui/MotionSection";

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
                <PainPoints />
            </MotionSection>

            <MotionSection delay={0.05}>
                <Services />
            </MotionSection>

            <MotionSection delay={0.05}>
                <Process />
            </MotionSection>

            <MotionSection delay={0.05}>
                <Promises />
            </MotionSection>

            <MotionSection delay={0.05}>
                <NrtLoftIntro />
            </MotionSection>

            <MotionSection delay={0.05}>
                <BottomCta />
            </MotionSection>
        </main>
    );
}
