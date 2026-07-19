import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, HelpCircle, RefreshCw, Calculator } from 'lucide-react';

type UnitSystem = 'metric' | 'imperial';

export const BMICalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');
  
  // Metric Inputs
  const [weightKg, setWeightKg] = useState<string>('75');
  const [heightCm, setHeightCm] = useState<string>('178');

  // Imperial Inputs
  const [weightLbs, setWeightLbs] = useState<string>('165');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('10');

  // Results State
  const [bmi, setBmi] = useState<number | null>(null);
  const [classification, setClassification] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');
  const [idealRange, setIdealRange] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    let calculatedBmi = 0;

    if (unitSystem === 'metric') {
      const weight = parseFloat(weightKg);
      const height = parseFloat(heightCm) / 100; // convert cm to meters
      if (weight > 0 && height > 0) {
        calculatedBmi = weight / (height * height);
      }
    } else {
      const weight = parseFloat(weightLbs);
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      const totalHeightInches = (ft * 12) + inch;
      if (weight > 0 && totalHeightInches > 0) {
        calculatedBmi = (weight / (totalHeightInches * totalHeightInches)) * 703;
      }
    }

    if (calculatedBmi > 0) {
      const formattedBmi = Math.round(calculatedBmi * 10) / 10;
      setBmi(formattedBmi);
      evaluateClassification(formattedBmi);
    }
  };

  const evaluateClassification = (bmiVal: number) => {
    if (bmiVal < 18.5) {
      setClassification('Underweight');
      setAdvice('You are in the underweight threshold. Focus on positive energy balance, progressive heavy weight lifting, and a nutrient-dense high-protein nutrition program to build premium lean muscular tissue.');
      setIdealRange(unitSystem === 'metric' ? '59 kg - 79 kg' : '129 lbs - 174 lbs');
    } else if (bmiVal >= 18.5 && bmiVal < 25) {
      setClassification('Healthy Weight');
      setAdvice('Excellent biometric alignment. Your current mass correlates with outstanding cardiovascular health and metabolic efficiency. Focus on high-performance conditioning, core strength development, and physical mobility.');
      setIdealRange(unitSystem === 'metric' ? '59 kg - 79 kg' : '129 lbs - 174 lbs');
    } else if (bmiVal >= 25 && bmiVal < 30) {
      setClassification('Overweight');
      setAdvice('Slightly above recommended thresholds. To optimize metabolic response and joint compression ratios, we recommend incorporating 2-3 weekly high-intensity CrossFit splits alongside structured deficit caloric coaching.');
      setIdealRange(unitSystem === 'metric' ? '59 kg - 79 kg' : '129 lbs - 174 lbs');
    } else {
      setClassification('Obese');
      setAdvice('Our clinical trainers recommend a dedicated athletic metabolic program. We suggest combining slow-heart-rate Zone 2 cardio base building to protect joints, alongside deep orthopedic screening and nutrition support.');
      setIdealRange(unitSystem === 'metric' ? '59 kg - 79 kg' : '129 lbs - 174 lbs');
    }
  };

  const resetCalculator = () => {
    setBmi(null);
    setClassification('');
    setAdvice('');
    setWeightKg('75');
    setHeightCm('178');
    setWeightLbs('165');
    setHeightFt('5');
    setHeightIn('10');
  };

  const getClassificationColor = () => {
    switch (classification) {
      case 'Healthy Weight':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20';
      case 'Underweight':
        return 'text-amber-400 bg-amber-950/40 border-amber-500/20';
      case 'Overweight':
        return 'text-amber-500 bg-amber-950/40 border-amber-500/20';
      case 'Obese':
        return 'text-rose-400 bg-rose-950/40 border-rose-500/20';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <section id="bmi" className="py-24 bg-slate-900/40 border-t border-b border-slate-800/40 relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            Health Biometrics
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Bespoke BMI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Diagnostic Calculator
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Quickly measure your physical load proportions relative to your skeletal height. Complete the fields below for initial metabolic and physical recommendations.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Form Column */}
            <form onSubmit={calculateBMI} className="p-8 md:p-10 space-y-6 border-b md:border-b-0 md:border-r border-slate-800">
              
              {/* Unit Switcher */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  Measurement Unit
                </span>
                <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => { setUnitSystem('metric'); setBmi(null); }}
                    className={`py-1.5 px-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      unitSystem === 'metric' ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Metric
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnitSystem('imperial'); setBmi(null); }}
                    className={`py-1.5 px-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      unitSystem === 'imperial' ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              {/* Dynamic Inputs based on system */}
              <div className="space-y-5">
                {unitSystem === 'metric' ? (
                  <>
                    {/* Weight Metric */}
                    <div className="space-y-2">
                      <label htmlFor="weightKg" className="flex justify-between text-xs font-semibold text-slate-300">
                        <span>Your Weight (Kilograms)</span>
                        <span className="font-mono text-cyan-400">{weightKg} kg</span>
                      </label>
                      <input
                        type="range"
                        id="weightKg"
                        min="40"
                        max="160"
                        step="1"
                        value={weightKg}
                        onChange={(e) => { setWeightKg(e.target.value); setBmi(null); }}
                        className="w-full accent-cyan-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Height Metric */}
                    <div className="space-y-2">
                      <label htmlFor="heightCm" className="flex justify-between text-xs font-semibold text-slate-300">
                        <span>Your Height (Centimeters)</span>
                        <span className="font-mono text-cyan-400">{heightCm} cm</span>
                      </label>
                      <input
                        type="range"
                        id="heightCm"
                        min="120"
                        max="220"
                        step="1"
                        value={heightCm}
                        onChange={(e) => { setHeightCm(e.target.value); setBmi(null); }}
                        className="w-full accent-cyan-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Weight Imperial */}
                    <div className="space-y-2">
                      <label htmlFor="weightLbs" className="flex justify-between text-xs font-semibold text-slate-300">
                        <span>Your Weight (Pounds)</span>
                        <span className="font-mono text-cyan-400">{weightLbs} lbs</span>
                      </label>
                      <input
                        type="range"
                        id="weightLbs"
                        min="80"
                        max="350"
                        step="1"
                        value={weightLbs}
                        onChange={(e) => { setWeightLbs(e.target.value); setBmi(null); }}
                        className="w-full accent-cyan-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Height FT / IN */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="heightFt" className="text-xs font-semibold text-slate-300 block">
                          Height (Feet)
                        </label>
                        <select
                          id="heightFt"
                          value={heightFt}
                          onChange={(e) => { setHeightFt(e.target.value); setBmi(null); }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50"
                        >
                          {['4','5','6','7'].map(f => (
                            <option key={f} value={f}>{f} ft</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="heightIn" className="text-xs font-semibold text-slate-300 block">
                          Height (Inches)
                        </label>
                        <select
                          id="heightIn"
                          value={heightIn}
                          onChange={(e) => { setHeightIn(e.target.value); setBmi(null); }}
                          className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50"
                        >
                          {Array.from({ length: 12 }, (_, i) => i).map(inch => (
                            <option key={inch} value={inch.toString()}>{inch} in</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Submit / Reset buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  id="bmi-calc-btn"
                  className="flex-grow rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-4 shadow-lg shadow-cyan-400/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate BMI</span>
                </button>
                <button
                  type="button"
                  id="bmi-reset-btn"
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900 p-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Reset calculator"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

            </form>

            {/* Results Column */}
            <div className="p-8 md:p-10 bg-slate-900/40 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {bmi !== null ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    {/* Circle Gauge Graphic representation */}
                    <div className="text-center relative py-2">
                      <div className="inline-flex flex-col items-center justify-center h-32 w-32 rounded-full border-4 border-slate-800 bg-slate-950 relative">
                        {/* Radial glowing ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping opacity-25" />
                        
                        <span className="text-3xl font-mono font-extrabold text-white">
                          {bmi}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold mt-1">
                          Body Index
                        </span>
                      </div>
                    </div>

                    {/* Classification Indicator */}
                    <div className="text-center">
                      <span className={`inline-block px-3.5 py-1.5 rounded-full border text-xs font-extrabold uppercase tracking-widest ${getClassificationColor()}`}>
                        {classification}
                      </span>
                    </div>

                    {/* Detailed dynamic report */}
                    <div className="space-y-4 border-t border-slate-800/80 pt-5 text-center md:text-left">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block">
                          Ideal Target Body Weight Range:
                        </span>
                        <p className="text-sm font-semibold text-slate-200">
                          {idealRange} (Healthy BMI threshold)
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block">
                          Metabolic Recommendation:
                        </span>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {advice}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-4 py-8"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-500 mx-auto">
                      <Activity className="w-8 h-8 text-slate-600 animate-pulse" />
                    </div>
                    <div className="space-y-1 max-w-xs mx-auto">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Awaiting Analytics
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Input your metric or imperial statistics on the left and trigger calculate to evaluate your biometric report.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
