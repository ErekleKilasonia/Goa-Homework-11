
const Images = () => {
    const attributes = {
        src: "https://freerangestock.com/sample/23839/random-paint-splats-background.jpg",
        alt: "Picture",
        width: "500px"
    };

    return (
        <div>
            <img {...attributes} />
        </div>
    );
}

export default Images;