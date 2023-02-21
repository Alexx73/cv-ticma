const url = "https://randomuser.me/api/?page=3&results=1";

const url2 = "https://randomuser.me/api/?nat=gb";

const url3 = "https://randomuser.me/api/?phone=016974 68914";

const typeUsers = "users/";
const typePosts = "posts/";

alert("hey");

const buscarDatos = async () => {
  try {
    const resPost = await fetch(`${url3}`);
    const post = await resPost.json();
    console.log(post.results);

    // console.log(post.results[0].name.first + " " + post.results[0].name.last);

    // const resUser = await fetch(`${url}${typeUsers}${post.userId}`);
    // const resUserJson = await resUser.json();
    // console.log(resUserJson.name);
  } catch (error) {
    console.log(error);
  }
};

buscarDatos();
