function showSura(arg, suraname) {
  //  alert(suraname);
  if (suraname == "Select a Sura") {
    return false;
  }
  $("#wrapper").removeClass("toggled");
  $(".pagination").html("");

  let splitArg = arg.split(",");
  let sura = splitArg[0] ? splitArg[0] : 1;
  let totalAyatNum = splitArg[1] ? splitArg[1] : 7;
  suraName.innerHTML = suraname;
  let suraContainer = document.getElementById("suraContainer");
  suraContainer.innerHTML = "";
  showSuraPerPage(sura, 1, totalAyatNum);

  setTimeout(function () {
    paginationStart(sura, totalAyatNum);
  }, 1500);
}

function paginationStart(sura, totalAyatNum) {
  let limitPerPage = 10;
  $("#suraContainer .ayahBox:gt(" + (limitPerPage - 1) + ")").hide();

  let totalPage = Math.round(totalAyatNum) / Math.round(limitPerPage);

  if (totalPage >= 1) {
    // $(".pagination").append(
    //   `<li class="page-item-previous" id="previous-page"><a class="page-link" href="javascript:void(0)">Previous</a></li>`
    // );

    $(".pagination").append(
      `<li class="current-page active"><a class="page-link" href="javascript:void(0)">1</a></li>`
    );

    for (let i = 2; i < totalPage + 1; i++) {
      $(".pagination").append(
        `<li class="current-page"><a class="page-link" href="javascript:void(0)">${i}</a></li>`
      );
    }

    // $(".pagination").append(
    //   `<li class="page-item-next" id="next-page"><a class="page-link" href="javascript:void(0)">Next</a></li>`
    // );

    $(".pagination li.current-page").on("click", function () {
      if ($(this).hasClass("active")) {
        return false;
      } else {
        let currentPage = $(this).index();
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $("#suraContainer .ayahBox").hide();
        let grandTotal = limitPerPage * currentPage;

        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
          $("#suraContainer .ayahBox:eq(" + i + ")").show();
        }
      }
    });

    $(".pagination li").on("click", function () {
      // alert($(this).text());

      showSuraPerPage(sura, $(this).text(), totalAyatNum);
    });

    $("#next-page").on("click", function () {
      let currentPage = $(".pagination li.active").index();
      // alert(currentPage);
      // alert('Next')
      if (currentPage >= totalPage) {
        alert(
          "there is no Ayat in next of this Sura, Please go Previous or Change the Sura"
        );
        return false;
        //  return false;
      } else {
        if (currentPage < totalPage) {
          currentPage++;
          $(".pagination li").removeClass("active");
          $("#suraContainer .ayahBox").hide();

          let grandTotal = limitPerPage * currentPage;

          for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#suraContainer .ayahBox:eq(" + i + ")").show();
          }

          $(
            ".pagination li.current-page:eq(" + (currentPage - 1) + ")"
          ).addClass("active");
        }
      }
    });

    $("#previous-page").on("click", function () {
      let currentPage = $(".pagination li.active").index();

      if (currentPage <= 0) {
        alert(currentPage);
        return false;
      } else {
        if (currentPage < totalPage || currentPage > totalPage) {
          currentPage--;
          $(".pagination li").removeClass("active");
          $("#suraContainer .ayahBox").hide();

          let grandTotal = limitPerPage * currentPage;

          for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#suraContainer .ayahBox:eq(" + i + ")").show();
          }

          $(
            ".pagination li.current-page:eq(" + (currentPage - 1) + ")"
          ).addClass("active");
        }
      }
    });
  }
}

function showSuraPerPage(sura, perPage, totalAyatNum) {
  suraContainer.innerHTML = "";
  console.log(perPage);

  let init = 1;

  if (perPage == 1) {
    init = 1;
  } else if (totalAyatNum < 10) {
    init = totalAyatNum;
  } else {
    init = perPage * 10 - 9;
  }

  for (let line = init; line <= perPage * 10; line++) {
    console.log("line is " + line, typeof line);
    console.log(
      "total number of ayat " + totalAyatNum,
      typeof Number(totalAyatNum)
    );

    if (Number(totalAyatNum) == line) {
      quran(sura, line);
      break;
    } else {
      quran(sura, line);
      if (line == 1) {
        document.querySelectorAll(".ayahBox.qarabic")[0].style.display =
          "block";
        document.querySelectorAll(".ayahBox.qarabic")[0].style.width = "100%";
        document.querySelectorAll(".ayahBox.qarabic")[0].style.textAlign =
          "center";
        document.querySelectorAll(".ayahBox.qarabic")[0].style.backgroundColor =
          "whitesmoke";
      }
    }
    console.log(perPage + " times quran() function is called");
    // document.getElementsByClassName("loader").style.display = "none";
    //calling Quran function as per length provided like i<= number times
  }

  // $('.ayahBox.qarabic').show();
  // document.getElementsByClassName('ayahBox').style.display = "block";
  // document.getElementsByClassName('ayahBox').style.display = "none";

  $(".ayahBox.qarabic").hide();
  $("#coverGraphy img").css({ display: "block", "z-index": "1" });
  $(".heading").css({ display: "block", top: "100px" });

  setTimeout(function () {
    $(".ayahBox.qarabic").show();
    $("#coverGraphy img").css({ display: "none", "z-index": "-1" });
    $(".heading").css({ display: "none"});
  }, 1500);
}

// function showHideBox() {
//   $(".ayahBox.qarabic").show();
// }

function quran(chapter, verse) {
  let src = "http://qzaidi.github.io/quran/js/quran.js";
  let suraContainer = document.getElementById("suraContainer");

  let script = document.createElement("script");
  let verseDiv = document.createElement("div");
  let transDiv = document.createElement("div");
  let suraBody = document.createElement("div");
  suraBody.classList.add("ayahBox");
  suraBody.classList.add("qarabic");

  verseDiv.id = "q" + chapter + verse;

  transDiv.id = "t" + chapter + verse;
  transDiv.classList.add("translate");

  script.setAttribute("trans", "#" + transDiv.id);
  script.setAttribute("translator", "hindi");
  script.setAttribute("count", 0);
  script.setAttribute("chapter", chapter);
  script.setAttribute("verse", verse);
  script.setAttribute("selector", "#" + verseDiv.id);
  script.setAttribute("audio", "true");
  script.src = src;

  suraBody.append(script);
  suraBody.append(verseDiv);
  suraBody.append(transDiv);

  suraContainer.appendChild(suraBody);
}
