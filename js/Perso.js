class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Il caille ici!"
            ,"Quelle technique!"
            ,"Au moins, on est sûrs de pas avoir trop chaud!"
            ,"Un sport de saison en Antarctique!"
            ,"Bientôt en équipe professionnelle de l'Antarctique!"
            ,"Savez-vous que ce sont des manchots et pas des pingouins?"
            ,"Une partie à briser la glace!"
            ,"Happy Feet n'était qu'un avant goût..."
            ,"Ça jette un froid!"
            ,"Au moins, tant qu'ils jouent, ils penseront pas à nous manger..."
            ,"ALLER LE VERT!!!"
            ,"ALLER LE ORANGE!!!"
            ,"Je préfère la Méditérannée, c'est plus doux..."
            ,"SMASH!!!"
            ,"Que du beau jeu!"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },2500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}