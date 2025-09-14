function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const hh = String(hours).padStart(2 , '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    document.getElementById('time').textContent =`${hh}:${mm}:${ss}`;

}

updateClock();

setInterval(updateClock,1000);