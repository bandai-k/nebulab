"use client";

import { useState } from "react";
import Intro from "@/components/home/Intro";

/**
 * /preview/intro の再生コントロール。
 *
 * key を変えて <Intro> を作り直すことで、何度でも頭から再生させる。
 * preview を立てているので「1セッション1回」の判定には掛からず、
 * 再生済みの印も残らない。本番のトップページの挙動には影響しない。
 */
export default function IntroPreview() {
  const [runId, setRunId] = useState(0);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setRunId((n) => n + 1);
    setPlaying(true);
  };

  return (
    <>
      <button type="button" onClick={play} className="btn btn-primary">
        {runId === 0 ? "再生する" : "もう一度再生する"}
      </button>

      {playing && (
        <Intro
          // 押すたびに作り直して、頭から再生させる
          key={runId}
          preview
        />
      )}
    </>
  );
}
