export const avatarStyle = {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "cover",
    objectPosition: "center",
};

export const backgroundImage = image => {
    return {
        backgroundImage: `url(${image})`
    }
}