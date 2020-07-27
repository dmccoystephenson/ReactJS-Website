import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Medieval Factions'
        };
    }

    render() {
        return (
            <div className="centered">
                {this.renderHeader()}
                {this.decidePage()}
            </div>
        );
    }

    decidePage() {
        if (this.state.page === 'Medieval Factions') {
            return (
                <div className="centered">
                    <h1>Medieval Factions</h1>
                    <p>An open source minecraft plugin for players to use to organize politically.
                        Allows them to create/manage factions, declare/end wars, and claim/unclaim land.
                        It also supports promoting/demoting players to and from officer positions as well
                        as a power level system to decide land limits. Finally, it supports faction homes,
                        alliances, locks and more.</p>
                    <p><a href={"https://github.com/DansPlugins/Medieval-Factions"}>GitHub</a></p>
                    <p><a href={"https://www.spigotmc.org/resources/medieval-factions.79941/"}>SpigotMC</a></p>
                </div>
            );
        }
        else if (this.state.page === 'Food Spoilage') {
            return (
                <div className="centered">
                    <h1>Food Spoilage</h1>
                    <p>An open source minecraft plugin meant to make food go bad in minecraft. Food spoilage times are customizable..</p>
                    <p><a href={"https://github.com/DansPlugins/FoodSpoilage"}>GitHub</a></p>
                    <p><a href={"https://www.spigotmc.org/resources/food-spoilage.81507/"}>SpigotMC</a></p>
                </div>
            );
        }
        else if (this.state.page === 'More Recipes') {
            return (
                <div className="centered">
                    <h1>More Recipes</h1>
                    <p>An open source plugin that adds recipes for items that are not craftable in vanilla Minecraft.</p>
                    <p><a href={"https://github.com/DansPlugins/More-Recipes"}>GitHub</a></p>
                    <p><a href={"https://www.spigotmc.org/resources/more-recipes.81832/"}>SpigotMC</a></p>
                </div>
            );
        }
        else if (this.state.page === 'Medieval Roleplay Engine') {
            return (
                <div className="centered">
                    <h1>Medieval Roleplay Engine</h1>
                    <p>An open source minecraft plugin meant to make roleplaying easier in minecraft.
                        It currently keeps track of a character card for each player, allows players to
                        edit their character card, lets players send birds to eachother, provides a local
                        chat, and allows players to do emotes.</p>
                    <p><a href={"https://github.com/DansPlugins/Medieval-Roleplay-Engine"}>GitHub</a></p>
                    <p><a href={"https://www.spigotmc.org/resources/medieval-roleplay-engine.79993/"}>SpigotMC</a></p>
                </div>
            );
        }
        else {
            return <p>Not Available Yet</p>;
        }
    }

    renderHeader() {
        return (
            <div>
                {this.renderPageList()}
            </div>
        )
    }

    renderPageList() {
        return (
            <div className="navigation2">
                <button onClick={() => this.setPage('Medieval Factions')}>Medieval Factions</button>
                <button onClick={() => this.setPage('Food Spoilage')}>Food Spoilage</button>
                <button onClick={() => this.setPage('More Recipes')}>More Recipes</button>
                <button onClick={() => this.setPage('Medieval Roleplay Engine')}>Medieval Roleplay Engine</button>
            </div>
        )
    }

    setPage(passedPage) {
        this.setState({
            page: passedPage
        });
    }

}

export default Projects;
