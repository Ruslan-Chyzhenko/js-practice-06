// const user = {
//   username: "Victor",
//   showName() {
// 		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(user.username);
//   },
// };

// user.showName();

// this
const user = {
  username: "Victor",
  showName() {
		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
    console.log(this.username);
  },
};

user.showName();
