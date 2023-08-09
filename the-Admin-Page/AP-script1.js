//--------------------SCRIPT--------------------
// Listen for form submit event
document.querySelector('#addArticleForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form input values
  const title = document.querySelector('#titleInput').value;
  const video = document.querySelector('#videoInput').value;
  const videoimage = document.querySelector('#videoimageInput').value;
  const image = document.querySelector('#imageInput').value;
  const imageExtensions = document.querySelector('#imageExtensionsSelect').value;
  const paragraph = document.querySelector('#paragraphInput').value;
  const date = document.querySelector('#dateInput').value;
  const tag = document.querySelector('#tagInput').value;

  let videoHTML = '';
  // Check if the video checkbox is checked
  if (document.querySelector('#videoCheckbox').checked) {
    videoHTML = `
      &lt;div class="video-container"&gt;
        &lt;iframe srcdoc="&lt;style&gt;*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}&lt;/style&gt;&lt;a href=${video}&gt;&lt;img src=${videoimage} alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'&gt;&lt;span&gt;▶&lt;/span&gt;&lt;/a&gt;" class="responsive-iframe" src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;
      &lt;/div&gt;
    `;
  }
  let imageHTML = '';
  // Check if the video checkbox is checked
  if (document.querySelector('#imagesCheckbox').checked) {
    imageHTML = `
    &lt;figure class="img-container"&gt;
      &lt;img class="myImages" id="myImg" src="the-body/images/${image}${imageExtensions}" alt="Photo du projet fini" loading="lazy"&gt;
    &lt;/figure&gt;
    `;
  }

  // Construct the article HTML
  const article1 = `
  <div class="forpre">
    <textarea class="copy-block">
      &lt;article class="tabcontent"&gt;
        &lt;h2&gt;${title}&lt;/h2&gt;
        ${videoHTML}
        ${imageHTML}
        &lt;p&gt;${paragraph}&lt;/p&gt;
        &lt;div class="articlefood"&gt;
          &lt;h5&gt;Made in ${date}&lt;/h5&gt;
          &lt;div class="tagdiv"&gt;
            &lt;div class="tagele"&gt;&lt;h4&gt;${tag}&lt;/h4&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/article&gt;
    </textarea>
  </div>
  `;
  const article2 = `
  <div class="insight">
    <h2>Insight: </h2>
      <article class="tabcontent">
        <h2>${title}</h2>
        ${videoHTML}
        <p>${paragraph}</p>
        <div class="articlefood">
          <h5>Made in ${date}</h5>
          <div class="tagdiv">
            <div class="tagele"><h4>${tag}</h4></div>
          </div>
        </div>
      </article>
  </div>
  `;

  const addARTICLE1 = `<div class="grid1">` + article1 + article2 + `</div>`;


  // Add the article HTML to the "myMenu" div
  document.querySelector('.myMenu').innerHTML = addARTICLE1 + document.querySelector('.myMenu').innerHTML;

  // Reset the form
  //document.querySelector('#addArticleForm').reset();
});

// Get the video checkbox element
const videoCheckbox = document.getElementById('videoCheckbox');

// Get all video input and video image input elements
const videoInputs = document.querySelectorAll('#videoInput, #videoimageInput');

/* Add event listener to the video checkbox
videoCheckbox.addEventListener('change', function() {
  if (this.checked) {
        // If the checkbox is not checked, remove class and disable attribute from all video inputs and video image inputs
        videoInputs.forEach(function(input) {
            input.classList.remove('not-available');
            input.removeAttribute('disabled');
    });
  } else {
        // If the checkbox is checked, add class and disable attribute to all video inputs and video image inputs
        videoInputs.forEach(function(input) {
            input.classList.add('not-available');
            input.setAttribute('disabled', true);
    });
  }
});*/

/* Video checkbox 2
const checkbox = document.getElementById("videoCheckbox");

checkbox.addEventListener("change", function() {
  const cssFile = document.querySelector('link[href="AP-style1.css"]');

  if (this.checked) {
    // create the CSS rule and add it to the file
    const rule = "#videoInput { background-color: red !important; }";
    if (cssFile) {
      cssFile.sheet.insertRule(rule, cssFile.sheet.rules.length);
    } else {
      const link = document.createElement("link");
      link.href = "AP-style1.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      link.onload = function() {
        this.sheet.insertRule(rule, this.sheet.rules.length);
      };
    }
  } else {
    // remove the CSS rule from the file
    if (cssFile) {
      const rules = cssFile.sheet.rules;
      for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === "#videoInput") {
          cssFile.sheet.deleteRule(i);
          break;
        }
      }
    }
  }
});
*/

//--------------------SCRIPT--------------------



//--------------------SCRIPT--------------------
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Text copied to clipboard");
  }
  $(".copy-button").click(function() {
    copyToClipboard($(this).prev(".copy-block"));
  });
//--------------------SCRIPT--------------------



function deleteInputField(element) {
  element.parentNode.removeChild(element);
}


const counterElement = document.getElementById("counterButtonImage");

let inputCount = 0;
let inputCountImage = 0;
let inputCountOption = 0;
function addInputField() {
  if (inputCount <= 9) {
    const imageForm = document.getElementById("image-form");

    // if the image-form div doesn't exist, create it
    if (!imageForm) {
      const container = document.createElement("div");
      container.id = "container";
  
      imageForm = document.createElement("div");
      imageForm.id = "image-form";
      container.appendChild(imageForm);
  
      document.body.appendChild(container);
    }
  
    // create the elements
    const div = document.createElement("div");
    div.className = "content-imageInput";
  
    const input = document.createElement("input");

    input.type = "text";
    input.id = "imageInput" + inputCountImage;
    input.name = "imageInput";
    input.placeholder = "Link of the image here...";
    input.style.background = "white";
    inputCountImage++;

    const select = document.createElement("select");
    select.className = "select-option";
    select.name = "image-extensions";
    select.id = "imageExtensionsSelect" + inputCountOption;
  
    const option1 = document.createElement("option");
    option1.value = "";
    option1.textContent = "--option--";
  
    const option2 = document.createElement("option");
    option2.value = ".png";
    option2.textContent = ".png";
  
    const option3 = document.createElement("option");
    option3.value = ".jpg";
    option3.textContent = ".jpg";
  
    const option4 = document.createElement("option");
    option4.value = ".jpeg";
    option4.textContent = ".jpeg";
  
    const option5 = document.createElement("option");
    option5.value = ".gif";
    option5.textContent = ".gif";

    inputCountOption++;
  
    const button = document.createElement("button");
    button.type = "button";
    button.className = "delete-button button-meplz";
    button.textContent = "Delete";
    button.onclick = function() {
      deleteInputField(this.parentNode);
      inputCount--;
      inputCountImage--;
      inputCountOption--;
      counterElement.innerText = inputCount;
    }
  
    // append the elements to the div and select
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
  
    div.appendChild(input);
    div.appendChild(select);
    div.appendChild(button);
  
    // append the div to the image-form div
    imageForm.appendChild(div);

    inputCount++;
    counterElement.innerText = inputCount;
  } else {
    alert("Maxium image added !");
  }
}
