const shareBtn = document.getElementById('Share__btn');
const shareBox = document.querySelector('.share__box');
const writerProfile = document.querySelector('.Writer__Profile__details');
const mobileShare = document.querySelector('.mobile__share__effect');
const mobileShareBtn = document.querySelector('.mobile__share__effect #Share__btn');
mobileShare.style.display = 'none';
shareBox.style.display = 'none';


function hideShareBox(event) {

  if (window.matchMedia("(min-width: 600px)").matches) {

    if (window.getComputedStyle(shareBox).getPropertyValue('display') === 'flex') {
      shareBox.style.display = 'none';
    } else {
      shareBox.style.display = 'flex';
    }
  }
  else {

    if (window.matchMedia("(max-width: 600px)").matches) {
      if (window.getComputedStyle(mobileShare).getPropertyValue('display') === 'flex') {
        mobileShare.style.display = 'none';
        writerProfile.style.display = 'flex';
      } else {

        mobileShare.style.display = 'flex';
        writerProfile.style.display = 'none';
      }
    }


  }

}
function resetOnMobile() {

  mobileShare.style.display = 'none';
  writerProfile.style.display = 'flex';

}

shareBtn.addEventListener('click', hideShareBox);
mobileShareBtn.addEventListener('click', resetOnMobile);