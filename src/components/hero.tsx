import React, {Component} from "react";
import {Parameter} from "./parameter";
import {Characteristic} from "./characteristic";
import {Health} from "./health";
import {Name} from "./name";
import {Skill} from "./skill";
import {Upload} from "./upload";

type HeroState = {
    name: string,
    strength: number,
    agility: number,
    intelligence: number,
    charisma: number,
    hp: number,
    hpMax: number,
    evasion: number,
    energy: number,
    attack: number,
    stealth: number,
    archery: number,
    learnability: number,
    survival: number,
    medicine: number,
    intimidation: number,
    insight: number,
    appearance: number,
    manipulation: number
}

type  HeroProps = {

}

export class Hero extends Component<HeroProps, HeroState> {
    constructor(props: HeroProps) {
        super(props);

        this.state = {
            name: "Имя",

            hp: 3,
            hpMax: 3,

            strength: 0,
            agility: 0,
            intelligence: 0,
            charisma: 0,

            evasion: 10,
            energy: 0,

            attack: 0,
            stealth: 0,
            archery: 0,
            learnability: 0,
            survival: 0,
            medicine: 0,
            intimidation: 0,
            insight: 0,
            appearance: 0,
            manipulation: 0,
        }
    }

    // Определение параметра для увеличения
    increaseParameter = (id: number) => {
        switch (id) {
            case 0 : {
                this.increaseStrength()
                break
            }
            case 1 : {
                this.increaseAgility()
                break
            }
            case 2 : {
                this.increaseIntelligence()
                break
            }
            case 3 : {
                this.increaseCharisma()
                break
            }
            default: {
                break
            }
        }
    }

    // Увеличение силы с изменением зависящих от неё характеристик
    increaseStrength = () => {
        this.setState(({ strength, hp }) => ({
            strength: ++strength,
            hpMax: 3 + strength,
            hp: ++hp
        }))
    }

    // Увеличение ловкости с изменением зависящих от неё характеристик
    increaseAgility = () => {
        this.setState(({ agility, intelligence }) => ({
            agility: ++agility,
            evasion: 10 + agility,
            energy: agility + intelligence
        }))
    }

    // Увеличение интеллекта с изменением зависящих от него характеристик
    increaseIntelligence = () => {
        this.setState(({ intelligence, agility }) => ({
            intelligence: ++intelligence,
            energy: agility + intelligence
        }))
    }

    // Увеличение харизмы
    increaseCharisma = () => {
        this.setState(({ charisma }) => ({
            charisma: ++charisma,
        }))
    }

    // Определение параметра для уменьшения
    decreaseParameter = (id: number) => {
        console.log(id)
        switch (id) {
            case 0 : {
                this.decreaseStrength()
                break
            }
            case 1 : {
                this.decreaseAgility()
                break
            }
            case 2 : {
                this.decreaseIntelligence()
                break
            }
            case 3 : {
                this.decreaseCharisma()
                break
            }
            default: {
                break
            }
        }
    }

    // Уменьшение силы с изменением зависящих от неё характеристик и умений
    decreaseStrength = () => {
        if (this.state.strength > 0) {
            this.setState(({ strength }) => ({
                strength: --strength
            }))

            if (this.state.hp === this.state.hpMax) {
                this.setState(({ strength }) => ({
                    hpMax: 3 + strength,
                    hp: 3 + strength
                }))
            } else {
                this.setState(({ strength }) => ({
                    hpMax: 3 + strength
                }))
            }
            if (this.state.strength === this.state.attack) {
                this.setState(({ attack }) => ({
                    attack: --attack
                }))
            }
        }
    }

    // Уменьшение ловкости с изменением зависящих от неё характеристик и умений
    decreaseAgility = () => {
        if (this.state.agility > 0) {
            this.setState(({ agility, intelligence }) => ({
                agility: --agility,
                evasion: 10 + agility,
                energy: agility + intelligence
            }))

            if (this.state.agility === this.state.stealth) {
                this.setState(({ stealth }) => ({
                    stealth: --stealth
                }))
            }
            if (this.state.agility === this.state.archery) {
                this.setState(({ archery }) => ({
                    archery: --archery
                }))
            }
        }
    }

    // Уменьшение интеллекта с изменением зависящих от него характеристик и умений
    decreaseIntelligence = () => {
        if (this.state.intelligence > 0) {
            this.setState(({ intelligence, agility }) => ({
                intelligence: --intelligence,
                energy: agility + intelligence
            }))

            if (this.state.intelligence === this.state.learnability) {
                this.setState(({ learnability }) => ({
                    learnability: --learnability
                }))
            }
            if (this.state.intelligence === this.state.survival) {
                this.setState(({ survival }) => ({
                    survival: --survival
                }))
            }
            if (this.state.intelligence === this.state.medicine) {
                this.setState(({ medicine }) => ({
                    medicine: --medicine
                }))
            }
        }
    }

    // Уменьшение харизмы с изменением зависящих от неё умений
    decreaseCharisma = () => {
        if (this.state.charisma > 0) {
            this.setState(({charisma}) => ({
                charisma: --charisma
            }))

            if (this.state.charisma === this.state.intimidation) {
                this.setState(({intimidation}) => ({
                    intimidation: --intimidation
                }))
            }
            if (this.state.charisma === this.state.insight) {
                this.setState(({insight}) => ({
                    insight: --insight
                }))
            }
            if (this.state.charisma === this.state.appearance) {
                this.setState(({appearance}) => ({
                    appearance: --appearance
                }))
            }
            if (this.state.charisma === this.state.manipulation) {
                this.setState(({manipulation}) => ({
                    manipulation: --manipulation
                }))
            }
        }
    }

    // Определение умения для увеличения
    increaseSkill = (id: number, skill: number) => {
        console.log(id)
        switch (id) {
            case 0 : {
                this.setState(({ attack }) => ({
                    attack: skill
                }))
                break
            }
            case 1 : {
                this.setState(({ stealth }) => ({
                    stealth: skill
                }))
                break
            }
            case 2 : {
                this.setState(({ archery }) => ({
                    archery: skill
                }))
                break
            }
            case 3 : {
                this.setState(({ learnability }) => ({
                    learnability: skill
                }))
                break
            }
            case 4 : {
                this.setState(({ survival }) => ({
                    survival: skill
                }))
                break
            }
            case 5 : {
                this.setState(({ medicine }) => ({
                    medicine: skill
                }))
                break
            }
            case 6 : {
                this.setState(({ intimidation }) => ({
                    intimidation: skill
                }))
                break
            }
            case 7 : {
                this.setState(({ insight }) => ({
                    insight: skill
                }))
                break
            }
            case 8 : {
                this.setState(({ appearance }) => ({
                    appearance: skill
                }))
                break
            }
            case 9 : {
                this.setState(({ manipulation }) => ({
                    manipulation: skill
                }))
                break
            }
            default: {
                break
            }
        }
    }


    // Получение урона
    takeDamage = () => {
        if (this.state.hp > 0) {
            this.setState(({hp}) => ({
                hp: --hp
            }))
        }
    }

    // Изменение имени
    changeName = (enteredName: string) => {
        this.setState(({ name }) => ({
            name: enteredName
        }))
    }

    // Обновление данных после загрузки
    upload = (upload: string) => {
        let list: any[] = []
        upload.slice(1, -1)
        let split = upload.split(",")
        split.forEach(function(entry) {
            let element = entry.split(":")
            list.push(element[1].replace(/[}"]/g, ""))
        })
        console.log(list)
        this.setState(({ name }) => ({
            name: list[0],

            hp: list[1],
            hpMax: list[2],

            strength: list[3],
            agility: list[4],
            intelligence: list[5],
            charisma: list[6],

            evasion: list[7],
            energy: list[8],

            attack: list[9],
            stealth: list[10],
            archery: list[11],
            learnability: list[12],
            survival: list[13],
            medicine: list[14],
            intimidation: list[15],
            insight: list[16],
            appearance: list[17],
            manipulation: list[18]
        }))
    }

    render() {
        return (
            <div className={"hero"}>
                <div className={"stats"}>
                    <div className={"column"}>
                        <div>
                            <Name name={this.state.name} changeName={this.changeName} />
                        </div>
                        <div className={"god"}>
                            <p className={"realHero"}>
                                ⣿⣿⣿⣿⡟⠛⠁⠄⠄⠄⠄⢀⣀⣀⠄⠄⠄⠄⣤⣽⣿⣿⣿⣿⣿⣿⣿⣿
                                ⣿⣿⣿⡋⠁⠄⠄⠄⣠⣶⣾⣿⣿⣿⣿⠄⢦⡄⠐⠬⠛⢿⣿⣿⣿⣿⣿⣿
                                ⣿⡿⠇⠁⠄⠄⣠⣾⣿⣿⡿⠟⠋⠁⠄⠄⠈⠁⠄⠄⠄⠄⠙⢿⣿⣿⣿⣿
                                ⣿⠃⠄⠄⠄⠘⣿⣿⣿⣿⢀⣠⠄⠄⠄⠄⣰⣶⣀⠄⠄⠄⠄⠸⣿⣿⣿⣿
                                ⣏⠄⠄⠄⠄⠄⣿⣿⣿⡿⢟⣁⠄⣀⣠⣴⣿⣿⠿⠷⠶⠒⠄⠄⢹⣿⣿⣿
                                ⡏⠄⠄⠄⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠛⠁⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿
                                ⡇⠄⠄⠄⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⡇⠄⣼⣿⠇⠘⠄⠁⠄⠄⠄⢻⣿⣿
                                ⣇⠄⠄⠄⠄⠄⠸⢿⣿⣿⣿⣿⣿⣿⠁⠸⠟⠁⣠⣤⣤⣶⣤⠄⠄⠄⢻⣿
                                ⣿⡄⠄⡤⢤⣤⡀⠈⣿⣿⣿⣿⣿⣿⡆⠄⠄⠘⠋⠁⠄⠄⠈⠄⠄⠄⢸⣿
                                ⣿⣿⡜⢰⡾⢻⣧⣰⣿⣿⣿⣿⣿⣿⣷⠄⣼⣷⣶⣶⡆⠄⠄⠄⠄⠄⠄⣿
                                ⣿⣿⣧⢸⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⣿
                                ⣿⣿⣿⣿⡿⢿⡟⠉⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄⢀⡀⠄⠘⣿
                                ⣿⣿⣿⣿⣿⣆⢻⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠄⠄⠈⠁⠄⠄⣿
                                ⣿⣿⣿⣿⣿⣿⡆⢻⣿⣿⣿⣿⣿⣿⡿⠛⠛⠛⠃⠄⠄⠄⠄⠄⠄⠄⢀⣿
                                ⣿⣿⣿⣿⣿⣿⣿⣆⣻⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿
                            </p>
                        </div>
                        <div className={"element"}>
                            <Health name={"Здоровье"} hp={this.state.hp} hpMax={this.state.hpMax} takeDamage={this.takeDamage}/>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"element"}>
                            <Parameter id={0} name={"Сила"} count={this.state.strength} increase={this.increaseParameter} decrease={this.decreaseParameter}/>
                            <Parameter id={1} name={"Ловкость"} count={this.state.agility} increase={this.increaseParameter} decrease={this.decreaseParameter} />
                            <Parameter id={2} name={"Интеллект"} count={this.state.intelligence} increase={this.increaseParameter} decrease={this.decreaseParameter} />
                            <Parameter id={3} name={"Харизма"} count={this.state.charisma} increase={this.increaseParameter} decrease={this.decreaseParameter} />
                        </div>
                        <div  className={"element"}>
                            <Characteristic name={"Уклонение"} count={this.state.evasion} />
                            <Characteristic name={"Энергичность"} count={this.state.energy} />
                        </div>
                        <div  className={"element"}>
                            <Skill id={0} name={"Атака"} parameter={this.state.strength} skill={this.state.attack} increaseSkill={this.increaseSkill} />
                            <Skill id={1} name={"Стелс"} parameter={this.state.agility} skill={this.state.stealth} increaseSkill={this.increaseSkill} />
                            <Skill id={2} name={"Стрельба из лука"} parameter={this.state.agility} skill={this.state.archery} increaseSkill={this.increaseSkill} />
                            <Skill id={3} name={"Обучаемость"} parameter={this.state.intelligence} skill={this.state.learnability} increaseSkill={this.increaseSkill} />
                            <Skill id={4} name={"Выживание"} parameter={this.state.intelligence} skill={this.state.survival} increaseSkill={this.increaseSkill} />
                            <Skill id={5} name={"Медицина"} parameter={this.state.intelligence} skill={this.state.medicine} increaseSkill={this.increaseSkill} />
                            <Skill id={6} name={"Запугивание"} parameter={this.state.charisma} skill={this.state.intimidation} increaseSkill={this.increaseSkill} />
                            <Skill id={7} name={"Проницательность"} parameter={this.state.charisma} skill={this.state.insight} increaseSkill={this.increaseSkill} />
                            <Skill id={8} name={"Внешний вид"} parameter={this.state.charisma} skill={this.state.appearance} increaseSkill={this.increaseSkill} />
                            <Skill id={9} name={"Манипулирование"} parameter={this.state.charisma} skill={this.state.manipulation} increaseSkill={this.increaseSkill} />
                        </div>

                    </div>

                </div>
                <div className={"save"}>
                    <p>{`-->`}</p>
                    <a
                        type="button"
                        href={`data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(this.state))}`}
                        download="hero.json">Сохранить
                    </a>
                    <p>{`<--`}</p>
                    <p> --- </p>

                    <Upload upload={this.upload}/>
                </div>
            </div>
        );
    }
}