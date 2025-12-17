// Simple calendar renderer for営業カレンダー
(function(){
  const root = document.getElementById('calendar-root');
  if(!root) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-index

  // Sample open dates: change these to reflect actual営業日
  const openDays = [5,12,19,26];

  function render(){
    root.innerHTML = '';
    const toolbar = document.createElement('div'); toolbar.className='cal-toolbar';
    const title = document.createElement('div'); title.textContent = `${year}年 ${month+1}月`;
    toolbar.appendChild(title);
    root.appendChild(toolbar);

    const grid = document.createElement('div'); grid.className='cal-grid';
    const weekDays = ['日','月','火','水','木','金','土'];
    weekDays.forEach(d=>{const hd=document.createElement('div');hd.className='cal-cell head';hd.textContent=d;grid.appendChild(hd)});

    const first = new Date(year,month,1);
    const last = new Date(year,month+1,0);
    const padStart = first.getDay();

    for(let i=0;i<padStart;i++){const empty=document.createElement('div');empty.className='cal-cell';grid.appendChild(empty)}

    for(let d=1; d<= last.getDate(); d++){
      const cell = document.createElement('div'); cell.className='cal-cell day';
      cell.textContent = d;
      if(openDays.includes(d)) cell.classList.add('open');
      grid.appendChild(cell);
    }

    root.appendChild(grid);
    const legend = document.createElement('div'); legend.style.marginTop='8px'; legend.style.fontSize='0.95rem';
    legend.textContent = '※青い日が出店予定の例です。実際の営業情報はSNSで告知します。';
    root.appendChild(legend);
  }

  render();
})();
