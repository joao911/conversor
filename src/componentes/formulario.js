import React from 'react'

import ListaMoedas from './listaMoedas'
const Formulario = props => {
    return (
        <div>
            <form>
                <div className="row justify-content-center">
                    <div className="input-group input-group-lg">
                        <input type="number" className='form-control' />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor="formSelectDe">De:</label>
                        <ListaMoedas origem='de'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="formSelectPara">Para:</label>
                        <ListaMoedas origem='para'/>
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Converter</button>
                </div>
            </form>
        </div>
    )
}
export default Formulario