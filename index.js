const imageField = document.getElementById("image");

const submit = () => {
    const formData = new FormData();
    formData.append('image', imageField.files[0]);
    console.log(formData);

    fetch("https://api.imgbb.com/1/upload?key=myAPI", {
        method: "POST",
        body: formData
    }).then((res) => res.json()).then((data) => {
        console.log(data.data.display_url);
    });
}