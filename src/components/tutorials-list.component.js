import { Component } from "react";
import tutorialService from "../services/tutorial.service";

export default class TutorialsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
            currentIndex: -1,
            searchText: ""
        }
    }

    componentDidMount() {
        this.tutoriallariGetir();
    }

    tutoriallariGetir() {
        tutorialService.getAll().then(tutorialListesi => {
            this.setState({
                tutorials: tutorialListesi.data
            });
        });
    }

    render () {
        const {tutorials, currentIndex} = this.state;
        return (
            <div>
                <div>Tutorial listesi sayfası</div>
                <div className="d-flex">
                    <div className="d-flex">
                        <label className="mr-5">Search Term:</label>
                        <input className="ml-5" name="search" id="tutorial-search-input" value={this.state.searchText} onInput={(e) => this.setState({searchText: e.target.value})} />
                    </div>
                    <div>
                        <button onClick={(e) => this.setState({searchText: ""})}>Clear Search Text</button>
                    </div>
                </div>
                <ul className="list-group">
                    {tutorials.filter(tutorial => {
                        // Filters the text according to the name
                        if (this.state.searchText !== "") {
                            if (tutorial.title.toLowerCase().includes(this.state.searchText.toLowerCase())) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        // does not filter anything if searchtext is empty
                        else {
                            return true;
                        }
                    }).map(tut => {
                        return (
                            <li key={tut.id}
                             className={"list-group-item " + (tut.id === currentIndex ? "active" : "")}
                             onClick={() => this.setState({currentIndex: tut.id})}
                            >
                                <div>
                                    {tut.title} - {tut.description}
                                </div>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
}