const user = {
  id: 1,
  name: "John",
  age: 25,
};


localStorage.setItem('user', JSON.stringify(user))

// document.getElementById("demo").innerHTML = localStorage.getItem("user") <- usato per fare una prova insieme al file HTML.