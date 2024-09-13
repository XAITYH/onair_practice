const channel_conts = document.querySelectorAll(".channel_cont");

for (i = 0; i < channel_conts.length; i++) {
    if(i == 2)
        continue
  channel_conts[i].style.backgroundImage = `url('../public/images/rec-channel-${i+1}.png')`;
}
