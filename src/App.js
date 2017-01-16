import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '/* Enter your code here */',
            output: '/* Your output will be here */',
            error: ''
        }
    }

    update(e) {
        let code = e.target.value;
        try {
            this.setState({
                output: window.Babel.transform(code, {
                    presets: ['es2015', 'react']
                }).code,
                error: 'Looking Good so far...'
            })
        } catch (err) {
            this.setState({error: err.message})
        } finally {}
    }

    render() {
        return (
            <div>
                <header autoFocus="true">{this.state.error}</header>
              <div className="container">
                    <textarea onChange={this.update.bind(this)} defaultValue={this.state.input}/>
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        )
    }
}

export default App;
