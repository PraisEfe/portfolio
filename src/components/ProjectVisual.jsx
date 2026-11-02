export default function ProjectVisual({ id }) {
  return (
    <div className={`project-visual visual-${id}`} aria-hidden="true">
      <div className="mini-window">
        <div className="window-toolbar"><span /><span /><span /><i> {['genaxx.design', 'overview / analytics', 'studio / collection', 'wallet / overview'][id - 1]}</i></div>
        {id === 1 ? <div className="mini-portfolio"><small>DESIGN. DEVELOP. DELIVER.</small><strong>Ideas into<br /><em>experiences.</em></strong><div className="mini-pill">Let’s build something ↗</div><div className="mini-orb" /></div>
          : id === 2 ? <div className="mini-dashboard"><small>YOUR BUSINESS, AT A GLANCE</small><div className="mini-stats"><span><small>Revenue</small><b>$24,680</b></span><span><small>Growth</small><b>+28.4% ↗</b></span></div><div className="mini-chart">{[32, 55, 43, 70, 58, 85, 68, 92, 80, 100].map((h,i)=><span key={i} style={{height:`${h}%`, '--bar-index':i}} />)}</div></div>
          : id === 3 ? <div className="mini-shop"><small>THE EVERYDAY COLLECTION / 2026</small><strong>Less, but better.</strong><div className="shop-products"><div /><div /><div /></div><span>Objects for intentional living. ↗</span></div>
          : <div className="mini-wallet"><small>TOTAL BALANCE</small><strong>$12,450<span>.00</span></strong><div className="bank-card"><span>genaxx / pay</span><b>••••  4280</b><small>PRAISE OROGUN <span>↗</span></small></div></div>}
      </div>
      <span className="visual-index">0{id} / INTERFACE EXPLORATION</span>
    </div>
  );
}
