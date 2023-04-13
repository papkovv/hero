import {Component} from "react";

type SkillState = {

}

type  SkillProps = {
    id: number,
    name: string,
    parameter: number,
    skill: number,
    increaseSkill: any
}

export class Skill extends Component<SkillProps, SkillState> {

    changeSkill = (skill: number, parameter: number) => {
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
            <div>
                <h1>{this.props.name}: {this.props.skill}</h1>
                <button onClick={() => {this.changeSkill(this.props.skill, this.props.parameter)}}>+</button>
            </div>
        );
    }
}