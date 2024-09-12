const channel_cont = document.querySelectorAll('.channel_cont');

for (i = 0; i < channel_cont.length; i++)
channel_cont.innerHTML = `style:'background-image: url('../public/images/rec-channel-${i}.png')'`