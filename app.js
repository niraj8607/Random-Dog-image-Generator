const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    const imgUrl = await getRandomPic();
    const img = document.querySelector("#dogImg");
    img.src = imgUrl;
});

let url = "https://dog.ceo/api/breeds/image/random";

async function getRandomPic() {
    try {
        const res = await axios.get(url);
        return res.data.message;
    } catch (e) {
        console.log(e);
        return "Image Not Found";
    }
}