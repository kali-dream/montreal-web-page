const panels =document.querySelectorAll('.panel')

panels.forEach(panel => {
panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
})
})
//another way to write this code 
/*const panels =document.querySelectorAll('.panel')
panelContainer.addEvenetlistener('click',(event))
{
    const panel = event.target // here .target gets user input where user clicked on UI
    if(panel.classlist.contains('panels)){
        removeActiveclasses();// we created this function  in order to make interference more friendly to use 
        panel.classList.add('active');//it will activet active panel that was clicked by user

    }
});
*/

function removeActiveClasses()
{
    panels.forEach(panel => {
        panel.classList.remove('active')
})
}

/*
function removeActiveClasses(){
    const panels =document.querySelectorAll('.panel')
    panels.forEach((panels)) =>{
        panels.classList.remove('active');
    });

} */

