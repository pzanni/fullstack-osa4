const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    let count = 0;
    blogs.forEach(blog => {
        count = count + blog.likes;
    });
    return count;
}

const favoriteBlog = (blogs) => {
    let favoriteBlog;
    let mostLikes = 0;
    blogs.forEach(blog => {
        if (blog.likes > mostLikes) {
            favoriteBlog = blog;
            mostLikes = blog.likes;
        }
    });
    return favoriteBlog;
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}