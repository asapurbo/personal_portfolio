// Type Js Code Start
var typed = new Typed(".type", {
  strings: [
    "Developer.",
    "Designer",
    "Content Writer.",
    "Instructor.",
    "Freelancer.",
    "Politician.",
    "Technician.",
    "Model.",
    "Web Developer.",
    "Consulting.",
    "Fashion Designer.",
    "Freelancer.",
    "Photographer.",
    "Fitness Instructor.",
    "& Many More",
  ],
  typeSpeed: 50,
  loop: true,
  backSpeed: 50,
  startDelay: 500,
});

// Type Js Code End

window.addEventListener("scroll", () => {
  let navPart = document.querySelector("#nav_part");
  navPart.classList.toggle("sticky", window.scrollY > 0);
  let sticky = document.querySelector(".sticky");
});
// --------------------------------------------------------------
{
  let graph = document.querySelector("#matrix_part");
  let gtMtx = document.querySelector(".graph");
  window.addEventListener("mouseover", (e) => {
    if (e.target == graph) {
      gtMtx.classList.add("gtMtx");
    }
  });
}
{
  let graph = document.querySelector("#matrix_part");
  let gtMtx = document.querySelector(".graph2nd");
  window.addEventListener("mouseover", (e) => {
    if (e.target == graph) {
      gtMtx.classList.add("gtMtx2nd");
    }
  });
}
{
  let graph = document.querySelector("#matrix_part");
  let gtMtx = document.querySelector(".graph3rd");
  window.addEventListener("mouseover", (e) => {
    if (e.target == graph) {
      gtMtx.classList.add("gtMtx3rd");
    }
  });
}

// -----------------------------------------------

// slider Start
$(function () {
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    speed: 500,
    responsive: [
      {
        breakpoint: 1400, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199.98, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991.98, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
// slider End

// -------------------------------------------------
// Query Start

$(document).ready(function () {
  $(".q_hd_txt").click(function (e) {
    e.preventDefault();
    var $toggleArea = $(this).closest(".query_hd_txt_wp").find(".q_pra_txt");
    $(".q_pra_txt").not($toggleArea).slideUp();
    $toggleArea.stop().slideToggle();
  });
});

// Query End

// -------------------------------------------------

{
  window.addEventListener("scroll", () => {
    let back_to_top = document.querySelector(".back_to_top");
    if (back_to_top.classList.toggle("topTo", window.scrollY > 0)) {
      back_to_top.style.display = "block";
    } else {
      back_to_top.style.display = "none";
    }
  });
}

// bar start
let openBtn = document.querySelector(".bar")
let manu = document.querySelector(".nav_bar")
let closeBtn = document.querySelector(".closeBtn")
let container = document.querySelector(".container")


openBtn.addEventListener("click", () => {
  manu.style.width = "250px";
  manu.style.padding = "80px 20px 50px 20px";
  manu.style.opacity = 1;
});
closeBtn.addEventListener("click", () => {
  manu.style.width = "0px";
  manu.style.padding = "0";
  manu.style.opacity = 0;
});


// bar end


