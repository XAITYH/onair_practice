const channel_conts = document.querySelectorAll(".channel_cont");
const new_channel_conts = document.querySelectorAll(".new-channel_cont");

for (i = 0; i < channel_conts.length; i++) {
    if(i == 2)
        continue
  channel_conts[i].style.backgroundImage = `url('../public/images/rec-channel-${i+1}.png')`;
}

for (i = 0; i < new_channel_conts.length; i++)
  new_channel_conts[i].style.backgroundImage = `url('../public/images/new-channel-${i+1}.png')`;