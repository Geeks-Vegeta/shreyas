const about_content =
  "I'm Shreyas. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping";

const projects_content = [
  {
    title: "All In One App",
    description:
      "Here is a solution for getting all tools in one place - This tool contain all things including images. Generate/Decode QR Code Short URLs",
    url: "https://weballinone.site/",
  },
  {
    title: "ColorPicker",
    description:
      "This tool is really great at for creating and getting color Palettes- Create Color Palettes. Getting top famous Color Palettes for artist and designer.",
    url: "https://colorpickerllc.online/",
  },
  {
    title: "Quote App",
    description:
      "A quote application offers inspiring, motivational, or thought-provoking quotes, often categorized, to uplift and engage users' spirits daily.",
    url: "https://quoteapp.online/",
  },
];

const experience_content = [
  {
    title: "Senior Backend Developer (Jaaga.ai)",
    description:
      "Implement database solutions, managing data modeling, optimization, and integration with third-party services. Participate in code reviews, providing valuable feedback to team members to enhance overall code quality.",
    url: "https://weballinone.site/",
  },
  {
    title: "Backend Developer Intern (Stareoutgames)",
    description:
      "Collaborate closely with cross-functional teams including front-end developers, UI/UX designers, and product managers to understand requirements and deliver high-quality solutions..",
    url: "https://www.linkedin.com/company/stareout-games/",
  },
  {
    title: "Backend Developer Intern (Meet)",
    description:
      "Collaborated with a cross-functional team to define project requirements, scope, and timelines.Implemented RESTful APIs, optimized database queries, and improved overall performance.",
    url: "https://www.linkedin.com/company/meetworks/",
  },
  {
    title: "Backend Developer Intern (SirpiDataScience)",
    description:
      "Deployed and managed multiple applications using different frameworks like Flask and Express. Building and managing restful API's for Fronted, Also worked in chat bot development process",
    url: "https://www.linkedin.com/company/sirpidatascience/",
  },
];

const social_links = [
  {
    name: "github",
    url: "https://github.com/Geeks-Vegeta",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shreyas-mohite-6855621a5/",
  },
  {
    name: "email",
    url: "mailto:shreyasmohite30@gmail.com",
  },
  {
    name: "telegram",
    url: "https://t.me/Shreyasmohite_bot",
  },
];

const skills_content = [
  {
    name: "aws",
    percent_bar: "[#####.....]",
    percent: "50%",
  },
  {
    name: "reactjs",
    percent_bar: "[######....]",
    percent: "60%",
  },
  {
    name: "nodejs",
    percent_bar: "[######....]",
    percent: "60%",
  },
  {
    name: "python",
    percent_bar: "[#######...]",
    percent: "70%",
  },
  {
    name: "docker",
    percent_bar: "[#####.....]",
    percent: "50%",
  },
];

document.getElementById("toggle").addEventListener("change", function () {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  let modeText = document.getElementById("mode");

  if (this.checked) {
    page1.classList.remove("active");
    page2.classList.add("active");
    modeText.innerText = "Dev Mode";
  } else {
    page1.classList.add("active");
    page2.classList.remove("active");
    modeText.innerText = "Testimonial";
  }
});

const body = document.getElementById("body");
body.addEventListener("mousedown", function (e) {
  return false;
});

function move() {
  let elem = document.getElementById("greenBar");
  elem.style.width = "0%"; // Reset to 0%
  elem.innerHTML = "0%"; // Reset displayed value
  let stepValue = 0; // Start from 0
  let id = setInterval(frame, 400);

  function frame() {
    if (stepValue >= 100) {
      clearInterval(id);
      elem.style.width = "100%";
      elem.innerHTML = "100%";
    } else {
      stepValue += 10;
      elem.style.width = stepValue + "%";
      elem.innerHTML = stepValue + "%";
    }
  }
}

let node = document.getElementById("linux-text");
let node_value = [];
let i = 0;

node.addEventListener("keydown", function (ed) {
  if (ed.key === "ArrowUp") {
    i = i - 1;

    if (node_value.length === 0 && i === -1) {
      node.value = "show -n joke";
    } else if (!node_value.at(i)) {
      node.value = "show -n joke";
      i = 0;
    } else {
      node.value = node_value.at(i);
    }
  }
});

node.addEventListener("keyup", function (event) {
  let command_list = [
    "show -n joke",
    "show contacts",
    "cat projects.txt",
    "show -n meme",
    "quit",
    "cat about.txt",
    "show resume",
    "cat experiences.txt",
    "cat skills.txt",
  ];
  let imgs = "";
  let sp = document.getElementById("sp");
  let action = "";

  if (event.key === "Enter") {
    node_value.push(node.value);
    if (!command_list.includes(node.value)) {
      write_p = "Invalid Command, Please check from command list.";

      let new_div = document.createElement("div");
      new_div.setAttribute("id", "cursor_ui");

      let top_span_green = document.createElement("span");
      top_span_green.innerText = "shreyas@shreyas-Inspiron-15-3567";
      top_span_green.setAttribute("class", "green");

      let span_white_colon = document.createElement("span");
      span_white_colon.innerText = ":";
      span_white_colon.setAttribute("class", "white");

      let span_blue_colon = document.createElement("span");
      span_blue_colon.innerText = "~/profile";
      span_blue_colon.setAttribute("class", "blue");

      let span_white_dollar = document.createElement("span");
      span_white_dollar.innerText = "$";
      span_white_dollar.setAttribute("class", "white");

      new_div.appendChild(top_span_green);
      new_div.appendChild(span_white_colon);
      new_div.appendChild(span_blue_colon);
      new_div.appendChild(span_white_dollar);

      let input_span = document.createElement("span");
      let input = document.createElement("input");
      input.setAttribute("id", `linux-text`);
      input.setAttribute("class", "linux-text");
      input.setAttribute("type", "text");
      input.value = node.value;
      input.disabled = true;
      input_span.append(input);

      new_div.appendChild(input_span);

      let c_div = document.createElement("div");
      c_div.setAttribute("class", "joke");

      let c_p = document.createElement("p");
      c_p.innerText = write_p;
      c_div.appendChild(c_p);

      new_div.appendChild(c_div);

      let xx = document.getElementById("linux-ui");
      xx.insertBefore(new_div, xx.lastElementChild);
      node.value = null;
    } else {
      switch (node.value) {
        case "cat about.txt":
          action = "about";
          sp.innerHTML = "loading about please wait...";
          write_punchline = "";
          break;
        case "show -n joke":
          sp.innerHTML = "New joke is arriving,please wait.";

          fetch(`https://joke.deno.dev/`)
            .then((data) => {
              return data.json();
            })
            .then((actdata) => {
              action = "joke";
              write_setup = actdata["setup"];
              write_punchline = actdata["punchline"];
            });
          break;

        case "show -n meme":
          sp.innerHTML = "New meme is arriving,please wait.";

          fetch(`https://meme-api.com/gimme`)
            .then((data) => {
              return data.json();
            })
            .then((actdata) => {
              if (actdata["code"] == 403) {
                write_setup = "Image have private access,";
                write_punchline = "please try again";
              } else {
                action = "meme";
                let img = actdata["preview"];
                imgs = img.slice(-1);
              }
            });
          break;

        case "quit":
          window.location.reload();

        case "cat projects.txt":
          action = "project";
          sp.innerHTML = "loading projects,please wait.";

          break;

        case "show contacts":
          action = "contacts";
          sp.innerHTML = "loading contacts,please wait.";

          break;

        case "cat experiences.txt":
          action = "experience";
          sp.innerHTML = "loading experience,please wait.";

          break;

        case "cat skills.txt":
          action = "skills";
          sp.innerHTML = "loading skills,please wait.";

          break;

        case "show resume":
          action = "resume";
          sp.innerHTML =
            "loading resume,please wait it will redirect you on new page.";

          break;

        default:
          break;
      }

      document.getElementById("spinner").style.display = "block";
      document.getElementById("spinner").style.display = "flex";

      document.getElementById("progressbarWrapper").style.display = "block";
      document.getElementById("greenBar").style.display = "block";
      move(0);

      setTimeout(() => {
        document.getElementById("progressbarWrapper").style.display = "none";
        document.getElementById("greenBar").style.display = "none";
        document.getElementById("spinner").style.display = "none";

        // Do work

        let new_div = document.createElement("div");
        new_div.setAttribute("id", "cursor_ui");

        let top_span_green = document.createElement("span");
        top_span_green.innerText = "shreyas@shreyas-Inspiron-15-3567";
        top_span_green.setAttribute("class", "green");

        let span_white_colon = document.createElement("span");
        span_white_colon.innerText = ":";
        span_white_colon.setAttribute("class", "white");

        let span_blue_colon = document.createElement("span");
        span_blue_colon.innerText = "~/profile";
        span_blue_colon.setAttribute("class", "blue");

        let span_white_dollar = document.createElement("span");
        span_white_dollar.innerText = "$";
        span_white_dollar.setAttribute("class", "white");

        new_div.appendChild(top_span_green);
        new_div.appendChild(span_white_colon);
        new_div.appendChild(span_blue_colon);
        new_div.appendChild(span_white_dollar);

        let input_span = document.createElement("span");
        let input = document.createElement("input");
        input.setAttribute("id", `linux-text`);
        input.setAttribute("class", "linux-text");
        input.setAttribute("type", "text");
        input.value = node.value;
        input.disabled = true;
        input_span.append(input);

        new_div.appendChild(input_span);

        switch (action) {
          case "meme":
            c_div = document.createElement("div");
            c_div.setAttribute("class", "joke");
            let c_img = document.createElement("img");
            c_img.setAttribute("class", "img-meme");
            c_img.setAttribute("id", "img-meme");
            c_img.setAttribute("onclick", `showdata()`);
            c_img.src = imgs;
            c_div.appendChild(c_img);

            new_div.appendChild(c_div);

            break;

          case "about":
            c_div = document.createElement("div");
            c_div.setAttribute("class", "joke");
            let about = document.createElement("p");
            about.innerText = about_content;
            c_div.appendChild(about);

            new_div.appendChild(c_div);
            break;

          case "joke":
            c_div = document.createElement("div");
            c_div.setAttribute("class", "joke");
            let c_p = document.createElement("p");
            c_p.innerText = write_setup;
            c_div.appendChild(c_p);

            let c_pp = document.createElement("p");
            c_pp.innerText = write_punchline;
            c_div.appendChild(c_pp);

            new_div.appendChild(c_div);
            break;

          case "project":
            projects_content.map((data, idx) => {
              c_div = document.createElement("div");
              c_div.setAttribute("class", "experience-projects");

              let title = document.createElement("div");
              title.setAttribute("class", "title");
              let title_link = document.createElement("a");
              title_link.setAttribute("href", data.url);
              title_link.innerText = data.title;
              title.appendChild(title_link);

              let description = document.createElement("div");
              description.setAttribute("class", "description");
              let description_text = document.createElement("p");
              description_text.innerText = data.description;
              description.appendChild(description_text);

              c_div.appendChild(title);
              c_div.appendChild(description);
              new_div.appendChild(c_div);
            });

            break;

          case "contacts":
            console.log("con");
            c_div = document.createElement("div");
            c_div.setAttribute("class", "linux_contacts");
            let ul = document.createElement("ul");
            c_div.appendChild(ul);
            social_links.map((data, idx) => {
              let li = document.createElement("li");
              let li_a = document.createElement("a");
              li_a.setAttribute("target", "_blank");
              li_a.setAttribute("href", data.url);
              li_a.innerText = data.name;
              li.appendChild(li_a);
              ul.appendChild(li);
            });
            new_div.appendChild(c_div);

            break;

          case "experience":
            experience_content.map((data, idx) => {
              c_div = document.createElement("div");
              c_div.setAttribute("class", "experience-projects");

              let title = document.createElement("div");
              title.setAttribute("class", "title");
              let title_link = document.createElement("a");
              title_link.setAttribute("href", data.url);
              title_link.innerText = data.title;
              title.appendChild(title_link);

              let description = document.createElement("div");
              description.setAttribute("class", "description");
              let description_text = document.createElement("p");
              description_text.innerText = data.description;
              description.appendChild(description_text);

              c_div.appendChild(title);
              c_div.appendChild(description);
              new_div.appendChild(c_div);
            });
            break;

          case "resume":
            c_div = document.createElement("div");
            let popup = window.open(
              "./public/SHREYAS_MOHITE_RESUME.pdf",
              "_blank"
            );
            if (popup === null) {
              alert(
                "The pop-up was blocked. Please enable pop-ups for this site to access the content."
              );
            }
            new_div.appendChild(c_div);
            break;
          case "skills":
            c_div = document.createElement("div");
            c_div.setAttribute("class", "linux_skills");

            skills_content.map((data, idx) => {
              let skill_tag = document.createElement("div");
              skill_tag.setAttribute("class", "skill-tags");
              c_div.appendChild(skill_tag);

              let skill_name = document.createElement("div");
              skill_name.setAttribute("class", "name");
              skill_name.innerText = data.name;
              skill_tag.appendChild(skill_name);

              let percentage = document.createElement("div");
              percentage.setAttribute("class", "percentage");
              skill_tag.appendChild(percentage);

              let percent_bar = document.createElement("span");
              percent_bar.setAttribute("class", "percent-bar");
              percent_bar.innerText = data.percent_bar;

              let percent = document.createElement("span");
              percent.setAttribute("class", "percent");
              percent.innerText = data.percent;

              percentage.appendChild(percent_bar);
              percentage.appendChild(percent);
            });

            new_div.appendChild(c_div);
            break;

          default:
            new_div.appendChild(c_div);
            break;
        }

        let xx = document.getElementById("linux-ui");
        xx.insertBefore(new_div, xx.lastElementChild);
        node.value = null;
      }, 5000);
    }
  }
});
var modal = document.getElementById("myModal");

const showdata = () => {
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  let all_images = document.querySelectorAll("#img-meme");
  all_images.forEach((e) => {
    e.onclick = function () {
      modal.style.display = "block";
      modalImg.src = e.src;
    };
  });
};

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

function trackUserVisits(displayElementId) {
  let visits = localStorage.getItem("visits");
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem("visits", visits);

  if (displayElementId) {
    const displayElement = document.getElementById(displayElementId);
    if (displayElement) {
      displayElement.innerText = visits;
    }
  }
}

// Call it on page load
trackUserVisits("your-visit-count-color");
