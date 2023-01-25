const colour = '201, 235, 248';
const fullImage = "url('whale.jpg')";
const brushStrokeImage = "url('brushstroke.png')"

const scroller = document.querySelector('.scroller');
const headerSection = document.querySelector('.headerSection');

scroller.onscroll = function () {
    const headerSectionHeight = headerSection.offsetHeight;
    const headerSectionPosition =
        headerSection.getBoundingClientRect().bottom;

    const opac =
        Math.max(headerSectionHeight - headerSectionPosition, 0) /
        headerSectionHeight;

    scroller.style.background =
        `${brushStrokeImage} no-repeat center, `
        + `linear-gradient(rgba(${colour}, `
        + opac
        + `), rgba(${colour}, `
        + opac
        + `)), ${fullImage} no-repeat center`;
};