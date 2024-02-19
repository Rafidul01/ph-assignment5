function confirmTic(){
    console.log("saira de ma kainda bachi");
    const confirmSection = document.getElementById("confirm-section");
    confirmSection.classList.remove('hidden');
    const ticketSection = document.getElementById("ticket-section");
    ticketSection.classList.add('hidden');
    const copuponSection = document.getElementById("copupon-section");
    copuponSection.classList.add('hidden');
    const headSection = document.getElementById("head-section");
    headSection.classList.add('hidden');
    

}
function returnHome(){
    const confirmSection = document.getElementById("confirm-section");
    confirmSection.classList.add('hidden');
    const ticketSection = document.getElementById("ticket-section");
    ticketSection.classList.remove('hidden');
    const copuponSection = document.getElementById("copupon-section");
    copuponSection.classList.remove('hidden');
    const headSection = document.getElementById("head-section");
    headSection.classList.remove('hidden');  
}