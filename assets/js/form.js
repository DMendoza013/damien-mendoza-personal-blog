const userNameInput = document.getElementById('username');
const userTitle = document.getElementById('title');
const userContent = document.getElementById('main-content');
const submitButton = document.getElementById('button');

function saveBlog() {

    const blog = {
        userNameInput: userNameInput.value,
        userTitle: userTitle.value,
        userContent: userContent.value
    }

    localStorage.setItem('blog', JSON.stringify(blog));
};


function outputBlog () {

    const lastBlog = JSON.parse(localStorage.getItem('blog'));

    if (lastBlog !== null) {
        document.getElementById('saved-userName').innerHTML = lastBlog.userNameInput;
        document.getElementById('saved-title').innerHTML = lastBlog.userTitle;
        document.getElementById('saved-content').innerHTML = lastBlog.userContent;
    }
};

submitButton.addEventListener('click', function(event){
    saveBlog();
    outputBlog();
    event.preventDefault();
});

 function init(){
     outputBlog();
 };
init();