const channel_conts = document.querySelectorAll(".channel_cont");
const new_channel_conts = document.querySelectorAll(".new-channel_cont");

const new_movie_conts = document.querySelectorAll(".new-movie_cont");
const popNumbers = [3, 1, 4, 5, null, 2, 6];

for (let i = 0; i < channel_conts.length; i++) {
  if (i == 2) continue;
  channel_conts[i].style.backgroundImage = `url('../public/images/rec-channel-${
    i + 1
  }.png')`;
}

for (let i = 0; i < new_channel_conts.length; i++)
  new_channel_conts[
    i
  ].style.backgroundImage = `url('../public/images/new-channel-${i + 1}.png')`;

for (let i = 0; i < new_movie_conts.length; i++) {
  if(i == 4)
    continue;

  let pop_num = popNumbers[i];

  new_movie_conts[i].style.backgroundImage = `url('../public/images/new-${
    i + 1
  }-pop-${pop_num}-movie.png')`;
}
