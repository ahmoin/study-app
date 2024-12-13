declare const responsiveVoice: any;

export function SpeakButton({ text }: { text: string }) {
    return (
        <button onClick={() => responsiveVoice.speak(text)}
            type="button" value="Play">Play</button>
    );
} 