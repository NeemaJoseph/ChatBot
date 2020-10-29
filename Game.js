const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    PLAY:  Symbol("play"),
    KILL: Symbol("kill"),
    DECISION: Symbol("decision"),
    LAW: Symbol("law"),
    PRISON: Symbol("prison"),
    END: Symbol("end"),
    MOTHER: Symbol("mother"),
    BAD: Symbol("bad"),
    EXORCISM: Symbol("exorcism"),
    FUTURE:Symbol("future"),
    LAST:Symbol("last"),
    NO: Symbol("no"),
    FREEDOM: Symbol("freedom")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You are trapped in an old Mansion. You have an Ouija Board. You can either PLAY or be TRAPPED!!";
                this.stateCur = GameState.PLAY;
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("play")){
                    sReply = "You can either choose BAD or GOOD spirit.";
                    this.stateCur = GameState.DECISION;
                }else if(sInput.toLowerCase().match("trapped")){
                    sReply ="You have 2 options, bad SPIRIT forever or IMPRISONMENT";
                    this.stateCur = GameState.BAD;
                }else{
                    sReply="Sorry please type the correct choice. PLAY or TRAPPED";
                }
                break;
            case GameState.BAD:
                if(sInput.toLowerCase().match("spirit")){
                    sReply = "You have one more chance. Thank god. Be wise and choose right. Do you want to remove this curse? REMOVE or NOT!";
                    this.stateCur = GameState.EXORCISM;
                }else if(sInput.toLowerCase().match("imprisonment")){
                    sReply ="You need spend rest of your life in prison due to your bad choice. GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply="Sorry please type the correct choice. SPIRIT or IMPRISONMENT";
                }
                break;
            case GameState.EXORCISM:
                if(sInput.toLowerCase().match("remove")){
                    sReply = "EXORCISM or self harm and DIE!";
                    this.stateCur = GameState.FUTURE;
                }else if(sInput.toLowerCase().match("not")){
                    sReply ="You chose your destiny. Your end is near.GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply="Sorry please type the correct choice. REMOVE or NOT";
                }
                break;
            case GameState.FUTURE:
                if(sInput.toLowerCase().match("exorcism")){
                     sReply = "To know your future press ONE or TWO..";
                    this.stateCur = GameState.LAST;
                }else if(sInput.toLowerCase().match("die")){
                    sReply ="The bad spirit will follow you life long. Your end is near!! GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply="Sorry please type the correct choice. EXORCISM or DIE";
                }
                break;
            case GameState.LAST:
                if(sInput.toLowerCase().match("one")){
                    sReply = "Death is not the opposite of life but a part of it. THANKS FOR PLAYING. GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else if(sInput.toLowerCase().match("two")){
                    sReply ="You are free. You can go home. GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply="Sorry please type the correct choice. ONE or TWO";
                }
                break;
            case GameState.DECISION:
                if(sInput.toLowerCase().match("bad")){
                    sReply = "You will be given a task by the bad spirit. You can ACCEPT it or REJECT it."
                    this.stateCur = GameState.KILL;
                }else if(sInput.toLowerCase().match("good")){
                    sReply = "You need to listen to what good spirit commands. Can you LISTEN or NOT";
                    this.stateCur = GameState.MOTHER;
                }else{
                    sReply="Sorry please type the correct choice. BAD or TWO";
                }
                break;
            case GameState.MOTHER:
                if(sInput.toLowerCase().match("listen")){
                    sReply = "You need to take care of his mother forever. Can you do it? YES or NO!"
                    this.stateCur = GameState.NO;
                }else if(sInput.toLowerCase().match("not")){
                    sReply = "Hm.. You're punishment is much less because your decision was good spirit. You need to live in the mansion for 1 year. Game Over!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply="Sorry please type the correct choice. LISTEN or NOT";
                }
                break;
            case GameState.NO:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You are free now. You can go back to your home. Game Over. Thanks for playing!!!!"
                    this.stateCur = GameState.WELCOMING;
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "Hm.. You're punishment is much less because your decision was good spirit. You need to live in the mansion for 1 year. Game Over!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply="Sorry please type the correct choice. YES or NO";
                }
                break;
            case GameState.KILL:
                if(sInput.toLowerCase().match("accept")){
                    sReply = "Your task is to kill the person who killed the bad spirit . Are you scared?? Then you can QUIT or if not, then you can GO ahead ";
                    this.stateCur = GameState.LAW;
                }else if(sInput.toLowerCase().match("reject")){
                    sReply = "The bad spirit will follow you wherever you go. Do you want to be FOLLOWED or FREE";
                    this.stateCur = GameState.FREEDOM;
                }
                else{
                    sReply="Sorry please type the correct choice. ACCEPT or REJECT";
                }
                break;
            case GameState.FREEDOM:
                if(sInput.toLowerCase().match("followed")){
                    sReply = "The bad spirit will follow you life long. Your end is near!! GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else if(sInput.toLowerCase().match("free")){
                    sReply = "You are lucky. You can go home. GAME OVER!!";
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply="Sorry please type the correct choice. FOLLOWED or FREE";
                }
                break;
            case GameState.LAW:
                if(sInput.toLowerCase().match("quit")){
                    sReply = "Winners are people who never fail, but people who never quit! You are a LOSER! You DIE. GAME OVER!!";
                    this.stateCur = GameState.WELCOMING;
                }else if(sInput.toLowerCase().match("go")){
                    sReply = "The bad spirit is now happy. But the law is not. You can either SURRENDER or you can HIDE";
                    this.stateCur = GameState.PRISON;
                }
                else{
                    sReply="Sorry please type the correct choice. QUIT or GO";
                }
                break;
            case GameState.PRISON:
                if(sInput.toLowerCase().match("surrender")){
                    sReply = "Do you want to go to JAIL for 10 years or give COMPENSATION";
                    this.stateCur = GameState.END;
                }else if(sInput.toLowerCase().match("hide")){
                    sReply = "How long will you hide from the law? You will be caught one day! Best of luck mate. GAME OVER!!";
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply="Sorry please type the correct choice. SURRENDER or HIDE ";
                }
                break;
            case GameState.END:
                if(sInput.toLowerCase().match("jail")){
                    sReply = "Your family and friends look forward to you coming home soon. GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else if(sInput.toLowerCase().match("compensation")){
                    sReply = "Maybe you can escape from being in jail. But, You can't escape the law of Karma. You are screwed. GAME OVER";
                }else{
                    sReply="Sorry please type the correct choice. JAIL or COMPENSATION";
                }  
                break;    
        }
        return([sReply]);
    }
}