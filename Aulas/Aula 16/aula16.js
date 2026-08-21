const objs = document.getElementsByTagName("div");

let num = [10, 20, 30, 68, 80, 900];

for (n of objs) {
  console.log((n.innerHTML = "New"));
}

for (o in objs) {
  console.log(o);
}
