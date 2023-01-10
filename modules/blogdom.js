import { getBlogs, getBlogInputs } from "./blogs.js";

// function createBlog() {
//     // Get the blog title, image, and content
//     var title = document.getElementById('blog-title').value;
//     var image = document.getElementById('blog-image');
//     var content = document.getElementById('blog-content').value;

//     // Create the blog container element
//     var container = document.createElement('div');
//     container.classList.add('blog-container');

//     // Create the title element
//     var titleElement = document.createElement('h3');
//     titleElement.innerHTML = title;
//     container.appendChild(titleElement);

//     // Create the image element
//     var imageElement = document.createElement('img');
//     // imageElement.src = image;

//     const file = image.files[0];
//     const reader = new FileReader();

//     reader.onload = function(event) {
//       imageElement.src = event.target.result;
//       // imgElimageElementement.style.display = 'block'; // show the image
//     };

//     reader.readAsDataURL(file);
//     container.appendChild(imageElement);

//     // Create the content element
//     var contentElement = document.createElement('p');
//     contentElement.innerHTML = content;
//     container.appendChild(contentElement);

//     // Create the edit button
//     var editButton = document.createElement('button');
//     editButton.innerHTML = 'Edit';
//     editButton.addEventListener('click', function() {
//       // Code for editing the blog content goes here
//         // Get the element that contains the blog content
//     var contentElement = document.getElementById('blog-content');

//     // Create a textarea element for editing the content
//     var textarea = document.createElement('textarea');
//     textarea.value = contentElement.innerHTML;
//     // Replace the content element with the textarea
//     contentElement.parentNode.replaceChild(textarea, contentElement);

//     // Create a "Save" button for saving the edited content
//     var saveButton = document.createElement('button');
//     saveButton.innerHTML = 'Save';
//     saveButton.addEventListener('click', function() {
//       // Update the content element with the edited content
//       contentElement.innerHTML = textarea.value;

//       // Replace the textarea with the content element
//       textarea.parentNode.replaceChild(contentElement, textarea);
//       saveButton.style.display = 'none';

//     });
//     textarea.parentNode.insertBefore(saveButton, textarea.nextSibling);

//     });
//     container.appendChild(editButton);

//     // Create the update button
//     var updateButton = document.createElement('button');
//     updateButton.innerHTML = 'Update';
//     updateButton.addEventListener('click', function() {
//       // Code for updating the blog content goes here
//     });
//     container.appendChild(updateButton);

//     // Create the remove button
//     var removeButton = document.createElement('button');
//     removeButton.innerHTML = 'Remove';
//     removeButton.addEventListener('click', function() {
//       // Code for removing the blog container goes here
//     });
//     container.appendChild(removeButton);

//     // Add the blog container to the page
//     document.body.appendChild(container);

//     getBlogInputs(image, title, textarea.value)
//   }

var createButton = document.getElementById("createBlog");
createButton.addEventListener("click", () => {
  var title = document.getElementById("blog-title").value;
  var image = document.getElementById("blog-image");
  var content = document.getElementById("blog-content").value;

  // Create the blog container element
  var container = document.createElement("div");
  container.classList.add("blog-container");

  // Create the title element
  var titleElement = document.createElement("h3");
  titleElement.innerHTML = title;
  container.appendChild(titleElement);

  // Create the image element
  var imageElement = document.createElement("img");
  // imageElement.src = image;

  const file = image.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imageElement.src = event.target.result;
    // imgElimageElementement.style.display = 'block'; // show the image
  };

  reader.readAsDataURL(file);
  container.appendChild(imageElement);

  // Create the content element
  var contentElement = document.createElement("p");
  contentElement.innerHTML = content;
  container.appendChild(contentElement);

  var blogContent = document.getElementById("blog-content");
  // Create the edit button
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    // Code for editing the blog content goes here
    // Get the element that contains the blog content
    var contentElement = document.getElementById("blog-content");

    // Create a textarea element for editing the content
    var textarea = document.createElement("textarea");
    textarea.value = contentElement.innerHTML;
    // Replace the content element with the textarea
    contentElement.parentNode.replaceChild(textarea, contentElement);

    // Create a "Save" button for saving the edited content
    var saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.addEventListener("click", function () {
      // Update the content element with the edited content
      contentElement.innerHTML = textarea.value;

      // Replace the textarea with the content element
      textarea.parentNode.replaceChild(contentElement, textarea);
      saveButton.style.display = "none";
    });
    textarea.parentNode.insertBefore(saveButton, textarea.nextSibling);
  });
  container.appendChild(editButton);

  // Create the update button
  var updateButton = document.createElement("button");
  updateButton.innerHTML = "Update";
  updateButton.addEventListener("click", function () {
    // Code for updating the blog content goes here
  });
  container.appendChild(updateButton);

  // Create the remove button
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", function () {
    // Code for removing the blog container goes here
  });
  container.appendChild(removeButton);

  // Add the blog container to the page
  document.body.appendChild(container);

  //   createBlog();
  getBlogInputs(image, title, content);
  console.log("hey");
});
