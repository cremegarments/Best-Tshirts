export function GarmentVisual() {
  return <div className="hero-visual" aria-label="Illustrated custom shirt and hat product concepts" role="img">
    <div className="visual-corner top-left">CRÈME / STUDIO 001</div><div className="visual-corner bottom-right">CONCEPTS → GOODS</div>
    <div className="hero-shape hero-shape-a"/><div className="hero-shape hero-shape-b"/>
    <svg className="shirt-svg" viewBox="0 0 460 495" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="shirt" x1="0" y1="0" x2=".75" y2="1"><stop stopColor="#f6f3ea"/><stop offset="1" stopColor="#cec5b6"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="20" stdDeviation="16" floodOpacity=".25"/></filter></defs>
      <path filter="url(#shadow)" d="M145 39L182 17Q230 44 278 17L315 39L409 111L360 211L314 191L320 454Q231 471 140 454L146 191L99 211L51 111Z" fill="url(#shirt)" stroke="#c5bbac" strokeWidth="2"/>
      <path d="M181 19Q230 97 279 19" fill="none" stroke="#b2a99a" strokeWidth="12"/><path d="M179 24Q230 83 281 24" fill="none" stroke="#f8f5ee" strokeWidth="16"/>
      <path d="M146 191L157 89M314 191L303 89" stroke="#c8beae" strokeWidth="1.5" opacity=".6"/>
      <text x="230" y="232" textAnchor="middle" fontFamily="Arial,Helvetica,sans-serif" fontWeight="900" fontSize="51" letterSpacing="-4" fill="#242522">CRÈME</text>
      <text x="230" y="252" textAnchor="middle" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="9" letterSpacing="3" fill="#242522">MAKE SOMETHING REAL</text>
    </svg>
    <div className="visual-badge"><span>001 / 006</span><strong>MAKE IT<br/>YOURS.</strong></div>
    <div className="image-sticker">CUSTOM<br/>BY DESIGN <span>↗</span></div>
  </div>;
}
