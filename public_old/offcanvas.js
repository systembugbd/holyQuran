//  import pagi from './jw-paginate';

$(function () {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });



  function quran(chapter, verse, totalAyat) {
    let src = "http://qzaidi.github.io/quran/js/quran.js";

    let script = document.createElement('script');
    let verseDiv = document.createElement('div');
    let transDiv = document.createElement('div');
    let mediaBody = document.getElementById('mediaBody');
    let ayahBoxNum = document.getElementsByClassName('ayahBoxNum');


    verseDiv.id = 'q' + chapter + verse;
    verseDiv.classList.add("ayahBox");
    verseDiv.classList.add("qarabic");
    transDiv.id = 't' + chapter + verse;

    script.setAttribute('trans', "#" + transDiv.id);
    script.setAttribute('translator', 'hindi');
    script.setAttribute('count', 0);
    script.setAttribute('chapter', chapter);
    script.setAttribute('verse', verse);
    script.setAttribute('selector', "#" + verseDiv.id);
    script.setAttribute('audio', "true");
    script.src = src;

    mediaBody.appendChild(script);
    mediaBody.appendChild(verseDiv);
    mediaBody.appendChild(transDiv);

    // console.log(script, verseDiv, transDiv);

    
  }

 
  /**Pagination start */

  for (let i = 1; i <= 7; i++) {
    // let pagiCLicked = document.getElementById(i);
    // pagiCLicked.addEventListener('click', function (e) {
    //   e.preventDefault();
    // });

    quran(1, i, 7);//calling Quran function as per length provided like i<= number times
  }


}); //iffe END







// console.log(ayahBoxNum)
// [...ayahBoxNum].forEach(v => {
//   console.log(v.innerHTML);
// });


// console.log(pagiCLicked.innerHTML + "I am clicked");


// quran(1,2);
// quran("translation",1,2,"verse","http://qzaidi.github.io/quran/js/quran.js");