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
  // textarea表示用
  const [text, setText] = useState("");

  // 音声認識インスタンス
  const recognitionRef = useRef<any>(null);

  // 一時保持バッファ
  const bufferRef = useRef("");

  // interval id
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("音声認識未対応ブラウザです");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let newText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        // 確定文字だけ使う
        if (result.isFinal) {
          newText += result[0].transcript;
        }
      }
      // bufferに追加
      if (newText) {
        bufferRef.current += newText;
      }
    };

    recognitionRef.current = recognition;

    // 1秒ごとにflush
    intervalRef.current = setInterval(() => {
      // bufferが空なら何もしない
      if (!bufferRef.current) return;

      console.log(bufferRef.current);
      // textareaへ追加
      setText((prev) => {
        return prev + bufferRef.current;
      });

      // bufferクリア
      bufferRef.current = "";
    }, 1000);

    return () => {
      recognition.stop();

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "600px",
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <button onClick={startListening}>音声入力開始</button>

        <button onClick={stopListening}>停止</button>
      </div>

      <div>
        buffer:
        {bufferRef.current}
      </div>
    </div>
  );
};
