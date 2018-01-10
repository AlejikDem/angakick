(<any>window).AudioContext = (<any>window).AudioContext || (<any>window).webkitAudioContext;
var audioContext = new AudioContext();

export const getRandomNumInRange = (maxNum: number): number => {
  return Math.floor(Math.random() * maxNum);
}

export const kick = () => {
  var mixGain = audioContext.createGain();

  var osc = audioContext.createOscillator();
  var osc2 = audioContext.createOscillator();
  var gainOsc = audioContext.createGain();
  var gainOsc2 = audioContext.createGain();

  osc.type = "triangle";
  osc2.type = "sine";

  gainOsc.gain.setValueAtTime(1, audioContext.currentTime);
  gainOsc.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


  gainOsc2.gain.setValueAtTime(1, audioContext.currentTime);
  gainOsc2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


  osc.frequency.setValueAtTime(120, audioContext.currentTime);
  osc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

  osc2.frequency.setValueAtTime(50, audioContext.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

  osc.connect(gainOsc);
  osc2.connect(gainOsc2);
  gainOsc2.connect(mixGain);
  gainOsc.connect(mixGain);
  gainOsc.connect(audioContext.destination);
  gainOsc2.connect(audioContext.destination);

  mixGain.gain.value = 1;

  osc.start(audioContext.currentTime);
  osc2.start(audioContext.currentTime);

  osc.stop(audioContext.currentTime + 0.5);
  osc2.stop(audioContext.currentTime + 0.5);
}
