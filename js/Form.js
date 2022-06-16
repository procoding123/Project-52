class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","ENTER YOUR NAME")
    this.playButton = createButton("Play")
    this.titleImg = createImg("./assets/title.png","GAME TITLE")
    this.greeting = createElement("h2")
    this.muteButton = createButton("")
    this.unmuteButton = createButton("")
  }

  hide(){
    this.greeting.hide()
    this.playButton.hide()
    this.input.hide()

  }
  
  display(){
    this.setElementsPosition()
    this.setElementsStyle()
    this.handleMousePressed()
    
  }
  setElementsPosition(){
      this.input.position(width/2-127,height/2-48)
      this.playButton.position(width/2-87,height/2-2)
      this.titleImg.position(120,60)
      this.greeting.position(width/2-300,height/2-100)
      this.muteButton.position(width/2+500,28)
      this.unmuteButton.position(width/2+600,18)
  }

  setElementsStyle(){
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
    this.muteButton.class("muteButton")
    this.unmuteButton.class("unmuteButton")
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      textMusic.play()
      this.input.hide()
      this.playButton.hide()
      var message = `Hi! ${this.input.value()} </br> Welcome to the multiplayer car racing game.wait for another player to join...`
      this.greeting.html(message)
      player.name = this.input.value()
      playerCount+=1
      player.index=playerCount
      player.addplayer()
      player.updateCount(playerCount)
      player.getdistance()
    })
    this.muteButton.mousePressed(()=>{
      textMusic.pause()
      collectMusic.pause()
      lostMusic.pause()
      winMusic.pause()
      applauseMusic.pause()
      fuelOverMusic.pause()
      obstacleHitMusic.pause()
      carHitMusic.pause()
    })
    this.unmuteButton.mousePressed(()=>{
      textMusic.play()
      collectMusic.play()
      lostMusic.play()
      winMusic.play()
      applauseMusic.play()
      fuelOverMusic.play()
      obstacleHitMusic.play()
      carHitMusic.play()
    })
  }
}
