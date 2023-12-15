/** Logic: Prevent Flashing CSS Transitions on Startup */
const _startup = () => {
    const body = document.body;
    const wrapper = body.getElementsByClassName('wrapper')[0];

    wrapper.style.setProperty("display", "block", "important");
}