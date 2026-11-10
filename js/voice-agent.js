/**
 * AI Voice Agent & Subtitle Telemetry System
 * Plays natural human female voice audio with real-time animated equalizer and live captions.
 * Dual-engine: Native female audio recording with intelligent Web Speech fallback.
 */

class VoiceAgent {
  constructor() {
    this.audio = null;
    this.synth = window.speechSynthesis || null;
    this.isSpeaking = false;
    this.speechText = "Hey! Ready to explore me? Greetings, my name is Lavanya Mittal, and I am always here to explore something new. Welcome to my creative universe!";
    this.hudEl = null;
    this.captionEl = null;
    this.waveBars = [];
    this.animFrame = null;
    this.audioPath = "assets/audio/welcome.wav";
    this.statusEl = null;
    this.isPriming = false;
  }

  init() {
    this.hudEl = document.getElementById("voice-agent-hud");
    this.captionEl = document.getElementById("voice-agent-caption");
    this.statusEl = document.getElementById("voice-presence-state");
    this.waveBars = document.querySelectorAll(".voice-wave-bar");

    // Initialize Audio element
    try {
      this.audio = new Audio(this.audioPath);
      this.audio.preload = "auto";

      this.audio.addEventListener("play", () => {
        if (this.isPriming) return;
        this.isSpeaking = true;
        this.setPresence("SPEAKING");
        if (this.hudEl) {
          this.hudEl.classList.remove("idle-state");
          this.hudEl.classList.add("active");
        }
        this.animateWaveform();
        this.typeCaption(this.speechText);
      });

      this.audio.addEventListener("ended", () => {
        this.isSpeaking = false;
        this.setPresence("ONLINE");
        this.stopWaveform();
        setTimeout(() => {
          if (this.hudEl) this.hudEl.classList.add("idle-state");
        }, 3200);
      });

      this.audio.addEventListener("error", () => {
        console.warn("Audio file fallback to female speech synthesis.");
      });
    } catch (e) {
      console.warn("Audio element initialization note:", e);
    }

    // Controls
    const replayBtn = document.getElementById("voice-replay-btn");
    if (replayBtn) {
      replayBtn.addEventListener("click", () => {
        this.speakIntro();
      });
    }

    const muteBtn = document.getElementById("voice-mute-btn");
    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        this.stop();
        if (this.hudEl) this.hudEl.classList.remove("active");
      });
    }
  }

  setPresence(label) {
    if (this.statusEl) this.statusEl.textContent = label;
  }

  // Called from the door's click handler. It silently earns audio permission
  // before the visual sequence completes, then restores the recording to start.
  prime() {
    if (!this.audio || this.isPriming) return;
    this.isPriming = true;
    const originalVolume = this.audio.volume;
    this.audio.volume = 0;
    this.audio.currentTime = 0;
    const promise = this.audio.play();
    if (promise !== undefined) {
      promise.then(() => {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.volume = originalVolume;
        this.isPriming = false;
      }).catch(() => {
        this.audio.volume = originalVolume;
        this.isPriming = false;
      });
    }
  }

  getBestFemaleVoice() {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Strict priority for natural human female voices
    const femaleNames = [
      "Samantha", "Victoria", "Karen", "Google US English",
      "Microsoft Zira", "Tara", "Serena", "Tessa", "Moira"
    ];

    for (const name of femaleNames) {
      const match = voices.find(v => 
        (v.name.includes(name) || v.voiceURI.includes(name)) && 
        !v.name.toLowerCase().includes("male") &&
        !v.name.toLowerCase().includes("robot")
      );
      if (match) return match;
    }

    // Next preference: any English voice marked female
    const femaleEn = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Female") || v.name.includes("Woman")));
    if (femaleEn) return femaleEn;

    return voices.find(v => v.lang.startsWith("en")) || voices[0];
  }

  speakIntro() {
    // 1. Try playing natural human female recorded audio first
    if (this.audio) {
      this.audio.currentTime = 0;
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started playing naturally
            return;
          })
          .catch((err) => {
            console.warn("Audio play prevented, falling back to female SpeechSynthesis:", err);
            this.speakWithSpeechSynthesis();
          });
        return;
      }
    }

    // 2. Fallback to female SpeechSynthesis
    this.speakWithSpeechSynthesis();
  }

  speakWithSpeechSynthesis() {
    if (!this.synth) {
      this.showFallbackCaption();
      return;
    }

    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(this.speechText);
    const femaleVoice = this.getBestFemaleVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 0.94; // Natural human cadence
    utterance.pitch = 1.08; // Friendly, warm female pitch
    utterance.volume = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.setPresence("SPEAKING");
      if (this.hudEl) {
        this.hudEl.classList.remove("idle-state");
        this.hudEl.classList.add("active");
      }
      this.animateWaveform();
      this.typeCaption(this.speechText);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.setPresence("ONLINE");
      this.stopWaveform();
      setTimeout(() => {
        if (this.hudEl) this.hudEl.classList.add("idle-state");
      }, 3200);
    };

    utterance.onerror = (e) => {
      console.warn("Speech error:", e);
      this.isSpeaking = false;
      this.stopWaveform();
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.setPresence("PAUSED");
    this.stopWaveform();
  }

  animateWaveform() {
    const loop = () => {
      if (!this.isSpeaking) return;
      this.waveBars.forEach((bar, idx) => {
        // Natural varying frequency heights
        const wave = Math.sin(Date.now() * 0.01 + idx * 0.8) * 0.5 + 0.5;
        const h = Math.floor(6 + wave * 18 + Math.random() * 6);
        bar.style.height = `${h}px`;
      });
      this.animFrame = requestAnimationFrame(loop);
    };
    loop();
  }

  stopWaveform() {
    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
    }
    this.waveBars.forEach(bar => {
      bar.style.height = "4px";
    });
  }

  typeCaption(text) {
    if (!this.captionEl) return;
    this.captionEl.textContent = `"${text}"`;
    this.captionEl.style.opacity = "1";
  }

  showFallbackCaption() {
    if (this.hudEl) this.hudEl.classList.add("active");
    this.typeCaption(this.speechText);
  }
}

export const voiceAgent = new VoiceAgent();
