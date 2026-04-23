import { useEffect, useRef } from "react";

const ROIGeleFlamingo = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ROI Analyse – AI Chatbot De Gele Flamingo</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --yellow: #F5C842;
    --yellow-light: #FDF3C0;
    --dark: #1A1208;
    --mid: #7A6030;
    --light: #FDF8ED;
    --white: #FFFEF9;
    --green: #3D8B5C;
    --green-light: #E8F5EE;
    --red: #C0392B;
    --red-light: #FDECEA;
    --blue: #2563EB;
    --border: rgba(245, 200, 66, 0.25);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: var(--light); color: var(--dark); min-height: 100vh; }

  .header { background: var(--dark); padding: 32px 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .header-left h1 { font-family: 'DM Serif Display', serif; font-size: 26px; color: var(--yellow); line-height: 1.1; }
  .header-left p { color: rgba(255,255,255,0.45); font-size: 12px; margin-top: 4px; font-weight: 300; }
  .header-badge { background: var(--yellow); color: var(--dark); font-size: 10px; font-weight: 700; padding: 6px 14px; border-radius: 20px; letter-spacing: 0.5px; text-transform: uppercase; }

  .container { max-width: 980px; margin: 0 auto; padding: 40px 24px 80px; }

  .section-title {
    font-family: 'DM Serif Display', serif; font-size: 12px; font-style: italic; color: var(--mid);
    letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .section-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

  .pricing-block { background: var(--white); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 40px; }
  .pricing-top { background: var(--dark); padding: 18px 24px; }
  .pricing-top h3 { font-family: 'DM Serif Display', serif; font-size: 16px; color: var(--yellow); }
  .pricing-top p { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 3px; }
  .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; }
  @media(max-width:600px) { .pricing-grid { grid-template-columns: 1fr; } }
  .pricing-left { padding: 20px 24px; border-right: 1px solid var(--border); }
  .pricing-right { padding: 20px 24px; }
  .pricing-left h4, .pricing-right h4 { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: var(--mid); margin-bottom: 14px; }
  .setup-amount { font-family: 'DM Serif Display', serif; font-size: 38px; color: var(--dark); line-height: 1; }
  .setup-sub { font-size: 11px; color: var(--mid); margin-top: 6px; line-height: 1.6; }
  .billing-options { display: flex; flex-direction: column; gap: 8px; }
  .billing-opt { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 8px; border: 2px solid var(--border); cursor: pointer; transition: all 0.15s; background: var(--white); }
  .billing-opt:hover { border-color: var(--yellow); background: var(--yellow-light); }
  .billing-opt.active { border-color: var(--yellow); background: var(--yellow-light); }
  .billing-opt input[type=radio] { accent-color: var(--dark); width: 14px; height: 14px; flex-shrink: 0; }
  .billing-opt-info { flex: 1; }
  .billing-opt-label { font-size: 13px; font-weight: 600; }
  .billing-opt-price { font-family: 'DM Serif Display', serif; font-size: 16px; color: var(--dark); }
  .billing-note { margin-top: 12px; font-size: 10px; color: var(--mid); line-height: 1.5; padding: 10px 12px; background: var(--light); border-radius: 6px; border: 1px solid var(--border); }

  .assumptions-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 40px; }
  @media(max-width: 700px) { .assumptions-grid { grid-template-columns: 1fr 1fr; } }
  @media(max-width: 480px) { .assumptions-grid { grid-template-columns: 1fr; } }

  .input-card { background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px; display: flex; flex-direction: column; gap: 9px; transition: border-color 0.2s; }
  .input-card:hover { border-color: var(--yellow); }
  .input-card label { font-size: 10px; font-weight: 700; color: var(--mid); text-transform: uppercase; letter-spacing: 0.5px; }
  .input-card .input-row { display: flex; align-items: center; gap: 8px; }
  .input-card .unit { font-size: 11px; color: var(--mid); font-weight: 500; white-space: nowrap; }
  .input-card input[type=range] { flex: 1; -webkit-appearance: none; height: 3px; background: var(--yellow-light); border-radius: 4px; outline: none; }
  .input-card input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--yellow); cursor: pointer; border: 2px solid var(--dark); box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
  .input-card .val { font-family: 'DM Serif Display', serif; font-size: 22px; color: var(--dark); }
  .input-card.highlight-card { border-color: rgba(37,99,235,0.3); background: #F0F4FF; }
  .input-card.highlight-card label { color: var(--blue); }
  .input-card.highlight-card .val { color: var(--blue); }
  .input-card.highlight-card input[type=range] { background: #DBEAFE; }
  .input-card.green-card { border-color: rgba(61,139,92,0.3); background: var(--green-light); }
  .input-card.green-card label { color: var(--green); }
  .input-card.green-card .val { color: var(--green); }
  .input-card.green-card input[type=range] { background: #C8E6D3; }
  .input-card.green-card input[type=range]::-webkit-slider-thumb { background: var(--green); }

  .cpc-section { background: var(--white); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 40px; }
  .cpc-header { background: var(--dark); padding: 18px 24px; }
  .cpc-header h2 { font-family: 'DM Serif Display', serif; font-size: 17px; color: var(--yellow); }
  .cpc-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }
  @media(max-width:600px) { .cpc-grid { grid-template-columns: 1fr; } }
  .cpc-col { padding: 24px 20px; border-right: 1px solid var(--border); text-align: center; }
  .cpc-col:last-child { border-right: none; }
  .cpc-col-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.7px; color: var(--mid); margin-bottom: 12px; }
  .cpc-amount { font-family: 'DM Serif Display', serif; font-size: 44px; line-height: 1; margin-bottom: 6px; }
  .cpc-amount.human { color: var(--red); }
  .cpc-amount.ai { color: var(--green); }
  .cpc-amount.saving { color: var(--yellow); }
  .cpc-desc { font-size: 11px; color: var(--mid); line-height: 1.5; }
  .cpc-bar-row { padding: 20px 24px; border-top: 1px solid var(--border); background: var(--light); }
  .cpc-bar-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--mid); margin-bottom: 10px; }
  .cpc-bars { display: flex; flex-direction: column; gap: 8px; }
  .cpc-bar-item { display: flex; align-items: center; gap: 12px; }
  .cpc-bar-name { font-size: 12px; font-weight: 600; width: 80px; flex-shrink: 0; }
  .cpc-bar-track { flex: 1; background: var(--light); border-radius: 4px; height: 28px; overflow: hidden; border: 1px solid var(--border); }
  .cpc-bar-fill { height: 100%; border-radius: 4px; display: flex; align-items: center; padding-left: 10px; transition: width 0.4s ease; }
  .cpc-bar-fill.human { background: var(--red); }
  .cpc-bar-fill.ai { background: var(--green); }
  .cpc-bar-fill-label { font-size: 11px; font-weight: 700; color: white; white-space: nowrap; }
  .cpc-bar-val { font-family: 'DM Serif Display', serif; font-size: 15px; width: 54px; text-align: right; flex-shrink: 0; }
  .cpc-bar-val.human { color: var(--red); }
  .cpc-bar-val.ai { color: var(--green); }

  .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
  @media(max-width: 700px) { .metrics-grid { grid-template-columns: 1fr 1fr; } }
  .metric-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 20px 18px; position: relative; overflow: hidden; }
  .metric-card.highlight { background: var(--dark); border-color: var(--yellow); }
  .metric-card.highlight .metric-label { color: rgba(255,255,255,0.45); }
  .metric-card.highlight .metric-value { color: var(--yellow); }
  .metric-card.highlight .metric-sub { color: rgba(255,255,255,0.35); }
  .metric-card.highlight .metric-week { color: rgba(255,255,255,0.55); font-weight: 500; }
  .metric-card.green { background: var(--green-light); border-color: rgba(61,139,92,0.3); }
  .metric-card.green .metric-value { color: var(--green); }
  .metric-card.green .metric-label { color: #2A6040; }
  .metric-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.7px; color: var(--mid); margin-bottom: 6px; }
  .metric-value { font-family: 'DM Serif Display', serif; font-size: 30px; color: var(--dark); line-height: 1; margin-bottom: 4px; }
  .metric-sub { font-size: 10px; color: var(--mid); font-weight: 300; line-height: 1.4; }
  .metric-week { font-size: 11px; color: var(--mid); font-weight: 500; margin-top: 5px; }

  .split-section { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 22px 24px; margin-bottom: 40px; }
  .split-title { font-family: 'DM Serif Display', serif; font-size: 16px; margin-bottom: 16px; }
  .split-bar-wrap { display: flex; height: 36px; border-radius: 8px; overflow: hidden; margin-bottom: 10px; }
  .split-cs  { background: var(--yellow); display: flex; align-items: center; justify-content: center; transition: width 0.4s ease; min-width: 0; }
  .split-rev { background: var(--green);  display: flex; align-items: center; justify-content: center; transition: width 0.4s ease; min-width: 0; }
  .split-bar-label { font-size: 11px; font-weight: 700; color: var(--dark); white-space: nowrap; overflow: hidden; padding: 0 8px; }
  .split-bar-label.rev { color: white; }
  .split-legend { display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 14px; }
  .split-legend-item { display: flex; align-items: center; gap: 6px; font-size: 11px; }
  .split-legend-dot { width: 10px; height: 10px; border-radius: 3px; flex-shrink: 0; }
  .split-legend-item span { color: var(--mid); }
  .split-legend-item strong { color: var(--dark); }
  .split-surplus { padding: 12px 16px; background: var(--green-light); border-radius: 8px; border: 1px solid rgba(61,139,92,0.2); font-size: 12px; color: #2A6040; }

  .breakdown-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 40px; }
  .breakdown-header { background: var(--dark); padding: 14px 24px; display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr; gap: 12px; }
  .breakdown-header span { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: rgba(255,255,255,0.45); }
  .breakdown-row { padding: 14px 24px; display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr; gap: 12px; align-items: center; border-bottom: 1px solid var(--border); transition: background 0.15s; }
  .breakdown-row:hover { background: var(--light); }
  .breakdown-row:last-child { border-bottom: none; }
  .breakdown-row .row-label { font-size: 13px; font-weight: 500; }
  .breakdown-row .row-val { font-family: 'DM Serif Display', serif; font-size: 17px; }
  .row-val.pos { color: var(--green); }
  .row-val.neg { color: var(--red); }
  .row-val.neutral { color: var(--mid); font-size: 13px; font-family: 'DM Sans', sans-serif; }
  .breakdown-section-header { padding: 8px 24px; background: var(--light); border-bottom: 1px solid var(--border); }
  .breakdown-section-header span { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: var(--mid); }
  .breakdown-total { background: var(--yellow-light); padding: 16px 24px; display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr; gap: 12px; align-items: center; border-top: 2px solid var(--yellow); }
  .breakdown-total .tot-label { font-size: 13px; font-weight: 700; }
  .breakdown-total .tot-val { font-family: 'DM Serif Display', serif; font-size: 20px; color: var(--green); }
  .breakdown-total .tot-val.neg { color: var(--red); }

  .payback-section { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 24px; margin-bottom: 40px; }
  .payback-title { font-family: 'DM Serif Display', serif; font-size: 17px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; }
  .payback-title span { font-size: 12px; color: var(--mid); font-family: 'DM Sans', sans-serif; }
  .months-row { display: flex; gap: 5px; align-items: flex-end; margin-bottom: 8px; height: 110px; }
  .month-bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; justify-content: flex-end; }
  .month-bar { width: 100%; border-radius: 4px 4px 0 0; min-height: 4px; }
  .month-bar.negative { background: var(--red-light); border: 1px solid rgba(192,57,43,0.2); border-radius: 0 0 4px 4px; }
  .month-bar.positive { background: var(--yellow); }
  .month-label { font-size: 9px; color: var(--mid); text-align: center; }
  .month-val { font-size: 9px; font-weight: 600; text-align: center; }
  .month-val.pos { color: var(--green); }
  .month-val.neg { color: var(--red); }
  .payback-axis { border-top: 2px solid var(--dark); display: flex; justify-content: space-between; padding-top: 6px; }
  .payback-axis span { font-size: 9px; color: var(--mid); }

  .utm-section { background: var(--white); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 40px; }
  .utm-header { background: var(--blue); padding: 18px 24px; }
  .utm-header h2 { font-family: 'DM Serif Display', serif; font-size: 17px; color: white; margin-bottom: 4px; }
  .utm-header p { font-size: 11px; color: rgba(255,255,255,0.7); line-height: 1.5; }
  .utm-flow { display: grid; grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid var(--border); }
  .utm-step { padding: 18px 16px; border-right: 1px solid var(--border); position: relative; }
  .utm-step:last-child { border-right: none; }
  .utm-step-num { font-family: 'DM Serif Display', serif; font-size: 28px; color: var(--yellow-light); line-height: 1; margin-bottom: 6px; }
  .utm-step h4 { font-size: 12px; font-weight: 700; margin-bottom: 6px; color: var(--dark); }
  .utm-step p { font-size: 11px; color: var(--mid); line-height: 1.5; }
  .utm-step code { display: inline-block; margin-top: 6px; background: var(--light); border: 1px solid var(--border); border-radius: 4px; padding: 3px 7px; font-size: 9px; font-family: monospace; color: var(--blue); word-break: break-all; }
  .utm-arrow { position: absolute; right: -9px; top: 20px; z-index: 1; color: var(--yellow); font-size: 16px; font-weight: 700; }
  @media(max-width: 700px) { .utm-flow { grid-template-columns: 1fr 1fr; } }
  .utm-metrics { display: grid; grid-template-columns: repeat(3, 1fr); }
  .utm-metric { padding: 18px 20px; border-right: 1px solid var(--border); }
  .utm-metric:last-child { border-right: none; }
  .utm-metric label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: var(--mid); display: block; margin-bottom: 6px; }
  .utm-metric .utm-val { font-family: 'DM Serif Display', serif; font-size: 26px; color: var(--blue); margin-bottom: 3px; }
  .utm-metric p { font-size: 10px; color: var(--mid); line-height: 1.4; }
  @media(max-width: 600px) { .utm-metrics { grid-template-columns: 1fr; } .utm-metric { border-right: none; border-bottom: 1px solid var(--border); } }

  .recovery-section { background: var(--white); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 40px; }
  .recovery-header { background: var(--dark); padding: 18px 24px; }
  .recovery-header h2 { font-family: 'DM Serif Display', serif; font-size: 17px; color: var(--yellow); margin-bottom: 4px; }
  .recovery-header p { font-size: 11px; color: rgba(255,255,255,0.5); line-height: 1.5; }
  .recovery-inputs { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--border); }
  .recovery-input-col { padding: 20px 20px; border-right: 1px solid var(--border); }
  .recovery-input-col:last-child { border-right: none; }
  .recovery-input-col label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--mid); display: block; margin-bottom: 8px; }
  .recovery-input-col .r-val { font-family: 'DM Serif Display', serif; font-size: 20px; color: var(--dark); margin-bottom: 6px; }
  .recovery-input-col input[type=range] { width: 100%; -webkit-appearance: none; height: 3px; background: var(--yellow-light); border-radius: 4px; outline: none; }
  .recovery-input-col input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--yellow); cursor: pointer; border: 2px solid var(--dark); box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
  @media(max-width:600px) { .recovery-inputs { grid-template-columns: 1fr; } .recovery-input-col { border-right: none; border-bottom: 1px solid var(--border); } }
  .recovery-results { display: grid; grid-template-columns: repeat(3, 1fr); background: var(--light); }
  .recovery-result-col { padding: 20px 20px; border-right: 1px solid var(--border); text-align: center; }
  .recovery-result-col:last-child { border-right: none; }
  .recovery-result-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: var(--mid); margin-bottom: 8px; }
  .recovery-result-val { font-family: 'DM Serif Display', serif; font-size: 30px; margin-bottom: 4px; }
  .recovery-result-val.green { color: var(--green); }
  .recovery-result-val.yellow { color: var(--mid); }
  .recovery-result-desc { font-size: 10px; color: var(--mid); line-height: 1.4; }
  @media(max-width:600px) { .recovery-results { grid-template-columns: 1fr; } .recovery-result-col { border-right: none; border-bottom: 1px solid var(--border); } }

  .dfy-section { margin-bottom: 40px; }
  .dfy-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media(max-width: 600px) { .dfy-compare { grid-template-columns: 1fr; } }
  .dfy-card { border-radius: 14px; overflow: hidden; border: 1px solid var(--border); }
  .dfy-card-header { padding: 16px 20px; display: flex; align-items: center; gap: 10px; }
  .dfy-card-header.self { background: var(--red-light); border-bottom: 1px solid rgba(192,57,43,0.15); }
  .dfy-card-header.glimps { background: var(--green-light); border-bottom: 1px solid rgba(61,139,92,0.2); }
  .dfy-card-header h3 { font-size: 14px; font-weight: 700; }
  .dfy-card-header.self h3 { color: var(--red); }
  .dfy-card-header.glimps h3 { color: var(--green); }
  .dfy-card-body { background: var(--white); padding: 18px 20px; }
  .dfy-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); gap: 12px; }
  .dfy-row:last-child { border-bottom: none; }
  .dfy-row-label { font-size: 12px; color: var(--dark); flex: 1; }
  .dfy-row-val { font-family: 'DM Serif Display', serif; font-size: 14px; white-space: nowrap; }
  .dfy-row-val.neg { color: var(--red); }
  .dfy-row-val.pos { color: var(--green); }
  .dfy-row-val.neutral { color: var(--mid); font-size: 12px; font-family: 'DM Sans', sans-serif; font-style: italic; }
  .dfy-total { background: var(--light); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; border-top: 2px solid; }
  .dfy-total.self { border-color: var(--red); }
  .dfy-total.glimps { border-color: var(--green); }
  .dfy-total-label { font-size: 12px; font-weight: 700; }
  .dfy-total-val { font-family: 'DM Serif Display', serif; font-size: 18px; }
  .dfy-total.self .dfy-total-val { color: var(--red); }
  .dfy-total.glimps .dfy-total-val { color: var(--green); }
  .dfy-note { margin-top: 14px; background: var(--dark); border-radius: 12px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; }
  .dfy-note .icon { font-size: 18px; flex-shrink: 0; margin-top: 2px; }
  .dfy-note p { font-size: 12px; color: rgba(255,255,255,0.7); line-height: 1.6; }
  .dfy-note strong { color: var(--yellow); }

  .measure-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px; }
  @media(max-width: 600px) { .measure-grid { grid-template-columns: 1fr; } }
  .measure-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 20px; }
  .measure-card h3 { font-family: 'DM Serif Display', serif; font-size: 15px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .measure-card ul { list-style: none; display: flex; flex-direction: column; gap: 7px; }
  .measure-card ul li { font-size: 11px; color: var(--dark); display: flex; align-items: flex-start; gap: 8px; line-height: 1.5; }
  .measure-card ul li::before { content: '\\2192'; color: var(--yellow); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .measure-card p.source { margin-top: 10px; padding-top: 8px; border-top: 1px solid var(--border); font-size: 9px; color: var(--mid); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; }

  .pill { display: inline-block; background: var(--yellow); color: var(--dark); font-size: 9px; font-weight: 700; padding: 2px 8px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.4px; }
  .pill.green { background: var(--green); color: white; }
  .pill.blue { background: var(--blue); color: white; }

  .footer-note { background: var(--dark); border-radius: 14px; padding: 22px 26px; color: rgba(255,255,255,0.65); font-size: 12px; line-height: 1.7; }
  .footer-note strong { color: var(--yellow); }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .container > * { animation: fadeUp 0.35s ease both; }
  .container > *:nth-child(2)  { animation-delay: 0.04s; }
  .container > *:nth-child(3)  { animation-delay: 0.08s; }
  .container > *:nth-child(4)  { animation-delay: 0.12s; }
  .container > *:nth-child(5)  { animation-delay: 0.15s; }
  .container > *:nth-child(6)  { animation-delay: 0.18s; }
  .container > *:nth-child(7)  { animation-delay: 0.21s; }
  .container > *:nth-child(8)  { animation-delay: 0.24s; }
  .container > *:nth-child(9)  { animation-delay: 0.27s; }
  .container > *:nth-child(10) { animation-delay: 0.30s; }
  .container > *:nth-child(11) { animation-delay: 0.33s; }
</style>
</head>
<body>

<div class="header">
  <div class="header-left">
    <h1>ROI Analyse &mdash; AI Chatbot</h1>
    <p>De Gele Flamingo &middot; Glimps voorstel &middot; Business pakket &middot; 1 jaar engagement</p>
  </div>
  <div class="header-badge">Interactief model</div>
</div>

<div class="container">

  <div class="section-title">Investering &amp; facturatiekeuze</div>
  <div class="pricing-block">
    <div class="pricing-top">
      <h3>Betalingsstructuur</h3>
      <p>Eenmalige opstartkost bij aanvang &middot; Maandelijkse kost gefactureerd naar keuze &middot; Minimum 1 jaar engagement</p>
    </div>
    <div class="pricing-grid">
      <div class="pricing-left">
        <h4>Eenmalige opstartkost &mdash; verplicht bij aanvang</h4>
        <div class="setup-amount">&euro;1.500</div>
        <div class="setup-sub">Volledige setup, integraties (Shopify, WICS, Gorgias), training en go-live. Betaald bij ondertekening &mdash; voor de start van de dienst.</div>
      </div>
      <div class="pricing-right">
        <h4>Maandelijkse kost &mdash; kies facturatieritme</h4>
        <div class="billing-options">
          <label class="billing-opt" id="opt-q">
            <input type="radio" name="billing" value="quarterly" onchange="setBilling(this)">
            <div class="billing-opt-info"><div class="billing-opt-label">Per kwartaal</div></div>
            <div class="billing-opt-price">&euro;1.575</div>
          </label>
          <label class="billing-opt active" id="opt-h">
            <input type="radio" name="billing" value="halfyear" onchange="setBilling(this)" checked>
            <div class="billing-opt-info"><div class="billing-opt-label">Per half jaar</div></div>
            <div class="billing-opt-price">&euro;3.150</div>
          </label>
          <label class="billing-opt" id="opt-y">
            <input type="radio" name="billing" value="yearly" onchange="setBilling(this)">
            <div class="billing-opt-info"><div class="billing-opt-label">Per jaar</div></div>
            <div class="billing-opt-price">&euro;6.300</div>
          </label>
        </div>
        <div class="billing-note">&#9888; Minimum engagement: <strong>1 jaar</strong>. Na het eerste jaar maand-per-maand opzegbaar. De opstartkost &euro;1.500 is niet terugvorderbaar.</div>
      </div>
    </div>
  </div>

  <div class="section-title">Aannames &mdash; pas aan naar jouw situatie</div>
  <div class="assumptions-grid">
    <div class="input-card">
      <label>Inkomende chats / tickets per maand</label>
      <div class="val" id="val-chats">500</div>
      <div class="input-row"><input type="range" id="sl-chats" min="100" max="2000" step="50" value="500"><span class="unit">gesprekken</span></div>
    </div>
    <div class="input-card">
      <label>Gem. tijd per ticket</label>
      <div class="val" id="val-time">8</div>
      <div class="input-row"><input type="range" id="sl-time" min="3" max="25" step="1" value="8"><span class="unit">min</span></div>
    </div>
    <div class="input-card">
      <label>% automatisch afgehandeld</label>
      <div class="val" id="val-auto">72</div>
      <div class="input-row"><input type="range" id="sl-auto" min="40" max="90" step="1" value="72"><span class="unit">%</span></div>
    </div>
    <div class="input-card">
      <label>Uurloon CS-medewerker (bruto)</label>
      <div class="val" id="val-wage">&euro;18</div>
      <div class="input-row"><input type="range" id="sl-wage" min="14" max="35" step="1" value="18"><span class="unit">&euro;/u</span></div>
    </div>
    <div class="input-card highlight-card">
      <label>Extra omzet gegenereerd door de bot</label>
      <div class="val" id="val-botrev">&euro;5.000</div>
      <div class="input-row"><input type="range" id="sl-botrev" min="500" max="25000" step="500" value="5000"><span class="unit">&euro;/maand</span></div>
    </div>
    <div class="input-card">
      <label>Brutomarge (%)</label>
      <div class="val" id="val-margin">18</div>
      <div class="input-row"><input type="range" id="sl-margin" min="5" max="50" step="1" value="18"><span class="unit">%</span></div>
    </div>
  </div>

  <div class="section-title">Kostprijs per gesprek &mdash; medewerker vs. AI</div>
  <div class="cpc-section">
    <div class="cpc-header">
      <h2>Wat kost &eacute;&eacute;n gesprek &mdash; manueel vs. automatisch?</h2>
    </div>
    <div class="cpc-grid">
      <div class="cpc-col">
        <div class="cpc-col-label">Medewerker</div>
        <div class="cpc-amount human" id="cpc-human">&euro;2,40</div>
        <div class="cpc-desc" id="cpc-human-desc">8 min x &euro;18/u = &euro;2,40 per ticket</div>
      </div>
      <div class="cpc-col">
        <div class="cpc-col-label">AI &mdash; Glimps</div>
        <div class="cpc-amount ai" id="cpc-ai">&euro;0,70</div>
        <div class="cpc-desc" id="cpc-ai-desc">&euro;525/maand / 360 gesprekken = &euro;0,70 per gesprek</div>
      </div>
      <div class="cpc-col">
        <div class="cpc-col-label">Besparing per gesprek</div>
        <div class="cpc-amount saving" id="cpc-saving">&euro;1,70</div>
        <div class="cpc-desc" id="cpc-saving-desc">x 360 gesprekken = &euro;612/maand</div>
      </div>
    </div>
    <div class="cpc-bar-row">
      <div class="cpc-bar-label">Vergelijking kostprijs per gesprek</div>
      <div class="cpc-bars">
        <div class="cpc-bar-item">
          <div class="cpc-bar-name">Medewerker</div>
          <div class="cpc-bar-track">
            <div class="cpc-bar-fill human" id="cpc-bar-human" style="width:100%">
              <span class="cpc-bar-fill-label" id="cpc-bar-human-lbl">&euro;2,40</span>
            </div>
          </div>
          <div class="cpc-bar-val human" id="cpc-bar-human-val">&euro;2,40</div>
        </div>
        <div class="cpc-bar-item">
          <div class="cpc-bar-name">AI (Glimps)</div>
          <div class="cpc-bar-track">
            <div class="cpc-bar-fill ai" id="cpc-bar-ai" style="width:29%">
              <span class="cpc-bar-fill-label" id="cpc-bar-ai-lbl">&euro;0,70</span>
            </div>
          </div>
          <div class="cpc-bar-val ai" id="cpc-bar-ai-val">&euro;0,70</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section-title">ROI via abandoned carts &mdash; verloren mandjes terugwinnen</div>
  <div class="recovery-section">
    <div class="recovery-header">
      <h2>&#128722; Abandoned cart recovery</h2>
      <p>Wanneer een klant producten in het mandje legt maar niet afrekent, springt de bot open om de twijfel weg te nemen. Zo worden verloren verkopen actief teruggewonnen.</p>
    </div>
    <div class="recovery-inputs">
      <div class="recovery-input-col">
        <label>Bezoekers met verlaten mandje per maand</label>
        <div class="r-val" id="val-rc-visits">300</div>
        <input type="range" id="sl-rc-visits" min="50" max="2000" step="50" value="300" oninput="calcRecovery()">
      </div>
      <div class="recovery-input-col">
        <label>% dat bot-interventie converteert</label>
        <div class="r-val" id="val-rc-conv">12</div>
        <input type="range" id="sl-rc-conv" min="2" max="35" step="1" value="12" oninput="calcRecovery()">
      </div>
      <div class="recovery-input-col">
        <label>Gem. orderwaarde verlaten mandje</label>
        <div class="r-val" id="val-rc-order">&euro;95</div>
        <input type="range" id="sl-rc-order" min="20" max="400" step="5" value="95" oninput="calcRecovery()">
      </div>
    </div>
    <div class="recovery-results">
      <div class="recovery-result-col">
        <div class="recovery-result-label">Teruggewonnen bestellingen</div>
        <div class="recovery-result-val yellow" id="rc-orders">36</div>
        <div class="recovery-result-desc">300 x 12%</div>
      </div>
      <div class="recovery-result-col">
        <div class="recovery-result-label">Extra bruto-omzet</div>
        <div class="recovery-result-val green" id="rc-revenue">&euro;3.420</div>
        <div class="recovery-result-desc" id="rc-revenue-desc">36 x &euro;95</div>
      </div>
      <div class="recovery-result-col">
        <div class="recovery-result-label">Marge-aandeel (ROI)</div>
        <div class="recovery-result-val green" id="rc-margin">&euro;616</div>
        <div class="recovery-result-desc" id="rc-margin-desc">&euro;3.420 x 18% marge</div>
      </div>
    </div>
  </div>

  <div class="section-title">Maandelijkse impact &mdash; na go-live</div>
  <div class="metrics-grid">
    <div class="metric-card highlight">
      <div class="metric-label">Vrijgekomen uren CS</div>
      <div class="metric-value" id="m-hours">48u</div>
      <div class="metric-sub" id="m-hours-sub">360 geautomatiseerde tickets</div>
      <div class="metric-week" id="m-hours-week">~11u per week</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Waarde vrijgekomen tijd</div>
      <div class="metric-value" id="m-timeval">&euro;864</div>
      <div class="metric-sub" id="m-timeval-sub">uren x uurloon</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Bot-omzet marge-aandeel</div>
      <div class="metric-value" id="m-revmargin">&euro;900</div>
      <div class="metric-sub" id="m-revmargin-sub">&euro;5.000 omzet x 18%</div>
    </div>
    <div class="metric-card green">
      <div class="metric-label">Netto ROI / maand</div>
      <div class="metric-value" id="m-roi">&euro;1.239</div>
      <div class="metric-sub">na aftrek Glimps-kost &euro;525</div>
    </div>
  </div>

  <div class="split-section">
    <div class="split-title">Hoe betaalt de bot zichzelf terug?</div>
    <div class="split-bar-wrap">
      <div class="split-cs"  id="split-cs-bar"  style="width:49%"><span class="split-bar-label" id="split-cs-lbl">CS &mdash; 49%</span></div>
      <div class="split-rev" id="split-rev-bar" style="width:51%"><span class="split-bar-label rev" id="split-rev-lbl">Omzet &mdash; 51%</span></div>
    </div>
    <div class="split-legend">
      <div class="split-legend-item"><div class="split-legend-dot" style="background:var(--yellow)"></div><span>Tijdsbesparing CS &mdash; </span><strong id="leg-cs">&euro;864</strong></div>
      <div class="split-legend-item"><div class="split-legend-dot" style="background:var(--green)"></div><span>Omzet marge-aandeel &mdash; </span><strong id="leg-rev">&euro;900</strong></div>
      <div class="split-legend-item"><div class="split-legend-dot" style="background:#ddd;border:1px solid #ccc"></div><span>Maandkost Glimps &mdash; </span><strong>&euro;525</strong></div>
    </div>
    <div class="split-surplus" id="split-surplus">
      Maandkost &euro;525 volledig gedekt &mdash; netto overschot: <strong>&euro;1.239/maand</strong>
    </div>
  </div>

  <div class="section-title">Kosten &amp; opbrengsten &mdash; volledig overzicht</div>
  <div class="breakdown-card">
    <div class="breakdown-header">
      <span>Post</span><span>Maand 1</span><span>Per maand</span><span>Jaar 1 totaal</span>
    </div>
    <div class="breakdown-section-header"><span>Opbrengsten</span></div>
    <div class="breakdown-row">
      <div class="row-label">Tijdsbesparing klantenservice</div>
      <div class="row-val pos" id="br-cs-m1">&euro;864</div>
      <div class="row-val pos" id="br-cs-pm">&euro;864</div>
      <div class="row-val pos" id="br-cs-y1">&euro;10.368</div>
    </div>
    <div class="breakdown-row">
      <div class="row-label">Extra omzet via bot &mdash; marge-aandeel</div>
      <div class="row-val pos" id="br-rev-m1">&euro;900</div>
      <div class="row-val pos" id="br-rev-pm">&euro;900</div>
      <div class="row-val pos" id="br-rev-y1">&euro;10.800</div>
    </div>
    <div class="breakdown-row">
      <div class="row-label">Abandoned cart recovery &mdash; marge-aandeel</div>
      <div class="row-val pos" id="br-rc-m1">&euro;616</div>
      <div class="row-val pos" id="br-rc-pm">&euro;616</div>
      <div class="row-val pos" id="br-rc-y1">&euro;7.390</div>
    </div>
    <div class="breakdown-section-header"><span>Investering</span></div>
    <div class="breakdown-row">
      <div class="row-label">Eenmalige opstartkost</div>
      <div class="row-val neg">&minus;&euro;1.500</div>
      <div class="row-val neutral">&mdash;</div>
      <div class="row-val neg">&minus;&euro;1.500</div>
    </div>
    <div class="breakdown-row">
      <div class="row-label" id="br-billing-label">Maandelijkse kost Glimps &mdash; gefactureerd per half jaar</div>
      <div class="row-val neg">&minus;&euro;525</div>
      <div class="row-val neg">&minus;&euro;525</div>
      <div class="row-val neg">&minus;&euro;6.300</div>
    </div>
    <div class="breakdown-total">
      <div class="tot-label">Netto resultaat</div>
      <div class="tot-val" id="tot-m1">&euro;1.355</div>
      <div class="tot-val" id="tot-pm">&euro;1.855</div>
      <div class="tot-val" id="tot-y1">&euro;20.758</div>
    </div>
  </div>

  <div class="payback-section">
    <div class="payback-title">Cumulatief rendement &mdash; 12 maanden<span id="payback-label">Break-even in maand 1</span></div>
    <div class="months-row" id="months-row"></div>
    <div class="payback-axis"><span>Start</span><span>Maand 6</span><span>Maand 12</span></div>
  </div>

  <div class="section-title">Geboortelijst-tracking &mdash; hoe we exact meten wat de bot bijdraagt</div>
  <div class="utm-section">
    <div class="utm-header">
      <h2>&#127873; UTM-tracking: van aanbeveling tot effectieve aankoop</h2>
      <p>Elke productlink die de bot verstuurt draagt een unieke UTM-tag. Zo is in Google Analytics en Shopify exact zichtbaar welke producten via de bot aan een geboortelijst worden toegevoegd en gekocht.</p>
    </div>
    <div class="utm-flow">
      <div class="utm-step">
        <div class="utm-step-num">01</div>
        <h4>Bot stuurt productlink</h4>
        <p>Klant vraagt naar een starterspakket. De bot stuurt een aanbeveling met UTM-tag zodat elke klik herleidbaar is.</p>
        <code>?utm_source=chatbot &amp;utm_medium=geboortelijst</code>
        <div class="utm-arrow">&#8250;</div>
      </div>
      <div class="utm-step">
        <div class="utm-step-num">02</div>
        <h4>Klant voegt toe aan mandje</h4>
        <p>Shopify registreert de sessie via UTM. Het product wordt aan de geboortelijst toegevoegd, volledig herleidbaar naar de bot.</p>
        <code>Shopify: sessie utm_source = chatbot</code>
        <div class="utm-arrow">&#8250;</div>
      </div>
      <div class="utm-step">
        <div class="utm-step-num">03</div>
        <h4>Aankoop geregistreerd</h4>
        <p>Wanneer de bestelling wordt geplaatst verschijnt de omzet onder chatbot-bron in GA4, of het nu mama zelf of een familielid is.</p>
        <code>GA4: conversie bron = chatbot</code>
        <div class="utm-arrow">&#8250;</div>
      </div>
      <div class="utm-step">
        <div class="utm-step-num">04</div>
        <h4>Maandrapport Glimps</h4>
        <p>Wij leveren maandelijks een kant-en-klaar overzicht van alle bot-prestaties &mdash; zonder dat jullie iets hoeven op te volgen.</p>
      </div>
    </div>
    <div class="utm-metrics">
      <div class="utm-metric">
        <label>Totale extra omzet via bot (bruto)</label>
        <div class="utm-val" id="utm-rev">&euro;5.000</div>
        <p>Na go-live exact meetbaar via UTM in Shopify en GA4</p>
      </div>
      <div class="utm-metric">
        <label>Marge-aandeel (wat telt voor ROI)</label>
        <div class="utm-val" id="utm-margin">&euro;900</div>
        <p id="utm-margin-sub">&euro;5.000 x 18%</p>
      </div>
      <div class="utm-metric">
        <label>Dekking maandkost via omzet alleen</label>
        <div class="utm-val" id="utm-cover">171%</div>
        <p>Marge-aandeel vs. &euro;525/maand</p>
      </div>
    </div>
  </div>

  <div class="section-title">Done for you &mdash; wat als jullie dit zelf zouden beheren?</div>
  <div class="dfy-section">
    <div class="dfy-compare">
      <div class="dfy-card">
        <div class="dfy-card-header self">
          <span style="font-size:20px">&#9888;&#65039;</span>
          <h3>Zelf beheren / andere aanbieder</h3>
        </div>
        <div class="dfy-card-body">
          <div class="dfy-row">
            <div class="dfy-row-label">Technische opzet &amp; integraties</div>
            <div class="dfy-row-val neg">Externe developer nodig</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Maandelijkse monitoring &amp; bijsturing</div>
            <div class="dfy-row-val neg">6&ndash;10u/maand</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Kostprijs monitoring (intern uurloon)</div>
            <div class="dfy-row-val neg" id="dfy-mon-cost">&minus;&euro;144/maand</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Content-updates bij producten &amp; collecties</div>
            <div class="dfy-row-val neg">5u/maand</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Netto tijdwinst na eigen botbeheer</div>
            <div class="dfy-row-val neg" id="dfy-net-self">~38u netto</div>
          </div>
        </div>
        <div class="dfy-total self">
          <div class="dfy-total-label">Reele tijdwinst per maand</div>
          <div class="dfy-total-val" id="dfy-self-total">~79% behoudt</div>
        </div>
      </div>
      <div class="dfy-card">
        <div class="dfy-card-header glimps">
          <span style="font-size:20px">&#9989;</span>
          <h3>Glimps &mdash; volledig "done for you"</h3>
        </div>
        <div class="dfy-card-body">
          <div class="dfy-row">
            <div class="dfy-row-label">Technische opzet &amp; integraties</div>
            <div class="dfy-row-val pos">Inbegrepen</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Maandelijkse monitoring &amp; fine-tuning</div>
            <div class="dfy-row-val pos">Inbegrepen</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Kostprijs monitoring voor jullie team</div>
            <div class="dfy-row-val pos">&euro;0</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Content-updates bij producten &amp; collecties</div>
            <div class="dfy-row-val pos">Inbegrepen</div>
          </div>
          <div class="dfy-row">
            <div class="dfy-row-label">Netto tijdwinst na Glimps-beheer</div>
            <div class="dfy-row-val pos" id="dfy-net-glimps">48u &mdash; 100% vrij</div>
          </div>
        </div>
        <div class="dfy-total glimps">
          <div class="dfy-total-label">Reele tijdwinst per maand</div>
          <div class="dfy-total-val" id="dfy-glimps-total">100% behoudt</div>
        </div>
      </div>
    </div>
    <div class="dfy-note">
      <div class="icon">&#128161;</div>
      <p>
        <strong>Het kernpunt:</strong> Stel dat de bot <span id="dfy-note-hours">48 uur per maand</span> vrijmaakt &mdash; die winst is alleen reeel als niemand die uren terugstopt in het beheren van de bot. Bij zelfbeheer gaat gemakkelijk <strong>6&ndash;10 uur per maand</strong> verloren aan monitoring en updates. Glimps regelt alles proactief: jullie merken de bot enkel wanneer hij waarde levert.
      </p>
    </div>
  </div>

  <div class="section-title">Hoe meten we dit &mdash; na de interne demo &amp; go-live?</div>
  <div class="measure-grid">
    <div class="measure-card">
      <h3>&#9200; Tijdsbesparing CS <span class="pill">Kost</span></h3>
      <ul>
        <li>Ons platform: exact aantal automatisch afgehandelde gesprekken per maand</li>
        <li>Gorgias: vergelijk tickets voor en na go-live &mdash; het verschil is de bot</li>
        <li>Nulmeting <strong>nu al</strong>: CS-team noteert minuten per ticket als referentie voor later</li>
        <li>Formule: (auto-gesprekken x min/ticket / 60) x uurloon = euro-besparing</li>
      </ul>
      <p class="source">Bron: Platform-dashboard + Gorgias-rapport</p>
    </div>
    <div class="measure-card">
      <h3>&#127873; Geboortelijst via bot <span class="pill blue">UTM</span></h3>
      <ul>
        <li>Elke productlink bevat ?utm_source=chatbot&amp;utm_medium=geboortelijst</li>
        <li>Shopify: filter sessies op UTM &rarr; hoeveel producten aan mandje toegevoegd</li>
        <li>GA4: conversie-rapport &rarr; filter chatbot-bron &rarr; transacties en omzet</li>
        <li>Maandrapport Glimps: aanbevelingen &rarr; toegevoegd &rarr; gekocht &rarr; euro omzet</li>
      </ul>
      <p class="source">Bron: Google Analytics 4 + Shopify + Glimps-rapport</p>
    </div>
    <div class="measure-card">
      <h3>&#128722; Abandoned cart recovery <span class="pill green">Omzet</span></h3>
      <ul>
        <li>Shopify: filter verlaten mandjes waarbij bot-interactie plaatsvond</li>
        <li>UTM-tag op cart-recovery links: ?utm_medium=cart-recovery</li>
        <li>GA4: vergelijk conversieratio sessies met en zonder bot-interventie</li>
        <li>Maandrapport: X verlaten mandjes &rarr; Y teruggewonnen &rarr; Z euro omzet</li>
      </ul>
      <p class="source">Bron: Shopify abandoned cart rapport + GA4</p>
    </div>
    <div class="measure-card">
      <h3>&#128203; Maandrapport Glimps</h3>
      <ul>
        <li>Totaal gesprekken vs. automatisch opgelost, inclusief evolutie</li>
        <li>Top-10 meest gestelde vragen bij jullie klanten</li>
        <li>Geboortelijst-tracking: aanbevelingen &rarr; toegevoegd &rarr; gekocht &rarr; omzet</li>
        <li>Escalaties naar Gorgias: welke vragen zijn nog te complex?</li>
        <li>Aanbevelingen voor volgende maand &mdash; wij regelen het</li>
      </ul>
      <p class="source">Bron: Glimps maandelijks rapport</p>
    </div>
  </div>

  <div class="footer-note">
    <strong>Nota voor Sophie:</strong> Alle opbrengsten worden berekend op het <strong>marge-aandeel</strong> van de omzet, niet op brutoomzet. Eerst doorlopen jullie een interne demo-periode waarbij jullie team de bot intern test &mdash; pas daarna gaat de bot live op de website. De ROI-cijfers op dit model zijn schattingen gebaseerd op jullie situatie. Eens live zijn de extra omzet en cart recovery <strong>exact meetbaar</strong> via UTM-tags in Shopify en Google Analytics, en leveren wij maandelijks een rapport met echte cijfers.
  </div>

</div>

<script>
const sl = (id) => document.getElementById(id);
const E = '\\u20AC';
function euro(n) { const a = Math.abs(Math.round(n)); return (n < 0 ? '-' : '') + E + a.toLocaleString('nl-BE'); }
function pos(n)  { return E + Math.round(n).toLocaleString('nl-BE'); }
function centsStr(n) { return E + n.toFixed(2).replace('.', ','); }

function setBilling(radio) {
  ['opt-q','opt-h','opt-y'].forEach(id => sl(id).classList.remove('active'));
  const map = { quarterly: 'opt-q', halfyear: 'opt-h', yearly: 'opt-y' };
  sl(map[radio.value]).classList.add('active');
  const labels = { quarterly: 'per kwartaal', halfyear: 'per half jaar', yearly: 'per jaar' };
  sl('br-billing-label').textContent = 'Maandelijkse kost Glimps \\u2014 gefactureerd ' + labels[radio.value];
}

function calcRecovery() {
  const visits  = +sl('sl-rc-visits').value;
  const conv    = +sl('sl-rc-conv').value / 100;
  const order   = +sl('sl-rc-order').value;
  const margin  = +sl('sl-margin').value / 100;

  sl('val-rc-visits').textContent = visits;
  sl('val-rc-conv').textContent   = sl('sl-rc-conv').value;
  sl('val-rc-order').textContent  = E + order;

  const orders   = Math.round(visits * conv);
  const revenue  = orders * order;
  const marginV  = revenue * margin;

  sl('rc-orders').textContent      = orders;
  sl('rc-revenue').textContent     = pos(revenue);
  sl('rc-revenue-desc').textContent = orders + ' x ' + E + order;
  sl('rc-margin').textContent      = pos(marginV);
  sl('rc-margin-desc').textContent  = pos(revenue) + ' x ' + sl('sl-margin').value + '% marge';

  sl('br-rc-m1').textContent = pos(marginV); sl('br-rc-m1').className = 'row-val pos';
  sl('br-rc-pm').textContent = pos(marginV); sl('br-rc-pm').className = 'row-val pos';
  sl('br-rc-y1').textContent = pos(marginV * 12); sl('br-rc-y1').className = 'row-val pos';

  calcMain();
}

function calcMain() {
  const chats   = +sl('sl-chats').value;
  const time    = +sl('sl-time').value;
  const autoPct = +sl('sl-auto').value / 100;
  const wage    = +sl('sl-wage').value;
  const botrev  = +sl('sl-botrev').value;
  const margin  = +sl('sl-margin').value / 100;
  const rcVisits = +sl('sl-rc-visits').value;
  const rcConv   = +sl('sl-rc-conv').value / 100;
  const rcOrder  = +sl('sl-rc-order').value;

  sl('val-chats').textContent  = chats;
  sl('val-time').textContent   = time;
  sl('val-auto').textContent   = sl('sl-auto').value;
  sl('val-wage').textContent   = E + wage;
  sl('val-botrev').textContent = E + botrev.toLocaleString('nl-BE');
  sl('val-margin').textContent = sl('sl-margin').value;

  const automated    = Math.round(chats * autoPct);
  const hoursFreed   = automated * time / 60;
  const timeVal      = hoursFreed * wage;
  const revMargin    = botrev * margin;
  const rcMargin     = Math.round(rcVisits * rcConv) * rcOrder * margin;
  const monthlyCost  = 525;
  const setupCost    = 1500;
  const totalBenefit = timeVal + revMargin + rcMargin;
  const netMonthly   = totalBenefit - monthlyCost;
  const netMonth1    = totalBenefit - monthlyCost - setupCost;
  const netYear1     = totalBenefit * 12 - monthlyCost * 12 - setupCost;

  const humanCPC  = (time / 60) * wage;
  const aiCPC     = automated > 0 ? monthlyCost / automated : monthlyCost / chats;
  const savingCPC = Math.max(humanCPC - aiCPC, 0);
  const totalSave = savingCPC * automated;

  sl('cpc-human').textContent       = centsStr(humanCPC);
  sl('cpc-human-desc').textContent  = time + ' min x ' + E + wage + '/u = ' + centsStr(humanCPC) + ' per ticket';
  sl('cpc-ai').textContent          = centsStr(aiCPC);
  sl('cpc-ai-desc').textContent     = E + '525/maand / ' + automated + ' gesprekken = ' + centsStr(aiCPC) + ' per gesprek';
  sl('cpc-saving').textContent      = centsStr(savingCPC);
  sl('cpc-saving-desc').textContent = 'x ' + automated + ' gesprekken = ' + pos(totalSave) + '/maand';

  const maxC  = Math.max(humanCPC, aiCPC, 0.01);
  const aiPct = Math.max(Math.min(Math.round(aiCPC / maxC * 100), 100), 4);
  sl('cpc-bar-human').style.width     = '100%';
  sl('cpc-bar-ai').style.width        = aiPct + '%';
  sl('cpc-bar-human-lbl').textContent = centsStr(humanCPC);
  sl('cpc-bar-ai-lbl').textContent    = centsStr(aiCPC);
  sl('cpc-bar-human-val').textContent = centsStr(humanCPC);
  sl('cpc-bar-ai-val').textContent    = centsStr(aiCPC);

  sl('m-hours').textContent        = Math.round(hoursFreed) + 'u';
  sl('m-hours-sub').textContent    = automated + ' geautomatiseerde tickets';
  sl('m-hours-week').textContent   = '~' + (Math.round(hoursFreed / 4.3 * 10) / 10) + 'u per week';
  sl('m-timeval').textContent      = pos(timeVal);
  sl('m-timeval-sub').textContent  = Math.round(hoursFreed) + 'u x ' + E + wage + '/u';
  sl('m-revmargin').textContent    = pos(revMargin);
  sl('m-revmargin-sub').textContent = E + botrev.toLocaleString('nl-BE') + ' omzet x ' + sl('sl-margin').value + '%';
  sl('m-roi').textContent          = euro(netMonthly);

  const tot2  = timeVal + revMargin + rcMargin;
  const csPct = tot2 > 0 ? Math.round(timeVal / tot2 * 100) : 50;
  const rvPct = 100 - csPct;
  sl('split-cs-bar').style.width  = csPct + '%';
  sl('split-rev-bar').style.width = rvPct + '%';
  sl('split-cs-lbl').textContent  = csPct > 12 ? 'CS \\u2014 ' + csPct + '%' : '';
  sl('split-rev-lbl').textContent = rvPct > 12 ? 'Omzet \\u2014 ' + rvPct + '%' : '';
  sl('leg-cs').textContent  = pos(timeVal);
  sl('leg-rev').textContent = pos(revMargin + rcMargin);

  const surplus = sl('split-surplus');
  if (netMonthly >= 0) {
    surplus.style.background  = 'var(--green-light)';
    surplus.style.borderColor = 'rgba(61,139,92,0.2)';
    surplus.style.color       = '#2A6040';
    surplus.innerHTML = 'Maandkost ' + E + '525 volledig gedekt \\u2014 netto overschot: <strong>' + euro(netMonthly) + '/maand</strong>';
  } else {
    surplus.style.background  = 'var(--red-light)';
    surplus.style.borderColor = 'rgba(192,57,43,0.2)';
    surplus.style.color       = 'var(--red)';
    surplus.innerHTML = 'Nog niet break-even: tekort van <strong>' + euro(netMonthly) + '/maand</strong>';
  }

  function setRow(id, val, cls) { const e = sl(id); e.textContent = val; e.className = 'row-val ' + cls; }
  setRow('br-cs-m1',  pos(timeVal),     'pos');
  setRow('br-cs-pm',  pos(timeVal),     'pos');
  setRow('br-cs-y1',  pos(timeVal*12),  'pos');
  setRow('br-rev-m1', pos(revMargin),   'pos');
  setRow('br-rev-pm', pos(revMargin),   'pos');
  setRow('br-rev-y1', pos(revMargin*12),'pos');
  setRow('br-rc-m1',  pos(rcMargin),    'pos');
  setRow('br-rc-pm',  pos(rcMargin),    'pos');
  setRow('br-rc-y1',  pos(rcMargin*12), 'pos');

  function setTot(id, val) { const e = sl(id); e.textContent = euro(val); e.className = 'tot-val' + (val < 0 ? ' neg' : ''); }
  setTot('tot-m1', netMonth1);
  setTot('tot-pm', netMonthly);
  setTot('tot-y1', netYear1);

  sl('utm-rev').textContent        = pos(botrev);
  sl('utm-margin').textContent     = pos(revMargin);
  sl('utm-margin-sub').textContent = E + botrev.toLocaleString('nl-BE') + ' x ' + sl('sl-margin').value + '%';
  const coverPct = monthlyCost > 0 ? Math.round(revMargin / monthlyCost * 100) : 0;
  sl('utm-cover').textContent      = coverPct + '%';

  const monHours = 8;
  const monCost  = monHours * wage;
  const netSelf  = Math.max(hoursFreed - monHours, 0);
  const selfPct  = hoursFreed > 0 ? Math.round(netSelf / hoursFreed * 100) : 0;
  sl('dfy-mon-cost').textContent    = '-' + E + Math.round(monCost) + '/maand';
  sl('dfy-net-self').textContent    = '~' + Math.round(netSelf) + 'u netto';
  sl('dfy-net-glimps').textContent  = Math.round(hoursFreed) + 'u \\u2014 100% vrij';
  sl('dfy-self-total').textContent  = '~' + selfPct + '% behoudt';
  sl('dfy-glimps-total').textContent = Math.round(hoursFreed) + 'u \\u2014 100% behoudt';
  sl('dfy-note-hours').textContent  = Math.round(hoursFreed) + ' uur per maand';

  const months = Array.from({length: 12}, (_, i) => totalBenefit*(i+1) - monthlyCost*(i+1) - setupCost);
  const be = months.findIndex(v => v >= 0) + 1;
  sl('payback-label').textContent = be < 1 ? 'Geen break-even in jaar 1' : 'Break-even in maand ' + be;
  const maxAbs = Math.max(...months.map(v => Math.abs(v)), 1);
  const row = sl('months-row');
  row.innerHTML = '';
  months.forEach((val, i) => {
    const wrap = document.createElement('div'); wrap.className = 'month-bar-wrap';
    const h = Math.max(Math.round(Math.abs(val) / maxAbs * 100), 4);
    const bar = document.createElement('div');
    bar.className = 'month-bar ' + (val < 0 ? 'negative' : 'positive');
    bar.style.height = h + 'px';
    const vl = document.createElement('div');
    vl.className = 'month-val ' + (val < 0 ? 'neg' : 'pos');
    vl.textContent = (val < 0 ? '-' : '+') + E + (Math.round(Math.abs(val)/100)/10) + 'k';
    const lbl = document.createElement('div'); lbl.className = 'month-label'; lbl.textContent = 'M'+(i+1);
    wrap.appendChild(vl); wrap.appendChild(bar); wrap.appendChild(lbl);
    row.appendChild(wrap);
  });
}

['sl-chats','sl-time','sl-auto','sl-wage','sl-botrev','sl-margin'].forEach(id => sl(id).addEventListener('input', calcMain));
calcMain();
calcRecovery();
</script>
</body>
</html>`;

    const doc = iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(html);
      doc.close();
    }
  }, []);

  useEffect(() => {
    const syncHeight = () => {
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentDocument) return;
      const body = iframe.contentDocument.body;
      if (body) {
        iframe.style.height = body.scrollHeight + "px";
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", syncHeight);
      const timer = setTimeout(syncHeight, 500);
      return () => {
        iframe.removeEventListener("load", syncHeight);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: "100%",
        border: "none",
        display: "block",
        minHeight: "100vh",
      }}
      title="ROI Analyse De Gele Flamingo"
    />
  );
};

export default ROIGeleFlamingo;
