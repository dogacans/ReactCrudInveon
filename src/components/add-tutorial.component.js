import { Component } from "react";
import tutorialService from "../services/tutorial.service";

export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    componentDidMount() {
    }

    tutorialEkle() {
        tutorialService.create({
            title: this.state.title, 
            description: this.state.description, 
            published: false
        })
    }

    render () {
        return (
            <div>
                <div>
                    <label>Title:</label>
                    <input name="title" id="tutorial-title-input" onInput={(e) => this.setState({title: e.target.value})} />
                </div>
                <div>
                    <label>Description:</label>
                    <input name="description" id="tutorial-description-input" onInput={(e) => this.setState({description: e.target.value})} />
                </div>

                <button onClick={() => this.tutorialEkle()}>Ekle!</button>
            </div>
        )
    }
}