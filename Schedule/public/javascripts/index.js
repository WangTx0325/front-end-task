function getSchedule(){
	fetch("../json/index.json").then(function(res) {
  if (res.ok) {
    res.json().then(function(data) {
      console.log(data);
      $(".first").html(data.first);
      $(".second").html(data.second);
      $(".third").html(data.third);
      $(".fourth").html(data.fourth);
      $(".fifth").html(data.fifth);
      $(".sixth").html(data.sixth);
      $(".seventh").html(data.seventh);
      $(".eighth").html(data.eighth);
      $(".ninth").html(data.ninth);
      $(".tenth").html(data.tenth);
      $(".eleventh").html(data.eleventh);
    });
  } else {
    console.log("Looks like the response wasn't perfect, got status", res.status);
  }
}, function(e) {
  console.log("Fetch failed!", e);
});
};