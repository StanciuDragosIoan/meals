let bookmarkBtn = document.createElement("button");
bookmarkBtn.innerHTML = "Bookmark";
bookmarkBtn.id = "bookmarkBtn";
document.body.appendChild(bookmarkBtn);

let goToBtn = document.createElement("button");
goToBtn.innerHTML = "Go To";
goToBtn.id = "goToBtn";
document.body.appendChild(bookmarkBtn);
document.body.appendChild(goToBtn);

let div = document.createElement("div");
div.id = "bookmarkStyles";
document.body.appendChild(div);

const savePosition = () => {
  const position = window.pageYOffset;
  localStorage.setItem("bookmarkScroll", position);
};

const goToPosition = () => {
  let position = localStorage.getItem("bookmarkScroll");

  if (position === null) {
    position = 10;
  }

  window.scrollTo({
    top: position,
    left: 0,
    behavior: "smooth",
  });
};

bookmarkBtn.addEventListener("click", savePosition);
goToBtn.addEventListener("click", goToPosition);

const styles = `
<style>
#bookmarkBtn,
#goToBtn {
  background: rgb(28, 28, 192);
  color: #fff;
  outline: none;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  opacity: 0.2;
  position: fixed;
  top: 1rem;
  right: 0;
  font-size: 0.7rem;
}

#goToBtn {
  left: 0;
}

#bookmarkBtn:hover {
  opacity: 1;
  cursor: pointer;
}

#goToBtn:hover {
  opacity: 1;
  cursor: pointer;
}

</style>
`;
document.querySelector("#bookmarkStyles").innerHTML = styles;
