PlayerEvents.loggedIn(event=>{
    if(event.player.stages.has("bookGiven")) return;
    event.player.give('patchouli:guide_book')
    event.player.stages.add("bookGiven")
})
