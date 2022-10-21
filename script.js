var users = [];
function user(name) {
  this.name = name;
  this.ifollow = [];
  this.followers = [];
  this.feed = [];
  this.subscribe = function (name) {
    this.ifollow.push(name);
  };
  this.printifollow = function () {
    console.log(this.ifollow);
  };
  this.printfollowers = function () {
    console.log(this.followers);
  };
}

let prof1 = new user("profile1");
let prof2 = new user("profile2");
let prof3 = new user("profile3");
let prof4 = new user("profile4");
users.push(prof1);
users.push(prof2);
users.push(prof3);
users.push(prof4);

function rename(position) {
  let name = prompt("enter name");
  users[position].name = name;
  let a = document.getElementsByClassName("mainbutton");
  a[position].innerHTML = '<i class="fa fa-fw fa-user"></i>' + name;
}

function post(position) {
  clearpage();
  let box = document.getElementById("box");
  let para = document.createElement("p");
  let tx = document.createTextNode("Enter your post:");
  para.appendChild(tx);
  let txarea = document.createElement("textarea");
  txarea.cols = "50";
  txarea.rows = "4";
  txarea.setAttribute("id", "textid");
  let bn = document.createElement("button");
  bn.innerHTML = "submit";
  bn.type = "text";
  box.appendChild(para);
  box.appendChild(txarea);
  box.appendChild(bn);
  bn.addEventListener("click", () => {
    let temp = document.getElementById("textid").value;
    users[position].feed.push(temp);
    alert("post submitted");
  });
}

function follow(position) {
  clearpage();
  let name = prompt("enter the name of friend to follow: ");
  users[position].subscribe(name);
  alert(name + " was successfully added to contacts");
  let othernameindex = indexbyname(name);
  users[othernameindex].followers.push(users[position].name);
}

function indexbyname(name) {
  var tempindex = null;
  for (let i = 0; i < users.length; i++) {
    if (name == users[i].name) {
      tempindex = i;
    }
  }
  if (tempindex != null) {
    return tempindex;
  } else {
    alert("no such user");
  }
}

function printfollowers(position) {
  clearpage();
  let box = document.getElementById("box");
  let para = document.createElement("p");
  let tx = document.createTextNode(users[position].name + " list of followers:");
  para.appendChild(tx);
  let flist = document.createElement("ul");
  for (let i = 0; i < users[position].followers.length; i++) {
    let li = document.createElement("li");
    let n = users[position].followers[i];
    li.appendChild(document.createTextNode(n));
    flist.appendChild(li);
  }
  box.appendChild(para);
  box.appendChild(flist);
}

function feed(position) {
  clearpage();
  for (let i = 0; i < users[position].ifollow.length; i++) {
    let name = users[position].ifollow[i];
    let index = indexbyname(name);
    printfeed(index);
  }
}

function printfeed(position) {
  let box = document.getElementById("box");
  let para = document.createElement("p");
  let tx = document.createTextNode(users[position].name + " posts: ");
  para.appendChild(tx);
  let flist = document.createElement("ul");
  for (let i = 0; i < users[position].feed.length; i++) {
    let li = document.createElement("li");
    let n = users[position].feed[i];
    li.appendChild(document.createTextNode(n));
    flist.appendChild(li);
  }
  box.appendChild(para);
  box.appendChild(flist);
}

function clearpage() {
  document.getElementById("box").innerHTML = "";
}
