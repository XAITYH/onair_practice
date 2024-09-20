const channel_conts = document.querySelectorAll(".channel_cont");
const new_channel_conts = document.querySelectorAll(".new-channel_cont");

const new_movie_conts = document.querySelectorAll(".new-movie_cont");
const popNumbers = [3, 1, 4, 5, null, 2, 6];

const pop_movie_conts = document.querySelectorAll(".pop-movie_cont");
const newNumbers = [2, 6, 1, 3, 4, 7, null];
const pop_second_movie_conts = document.querySelectorAll(
  ".pop-second-movie_cont"
);

// Channel Conts
for (let i = 0; i < channel_conts.length; i++) {
  if (i == 2) continue;
  channel_conts[i].style.backgroundImage = `url('../public/images/rec-channel-${
    i + 1
  }.png')`;
}

// New Channel Conts
for (let i = 0; i < new_channel_conts.length; i++)
  new_channel_conts[
    i
  ].style.backgroundImage = `url('../public/images/new-channel-${i + 1}.png')`;

// New Movie Conts
for (let i = 0; i < new_movie_conts.length; i++) {
  if (i == 4) continue;

  let pop_num = popNumbers[i];

  new_movie_conts[i].style.backgroundImage = `url('../public/images/new-${
    i + 1
  }-pop-${pop_num}-movie.png')`;
}

// Pop Movie Conts
for (let i = 0; i < pop_movie_conts.length; i++) {
  if (i == 6) continue;

  let new_num = newNumbers[i];

  pop_movie_conts[
    i
  ].style.backgroundImage = `url('../public/images/new-${new_num}-pop-${
    i + 1
  }-movie.png')`;
}

// Pop Second Movie Conts

for (let i = 0; i < pop_second_movie_conts.length; i++) {
  if (i == 4) continue;

  let pop_num = popNumbers[i];

  pop_second_movie_conts[i].style.backgroundImage = `url('../public/images/new-${
    i + 1
  }-pop-${pop_num}-movie.png')`;
}
