"use client";

// TODO: 上手くできなかった
import { useEffect, useRef, useState } from "react";

type SpeechRecognitionType = typeof window extends undefined
  ? never
  : typeof window.SpeechRecognition;

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const Parts = () => {
  const [finalText, setFinalText] = useState("");
  const [interimText, setInterimText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionType>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("このブラウザは音声認識に対応していません");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "ja-JP";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event: any) => {
      let newFinal = "";
      let newInterim = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];

        const transcript = result[0].transcript;

        if (result.isFinal) {
          // 確定文字
          newFinal += transcript;
        } else {
          // 途中文字
          newInterim += transcript;
        }
      }

      // 確定文字は蓄積
      if (newFinal) {
        setFinalText((prev) => prev + newFinal);
      }

      // interimは毎回置き換える
      setInterimText(newInterim);
    };

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return (
    <div>
      <textarea
        value={finalText}
        // onChange={(e) => setText(e.target.value)}
        rows={10}
      />

      <div>
        <button onClick={startListening}>音声入力開始</button>
        <button onClick={stopListening}>停止</button>
      </div>

      <div>
        状態:
        {isListening ? " 音声入力中..." : " 停止中"}
      </div>
    </div>
  );
};
