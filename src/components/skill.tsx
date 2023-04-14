import {Component} from "react";

type SkillState = {

}

type  SkillProps = {
    id: number,
    name: string,
    parameter: number,
    skill: number,
    increaseSkill: any,
}

export class Skill extends Component<SkillProps, SkillState> {
    lvl: string[] = ["Нетренированный", "Новичок", "Ученик", "Адепт", "Эксперт", "Мастер"]

    changeSkill = (skill: number, parameter: number, ) => {
        if (skill === parameter) {
            skill = this.props.skill
        } else {
            if (skill !== 5) {
                skill = ++skill
            }
        }
        this.props.increaseSkill(this.props.id, skill)
    }

    render() {
        return (
            <div className={"parameter"}>
                <p>{this.props.name}: </p>
                <div  className={"counter"}>
                    <p>{this.lvl[this.props.skill]} {this.props.skill}</p>
                    <button onClick={() => {this.changeSkill(this.props.skill, this.props.parameter)}}>+</button>
                </div>
            </div>
        );
    }
}