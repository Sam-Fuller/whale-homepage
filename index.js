const light = '119,169,222';
const dark = '59,84,109';

const fullImage = "url('whale.png')";
const partialTransparent = "url('partialWhale.png')"
const triangleTransparent = "url('triangleWhale.png')"

const scroller = document.querySelector('.scroller');
const headerSection = document.querySelector('.headerSection');

scroller.onscroll = () => {
    const headerSectionHeight = headerSection.offsetHeight;
    const headerSectionPosition =
        headerSection.getBoundingClientRect().bottom;

    console.log(headerSectionHeight, headerSectionPosition)

    const partialOpac =
        Math.max(headerSectionHeight - headerSectionPosition, 0) /
        headerSectionHeight;

    const triangleOpac = partialOpac - 1;

    scroller.style.background =
        `${triangleTransparent} no-repeat center, `
        + `linear-gradient(rgba(${light}, `
        + triangleOpac
        + `), rgba(${dark}, `
        + triangleOpac
        + `)), `

        + `${partialTransparent} no-repeat center, `
        + `linear-gradient(rgba(${light}, `
        + partialOpac
        + `), rgba(${dark}, `
        + partialOpac
        + `)), `

        + `${fullImage} no-repeat center`;
};