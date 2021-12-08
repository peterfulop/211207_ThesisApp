export const startSpeech = (
    language,
    text,
    { volume = 1, rate = 1, pitch = 1 } = {},
    { cancel = false, pause = false, resume = false } = {}
) => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = language;
    speech.text = text;
    speech.volume = volume;
    speech.rate = rate;
    speech.pitch = pitch;

    if (cancel) {
        window.speechSynthesis.cancel();
    } else if (pause) {
        window.speechSynthesis.pause();
    } else if (resume) {
        window.speechSynthesis.resume();
    } else {
        window.speechSynthesis.speak(speech);
    }

    return new Promise((resolve) => {
        speech.onend = resolve;
    }).then((a) => {
        return a.type;
    });
};