import React, { createContext, useState } from 'react'

class Piledriver {
    constructor(setup) {
        this.setup = setup
        const Context = createContext()
        this.Context = Context
        this.ContextProvider = Context.Provider
    }
    get Provider() {
        return props => {
            const [ state, setState ] = useState({ state: this.setup.state })
            const context = {
                state: state.state,
                dispatch: action => setState({ state: this.setup.reducer(state.state, action) })
            }
            const ContextProvider = this.ContextProvider
            return (
                <ContextProvider value={context}>{props.children}</ContextProvider>
            )
        }
    }
}

export default Piledriver