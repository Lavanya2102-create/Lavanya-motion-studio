/**
 * Soft Ambient Cyber Audio Synthesizer
 * Procedural, velvety Web Audio API engine.
 * Gentle low-pass filtered harmonics designed for pleasant, fatigue-free listening.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("lavanya_audio_muted") === "true";
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("lavanya_audio_muted", this.muted ? "true" : "false");
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  /**
   * Ultra-soft hover tone (warm low-pass sine blip)
   */
  playHover() {
    if (this.muted) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, t); // Warm A4
      osc.frequency.exponentialRampToValueAtTime(554.37, t + 0.06); // C#5

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(850, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.008, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.07);
    } catch (e) {}
  }

  /**
   * Soft ceramic / glass cyber click
   */
  playClick() {
    if (this.muted) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(659.25, t); // E5
      osc.frequency.exponentialRampToValueAtTime(440, t + 0.08); // A4

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(900, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.018, t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.09);
    } catch (e) {}
  }

  /**
   * Ethereal Portal / Door Opening Sound
   * Deep atmospheric ambient resonance + soft celestial harmonic
   */
  playPortalOpen() {
    if (this.muted) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // 1. Deep warm resonant sub-swell
      const subOsc = this.ctx.createOscillator();
      const subFilter = this.ctx.createBiquadFilter();
      const subGain = this.ctx.createGain();

      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(110, t);
      subOsc.frequency.exponentialRampToValueAtTime(220, t + 0.8);

      subFilter.type = "lowpass";
      subFilter.frequency.setValueAtTime(350, t);

      subGain.gain.setValueAtTime(0.0001, t);
      subGain.gain.linearRampToValueAtTime(0.035, t + 0.2);
      subGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(this.ctx.destination);

      subOsc.start(t);
      subOsc.stop(t + 1.1);

      // 2. Dual crystalline harmonic chime (D major / soft velvet)
      [587.33, 880, 1174.66].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        const startTime = t + 0.15 + idx * 0.12;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1200, startTime);

        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.linearRampToValueAtTime(0.02, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.7);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.7);
      });
    } catch (e) {}
  }

  /**
   * Warm Modal chime
   */
  playModal() {
    if (this.muted) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      [523.25, 659.25].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        const start = t + i * 0.05;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(950, start);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.015, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.25);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.25);
      });
    } catch (e) {}
  }

  /**
   * Ascending gentle pentatonic success chime
   */
  playSuccess() {
    if (this.muted) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880]; // A major chord

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();
        const start = t + idx * 0.07;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1000, start);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.018, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.35);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch (e) {}
  }
}

export const sound = new SoundController();
